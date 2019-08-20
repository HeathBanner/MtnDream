import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

import BlueRidge from './BlueRidge';

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
    link: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 50,
        },
        marginTop: 100,
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        width: '80%',
        color: 'white',
        padding: 20,
        transition: 'all 0.4s ease',
        background: 'linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128))',
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

                <a className={classes.link} href={`https://www.blueridgeparkway.org/`} target="_blank" rel="noopener noreferrer">
                    <Button className={classes.button}>
                        
                        <Typography variant={media.xs ? 'h6' : 'h4'} align="center">

                            {
                                media.xs
                                    ?
                                'Official Website'
                                    :
                                'Visit the official Blue Ridge Parkway website!'
                            }

                        </Typography>

                    </Button>
                </a>

                <BlueRidge />

            </Grid>

        </Grid>
    );
};

export default Footer;