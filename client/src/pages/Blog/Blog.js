import React, { useContext } from 'react';
import { EditorContext } from '../../Context/EditorContext';

import NewArticle from '../../components/Blog/NewArticle';
import Latest from '../../components/Blog/Latest';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    articlesContainer: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: 40,
            paddingRight: 40,
        },
        marginBottom: 80,
        marginTop: 100,
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    progressContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
    }
}));

export default () => {

    const classes = useStyles();
    const context = useContext(EditorContext);

    if (!context.articleList) {
        return (
            <Grid container className={classes.progressContainer}>
                <CircularProgress />
            </Grid>
        );
    }
    return (
        <Grid container>
            <Grid className={classes.articlesContainer} item xs={12}>

                <NewArticle article={context.articleList[0]} />

                <Latest articleList={context.articleList} />
            
            </Grid>
        </Grid>
    );
};