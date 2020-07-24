import React from 'react';

import Info from '../../components/Contact/Info';
import Form from '../../components/Contact/Form';

import { Grid } from '@material-ui/core';

export default () => {
    return (
        <Grid
            style={{
                background: 'linear-gradient(45deg, rgb(58, 188, 117) 0%, rgb(58, 188, 117) 14%,rgb(61, 172, 114) 14%, rgb(61, 172, 114) 19%,rgb(65, 157, 111) 19%, rgb(65, 157, 111) 24%,rgb(68, 141, 108) 24%, rgb(68, 141, 108) 26%,rgb(72, 126, 104) 26%, rgb(72, 126, 104) 32%,rgb(75, 110, 101) 32%, rgb(75, 110, 101) 51%,rgb(79, 95, 98) 51%, rgb(79, 95, 98) 93%,rgb(82, 79, 95) 93%, rgb(82, 79, 95) 100%)',
            }}
            container
        >
            <Info />

            <Form />
        </Grid>
    );
};
