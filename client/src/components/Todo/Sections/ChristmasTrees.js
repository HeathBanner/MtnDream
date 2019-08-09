import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const locationList = [
    {
        title: 'BLUESTONE GREENERY',
        location: 'SUGAR GROVE',
        description: `From Boone, take 105 S to 105 By-Pass. Turn right (at the light). At end of By-Pass, turn left onto 321/421. Go 3.5 miles, and turn left onto 321. Go approximately 2.5 miles, and turn left onto Howard Edmisten Rd. 1 mile to farm. Fraser Fir trees (4-7') and wreaths Open Mid-November to Mid-December for more details go to www.watauganurserymen.org`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/AE152927C9A5EADDDFD69C43971AAD89.jpg',
    },
    {
        title: 'C & J Christmas Trees',
        location: 'BOONE',
        description: `From intersection of Hwys. 421 and 194 at New Market Center, take 194 N. 1.3 miles. Turn right at sign.
        They offer Fraser Fir trees. Fraser Fir and White Pine wreaths and garland.
        They are open November 23-24 and the 28, December 1;December 7-8 and 14-15. Their hours of operation are 9 a.m. to 5 p.m. They are open other days by appointment.`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/39C99EF463A0CA81455DA810DC3419B8.jpg',
    },
    {
        title: 'CIRCLE C TREE FARMS',
        location: 'BOONE',
        description: `From Boone, take Hwy. 421 S to Bamboo Road. Turn right and go 1 mile to Will Cook Road. Turn left and go to end of the road. Will be on the left.
        Fraser Fir trees (4-10') and wreaths. Fraser Fir and White Pine garland.
        Open Mid November-Mid December check website for details, www.circlectreefarm.com 
        
        Hayrides on weekends (weather permitting), farm animals for petting, free hot chocolate, restrooms on premises and mail order wreaths.`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/FF30EAF9C2432DCD87A639174FAE3B28.jpg',
    },
    {
        title: `CLAWSON'S CHOOSE & CUT`,
        location: 'BOONE',
        description: `From Highway 421 in Boone at New Market Center, turn left on Highway 194 North. Follow this highway4.6 miles to the farm, which is on the left next to Meat Camp Baptist Church.
        They offer Fraser Fir trees (5-11'), wreaths, and garlands.
        Open Mid November thru Mid December check website at www.watauganurserymen.org for further details.
        Hayrides, handicapped accessible restroom. We show video on how Christmas trees are grown. Display of equipment used to grow trees. Display of antique farm machinery, household items, and old covered Conestoga wagon. We accept Visa and MC.`,
        img: 'https://bloximages.chicago2.vip.townnews.com/highcountrync.com/content/tncms/assets/v3/editorial/4/ec/4ec04328-bed1-5783-ad35-c47d0069ce7d/5b7b052ab60f4.image.jpg?resize=750%2C562',
    },
    {
        title: 'CORNETT DEAL CHRISTMAS TREE FARM',
        location: 'VILAS',
        description: `From Boone, take Highway 421 North to Hwy. 321 N. Take 321 N for 7 miles to Bethel Road. Turn right on Bethel Rd., and go 4 miles to Mountain Dale Rd. Turn left on Mountain Dale Rd. and go 2.5 miles. Tree farm is on the left on Tannenbaum Lane.
        They offer Fraser Fir (5-11') and Canaan Fir trees ( 8-11'). Fraser Fir wreaths. Fraser Fir and White Pine garland.
        Hayrides, tree shaker, drill machine, tree stands, refreshments,restrooms, craft shop featuring locally made crafts. Rental cabin.
        Open Mid-November thru Mid-December for more details go to www.songbirdcabin.com`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/3677FA0219C1E3ACC8681E16CA804E5E.jpg',
    },
    {
        title: 'PANORAMIC CHOOSE & CUT',
        location: 'BOONE',
        description: `Panoramic Tree Farm is located at the intersection of Highway 421 and Highway 194 N at New Market Center in Boone, N.C. From Newmarket Center, take 194 North for 5 miles. Next, turn right on Big Hill Road. Go 1/2 mile and turn right on Panoramic Lane. Panoramic will be 200 yards on the right. 
        Panoramic Tree Farm offers Fraser Fir trees (tabletop to 12’) and wreaths. Their hours of operation are 
        Nov. 21-22 and 28-29; Dec. 5-6, 12-13 and 19-20. 9 a.m. until dark.`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/354026C34DA45B175B6F3B6F40D44C5A.jpg',
    },
    {
        title: 'POPLAR GROVE CHOOSE AND CUT',
        location: 'BOONE',
        description: `Poplar Grove Choose & Cut is a family owned and operated Fraser Fir Christmas tree farm committed to helping you select your perfect tree for the holiday season. In addition to trees, we offer hand made wreaths, garland, and hand poured soy candles to ensure your holiday season will be green and fresh from start to finish.`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/55E723FF32522AEB255A14FAE8B89F24.jpg',
    },
    {
        title: 'RRR LAUREL KNOB',
        location: 'TODD',
        description: `From Boone - North on 194 off 421; go 12 miles to farm. 
        Don't turn off 194 until you get to the farm.`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/F92B18585602C09DAC98A7EEF1486315.jpg',
    },
    {
        title: 'STONE MOUNTAIN FARMS',
        location: 'ZIONVILLE',
        description: `Take Hwy. 421 to Tennessee. Go approximately 2 miles. Go left on Bulldog Road.
        Take right on second paved road (301 Sherry Reece Lane).
        Fraser Fir (4-10’), White Pine (4-10’) and Canaan (4-10’) trees. Fraser Fir wreaths. Fraser Fir and White Pine garland.
        Restroom, net-bagging of trees, refreshments, hayride, free
        baling, mail order available.
        Open Mid-November to Mid-December for details go to www.watauganurserymen.org`,
        img: 'https://geo3.ggpht.com/cbk?panoid=ukuj_tVKy-xTQpKVRUeA2w&output=thumbnail&cb_client=search.LOCAL_UNIVERSAL.gps&thumb=2&w=227&h=160&yaw=115.9126&pitch=0&thumbfov=100',
    },
    {
        title: 'SWINGING BRIDGE FARM',
        location: 'DEEP GAP',
        description: `Swinging Bridge Tree Farm is located on Highway 421 South. To get to the Tree Farm, drive 8-10 miles and turn left on Brownwood Road. Next, go one mile. Follow bridge signs. 

        Swinging Bridge Tree Farm offers Fraser Fir trees (all sizes up to 12') and wreaths and their hours of operation are Mid-November to Mid-December.`,
        img: 'http://svcdn.simpleviewinc.com/v3/cache/www_exploreboone_com/3369F1BB9444B0111A1D7FD4731FFF43.jpg',
    },
    {
        title: 'WALKER FARM',
        location: 'BOONE',
        description: `Walker Farm is located off of Highway. 105 South in Boone. From 105 South, turn right on 105 By-Pass. Go 1/4 mile and turn right on Hodges Gap Road. Taking 421 North towards Tennessee, travel 1/4 mile and turn left on Oak Grove Road. Then left on Hodges Gap Road. Follow signs.

        Walker Farm offers Fraser Fir trees and wreaths. Their hours of operation are Mid-November thru Mid-December.`,
        img: 'https://www.wataugachristmastrees.org/media/photos/choose-and-cut-b.jpg',
    },
]

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

function EnA() {

    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={classes.paper}>
                <Typography className={classes.intro} align="center">
                    Looking for some easy-going fun or rainy day cover? 
                    Maybe some mini-golf, go-karts, gem mining, an escape 
                    room, a newly released movie, or a good old game of 
                    billiards? From billiards to climbing walls to gem mines, 
                    the listings below will help you find all the entertainment 
                    and amusements you need for a fun-filled day in Boone.
                </Typography>
            </Paper>

            {locationList.map((location, index) => {
                return (
                    <Paper key={location.title} className={classes.paper}>
                        <Grid className={classes.container} container>
                            <Grid xs={4}>
                                <img className={classes.thumbnail} src={location.img} />
                            </Grid>
                            <Grid className={classes.textContainer} xs={8}>
                                <Typography className={classes.title} variant="h5">
                                    {location.title}
                                </Typography>
                                <Typography className={classes.location} variant="h6">
                                    {location.location}
                                </Typography>
                                <Typography>
                                    {location.description}
                                </Typography>
                                <Typography className={classes.details} variant="h5">Details</Typography>
                            </Grid>
                        </Grid>
                    </Paper>        
                );
            })}

        </Fragment>
    );
}

export default EnA;