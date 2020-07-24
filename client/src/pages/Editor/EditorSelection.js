import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EditorContext } from '../../Context/EditorContext';

import ArticleTemplate from '../../components/Editor/Templates/ArticleTemplate';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flexWrap: 'wrap',
        paddingBottom: 40,
        paddingTop: 60
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

    const context = useContext(EditorContext);
    const classes = useStyles();

    const renderArticles = () => {
        let toRender;
        
        if (!context.articleList) return "";
        try {
            toRender = context.articleList.map((article) => {
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
        } catch (error) {
            return <Typography>Something went wrong :(</Typography>;
        }
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

            <Grid className={classes.container} item xs={12}>

                {/* Once the context has updated with the article list, it will
                then loop through and render each article */}

                {renderArticles()}

            </Grid>
        </Grid>
    );
};
