import React, { useEffect, useState, useContext } from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import Drawer from './Drawer';
import Weather from './Weather';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

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

export default () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    const [weather, setWeather] = useState({ desc: '', image: '' });

    useEffect(() => { fetchWeather() }, []);

    const fetchWeather = async () => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=36.2168&lon=81.6746&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2');
      const json = await res.json();

      setWeather({
          desc: json.weather[0].description,
          image: `https://openweathermap.org/img/w/${json.weather[0].icon}.png`,
        });
    };

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
                <Weather
                  xs={media.xs}
                  weather={weather}
                  classes={{
                    weatherContainer: classes.weatherContainer,
                    imgSm: classes.imgSm,
                    imgLg: classes.imgLg
                  }}
                />
              }

            </Toolbar>
          </AppBar>
        </div>
    );
};
