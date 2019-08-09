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

function FunWheels() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/680A6C6324658BE0733DE33D024E5319.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        FUN 'N' WHEELS
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        BOONE
                    </Typography>
                    <Typography>
                        Fun 'n' Wheels is open daily Memorial Day through 
                        Labor Day from 10:30am-10:30pm. Go Karts, Nas-Kars, 
                        Bumper Kars, Kiddie Kars, Kiddie Ferris Wheel and 
                        Video Games. Fun for All Ages!
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default FunWheels;