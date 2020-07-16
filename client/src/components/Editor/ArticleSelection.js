import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ArticleTemplate from './Templates/ArticleTemplate';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button,
    Divider,
    Typography
} from '@material-ui/core';

import { EditorContext } from '../../Context/EditorContext';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flexWrap: 'wrap',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        width: '80%',
        marginTop: 30,
    },
    button: {
        width: '100%',
        padding: 10,
        background: 'rgb(26, 118, 30)',
        color: 'white'
    }
}));

export default () => {

    const edit = useContext(EditorContext);
    const classes = useStyles();

    const renderArticles = () => {
        if (!edit.articleList) return "";

        const toRender = edit.articleList.map((article) => {
            return (
                <ArticleTemplate
                    title={article.title}
                    jumbotron={article.jumbotron}
                    description={article.description}
                    date={article.date}
                    readLength={article.readLength}
                />
            );
        });

        return toRender;
};
    
    return (
        <Grid container>
            <Grid className={classes.container} item xs={12}>

                <Link 
                    className={classes.link}
                    to={`/editor/new`}
                >
                    <Button className={classes.button}>
                        <Typography>
                            Make New Article
                        </Typography>
                    </Button>
                </Link>

            </Grid>
            
            <Divider style={{ width: '100%', marginTop: 40 }} />

            <Grid className={classes.container} item xs={12}>

                {/* Once the context has updated with the article list, it will
                then loop through and render each article */}
                
                {renderArticles()}

            </Grid>
        </Grid>
    );
};
