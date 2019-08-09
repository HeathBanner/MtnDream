import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        margin: '30px 0px',
        padding: '20px',
        backgroundColor: '#EDF5E1'
    },
    thumbnail: {
        width: '100%',
        height: 'auto'
    },
    textContainer: {
        padding: '20px'
    },
    title: {
        fontWeight: 'bold',
        color: '#05386B',
        marginBottom: '15px',
    },
    location: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
    },
    details: {
        fontWeight: 'bold',
        color: '#05386B',
        marginTop: '20px',
    },
}));

function SpeedWay() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/DE53120E90993EEF7EE6C74152E90F62.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        MOUNTAIN VIEW SPEEDWAY
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        BOONE
                    </Typography>
                    <Typography>
                        1/4 mile dirt track located @ the High Country 
                        Fairgrounds in lovely Boone, N.C. Running Modified 
                        8, Outlaw 4's, Stock 4's, Strictly Stock 8, UCARS. 
                        as well as select events for Sprint Cars, 602 Mods, 
                        Flat Track Motorcycles. Running April thru November.
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default SpeedWay;