import React from 'react';
import { EditorProvider } from '../../Context/EditorContext';

import Nav from '../../components/Navigation/Nav';
import ArticleSelection from '../../components/Editor/ArticleSelection';

import { Grid } from '@material-ui/core';

export default () => {
    return (
        <Grid container>

            <Grid style={{ zIndex: 5, height: 70 }} item xs={12}>
                
                <Nav />

            </Grid>
            
            <EditorProvider>

                <ArticleSelection />

            </EditorProvider>

        </Grid>
    );
};
