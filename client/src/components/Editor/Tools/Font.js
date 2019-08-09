import React, { Fragment, useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Menu, MenuItem, Button } from '@material-ui/core';

import { EditorContext } from '../../../Context/EditorContext';

const fontOptions = [
    {
        font: 'arial'
    },
    {
        font: 'helvetica'
    },
    {
        font: 'Times New Roman'
    },
    {
        font: 'Time'
    },
    {
        font: 'Courier New'
    },
    {
        font: 'Courier'
    },
    {
        font: 'Verdana'
    },
    {
        font: 'Georgia'
    },
    {
        font: 'Palatino'
    },
    {
        font: 'Garamond'
    },
    {
        font: 'Bookman'
    },
    {
        font: 'Comic Sans MS'
    },
    {
        font: 'Trebuchet MS'
    },
    {
        font: 'Arial Black'
    },
    {
        font: 'Impact'
    }
];

const useStyles = makeStyles(theme => ({

}));

const Font = () => {

    const classes = useStyles();

    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };  

    const wrapper = font => {
        holder.handleFont(font);
        handleClose();
    };

    return (

        <Fragment>
            
        <Button onClick={handleOpen}>
            {
                holder.sectionMode.el !== 'body'
                    ?
                holder[holder.sectionMode.el].font
                    :
                holder[holder.sectionMode.el][holder.sectionMode.index].font
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
                fontOptions.map(item => {
                    return (

                        <MenuItem onClick={() => wrapper(item.font)}>
                            {item.font}
                        </MenuItem>
                    )
                })
            }

        </Menu>

    </Fragment>


    );
};

export default Font;