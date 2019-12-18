import React, {
  useEffect,
  useState,
  useContext
} from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import Drawer from './Drawer';
import Login from '../Login/Login';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Modal,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 5,
    overflow: 'hidden',
  },
  appBar: {
    background: 'linear-gradient(45deg, #986243 30%, #984843 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  weatherContainer: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: 'translate(0%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: 'translate(0%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLg: {
    height: '100%',
    width: 'auto',
    marginTop: 5
  },
  imgSm: {
    height: '100%',
    width: 'auto',
    marginTop: 5
  }
}));

export default ({ edit, isBlog }) => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    const [weather, setWeather] = useState({ desc: '', image: '' });
    const [open, setOpen] = useState(false);

    const handleOpen = () => {setOpen(true); };
    const handleClose = () => { setOpen(false); };

    useEffect(() => { fetchWeather() }, []);

    const fetchWeather = async () => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=36.2168&lon=81.6746&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2');
      const json = await res.json();

      setWeather({
          desc: json.weather[0].description,
          image: `https://openweathermap.org/img/w/${json.weather[0].icon}.png`,
        });
    };

    if (isBlog) {
      return (
        <div className={classes.root}>
          <AppBar
            className={classes.appBar}
            style={{ position: edit ? 'relative' : 'fixed' }}
            position="fixed"
          >
            <Toolbar>

              <Drawer query={media.xs} />

              <Typography
                className={classes.title}
                variant={media.xs ? 'body1' : 'h5'}
                align="center"
              >
                A Mountain Dream
              </Typography>

              {
                media.xs
                  ?
                ''
                  :
                <div className={classes.loginContainer}>

                  <Button onClick={handleOpen}>
                    <Typography style={{ color: 'white' }} variant={media.xs ? 'subtitle2' : 'h5'}>
                      Login
                    </Typography>
                  </Button>

                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <Login close={handleClose} />
                  </Modal>

                </div>
              }

            </Toolbar>
          </AppBar>
        </div>
      );
    }
    return (
        <div className={classes.root}>
          <AppBar className={classes.appBar} position="fixed">
            <Toolbar>

              <Drawer query={media.xs} />

              <Typography
                className={classes.title}
                variant={media.xs ? 'body1' : 'h5'}
                align="center"
              >
                A Mountain Dream
              </Typography>

              {
                media.xs
                  ?
                ''
                  :
                <div className={classes.weatherContainer}>

                  <Typography
                    style={{ textTransform: 'capitalize' }}
                    variant={media.xs ? 'subtitle2' : 'h6'}
                    color="inherit"
                  >
                    {
                      weather.desc
                        ?
                      weather.desc
                        :
                      <CircularProgress />
                    }
                  </Typography>
  
                    <img 
                      className={media.xs ? classes.imgSm : classes.imgLg}
                      src={ 
                        weather.image ? weather.image
                          :
                        ''
                      } 
                      alt={weather.desc ? weather.desc : 'Fetching...'}
                    />

                </div>
              }

            </Toolbar>
          </AppBar>
        </div>
    );
};
