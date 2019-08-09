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
    introPaper: {
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
        marginTop: '10px',
    },
    contact: {
        fontWeight: 'bold',
        marginTop: '10px'
    },  
}));

function EnA() {

    const classes = useStyles();

    return (
        <Fragment>

            <Paper className={classes.paper}>
                <Typography className={classes.intro} align="center">
                    GUIDE TO GAME DAY PARKING  AT APPALACHIAN STATE UNIVERSITY
                </Typography>
            </Paper>

                <Typography variant="h4" color="primary">
                    Consider these game day tips and parking options:   
                </Typography>

            <Paper className={classes.introPaper}>
                <Typography className={classes.bodyTitle} variant="h3">
                    HEADS UP:
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`Please be aware that the Town of Boone has an open container law that prohibits open alcoholic beverages on public property including streets and sidewalks in downtown Boone. Appalachian State University also has similar policies on campus property. However, many parking areas permit tailgating and some permit alcoholic beverages.`}
                </Typography>
            </Paper>

            <Paper className={classes.introPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    PARKING TIPS:
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`When you enter a parking lot, before you pay, make sure you ask if they allow tailgating. Some lots allow tailgating and some don't. If tailgating is allowed, make sure you ask if they allow grill and alcoholic beverages on the property. Again, some parking lots do and some don't.`}
                </Typography>
            </Paper>

            <Paper className={classes.introPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    FOOTBALL PARKING AREAS:
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`(Prices and Policies are subject to change, please ask before parking). Prices are per parking spot.`}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    GOODNIGHT LOT - 274 HOWARD STREET
                </Typography>
                <Divider />
                <Typography className={classes.bodyText}>
                    Parking Fee $$
                    Tailgating allowed
                    Open all day Saturday starting at 9am until the following morning at 7am
                    Alcohol allowed
                </Typography>
                <Typography className={classes.contact} color="textSecondary">
                    Contact: Frederick Coffey (828) 406-8411
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    TOWN OF BOONE - QUEEN STREET PAY LOT (ALONG THE STREET)
                </Typography>
                <Divider />
                <Typography clasName={classes.bodyText}>
                    {`Normal enforcement 8am-5pm. $1.00 per hour.
                    Parking only; no tailgating allowed
                    No Alcohol`}
                </Typography>
                <Typography className={classes.contact} color="textSecondary">
                    Contact: McLaurin Parking 828-264-2645
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    TOWN OF BOONE - KING STREET PAY LOT @ 567 W. KING STREET
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`Normal enforcement hours 8am - 5pm; $1 per hour, up to nine hours of parking
                    Tailgating allowed
                    No Alcohol`}
                </Typography>
                <Typography className={classes.contact} color="textSecondary">
                    Contact: McLaurin Parking 828-264-2645
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    TOWN OF BOONE - DEPOT STREET LOT (IMMEDIATELY BEHIND MELANIE'S FOOD FANTASY)
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`Normal enforcement hours 8am - 5pm; $1 per hour, free after 5pm.  
                    Tailgating allowed
                    No Alcohol`}
                </Typography>
                <Typography className={classes.contact} color="textSecondary">
                    Contact: McLaurin Parking 828-264-2645
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    FIRST BAPTIST CHURCH - 375 W. KING STREET  
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`$20 Donation; receive a trash bag with donation.   
                    Tailgating allowed
                    Open - Saturday mornings at 8am (no overnight parking)  
                    No Alcohol & No Charcoal Grills`}
                </Typography>
                <Typography className={classes.contact} color="textSecondary">
                    Contact: First Baptist Church 828-264-2441
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    HARDIN STREET PARKING - MAIN UPPER LOT @ 135 HARDIN STREET
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`$15 Parking Fee
                    Tailgating Allowed
                    Open - Saturday mornings at 9am (No overnight parking)  
                    Alcohol policy not specified - please ask `}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    {`CORNER OF CHERRY STREET & KING STREET (LOT 3)`}
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`$15 Parking Fee
                    Tailgating Allowed
                    Open - Saturday mornings at 9am (No overnight Parking)  
                    Alcohol policy not specified - please ask `}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    {`AUSTIN & BARNES FUNERAL HOME LOT - 194 QUEEN STREET`}
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`$20 Parking Fee
                    Tailgating Allowed
                    Open - Saturday mornings about 9am; Subject to Change depending on funeral schedule  `}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    {`GRACE LUTHERAN CHURCH - 115 E. KING STREET (DIAGONALLY ACROSS FROM DAN'L BOONE INN RESTAURANT)`}
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`Donation-based 
                    Tailgating allowed
                    Open - Saturday mornings at 9am (no overnight parking)   `}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    {`PARKING SPACES AROUND THE COURTHOUSE & WATAUGA COUNTY ADMINISTRATION BUILDING`}
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`There are about 80 parking spaces around the Courthouse and 
                    County offices. Access to most of these parking lots is off of 
                    Queen street or Water Street. The spaces are currently free. 
                    Tailgating is allowed, but no alcohol is allowed in these lots. 
                    No overnight parking.`}
                </Typography>
            </Paper>

            <Paper className={classes.bodyPaper}>
                <Typography className={classes.bodyTitle} variant="h6">
                    {`APPALACHIAN ENTERPRISE CENTER / WATAUGA COUNTY HEALTH DEPT. LOT - 130 POPLAR GROVE CONNECTOR`}
                </Typography>
                    <Divider />
                <Typography className={classes.bodyText}>
                    {`About 250 spaces
                    Free Parking & Free Appalcart shuttle to the western edge of campus
                    Tailgating Allowed
                    No alcohol`}
                </Typography>
            </Paper>
        </Fragment>
    );
}

export default EnA;