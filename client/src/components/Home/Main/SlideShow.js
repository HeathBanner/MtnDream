import React, {
  useContext,
  useState,
} from 'react';

import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import {
  MobileStepper,
  Button,
  Icon,
  Typography,
} from '@material-ui/core';

import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

import { MediaContext } from '../../../Context/MediaQuery';

import firePit from '../imgs/slide/cabinFire.jpg';
import Autumn from '../imgs/autumn.jpg';
import Couch from '../imgs/couch.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Winter',
    imgPath: firePit,
  },
  {
    label: 'Autumn',
    imgPath: Autumn,
  },
  {
    label: 'Couch',
    imgPath: Couch,
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '70%',
    },
    width: '40%',
    margin: '20px auto',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  },
  buttonContainer: {
    backgroundColor: 'rgb(0, 0, 0, 0.1)',
    color: 'white',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 'auto',
    width: '100%',
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
    backgroundColor: '#EAC67A',
    transition: 'all .8s ease',
  },
  dotActive: {
    backgroundColor: '#fff2d9',
    transform: 'scale(1.5)',
  },
}));

const SlideShow = () => {

  const classes = useStyles();
  const theme = useTheme();
  const media = useContext(MediaContext);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => { setActiveStep(prevActiveStep => prevActiveStep + 1); };
  const handleBack = () => { setActiveStep(prevActiveStep => prevActiveStep - 1); };
  const handleStepChange = step => { setActiveStep(step); };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        interval={5000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {
          tutorialSteps.map((step, index) => (
            <div className={classes.imgHolder} key={step.label}>
              {
                Math.abs(activeStep - index) <= 2
                  ?
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
                  :
                null
              }
            </div>
          ))
        }
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.buttonContainer}
        classes={{
          dot: classes.dot,
          dotActive: classes.dotActive,
        }}
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

            <Typography variant={media.xs ? 'subtitle2' : 'h6'}>
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

            <Typography variant={media.xs ? 'body2' : 'h6'}>
              Back
            </Typography>
          </Button>
        }
      />
    </div>
  );
};

export default SlideShow;
