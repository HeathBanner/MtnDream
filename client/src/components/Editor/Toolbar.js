import React, { useState, useContext } from 'react';

import TextSize from './Tools/TextSize';
import Font from './Tools/Font';
import Styling from './Tools/Styling';
import Justify from './Tools/Justify';

import { EditorContext } from '../../Context/EditorContext';

import { makeStyles } from '@material-ui/core';
import { Grid, TextField, Button, Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        height: '20vh',
        background: '#ffffff'
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

        <Grid className={classes.container} justifyContent="center" alignItems="center" container>

            <Grid className={classes.editorTools} item xs={12}>

                <TextSize />
                
                <Font />

                <Styling />

                <Justify />

            </Grid>
            <Grid className={classes.editorTools} item xs={12}>

                {
                    holder.sectionMode === 'currentBody'
                        ?
                    <Button onClick={holder.newBodyEl}>
                        <Icon>add_circle_outline</Icon>
                    </Button>
                        :
                    ''
                }

                <TextField 
                    className={classes.input}
                    variant="outlined"
                    value={
                        holder.sectionMode === 'jumbotron'
                            ?
                        holder.jumbotron
                            :
                        holder.sectionMode === 'title'
                            ?
                        holder.title.text
                            :
                        holder.body[holder.currentBody].text
                    }
                    onChange={holder.handleInput}
                    label="Type Here"
                />
                <Button onClick={holder.handleArticle}>
                    Submit
                </Button>

            </Grid>

        </Grid>
    );
};

export default Toolbar;