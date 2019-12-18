import React from 'react';

import Nav from '../../components/Navigation/Nav';
import Landing from '../../components/Home/Landing';
import Body from '../../components/Home/Body';
import Footer from '../../components/Home/Footer';

import { Grid } from '@material-ui/core';

export default () => {
    return (
        <Grid style={{ backgroundColor: '#25472e' }} container>
            <Grid item xs={12}>
                <Nav />
            </Grid>

            <Landing />

            <Body />

            <Footer />
        </Grid>
    );
};
