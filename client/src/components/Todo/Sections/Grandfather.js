import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider, Icon } from '@material-ui/core';

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
    bodyPaper: {
        margin: '30px 0px',
        padding: '20px',
        backgroundColor: '#EDF5E1'
    },
    bodyTitle: {
        fontWeight: 'bold',
    },
    bodyText: {
        marginTop: '20px',
    },
    img: {
        width: '100%',
        height: 'auto',
    },
}));

function EnA() {

    const classes = useStyles();

    return (
        <Fragment>

            <Typography variant="h2" align="center">
                {`GRANDFATHER MOUNTAIN`}
            </Typography>
            <Typography align="center">
                {`THE HIGH COUNTRY'S PREMIER NATURAL ATTRACTION ENTERTAINS, INFORMS, AND INSPIRES`}
            </Typography>

            <Paper className={classes.paper}>
                <Typography className={classes.bodyTitle} variant="h5">
                    NATURE ON A WHOLE DIFFERENT LEVEL
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`Any nature experience should start with Grandfather Mountain.`}
                </Typography>
                <Typography className={classes.bodyText}>
                    {`Grandfather Mountain is the tallest mountain in the Blue Ridge, the world's only privately owned International Biosphere Reserve, and represents non-profit preservation at its loftiest.`}
                </Typography>
                <Typography className={classes.bodyText}>
                    {`A spectacular drive takes visitors to the newly wheelchair-accessible Mile-High Swinging Bridge, thousands of feet above the Carolina Piedmont. You'll marvel at 360-degree views of mountain ridge after mountain ridge retreating to the distant horizon. Surveys show that the journey to the other side is always the highlight of a trip to Grandfather Mountain.`}
                </Typography>
                <Typography className={classes.bodyText}>
                    {`Grandfather's nature museum possesses world-class exhibits and films on geology, flora, and fauna. The mountain also offers many different interpretive programs, and Environmental Habitats for deer, bears, cougars, eagles and otters offer outdoor education and entertainment. `}
                </Typography>
                <Typography className={classes.bodyText}>
                    {`Awesome trails lead to high adventure. `}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>

                <Grid container>
                    <Grid style={{padding: '10px 20px'}} xs={8}>
                        <Typography className={classes.bodyTitle} variant="h5">
                            {`THE GRANDDADDY OF BOONE AREA HIKES`}
                        </Typography>
                        <Divider />
                        <Typography className={classes.bodyText}>
                            {`Start at the Grandfather Travel Attraction and the trail enters the state park climbing ladders and cables up the cliffs and rocky crags of the mountains highest peaks. Start your hike at the parking lot just below the top of the road where you'll take the Grandfather Trail Connector (this is where the Black Rock Nature Trail Starts).`}
                        </Typography>
                        <Typography className={classes.bodyText}>
                            {`Turn right at the Grandfather Trail and follow the summit ridge through the tiny meadows covered in boulders, as well as Spruce and Fir forests. The summit is a massive boulder perched on the knife-edge ridge reached by another ladder. Descend into the next gap and go left on the cool, mossy, and rocky Underwood Trail for a 2-mile hike back to your car.  `}
                        </Typography>
                    </Grid>

                    <Grid xs={4}>
                        <img className={classes.img} src="http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/ED9D31D910F7C2EDBC52B85422EA676B.jpg" />
                    </Grid>
                </Grid>

            </Paper>

        </Fragment>
    );
}

export default EnA;