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

function OffRoad() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/B8DBB36DE5B126635A899555D169AA98.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        PATRIOT MTN OFFROAD PARK
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        VALLE CRUCIS
                    </Typography>
                    <Typography>
                        Boone’s ONLY place to go Offroading, Patriot Mtn offers 
                        6.5-7 miles of trails intended for short wheelbase 4x4’s. 
                        Trails are named for American heroes such as Patton, Kyle, 
                        Hathcock, Reagan, Westmoreland, Dolittle, Tuskegee, Mast, 
                        Doss, Chapman, Wells, John Wayne, and Chesty Puller. We’ are 
                        2A friendly, Kid friendly, and dog friendly. All-in-all 
                        family friendly. Located in ‘historic’ Valle Crucis, across 
                        from the Original Mast Store.
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default OffRoad;