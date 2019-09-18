import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { Parallax, Background } from 'react-parallax';

import { MediaContext } from '../../../Context/MediaQuery';

import SlideShow from './SlideShow';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '120vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
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
        [theme.breakpoints.down('xs')]: {
            padding: 20,
        },
        padding: '5% 10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    slideContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

const Body = () => {
    
    const media = useContext(MediaContext);

    const classes = useStyles();

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

            <Grid className={classes.textContainer} item xs={12}>

                <Typography variant={getVariant()} align="center">
                    {`A Mountain Dream Cabin is far enough from 
                    civilization to be secluded, yet close enough to town & 
                    local attractions to be more than convenient. Located only 
                    10 quick miles outside of Boone, NC in the exclusive log 
                    cabin community of Twin Hollows. A Mountain Dream has every 
                    amenity to make your stay as comfortable, pleasant and stress 
                    free as you could ever imagine.`}
                </Typography>

            </Grid>
            <Grid className={classes.slideContainer} item xs={12}>
                            
                <SlideShow />

            </Grid>

        </Grid>
    );
};

export default Body;
