import React, { useContext } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Button, Icon, Typography } from '@material-ui/core';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

import { MediaContext } from '../../../Context/MediaQuery';

import firePit from '../imgs/slide/cabinFire.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Boone, NC',
    imgPath: firePit,
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      width: '70%',
      flexGrow: 0,
    },
    width: 530,
    margin: '20px auto',
    flexGrow: 1,
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  },
  buttonContainer: {
    backgroundColor: 'rgb(0, 0, 0, 0.1)',
    color: 'white',
  },
  stepper: {
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  imgHolder: {
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
    height: 400,
  },
  img: {
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        width: '100%',
    },
    height: '100%',
    width: 'auto',
    display: 'block',
    overflow: 'hidden',
    borderRadius: '10px 10px 0px 0px',
  },
  buttons: {
    color: 'white',
    transition: 'transform .2s ease-out',
    '&:hover': {
      transform: 'scale(1.06)',
    },
  },
  dot: {
    backgroundColor: 'rgb(4, 61, 10)',
    transition: 'all .8s ease'
  },
  dotActive: {
    backgroundColor: 'rgb(19, 209, 41)',
    transform: 'scale(1.5)'
  },
}));

const SlideShow = () => {

  const classes = useStyles();
  const theme = useTheme();
  const media = useContext(MediaContext);

  const [activeStep, setActiveStep] = React.useState(0);
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
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        interval={5000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div className={classes.imgHolder} key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.buttonContainer}
        classes={{dot: classes.dot, dotActive: classes.dotActive}}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button 
            className={classes.buttons} 
            size="small" onClick={handleNext} 
            disabled={activeStep === maxSteps - 1}
            style={{ padding: '10px 10px 10px 20px' }}
          >

            <Typography variant={media.xs ? 'button' : 'h6'}>
              Next
            </Typography>

            {
              theme.direction === 'rtl' 
                ? 
              <Icon>keyboard_arrow_left</Icon> 
                : 
              <Icon>keyboard_arrow_right</Icon>
            }

          </Button>
        }
        backButton={
          <Button 
            className={classes.buttons} 
            size="small" onClick={handleBack} 
            disabled={activeStep === 0}
            style={{ padding: '10px 20px 10px 10px' }}
          >

            {
              theme.direction === 'rtl' 
                ? 
              <Icon>keyboard_arrow_right</Icon> 
                :   
              <Icon>keyboard_arrow_left</Icon>
            }

            <Typography variant={media.xs ? 'button' : 'h6'}>
              Back
            </Typography>
          </Button>
        }
      />
    </div>
  );
}

export default SlideShow;