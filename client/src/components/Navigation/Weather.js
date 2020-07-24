import React from 'react';

import { Typography, CircularProgress } from '@material-ui/core';

export default ({ classes, xs, weather }) => {

    return (
        <div className={classes.weatherContainer}>
            <Typography
            style={{ textTransform: 'capitalize' }}
            variant={xs ? 'subtitle2' : 'h6'}
            color="inherit"
            >
            {weather.desc ? weather.desc : <CircularProgress />}
            </Typography>

            <img
                className={xs ? classes.imgSm : classes.imgLg}
                src={weather.image ? weather.image : ''} 
                alt={weather.desc ? weather.desc : 'Fetching weather'}
            />
        </div>
    );
};