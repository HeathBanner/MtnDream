import React, { useContext, useState } from 'react';

import { MediaContext } from '../../Context/MediaQuery';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Button, Icon, IconButton } from '@material-ui/core';

import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        src: `http://67adb0ae45c3c86e2ed9-8d955638d6ccc0c65b563c0cc679e8f0.r60.cf1.rackcdn.com/1392157777_blowing-rock-wallpaper-1.jpg`,
        alt: 'Grandfather Mountain',
        text: `The Blue Ridge Parkway is a ribbon of road that weaves through 
        the region’s vibrant living traditions. From Cherokee life and 
        agricultural history to Southern Appalachian crafts and music, 
        the Parkway’s 469 miles through Virginia and North Carolina offer 
        many ways to explore rich traditions.`,
    },
    {
        src: `http://67adb0ae45c3c86e2ed9-8d955638d6ccc0c65b563c0cc679e8f0.r60.cf1.rackcdn.com/1392157802_blowing-rock-wallpaper-8.jpg`,
        alt: 'Boone River',
        text: `Spanning the southern and central Appalachians, the Blue Ridge Parkway 
        offers an exceptional glimpse of the regional flora and fauna. It is 
        world-renowned for its biodiversity. The Parkway covers a wide range 
        of habitats along the Appalachian Mountains, and some of these habitats 
        are exceptionally rare. Visitors encounter unsurpassed diversity of 
        climate, vegetation, wildlife and geological features.`,
    },
    {
        src: `https://www.blueridgemountains.com/imager/s3_amazonaws_com/blueridge-2018/images/1920-width/iStock-134561164_5ac8ae049534b01c104dc4019c5230ff.jpg`,
        alt: 'Blue Ridge Waterfall',
        text: `Millions of visitors enjoy the Blue Ridge Parkway each year. 
        Some think of it as just a motor road or a pleasant drive. But 
        the Parkway is also a place of varied and significant natural 
        resources.`,
    },
];

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 100,
        },
        position: 'relative',
        marginTop: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imgHolder: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        [theme.breakpoints.down('lg')]: {
            width: '75%',
        },
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
        width: '60%',
        padding: 30,
        color: 'rgb(255, 255, 255)',
        background: 'linear-gradient(45deg, rgb(47, 28, 214) 30%, rgb(27, 9, 181) 90%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    imgs: {
        [theme.breakpoints.down('lg')]: {
            width: '70%',
        },
        width: '100%', 
        height: 'auto',
        marginBottom: 30,
        borderRadius: '4px',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
    infoText: {
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        width: '80%',
    },
    button: {
        color: 'white',
        padding: 30,
        transition: 'all 0.4s ease',
        background: 'linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128))',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundPosition: '0px -50px',
        },
    },
    nextButton: {
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            top: 0,
            marginTop: 20,
        },
        position: 'absolute',
        top: '50%',
        right: 0,
    },
    backButton: {
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            top: 0,
            marginTop: 20,
        },
        position: 'absolute',
        top: '50%',
        left: 0,
    },
    icons: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',  
        },
        fontSize: '5rem',
    },
}));

const BlueRidge = () => {

    const classes = useStyles();
    const theme = useTheme();
    const media = useContext(MediaContext);
  
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleStepChange = step => {
      setActiveStep(step);
    };

    return (
        <Grid className={classes.container} item xs={12}>

                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    interval={10000}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    containerStyle={{ display: 'flex', alignItems: 'center' }}
                >
                    {tutorialSteps.map((step, index) => (
                    <div className={classes.imgHolder} key={step.label}>

                        {
                                <Paper className={classes.paper}>

                                    <img 
                                        className={classes.imgs} 
                                        src={step.src} 
                                        alt={step.alt} 
                                    />

                                    <Typography className={classes.infoText} variant={media.xs ? 'body1' : 'h5'} align="center">
                                        {step.text}
                                    </Typography>

                                </Paper>
                        }

                </div>
        ))}
      </AutoPlaySwipeableViews>
        
          <IconButton 
            className={classes.backButton} 
            onClick={handleBack} 
            disabled={activeStep === 0}
            style={{ padding: '10px 20px 10px 10px' }}
          >

              <Icon className={classes.icons}>arrow_back_ios</Icon> 

          </IconButton>

          <IconButton 
            className={classes.nextButton} 
            onClick={handleNext} 
            disabled={activeStep === maxSteps - 1}
            style={{ padding: '10px 10px 10px 20px' }}
          >

              <Icon className={classes.icons}>arrow_forward_ios</Icon> 

          </IconButton>

        </Grid>
    );
};

export default BlueRidge;
