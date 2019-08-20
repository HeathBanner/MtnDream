import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { Parallax, Background } from 'react-parallax';

import { MediaContext } from '../../../Context/MediaQuery';

import SlideShow from './SlideShow';

const Body = () => {
    
    const media = useContext(MediaContext);

    const useStyles = makeStyles((theme) => ({
        container: {
            [theme.breakpoints.down('md')]: {
                height: 'auto',
                marginTop: 50,
                marginBottom: 200,
            },
            [theme.breakpoints.down('xs')]: {
                marginBottom: 50,
            },
            height: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
        },
        parallaxSlideshow: {
            [theme.breakpoints.down('md')]: {
                height: '100%',
            },
            width: '100%', 
            height: '50%',
            '& .react-parallax-background-children': {
                top: media.xs ? '20%'
                :
                media.sm ? '-40%'
                    :
                media.md ? '0%'
                    :
                media.lg ? '40%'
                    :
                '40%',
                width: '100%',
                overflow: 'visible !important'
            },
        },
        parallaxText: {
            [theme.breakpoints.down('md')]: {
                height: '100%',
            },
            width: '100%', 
            height: '50%',
            '& .react-parallax-background-children': {
                top: media.xs ? '100%'
                :
                media.sm ? '100%'
                    :
                media.md ? '115%'
                    :
                media.lg ? '45%'
                    :
                '50%',
                width: '100%', 
            },
        },
        paper: {
            width: '70%',
            margin: '80px 0px',
            padding: '20px 0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            background: 'linear-gradient(45deg, #ffffff 30%, #ece9e6 90%)'
        },
        typoContainer: {
            width: '80%',
            padding: 20,
        },
        textContainer: {
            [theme.breakpoints.down('md')]: {
                height: '50%',
            },
            height: '100%',
            width: '100%',
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        },
        slideContainer: {
            [theme.breakpoints.down('md')]: {
                height: '50%',
            },
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }));

    const classes = useStyles();

    const getTextSpeed = () => {
        switch (true) {
            case media.xs:
                return 200;
            case media.md:
                return 400;
            default:
                return -150;
        }
    };

    const getSlideSpeed = () => {
        switch (true) {
            case media.xs:
                return -150;
            case media.md:
                return -350;
            default:
                return 350;
        }
    };

    const getVariant = () => {
        switch (true) {
            case media.xs:
                return 'body1';
            case media.sm:
                return 'h6';
            case media.md:
                return 'h5';
            case media.lg:
                return 'h5';
            default:
                return 'h5'
        }
    };

    return (
        <Grid className={classes.container} container>

            <Grid className={classes.textContainer} item lg={6} md={12}>

                {
                    media.md
                        ?
                    <Typography variant={getVariant()} align="center">
                        {`A Mountain Dream Cabin is far enough from 
                        civilization to be secluded, yet close enough to town & 
                        local attractions to be more than convenient. Located only 
                        10 quick miles outside of Boone, NC in the exclusive log 
                        cabin community of Twin Hollows. A Mountain Dream has every 
                        amenity to make your stay as comfortable, pleasant and stress 
                        free as you could ever imagine.`}
                    </Typography>
                        :
                    <Parallax className={classes.parallaxText} strength={getTextSpeed()}>

                        <Background>

                            <Typography variant={getVariant()} align="center">
                                {`A Mountain Dream Cabin is far enough from 
                                civilization to be secluded, yet close enough to town & 
                                local attractions to be more than convenient. Located only 
                                10 quick miles outside of Boone, NC in the exclusive log 
                                cabin community of Twin Hollows. A Mountain Dream has every 
                                amenity to make your stay as comfortable, pleasant and stress 
                                free as you could ever imagine.`}
                            </Typography>

                        </Background>

                    </Parallax>
                }   


            </Grid>
            <Grid className={classes.slideContainer} item lg={6} md={12}>

                {
                    media.md
                        ?
                    <SlideShow />
                        :
                    <Parallax 
                        className={classes.parallaxSlideshow}
                        strength={getSlideSpeed()}
                        style={{ overflow: 'visible' }}
                    >

                        <Background>

                            <SlideShow />

                        </Background>

                    </Parallax>
                }

            </Grid>

        </Grid>
    );
};

export default Body;
