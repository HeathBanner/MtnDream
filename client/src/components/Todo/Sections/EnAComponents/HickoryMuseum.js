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

function HickoryMuseum() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid className={classes.container} container>
                <Grid xs={4}>
                    <img className={classes.thumbnail} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/A7C64A9DA16A2C55B6462219E81AFAED.jpg" />
                </Grid>
                <Grid className={classes.textContainer} xs={8}>
                    <Typography className={classes.title} variant="h5">
                        HICKORY RIDGE MUSEUM
                    </Typography>
                    <Typography className={classes.location} variant="h6">
                        BOONE
                    </Typography>
                    <Typography>
                        Hickory Ridge Living History Museum is located in the heart 
                        of Boone, NC, on the grounds of Horn in the West, the 
                        nation's longest-running Revolutionary War outdoor drama. 
                        The museum displays some of the oldest building structures 
                        in the area and was created in 1980 to foster a better 
                        understanding of the life of the settlers depicted in the 
                        drama. The museum also provides insight into the self 
                        sufficiency of our forefathers by showing the routines and 
                        skills they possessed such as hearthside cooking, weaving, 
                        making candles, spinning, blacksmithing, etc.
                    </Typography>
                    <Typography>
                        {`Hickory Ridge Museum is now open April - November, Tues. - Fri., 
                        with two daily tours: 10AM & 2PM. Purchase tickets for your tour 
                        at the Gift Shop; Adults $5 | Children $3. You will be guided 
                        through a collection of authentic log cabins by a knowledgeable 
                        docent and historian who will give you a very interesting 
                        understanding of what life on the frontier was like in the mid- 
                        to late- 1700's.`}
                    </Typography>
                    <Typography className={classes.details} variant="h5">Details</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default HickoryMuseum;