import React, { useContext, useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Popover, Typography, Button, TextField } from '@material-ui/core';

import { EditorContext } from '../../../Context/EditorContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        width: 350,
    },
}));

const Jumbotron = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if(holder.jumbotron) {
        return (

            <Fragment>

                <Button onClick={handleClick}>

                    <img 
                        style={{ width: '100%', height: 'auto' }} 
                        src={holder.jumbotron} 
                        alt={holder.title} 
                    />

                </Button>

                <Popover
                    paperProps={{className: classes.paper}}
                    modalClasses={classes.paper}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                > 

                    <TextField 
                        label="Paste Url"
                        variant="outlined"
                        value={holder.jumbotron}
                        onChange={(e) => holder.handleInput(e, { el: 'jumbotron' })}
                    />

                </Popover> 

            </Fragment>
        );
    }
    else {

        return (

            <Fragment>

                <Button variant="contained" onClick={handleClick}>
                    Add Jumbotron
                </Button>

                <Popover
                    paperProps={{className: classes.paper}}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                > 

                    <TextField 
                        label="Paste Url"
                        variant="outlined"
                        value={holder.jumbotron}
                        onChange={(e) => holder.handleInput(e, { el: 'jumbotron' })}
                    />

                </Popover>

            </Fragment>
        );
    }
};

export default Jumbotron;