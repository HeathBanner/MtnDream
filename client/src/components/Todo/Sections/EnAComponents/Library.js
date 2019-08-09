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

function Library() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/EBDE7BB9FF3B386C567E8B130B838C8B.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        WATAUGA COUNTY LIBRARY
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        BOONE
                    </Typography>
                    <Typography>
                        {`The Watauga County Public Library is located one 
                        block north of historic downtown Boone. Near Mast General 
                        Store and Shoppes at Farmers Hardware, directional signs 
                        marked "library" point the way from King Street, Boone's 
                        downtown district thoroughfare.`}
                    </Typography>
                    <Typography>
                        {`Parking: If you plan to visit for more than one hour, you'll 
                        need to get a tag inside the library to put on your car dash. 
                        The parking lot is actively monitored by parking enforcement. 
                        If you have any questions, please ask the library desk staff 
                        for clarification.`}
                    </Typography>
                    <Typography>
                        { `Do NOT park in handicapped parking unless you have a special 
                        handicap tag.
                        Park ONLY in section A noted in the image, or in parking spaces 
                        marked "D" in the image. If you are visiting for more than one (1) hour Monday - Friday, 
                        or more than two (2) hours on Saturday, you must go inside to 
                        the front desk and pick up a parking tag to place on the dash 
                        of your vehicle. Parking tickets are not given after 5 p.m.` }
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Library;