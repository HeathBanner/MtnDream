import React from 'react';

import { Grid } from '@material-ui/core';

import { EditorProvider } from '../../Context/EditorContext';

import Nav from '../../components/Navigation/Nav';
import Interface from '../../components/Editor/Interface';

const Editor = () => {

    return (

        <Grid container>

            <Grid style={{ zIndex: 5, height: 60 }} item xs={12}>
                
                <Nav />

            </Grid>
            
            <EditorProvider>

                <Interface />

            </EditorProvider>

        </Grid>
    );
};

export default Editor