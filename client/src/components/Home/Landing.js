import React, {
    useContext,
} from 'react';

import { MediaContext } from '../../Context/MediaQuery';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
} from '@material-ui/core';

import Boone from './imgs/alyssa-graham.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundImage: `url(${Boone})`,
        backgroundSize: 'cover',
        height: 'calc(100vh + 130px)',
        color: 'white',
        padding: '0 25%',
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh + 90px)', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            height: 'calc(100vh + 40px)',
        },
    },
    landingHeader: {
        marginBottom: 10
    },
    topDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '90px 100vw 0 0',
            bottom: -90,
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '40px 100vw 0 0', 
            bottom: -40
        },
        position: 'absolute',
        bottom: -130,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '130px 100vw 0 0',
        borderColor: 'transparent #25472e transparent transparent',
        transform: 'scale(1.0001)',
    },
}));

const Landing = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.landingHeader}
                align="center"
                variant={media.xs ? 'h5' : 'h4'}
            >
                Welcome to our little piece of paradise!
            </Typography>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Landing;
