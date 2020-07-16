import React, { useContext } from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Icon,
    Divider,
    Avatar
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            padding: '20% 0% 10% 0%'
        },
        minHeight: '100vh',
        backgroundColor: '#25472e',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameContainer: {
        [theme.breakpoints.down('lg')]: {
            padding: '0px 30px',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        color: 'white',
    },
    divider: {
        width: '60%', 
        marginBottom: 20,
        backgroundColor: 'rgb(255, 255, 255, 0.1)'
    },
    listContainer: {
        marginTop: 50,
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
    link: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
        },
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 30,
        width: '100%',
        color: 'white',
        textDecoration: 'none',
    },
    avatar: {
        color: 'white',
        backgroundColor: deepOrange[700],
        height: 50,
        width: 50
    },
    info: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 20
    },
    infoHolder: {
        position: 'relative',
        height: 100,
        width: '50%',
    }
}));

export default () => {

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

    return (
        <Grid className={classes.container} container>
            <Grid className={classes.nameContainer} item xs={12}>
                <Typography
                    className={classes.contactDesc}
                    variant={getNameVariant()}
                    align="center"
                >
                    Terri Banner
                </Typography>

                <Divider className={classes.divider} />

                <Typography
                    className={classes.contactDesc}
                    variant={media.xs ? 'body1' : 'h6'}
                    align="center"
                >
                    I'm available 7 days a week 8am - 6pm. 
                </Typography>

                <Typography
                    className={classes.contactDesc}
                    variant={media.xs ? 'body1' : 'h6'}
                    align="center"
                >
                    If you would like to 
                    contact me quickly, you may fill out the express form below.
                </Typography>
            </Grid>
            <Grid className={classes.listContainer} item xs={12}>
                <a 
                    className={classes.link}
                    href={`tel:704-577-5028`}
                >
                    <Avatar className={classes.avatar}>
                        <Icon>
                            local_phone
                        </Icon>
                    </Avatar>
                    
                    <Typography
                        className={classes.info}
                        variant={media.xs ? 'h6' : 'h5'}
                    >
                        704.577.5028
                    </Typography>
                </a>
                <a 
                    className={classes.link}
                    href={`mailto:robogator@aol.com`}
                    target="_top"
                >
                    <Avatar className={classes.avatar}>
                        <Icon>
                            send
                        </Icon>
                    </Avatar>

                    <Typography
                        className={classes.info}
                        variant={media.xs ? 'h6' : 'h5'}
                    >
                        robogator@aol.com
                    </Typography>
                </a>
                <a 
                    className={classes.link}
                    href={`https://rentourcabins.com/reservations/?method=unitShow&reservation_unitId=MTNDREAM#availability`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Avatar className={classes.avatar}>
                        <Icon>
                            calendar_today
                        </Icon>
                    </Avatar>

                    <Typography
                        className={classes.info}
                        variant={media.xs ? 'h6' : 'h5'}
                    >
                        Availability Calendar
                    </Typography>
                </a>
            </Grid>
        </Grid>
    );
};
