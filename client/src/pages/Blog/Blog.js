import React from 'react';

import { EditorProvider } from '../../Context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';
import NewArticle from '../../components/Blog/NewArticle';
import Latest from '../../components/Blog/Latest';

const useStyles = makeStyles((theme) => ({
    articlesContainer: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: 40,
            paddingRight: 40,
        },
        marginBottom: 80,
        marginTop: 100,
        paddingLeft: '15%',
        paddingRight: '15%',
    },
}));

const Blog = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} container>

            <EditorProvider>

                <Grid item xs={12}>

                    {/* This will tell the navigation bar whether to load the weather
                    or the login panel */}
                    <Nav isBlog={true} />

                </Grid>
                <Grid className={classes.articlesContainer} item xs={12}>

                    <NewArticle />

                    <Latest />
                
                </Grid>

            </EditorProvider>

        </Grid>
    );
};

export default Blog;
