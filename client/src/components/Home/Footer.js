import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    headerContainer: {
        height: '120vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        color: 'white',
        backgroundColor: '#18121E',
    },
    header: {
        marginBottom: 60,
        width: '90%'
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            width: '75%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
        width: '50%',
        height: 'auto',
    },
    link: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 50,
        },
        width: '100%',
        marginTop: 100,
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        [theme.breakpoints.down('xs')]: {
            padding: 15
        },
        color: 'white',
        padding: 20,
        transition: 'all 0.4s ease',
        backgroundColor: '#25472e',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundPosition: '0px -50px',
        },
    },
}));

const Footer = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    return (

        <Grid className={classes.mainContainer} container>

            <Grid className={classes.headerContainer} item xs={12}>

                <Typography 
                    className={classes.header} 
                    align="center"
                    variant={
                        media.xs ? 'h4' : 'h2'
                    } 
                >
                    We're right by the Blue Ridge Parkway
                </Typography>

                <img
                    className={classes.img}
                    src={`http://67adb0ae45c3c86e2ed9-8d955638d6ccc0c65b563c0cc679e8f0.r60.cf1.rackcdn.com/1392157777_blowing-rock-wallpaper-1.jpg`}
                    alt="Grandfather Mountain view from summit"
                />

                <a
                    className={classes.link}
                    href={`https://www.blueridgeparkway.org/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className={classes.button}>
                        <Typography variant={media.xs ? 'h6' : 'h4'} align="center">
                            Official Website
                        </Typography>
                    </Button>
                </a>

            </Grid>

        </Grid>
    );
};

export default Footer;