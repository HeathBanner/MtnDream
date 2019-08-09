import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Icon, Avatar, Divider } from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

import Background from './imgs/1x/jumbo.png';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('lg')]:{
            height: '85vh',
            backgroundSize: 'auto 90%',
        },
        [theme.breakpoints.down('md')]: {
            height: '100vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '95vh'
        },
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    paper: {
        height: 500,
        width: '70%',
        marginTop: 80,
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, rgba(253, 253, 253, 0.03) 0%, rgba(253, 253, 253, 0.03) 50%,rgba(64, 64, 64, 0.03) 50%, rgba(64, 64, 64, 0.03) 100%),linear-gradient(77deg, rgba(39, 39, 39, 0.01) 0%, rgba(39, 39, 39, 0.01) 50%,rgba(91, 91, 91, 0.01) 50%, rgba(91, 91, 91, 0.01) 100%),linear-gradient(311deg, rgba(19, 19, 19, 0.03) 0%, rgba(19, 19, 19, 0.03) 50%,rgba(214, 214, 214, 0.03) 50%, rgba(214, 214, 214, 0.03) 100%),linear-gradient(233deg, rgba(250, 250, 250, 0.03) 0%, rgba(250, 250, 250, 0.03) 50%,rgba(118, 118, 118, 0.03) 50%, rgba(118, 118, 118, 0.03) 100%),linear-gradient(227deg, rgba(216, 216, 216, 0.02) 0%, rgba(216, 216, 216, 0.02) 50%,rgba(69, 69, 69, 0.02) 50%, rgba(69, 69, 69, 0.02) 100%),linear-gradient(151deg, rgba(205, 205, 205, 0.02) 0%, rgba(205, 205, 205, 0.02) 50%,rgba(20, 20, 20, 0.02) 50%, rgba(20, 20, 20, 0.02) 100%),linear-gradient(7deg, rgba(169, 169, 169, 0.02) 0%, rgba(169, 169, 169, 0.02) 50%,rgba(231, 231, 231, 0.02) 50%, rgba(231, 231, 231, 0.02) 100%),linear-gradient(244deg, rgba(204, 204, 204, 0.01) 0%, rgba(204, 204, 204, 0.01) 50%,rgba(200, 200, 200, 0.01) 50%, rgba(200, 200, 200, 0.01) 100%),linear-gradient(45deg, rgb(185, 232, 75),rgb(37, 116, 27))',
        color: 'white'
    },
    nameContainer: {
        [theme.breakpoints.down('lg')]: {
            padding: '0px 30px',
        },
        [theme.breakpoints.down('md')]: {
            height: '40%',
        },
        [theme.breakpoints.down('sm')]: {
            height: '35%',
        },
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        color: 'white',
    },
    divider: {
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        },
        width: '70%', 
        marginBottom: 20,
        backgroundColor: 'rgb(255, 255, 255, 0.1)'
    },
    listContainer: {
        [theme.breakpoints.down('md')]: {
            padding: '0px 20%',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            perspective: 5000
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        },
        perspective: 1500,
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    contactDesc: {
        width: '100%',
    },
    contact: {
        position: 'relative',
        width: '60%',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'rgb(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    icons: {
        [theme.breakpoints.down('xs')]: {
            height: 40,
            width: 40,  
            left: 10,
        },
        height: 80,
        width: 80,
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translate(0, -50%)',
        background: 'linear-gradient(252deg, rgba(69, 69, 69, 0.03) 0%, rgba(69, 69, 69, 0.03) 50%,rgba(47, 47, 47, 0.03) 50%, rgba(47, 47, 47, 0.03) 100%),linear-gradient(335deg, rgba(66, 66, 66, 0.09) 0%, rgba(66, 66, 66, 0.09) 50%,rgba(188, 188, 188, 0.09) 50%, rgba(188, 188, 188, 0.09) 100%),linear-gradient(223deg, rgba(194, 194, 194, 0.08) 0%, rgba(194, 194, 194, 0.08) 50%,rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.08) 100%),linear-gradient(82deg, rgba(27, 27, 27, 0.01) 0%, rgba(27, 27, 27, 0.01) 50%,rgba(197, 197, 197, 0.01) 50%, rgba(197, 197, 197, 0.01) 100%),linear-gradient(281deg, rgba(3, 3, 3, 0.09) 0%, rgba(3, 3, 3, 0.09) 50%,rgba(198, 198, 198, 0.09) 50%, rgba(198, 198, 198, 0.09) 100%),linear-gradient(319deg, rgba(47, 47, 47, 0.01) 0%, rgba(47, 47, 47, 0.01) 50%,rgba(89, 89, 89, 0.01) 50%, rgba(89, 89, 89, 0.01) 100%),linear-gradient(278deg, rgba(243, 243, 243, 0.06) 0%, rgba(243, 243, 243, 0.06) 50%,rgba(63, 63, 63, 0.06) 50%, rgba(63, 63, 63, 0.06) 100%),linear-gradient(38deg, rgba(81, 81, 81, 0.09) 0%, rgba(81, 81, 81, 0.09) 50%,rgba(201, 201, 201, 0.09) 50%, rgba(201, 201, 201, 0.09) 100%),linear-gradient(33deg, rgba(168, 168, 168, 0.08) 0%, rgba(168, 168, 168, 0.08) 50%,rgba(129, 129, 129, 0.08) 50%, rgba(129, 129, 129, 0.08) 100%),linear-gradient(0deg, #1b9efe,#46f3e7)',
    },
    infoHolder: {
        position: 'relative',
        height: 100,
        width: '50%',
    },
    li: {
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'center',
            padding: '50px 20px 50px 100px',
        },
        [theme.breakpoints.down('md')]: {
            width: 350,
            flexWrap: 'wrap',
            margin: 0,
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%',
            padding: '10px 10px 10px 50px'
        },
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        cursor: 'pointer',
        transform: 'rotateY(-30deg) rotateX(15deg)',
        padding: 50,
        width: '50%',
        color: 'white',
        transition: 'all .4s ease-out',
        '&:nth-child(1)': {
            [theme.breakpoints.down('md')]: {
                '&:hover': {
                    transform: 'rotateY(5deg) rotateX(7deg) scale(1.03)',
                    backgroundPosition: '0px 25px'
                },
                transform: 'rotateY(-25deg)',
                marginBottom: 15,
            },
            background: 'linear-gradient(160deg, rgba(226, 226, 226, 0.03) 0%, rgba(226, 226, 226, 0.03) 33.3%,rgba(244, 244, 244, 0.03) 33.3%, rgba(244, 244, 244, 0.03) 66.6%,rgba(110, 110, 110, 0.03) 66.6%, rgba(110, 110, 110, 0.03) 99%),linear-gradient(59deg, rgba(136, 136, 136, 0.08) 0%, rgba(136, 136, 136, 0.08) 33.3%,rgba(150, 150, 150, 0.08) 33.3%, rgba(150, 150, 150, 0.08) 66.6%,rgba(71, 71, 71, 0.08) 66.6%, rgba(71, 71, 71, 0.08) 99%),linear-gradient(299deg, rgba(157, 157, 157, 0.09) 0%, rgba(157, 157, 157, 0.09) 33.3%,rgba(73, 73, 73, 0.09) 33.3%, rgba(73, 73, 73, 0.09) 66.6%,rgba(43, 43, 43, 0.09) 66.6%, rgba(43, 43, 43, 0.09) 99.89999999999999%),linear-gradient(226deg, rgba(81, 81, 81, 0.03) 0%, rgba(81, 81, 81, 0.03) 33.3%,rgba(35, 35, 35, 0.03) 33.3%, rgba(35, 35, 35, 0.03) 66.6%,rgba(170, 170, 170, 0.03) 66.6%, rgba(170, 170, 170, 0.03) 99%),linear-gradient(134deg, rgba(135, 135, 135, 0.05) 0%, rgba(135, 135, 135, 0.05) 33.3%,rgba(150, 150, 150, 0.05) 33.3%, rgba(150, 150, 150, 0.05) 66.6%,rgba(21, 21, 21, 0.05) 66.6%, rgba(21, 21, 21, 0.05) 99%),linear-gradient(150deg, #d9a102,#700807)',
        },
        '&:nth-child(2)': {
            [theme.breakpoints.down('md')]: {
                '&:hover': {
                    transform: 'rotateY(-20deg) rotateX(7deg) scale(1.03)',
                    backgroundPosition: '0px 25px'
                },
                transform: 'rotateY(22deg)',
                marginBottom: 10,
            },
            background: 'linear-gradient(160deg, rgba(226, 226, 226, 0.03) 0%, rgba(226, 226, 226, 0.03) 33.3%,rgba(244, 244, 244, 0.03) 33.3%, rgba(244, 244, 244, 0.03) 66.6%,rgba(110, 110, 110, 0.03) 66.6%, rgba(110, 110, 110, 0.03) 99%),linear-gradient(59deg, rgba(136, 136, 136, 0.08) 0%, rgba(136, 136, 136, 0.08) 33.3%,rgba(150, 150, 150, 0.08) 33.3%, rgba(150, 150, 150, 0.08) 66.6%,rgba(71, 71, 71, 0.08) 66.6%, rgba(71, 71, 71, 0.08) 99%),linear-gradient(299deg, rgba(157, 157, 157, 0.09) 0%, rgba(157, 157, 157, 0.09) 33.3%,rgba(73, 73, 73, 0.09) 33.3%, rgba(73, 73, 73, 0.09) 66.6%,rgba(43, 43, 43, 0.09) 66.6%, rgba(43, 43, 43, 0.09) 99.89999999999999%),linear-gradient(226deg, rgba(81, 81, 81, 0.03) 0%, rgba(81, 81, 81, 0.03) 33.3%,rgba(35, 35, 35, 0.03) 33.3%, rgba(35, 35, 35, 0.03) 66.6%,rgba(170, 170, 170, 0.03) 66.6%, rgba(170, 170, 170, 0.03) 99%),linear-gradient(134deg, rgba(135, 135, 135, 0.05) 0%, rgba(135, 135, 135, 0.05) 33.3%,rgba(150, 150, 150, 0.05) 33.3%, rgba(150, 150, 150, 0.05) 66.6%,rgba(21, 21, 21, 0.05) 66.6%, rgba(21, 21, 21, 0.05) 99%),linear-gradient(100deg, #d9a102,#700807)',
        },
        '&:nth-child(3)': {
            [theme.breakpoints.down('md')]: {
                '&:hover': {
                    transform: 'rotateY(5deg) rotateX(7deg) scale(1.03)',
                    backgroundPosition: '0px 25px'
                },
                transform: 'rotateY(-25deg)',
            },
            background: 'linear-gradient(160deg, rgba(226, 226, 226, 0.03) 0%, rgba(226, 226, 226, 0.03) 33.3%,rgba(244, 244, 244, 0.03) 33.3%, rgba(244, 244, 244, 0.03) 66.6%,rgba(110, 110, 110, 0.03) 66.6%, rgba(110, 110, 110, 0.03) 99%),linear-gradient(59deg, rgba(136, 136, 136, 0.08) 0%, rgba(136, 136, 136, 0.08) 33.3%,rgba(150, 150, 150, 0.08) 33.3%, rgba(150, 150, 150, 0.08) 66.6%,rgba(71, 71, 71, 0.08) 66.6%, rgba(71, 71, 71, 0.08) 99%),linear-gradient(299deg, rgba(157, 157, 157, 0.09) 0%, rgba(157, 157, 157, 0.09) 33.3%,rgba(73, 73, 73, 0.09) 33.3%, rgba(73, 73, 73, 0.09) 66.6%,rgba(43, 43, 43, 0.09) 66.6%, rgba(43, 43, 43, 0.09) 99.89999999999999%),linear-gradient(226deg, rgba(81, 81, 81, 0.03) 0%, rgba(81, 81, 81, 0.03) 33.3%,rgba(35, 35, 35, 0.03) 33.3%, rgba(35, 35, 35, 0.03) 66.6%,rgba(170, 170, 170, 0.03) 66.6%, rgba(170, 170, 170, 0.03) 99%),linear-gradient(134deg, rgba(135, 135, 135, 0.05) 0%, rgba(135, 135, 135, 0.05) 33.3%,rgba(150, 150, 150, 0.05) 33.3%, rgba(150, 150, 150, 0.05) 66.6%,rgba(21, 21, 21, 0.05) 66.6%, rgba(21, 21, 21, 0.05) 99%),linear-gradient(45deg, #d9a102,#700807)',
        },
        '&:hover': {
            transform: 'rotateY(-22deg) rotateX(7deg) scale(1.03)',
            backgroundPosition: '0px 25px'
        },
    },
    actionIcons: {
        marginLeft: 20,
    },
}));

