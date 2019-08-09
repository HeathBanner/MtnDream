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

function HighLanes() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/B12BC1710A4D1D83CACA9EEFF06240A3.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h4">
                        10 HIGH COUNTRY LANES
                    </Typography>
                    <Typography className={classes.location} color="textSecondary" variant="h6">
                        BOONE
                    </Typography>
                    <Typography className={classes.description}>
                        High Country Lanes features 16 lanes of friendly 
                        bowling fun. Come and visit the beautifully 
                        remodeled bar and check out local beers, a new 
                        menu, and a full service bar. Enjoy the game, 
                        food, and drinks at your station or on the patio. 
                        Birthdays, corporate events, and other private 
                        parties are welcome.
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default HighLanes;