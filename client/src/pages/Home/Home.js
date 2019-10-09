import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';
import Landing from '../../components/Home/Landing';
import Body from '../../components/Home/Body';
import Footer from '../../components/Home/Footer';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#25472e',
    },
    jumbotron: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 55
        },
        height: 800, 
        width: '100vw', 
        position: 'relative' 
    },
    bgContainer: {
        height: '100%',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 'auto',
        width: '100vw'
    },
    typo: {
        color: 'white',
    },
    ParallaxContent: {
        [theme.breakpoints.down('xs')]: {
            height: '35vh',
        },
        width: '100vw',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Home = () => {

    const classes = useStyles();

    return (

        <Grid className={classes.container} container >

            <Grid item xs={12}>

                <Nav />

            </Grid>

            <Landing />

            <Body />

            <Footer />

        </Grid>
    );
};

export default Home;
