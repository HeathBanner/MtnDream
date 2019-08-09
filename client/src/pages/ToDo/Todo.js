import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';
import Drawer from '../../components/Todo/Drawer';

function Todo() {

    return (

        <Grid container>

            <Grid xs={12}>

                <Nav />

            </Grid>
            <Grid xs={12}>

                <Drawer />

            </Grid>
            
        </Grid>
    );
}

export default Todo;