import React, { useContext } from 'react';

import TextSize from './Tools/TextSize';
import Font from './Tools/Font';
import Styling from './Tools/Styling';
import Justify from './Tools/Justify';
import Margin from './Tools/Margin';

import { EditorContext } from '../../Context/EditorContext';

import { makeStyles } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: 30,
        background: '#ffffff',
        position: 'fixed',
        top: 60,
        zIndex: 2,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    editorTools: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%'
    }
}));

const Toolbar = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);

    return (
        <Grid className={classes.container} justify="center" alignItems="center" container>

            <Grid item xs={1}>

                <Button onClick={holder.title.isPublished ? holder.handleChanges : holder.handleSubmit}>
                    {
                        holder.title.isPublished
                            ?
                        'Save'
                            :
                        'Publish'
                    }
                </Button>

            </Grid>
            <Grid className={classes.editorTools} item xs={11}>

                <TextSize />
                
                <Font />

                <Styling />

                <Justify />

                <Margin />

            </Grid>

        </Grid>
    );
};

export default Toolbar;
