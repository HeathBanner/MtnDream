import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

import { Parallax, Background } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    containers: {
        width: '100vw', 
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    elContainers: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgs: {
        width: '80%', 
        height: 'auto', 
        borderRadius: '4px',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
    infoText: {
        width: '80%',
    },
    button: {
        color: 'white',
        padding: 30,
        transition: 'all 0.4s ease',
        background: 'linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128))',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundPosition: '0px -50px',
        },
    },
}));

const ImageList = () => {

    const classes = useStyles();

    return (

        <Grid container>

            <Grid className={classes.containers} item xs={6}>

                <Parallax 
                    strength={-200}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '50%'
                    }}
                >

                    <Background className={classes.elContainers} style={{ width: '100%', height: '100%' }}>

                        <img 
                            className={classes.imgs} 
                            src={`https://www.daveallenphotography.com/gallery/l_summer_laurel_blue_ridge_parkway_nc.jpg`} 
                            alt="Dave Allen Photography" 
                        />

                    </Background>

                </Parallax>

            </Grid>
            <Grid className={classes.containers} item xs={6}>

                <Parallax 
                    strength={400}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '70%'
                    }}
                >

                    <Background style={{ width: '100%', height: '100%' }}>
                        <Typography className={classes.infoText} variant="h5" align="center">
                            The Blue Ridge Parkway is a ribbon of road that weaves through 
                            the region’s vibrant living traditions. From Cherokee life and 
                            agricultural history to Southern Appalachian crafts and music, 
                            the Parkway’s 469 miles through Virginia and North Carolina offer 
                            many ways to explore rich traditions.
                        </Typography>
                    </Background>

                </Parallax>

            </Grid>
            <Grid className={classes.containers} item xs={6}>

                <Parallax 
                    strength={400}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '70%'
                    }}
                >

                    <Background className={classes.elContainers}>
                        <Typography className={classes.infoText} variant="h5" align="center">
                            Spanning the southern and central Appalachians, the Blue Ridge Parkway 
                            offers an exceptional glimpse of the regional flora and fauna. It is 
                            world-renowned for its biodiversity. The Parkway covers a wide range 
                            of habitats along the Appalachian Mountains, and some of these habitats 
                            are exceptionally rare. Visitors encounter unsurpassed diversity of 
                            climate, vegetation, wildlife and geological features.
                        </Typography>
                    </Background>

                </Parallax>

            </Grid>
            <Grid className={classes.containers} item xs={6}>

                <Parallax 
                    strength={-200}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '50%'
                    }}
                >

                    <Background className={classes.elContainers} style={{ width: '100%', height: '100%' }}>

                        <img 
                            className={classes.imgs} 
                            src={`https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_474,q_75,w_640/v1/clients/newyorkstate/AD_2015_122_44de426d-7824-4c67-8331-32143c83903e.jpg`} 
                            alt="Boone River"
                        />

                    </Background>

                </Parallax>

            </Grid>
            <Grid className={classes.containers} item xs={6}>

                <Parallax 
                    strength={-200}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '50%'
                    }}
                >

                    <Background className={classes.elContainers} style={{ width: '100%', height: '100%' }}>

                        <img 
                            className={classes.imgs} 
                            src={`https://www.blueridgemountains.com/imager/s3_amazonaws_com/blueridge-2018/images/1920-width/iStock-134561164_5ac8ae049534b01c104dc4019c5230ff.jpg`} 
                            alt="Blue Ridge Waterfall"    
                        />

                    </Background>

                </Parallax>

            </Grid>
            <Grid style={{ width: '100vw', height: '80vh' }} item xs={6}>

                <Parallax 
                    strength={400}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '70%'
                    }}
                >

                    <Background className={classes.elContainers}>
                        <Typography className={classes.infoText} variant="h5" align="center">
                            Millions of visitors enjoy the Blue Ridge Parkway each year. 
                            Some think of it as just a motor road or a pleasant drive. But 
                            the Parkway is also a place of varied and significant natural 
                            resources.
                        </Typography>
                    </Background>

                </Parallax>

            </Grid>

            <Grid style={{ height: '20vh' }} item xs={12}>

            <Parallax 
                    strength={-400}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    bgStyle={{
                        width: '100%',
                        top: '70%'
                    }}
                >

                    <Background className={classes.elContainers}>
                        
                        <a style={{textDecoration: 'none'}} href={`https://www.blueridgeparkway.org/`} target="_blank" rel="noopener noreferrer">
                            <Button className={classes.button}>
                                
                                <Typography variant="h4" align="center">
                                    Visit the official Blue Ridge Parkway website!
                                </Typography>

                            </Button>
                        </a>

                    </Background>

                </Parallax>

            </Grid>

        </Grid>
    );
};

export default ImageList;