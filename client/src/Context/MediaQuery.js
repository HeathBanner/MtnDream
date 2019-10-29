import React, { createContext } from 'react';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery'

export const MediaContext = createContext();

export const MediaProvider = props => {

    const theme = useTheme();

    // Variables that will be passed to the consumer children
    // to apply media queries where CSS cannot.
    const xl = useMediaQuery(theme.breakpoints.up('lg'))
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    // Function for testing Media Queries. It'll display screen size within console
    // const getWidth = () => {
    //     switch(true) {
    //         case xs:
    //             return console.log('XS');
    //         case sm:
    //             return console.log('SM');
    //         case md:
    //             return console.log('MD');
    //         case lg:
    //             return console.log('LG');
    //         default:
    //             console.log('XL');
    //     }
    // };

    // getWidth();

    return (

        <MediaContext.Provider value={{ xl, lg, md, sm, xs }} >

            { props.children }

        </MediaContext.Provider>
    );
};
