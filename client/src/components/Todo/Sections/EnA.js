import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

import HighLanes from './EnAComponents/HighLanes';
import Billiards from './EnAComponents/Billiards';
import FunWheels from './EnAComponents/FunWheels';
import HickoryMuseum from './EnAComponents/HickoryMuseum';
import SpeedWay from './EnAComponents/SpeedWay';
import Mysterium from './EnAComponents/Mysterium';
import OffRoad from './EnAComponents/OffRoad';
import Regal from './EnAComponents/Regal';
import MiniGolf from './EnAComponents/MiniGolf';
import ArtStudio from './EnAComponents/ArtStudio';
import PlayHouse from './EnAComponents/PlayHouse';
import Library from './EnAComponents/Library';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '20px',
        backgroundColor: '#379683',
        lineHeight: '1.8 !important',
    },
    intro: {
        color: 'white',
        fontWeight: 'bold'
    },
    thumbnail: {
        width: '100%',
        height: 'auto'

    }
}));

function EnA() {

    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={classes.paper}>
                <Typography className={classes.intro} align="center">
                    Looking for some easy-going fun or rainy day cover? 
                    Maybe some mini-golf, go-karts, gem mining, an escape 
                    room, a newly released movie, or a good old game of 
                    billiards? From billiards to climbing walls to gem mines, 
                    the listings below will help you find all the entertainment 
                    and amusements you need for a fun-filled day in Boone.
                </Typography>
            </Paper>

            <HighLanes />
            <Billiards />
            <FunWheels />
            <HickoryMuseum />
            <SpeedWay />
            <Mysterium />
            <OffRoad />
            <Regal />
            <MiniGolf />
            <ArtStudio />
            <PlayHouse />
            <Library />

        </Fragment>
    );
}

export default EnA;