import React, { useContext, useState } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Popover,
    Button,
    TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        padding: 20,
        width: 350,
    }
}));

export default ({ src, alt, index }) => {
    
    const classes = useStyles();
    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        holder.handleSectionMode({ el: 'image', index: index });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (src) {
        return (
            <>
                <Button onClick={handleClick}>
                    <img 
                        style={{ width: '100%', height: 'auto' }} 
                        src={src} 
                        alt={alt} 
                    />
                </Button>

                <Popover
                    PaperProps={{ className: classes.paper }}
                    ModalClasses={{ className: classes.paper}}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                > 
                    <TextField 
                        style={{ width: '100%' }}
                        label="Paste Url"
                        variant="outlined"
                        value={src}
                        onChange={(e) => holder.handleInput(e, { El: 'image', index: index })}
                    />
                </Popover>
            </>
        );
    } else {
        return (
            <>
                <Button variant="contained" onClick={handleClick}>
                    Add Image
                </Button>

                <Popover
                    PaperProps={{ className: classes.paper }}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                > 
                    <TextField
                        style={{ width: '100%' }}
                        label="Paste Url"
                        variant="outlined"
                        value={src}
                        onChange={(e) => holder.handleInput(e, { El: 'image', index: index })}
                    />
                </Popover>
            </>
        );
    };
};
