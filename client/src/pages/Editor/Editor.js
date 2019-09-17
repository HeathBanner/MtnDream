import React from 'react';

import { Grid } from '@material-ui/core';

import { EditorProvider } from '../../Context/EditorContext';

import Nav from '../../components/Navigation/Nav';
import Toolbar from '../../components/Editor/Toolbar';
import Preview from '../../components/Editor/Preview';

const Editor = ({ match }) => {

    return (
        <Grid container>

            <Grid style={{ height: 70 }} item xs={12}>
                <Nav />
            </Grid>

            <Grid item xs={12}>

                <EditorProvider>

                    <Toolbar />

                    <Preview title={match.params.title} />
               
                </EditorProvider>

            </Grid>

        </Grid>
    );
};

export default Editor;
