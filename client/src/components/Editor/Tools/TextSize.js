import React, { Fragment, useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Menu, MenuItem, Button } from '@material-ui/core';

import { EditorContext } from '../../../Context/EditorContext';

const textOptions = [
    {
        cb: 'h1'
    },
    {
        cb: 'h2'
    },
    {
        cb: 'h3'
    },
    {
        cb: 'h4'
    },
    {
        cb: 'h5'
    },
    {
        cb: 'h6'
    },
    {
        cb: 'subtitle1'
    },
    {
        cb: 'subtitle2'
    },
    {
        cb: 'body1'
    },
    {
        cb: 'body2'
    },
    {
        cb: 'caption'
    },
    {
        cb: 'button'
    },
    {
        cb: 'overline'
    },
    {
        cb: 'srOnly'
    },
    {
        cb: 'inherit'
    }
];

const useStyles = makeStyles(theme => ({

}));

const TextSize = () => {
    
    const classes = useStyles();

    const holder = useContext(EditorContext);
    const style = holder.textStyle;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };  

    const wrapper = newStyle => {
        holder.handleTextStyle(newStyle);
        handleClose();
    };

    return (
        
        <Fragment>
            
            <Button onClick={handleOpen}>
                {
                    holder.sectionMode.el === 'title'
                        ?
                    holder[holder.sectionMode.el].textStyle
                        :
                    holder[holder.sectionMode.el][holder.sectionMode.index].textStyle
                }
            </Button>

            <Menu
                id="textSize"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    textOptions.map(item => {
                        return (

                            <MenuItem onClick={() => wrapper(item.cb)}>
                                {item.cb}
                            </MenuItem>
                        )
                    })
                }
                
            </Menu>

        </Fragment>
        
    );
};

export default TextSize;