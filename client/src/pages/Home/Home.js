import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { Parallax }  from 'react-parallax';

import { MediaContext } from '../../Context/MediaQuery';

import Nav from '../../components/Navigation/Nav';
import Body from '../../components/Home/Main/Body';
import Footer from '../../components/Home/Footer';

import Boone from '../../components/Home/imgs/Boone.jpg';

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

    const media = useContext(MediaContext);

    const classes = useStyles();

    const getVariant = () => {      
        switch (true) {
            case media.xs:
                return 'h5';
            case media.sm:
                return 'h3';
            case media.md:
                return 'h3';
            case media.lg:
                return 'h2';
            default:
                return 'h1';
        }
    };

    return (

        <Grid className={classes.container} container >

            <Grid item xs={12}>

                <Nav />

            </Grid>
            <Grid item xs={12}>

                <Parallax 
                    strength={200} 
                    bgImage={Boone}
                >
                    <div className={classes.ParallaxContent}>

                        <Typography
                            className={classes.typo}
                            variant={getVariant()}
                            align="center"
                        >
                            Welcome to our little piece of paradise!
                        </Typography>

                    </div>
                </Parallax>

            </Grid>

            <Body />

            <Footer />

        </Grid>
    );
};

export default Home;
