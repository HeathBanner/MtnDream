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

function Mysterium() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/DD1560DA66539CDEAB739CC8E50BB98A.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        MYSTERIUM ESCAPE ADVENTURE
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        DOWNTOWN
                    </Typography>
                    <Typography>
                        You enter a room where you will be trapped for 60 minutes. 
                        Your only means of escape is to solve puzzles, seek out 
                        clues, and find your way through the riddles to your freedom. 
                        This is a real-life gaming experience! Rooms are themed 
                        with fully interactive and immersive elements. Great for 
                        a group of friends, date night, corporate team building, 
                        or just a fun alternative activity.
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Mysterium;