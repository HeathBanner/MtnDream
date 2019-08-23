import React, { Fragment, useState, useContext } from 'react';

import { Menu, MenuItem, Button, Icon } from '@material-ui/core';

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

const Font = () => {

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

    const fontSwitch = () => {
        switch (holder.sectionMode.el) {
            case 'body':
                return <Button onClick={handleOpen}>
                            {holder.body[holder.sectionMode.index].font}
                        </Button>;
            case 'title':
                return <Button onClick={handleOpen}>
                            {holder[holder.sectionMode.el].font}
                        </Button>;
            case 'description':
                return <Button onClick={handleOpen}>
                            {holder[holder.sectionMode.el].font}
                        </Button>;
            case 'readLength':
                return <Button onClick={handleOpen}>
                        {holder[holder.sectionMode.el].font}
                    </Button>;
            default:
                return <Button disabled={true}>
                            <Icon>lock</Icon>
                        </Button>;
        }
    };

    return (
        <Fragment>
            
            {fontSwitch()}

            <Menu
                id="textSize"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    fontOptions.map((item) => {
                        return (
                            <MenuItem key={item.font} onClick={() => wrapper(item.font)}>
                                {item.font}
                            </MenuItem>
                        );
                    })
                }
            </Menu>

        </Fragment>
    );
};

export default Font;
