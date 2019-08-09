import React, { useContext, useEffect, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

import Jumbotron from './Tools/Jumbotron';

import { EditorContext } from '../../Context/EditorContext';

const fontSizes = {
    h1: '6rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.125rem',
    h5: '1.5rem',
    h6: '1.25rem',
}

const Preview = () => {

    const holder = useContext(EditorContext);

    const useStyles = makeStyles(theme => ({
        container: {
            height: '70vh',
            overflowY: 'scroll',
        },
        typo: {
            fontSize: fontSizes[holder.title.textStyle],
            fontFamily: `${holder.title.font}, Helvetica, Arial, sans-serif`,
            fontWeight: holder.title.bold ? 'bold' : 'normal',
            fontStyle: holder.title.italic ? 'italic' : 'normal',
            textDecoration: holder.title.underline ? 'underline' : 'none',
            textAlign: holder.title.justify,
            color: holder.title.color,
            backgroundColor: holder.title.highlight ? '#ffff00' : 'none'
        },
        body: {
            width: '100%',
            fontSize: fontSizes[holder.title.textStyle],
            fontFamily: `${holder.currentBody.font}, Helvetica, Arial, sans-serif`,
            fontWeight: holder.currentBody.bold ? 'bold' : 'normal',
            fontStyle: holder.currentBody.italic ? 'italic' : 'normal',
            textDecoration: holder.currentBody.underline ? 'underline' : 'none',
            textAlign: holder.currentBody.justify,
            color: holder.currentBody.color,
            backgroundColor: holder.currentBody.highlight ? '#ffff00' : 'none' 
        },
    }));
    
    const classes = useStyles();

    return (
        
        <Grid container>

            <Grid className={classes.container} item xs={12}>

                <TextField 
                    style={{width: '100%'}}
                    variant="outlined"
                    inputProps={{className: classes.typo}}
                    value={holder.title.text}
                    onClick={() => holder.handleSectionMode({ el: 'title' })}
                    onChange={(e) => holder.handleInput(e, { El: 'title' })}
                />

                <Jumbotron />
                
                { 
                    holder.body.map((section, index) => {
                        return (

                            <TextField 
                                style={{width: '100%'}}
                                inputProps={{style:{
                                    width: '100%',
                                    fontSize: fontSizes[holder.body[index].textStyle],
                                    fontFamily: `${holder.body[index].font}, Helvetica, Arial, sans-serif`,
                                    fontWeight: holder.body[index].bold ? 'bold' : 'normal',
                                    fontStyle: holder.body[index].italic ? 'italic' : 'normal',
                                    textDecoration: holder.body[index].underline ? 'underline' : 'none',
                                    textAlign: holder.body[index].justify,
                                    color: holder.body[index].color,
                                    backgroundColor: holder.body[index].highlight ? '#ffff00' : 'none'                         
                                }}}
                                variant="outlined"
                                value={section.text}
                                onClick={() => holder.handleSectionMode({ el: 'body', index: index })}
                                onChange={(e) => holder.handleInput(e, { El: 'body', index: index })} 
                                key={index}       
                            />
                        )
                    })
                }

                <Typography className={classes.body} variant={holder.currentBody.textStyle}>
                    {holder.currentBody.text}
                </Typography>

            </Grid>

        </Grid>
    );
};

export default Preview;