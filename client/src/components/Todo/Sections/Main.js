import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '50px',
        backgroundColor: '#EDF5E1',
        lineHeight: '1.8 !important',
    },
    intro: {
        // color: '#05386B',
        fontSize: '1.4em',
        // fontWeight: 'bold',
        margin: '20px 0px'
    },
    exploreBoone: {
        color: '#4F4A41',
        margin: '30px 0px 60px 0px'
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

            <Typography className={classes.exploreBoone} variant="h2" align="center">
                Explore Boone
            </Typography>

            <Paper className={classes.paper}>
                <Typography className={classes.intro}>
                    {`Are you ready for a true mountain adventure like no other?  
                    From the breathtaking vistas of the Blue Ridge Parkway to the 
                    inviting forests and streams of the Blue Ridge Mountains, Boone 
                    gives you a million ways to step away from your everyday routine.`}
                </Typography>
                <Typography className={classes.intro}>
                    {`The promise of our cool springs, mild summers, colorful autumns, 
                    is the only coaxing you'll need to step outside yourself and go 
                    biking, hiking, fishing, zip-lining, kayaking, rafting, or tubing.  
                    Or maybe your idea of excitement is a leisurely stroll through a 
                    street festival or listening to live music on the front lawn of 
                    an historic house?  We've got that too.`}
                </Typography>
                <Typography className={classes.intro}>
                    {`In addition to nationally know attractions like Grandfather 
                    Mountain, the Blue Ridge Parkway and Tweetsie Railroad, Boone also 
                    has a vibrant art, history and cultural scene.  Tour the historic 
                    frescoes that adorn area churches, visit the historic Jones House, 
                    or browse the specialty shops in downtown Boone.  Spend enough 
                    time here and you might even spot a celebrity.  Appalachian State 
                    University's Performing Arts Series and annual Appalachian Summer 
                    Festival bring some of the most well known performers to the area 
                    all season long.`}
                </Typography>
                <Typography className={classes.intro}>
                    {`The adventure doesn't end when the colder weather begins.  The 
                    Boone area boasts the most concentrated cluster of ski slopes in 
                    the entire region, including several black diamond slopes for the 
                    truly daring.  For others, there is snowboarding, snow tubing, 
                    sledding, ice-skating, snowshoeing and cross country skiing.  
                    Consider spending the holidays in our winter wonderland, or at 
                    least make a weekend out of a trip to one of our choose & cut 
                    Christmas tree farms.  It's never too late to start a new family 
                    tradition!`}
                </Typography>
            </Paper>

        </Fragment>
    );
}

export default EnA;