const Info =  () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    const getNameVariant = () => {

        switch (true) {

            case media.xs:
                return 'h3';
            case media.sm:
                return 'h1';
            case media.md:
                return 'h1';
            case media.lg:
                return 'h1';
            default:
                return 'h1'; 
        }
    };

    getNameVariant();

    return (

        <Grid className={classes.container} container>

            <Grid className={classes.nameContainer} item lg={6} md={12}>

                <Typography className={classes.contactDesc} variant={getNameVariant()} align="center">
                    Terri Banner
                </Typography>

                <Divider className={classes.divider} />

                <Typography className={classes.contactDesc} variant={media.xs ? 'body1' : 'h6'}  align="center" >
                    I'm available 7 days a week 8am - 6pm. 
                </Typography>

                <Typography className={classes.contactDesc} variant={media.xs ? 'body1' : 'h6'}  align="center" >
                    If you would like to 
                    contact me quickly, you may fill out the express form below.
                </Typography>

            </Grid>
            <Grid className={classes.listContainer} item lg={6} md={12}>

                <Paper className={classes.li}>

                    <Avatar className={classes.icons}>
                        <Icon fontSize={media.xs ? 'small' : 'large'}>contact_phone</Icon>
                    </Avatar>

                    <a 
                        style={{ textDecoration: 'none', color: 'white' }}
                        href={`tel:704-577-5028`}
                    >
                        <Typography variant={media.xs ? 'h6' : 'h5'} align="center">
                            704.577.5028
                        </Typography>

                    </a>

                    <Icon className={classes.actionIcons} fontSize="large">
                        local_phone
                    </Icon>

                </Paper>
                <Paper className={classes.li}>

                    <Avatar className={classes.icons}>
                        <Icon fontSize={media.xs ? 'small' : 'large'}>email</Icon>
                    </Avatar>

                    <a 
                        style={{ textDecoration: 'none', color: 'white' }}
                        href={`mailto:robogator@aol.com`}
                        target="_top"
                    >
                        <Typography variant={media.xs ? 'h6' : 'h5'} align="center">
                            robogator@aol.com
                        </Typography>
                    </a>
                    
                    <Icon className={classes.actionIcons} fontSize="large">
                        send
                    </Icon>

                </Paper>
                <Paper className={classes.li}>

                    <Avatar className={classes.icons}>
                        <Icon fontSize={media.xs ? 'small' : 'large'}>calendar_today</Icon>
                    </Avatar>

                    <a 
                        style={{ textDecoration: 'none', color: 'white' }}
                        href={`https://rentourcabins.com/reservations/?method=unitShow&reservation_unitId=MTNDREAM#availability`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant={media.xs ? 'h6' : 'h5'} align="center">
                            Availability Calendar
                        </Typography>
                    </a>

                    <Icon className={classes.actionIcons} fontSize="large">
                        open_in_new
                    </Icon>

                </Paper>

            </Grid>

        </Grid>
    );
};

export default Info;