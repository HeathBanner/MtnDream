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

function ArtStudio() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/6C64B54F6BBBC5E96E9BFBF461DA56D3.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        THE BLUE HOUSE ART STUDIO
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        BOONE
                    </Typography>
                    <Typography>
                        {`The Blue House was a dream that Anna Welsh, the proprietor, 
                        had for years. After years of teaching reading and math, she 
                        wanted to have a space for children of all ages to visit and 
                        be creative. "Art is an activity that all people need. The process 
                        of starting with a blank slate, going through the process of 
                        creating a piece of art, and seeing a finished product is a 
                        skill that can boost self-confidence and lift the spirit." Anna 
                        hopes that all who enter The Blue House will walk away with an 
                        experience of fun, laughter, and accomplishment. Open Monday-Saturday: 
                        6 AM – 9 PM. Closed Sunday.`}
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ArtStudio;