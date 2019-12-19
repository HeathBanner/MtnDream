import React, { useContext } from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Icon,
    Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: '#25472e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
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
        marginTop: 30,
        width: '100%',
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        marginRight: 10,
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
                    <Icon
                        className={classes.icons}
                        fontSize={media.xs ? 'small' : 'large'}
                    >
                        local_phone
                    </Icon>
                    
                    <Typography
                        className={classes.typoInfo}
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
                    <Icon
                        className={classes.icons}
                        fontSize={media.xs ? 'small' : 'large'}
                    >
                        send
                    </Icon>

                    <Typography
                        className={classes.typoInfo}
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
                    <Icon
                        className={classes.icons}
                        fontSize={media.xs ? 'small' : 'large'}
                    >
                        calendar_today
                    </Icon>

                    <Typography
                        className={classes.typoInfo}
                        variant={media.xs ? 'h6' : 'h5'}
                    >
                        Availability Calendar
                    </Typography>
                </a>
            </Grid>
        </Grid>
    );
};
