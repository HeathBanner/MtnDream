import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { Parallax, Background }  from 'react-parallax';

import { MediaContext } from '../../Context/MediaQuery';

import Nav from '../../components/Navigation/Nav';
import Body from '../../components/Home/Main/Body';
import Footer from '../../components/Home/Footer';

import SVG from '../../components/Home/imgs/1x/placeholder.png';

const Home = () => {

    const media = useContext(MediaContext);
    
    const useStyles = makeStyles(theme => ({
        container: {
            background: 'linear-gradient(213deg, rgba(191, 191, 191, 0.02) 0%, rgba(191, 191, 191, 0.02) 16.667%,rgba(64, 64, 64, 0.02) 16.667%, rgba(64, 64, 64, 0.02) 33.334%,rgba(162, 162, 162, 0.02) 33.334%, rgba(162, 162, 162, 0.02) 50.001000000000005%,rgba(6, 6, 6, 0.02) 50.001%, rgba(6, 6, 6, 0.02) 66.668%,rgba(53, 53, 53, 0.02) 66.668%, rgba(53, 53, 53, 0.02) 83.33500000000001%,rgba(30, 30, 30, 0.02) 83.335%, rgba(30, 30, 30, 0.02) 100.002%),linear-gradient(245deg, rgba(187, 187, 187, 0.02) 0%, rgba(187, 187, 187, 0.02) 12.5%,rgba(231, 231, 231, 0.02) 12.5%, rgba(231, 231, 231, 0.02) 25%,rgba(123, 123, 123, 0.02) 25%, rgba(123, 123, 123, 0.02) 37.5%,rgba(229, 229, 229, 0.02) 37.5%, rgba(229, 229, 229, 0.02) 50%,rgba(205, 205, 205, 0.02) 50%, rgba(205, 205, 205, 0.02) 62.5%,rgba(21, 21, 21, 0.02) 62.5%, rgba(21, 21, 21, 0.02) 75%,rgba(222, 222, 222, 0.02) 75%, rgba(222, 222, 222, 0.02) 87.5%,rgba(19, 19, 19, 0.02) 87.5%, rgba(19, 19, 19, 0.02) 100%),linear-gradient(333deg, rgba(128, 128, 128, 0.02) 0%, rgba(128, 128, 128, 0.02) 25%,rgba(235, 235, 235, 0.02) 25%, rgba(235, 235, 235, 0.02) 50%,rgba(129, 129, 129, 0.02) 50%, rgba(129, 129, 129, 0.02) 75%,rgba(4, 4, 4, 0.02) 75%, rgba(4, 4, 4, 0.02) 100%),linear-gradient(154deg, rgba(241, 241, 241, 0.03) 0%, rgba(241, 241, 241, 0.03) 16.667%,rgba(248, 248, 248, 0.03) 16.667%, rgba(248, 248, 248, 0.03) 33.334%,rgba(21, 21, 21, 0.03) 33.334%, rgba(21, 21, 21, 0.03) 50.001000000000005%,rgba(94, 94, 94, 0.03) 50.001%, rgba(94, 94, 94, 0.03) 66.668%,rgba(250, 250, 250, 0.03) 66.668%, rgba(250, 250, 250, 0.03) 83.33500000000001%,rgba(5, 5, 5, 0.03) 83.335%, rgba(5, 5, 5, 0.03) 100.002%),linear-gradient(166deg, rgba(104, 104, 104, 0.01) 0%, rgba(104, 104, 104, 0.01) 12.5%,rgba(77, 77, 77, 0.01) 12.5%, rgba(77, 77, 77, 0.01) 25%,rgba(13, 13, 13, 0.01) 25%, rgba(13, 13, 13, 0.01) 37.5%,rgba(194, 194, 194, 0.01) 37.5%, rgba(194, 194, 194, 0.01) 50%,rgba(71, 71, 71, 0.01) 50%, rgba(71, 71, 71, 0.01) 62.5%,rgba(234, 234, 234, 0.01) 62.5%, rgba(234, 234, 234, 0.01) 75%,rgba(38, 38, 38, 0.01) 75%, rgba(38, 38, 38, 0.01) 87.5%,rgba(95, 95, 95, 0.01) 87.5%, rgba(95, 95, 95, 0.01) 100%),linear-gradient(98deg, rgba(253, 253, 253, 0.03) 0%, rgba(253, 253, 253, 0.03) 12.5%,rgba(126, 126, 126, 0.03) 12.5%, rgba(126, 126, 126, 0.03) 25%,rgba(145, 145, 145, 0.03) 25%, rgba(145, 145, 145, 0.03) 37.5%,rgba(70, 70, 70, 0.03) 37.5%, rgba(70, 70, 70, 0.03) 50%,rgba(174, 174, 174, 0.03) 50%, rgba(174, 174, 174, 0.03) 62.5%,rgba(77, 77, 77, 0.03) 62.5%, rgba(77, 77, 77, 0.03) 75%,rgba(123, 123, 123, 0.03) 75%, rgba(123, 123, 123, 0.03) 87.5%,rgba(36, 36, 36, 0.03) 87.5%, rgba(36, 36, 36, 0.03) 100%),linear-gradient(293deg, rgba(55, 55, 55, 0.03) 0%, rgba(55, 55, 55, 0.03) 20%,rgba(142, 142, 142, 0.03) 20%, rgba(142, 142, 142, 0.03) 40%,rgba(159, 159, 159, 0.03) 40%, rgba(159, 159, 159, 0.03) 60%,rgba(139, 139, 139, 0.03) 60%, rgba(139, 139, 139, 0.03) 80%,rgba(9, 9, 9, 0.03) 80%, rgba(9, 9, 9, 0.03) 100%),linear-gradient(26deg, rgba(116, 116, 116, 0.01) 0%, rgba(116, 116, 116, 0.01) 20%,rgba(179, 179, 179, 0.01) 20%, rgba(179, 179, 179, 0.01) 40%,rgba(5, 5, 5, 0.01) 40%, rgba(5, 5, 5, 0.01) 60%,rgba(212, 212, 212, 0.01) 60%, rgba(212, 212, 212, 0.01) 80%,rgba(246, 246, 246, 0.01) 80%, rgba(246, 246, 246, 0.01) 100%),linear-gradient(90deg, rgb(87, 178, 35),rgb(21, 37, 16))',
        },
        jumbotron: {
            [theme.breakpoints.down('xs')]: {
                marginTop: 55
            },
            marginTop: 60, 
            height: '80vh', 
            width: '100vw', 
            position: 'relative' 
        },
        jumboText: {
            position: 'absolute',
            top: '0%',
            left: '50%',
            transform: 'translate(-50%, 0%)', 
            height: '80vh', 
            width: '100vw',
            zIndex: 2,
            '& .react-parallax-background-children': {
                top: media.xs ? '85%'
                :
                media.sm ? '90%'
                    :
                media.md ? '95%'
                    :
                media.lg ? '95%'
                    :
                '95%'
            }
        },
        bgContainer: {
            height: '100%',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        img: {
            [theme.breakpoints.down('lg')]: {
                height: '60vh',
            },
            [theme.breakpoints.down('sm')]: {
                height: '50vh',
            },
            [theme.breakpoints.down('xs')]: {
                height: '80vh',
            },
            height: '60vh',
            width: '100vw'
        },
        typo: {
            zIndex: 3,
            width:'100%',
            color: 'white',
        },
    })); 

    const classes = useStyles();

    const getVariant = () => {      
        switch (true) {
            case media.xs:
                return 'h5';

            case media.sm:
                return 'h3';

            case media.md:
                return 'h3';

            case media.lg:
                return 'h2';

            default:
                return 'h1';
        }
    };

    const getStrength = () => {

        switch (true) {

            case media.xs:
                return 400;

            case media.sm:
                return 1000;

            case media.md:
                return 800;

            case media.lg:
                return 800;

            default:
                return 800;
            }
    };

    return (

        <Grid className={classes.container} container >

            <Grid item xs={12}>

                <Nav />

            </Grid>
            <Grid style={{height: '80vh'}} item xs={12}>

                <Parallax 
                    strength={getStrength()} 
                    className={classes.jumboText}
                    style={{
                        position: 'absolute',
                        top: '0%',
                        left: '50%',
                        transform: 'translate(-50%, 0%)', 
                        height: '80vh', 
                        width: '100vw',
                        zIndex: 2                
                    }}
                >

                    <Background className={classes.bgContainer}>

                        <Typography className={classes.typo} variant={getVariant()} align="center">
                            Welcome to our little piece of paradise!
                        </Typography>

                    </Background>
                        
                </Parallax>
                <Parallax 
                    strength={-800} 
                    className={classes.jumbotron}
                    style={{}}
                    bgStyle={{
                        top: '40%',
                        zIndex: 2
                    }}
                >

                    <Background className={classes.bgContainer}>

                        <img className={classes.img} src={SVG} alt="Jumbotron" />            

                    </Background>
                        
                </Parallax>

            </Grid>

            <Body />

            <Footer />

        </Grid>
    );
};

export default Home;