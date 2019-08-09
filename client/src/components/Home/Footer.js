import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

import ImageList from './ImageList.js';
import MobileImgList from './MobileImgList';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    topGradient: {
        background: 'linear-gradient(0deg, rgb(51, 138, 249),rgb(0, 0, 0, 0))',
        height: '20vh',
    },
    headerContainer: {
        padding: '80px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        color: 'white',
        background: 'linear-gradient(0deg, rgb(33, 110, 209),rgb(51, 138, 249))',
    },
    header: {
        marginBottom: 60,
        width: '90%'
    },
    parallaxContainer: {
        margin: '100px 0px 60px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    paper: {
        padding: 30,
        width: '70%',
        background: 'rgb(0, 0, 0, 0.05)',
    },
    brpDesc: {
        color: 'white',
        marginTop: 20
    },
}));

const Footer = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (

        <Grid className={classes.mainContainer} container>

            <Grid className={classes.topGradient} item xs={12}></Grid>

            <Grid className={classes.headerContainer} item xs={12}>

                <Typography 
                    className={classes.header} 
                    align="center"
                    variant={
                        media.xs ? 'h4' : 
                        media.sm ? 'h2' : 'h1'
                    } 
                >
                    We're right by the Blue Ridge Parkway
                </Typography>

                { media.sm ? <MobileImgList /> : <ImageList /> }

            </Grid>

        </Grid>
    );
};

export default Footer;