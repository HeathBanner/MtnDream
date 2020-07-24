import React from 'react';

import Landing from '../../components/Home/Landing';
import Body from '../../components/Home/Body';
import Footer from '../../components/Home/Footer';

import { Grid } from '@material-ui/core';

export default () => {
    return (
        <Grid style={{ backgroundColor: '#25472e' }} container>
            <Landing />

            <Body />

            <Footer />
        </Grid>
    );
};
