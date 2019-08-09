import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';

const useStyles = makeStyles(theme => ({
    container: {

    },
}));

const Blog = () => {

    const classes = useStyles();

    return (

        <Grid container>

            <Nav />

            

        </Grid>
    );
};

export default Blog;