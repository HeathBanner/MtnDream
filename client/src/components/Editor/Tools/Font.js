import React, { useState, useContext } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import ButtonTemplate from '../Templates/ButtonTemplate';

import { Menu, MenuItem } from '@material-ui/core';

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

export default ({ margin, xs }) => {

    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const wrapper = (font) => {
        holder.handleFont(font);
        handleClose();
    };

    const fontSwitch = () => {
        const sectionEl = holder.sectionMode.el;
        let font;
        if (sectionEl !== 'jumbotron' && sectionEl !== 'image') {
            console.log(sectionEl);
            font = holder[sectionEl].font;
        }

        switch (sectionEl) {
            case 'body':
                if (sectionEl === 'image') {
                    return <ButtonTemplate margin={margin} locked={true} />;
                }
                return <ButtonTemplate
                    margin={margin}
                    font={font}
                    handleOpen={handleOpen}
                    xs={xs}
                />;
            case 'title':
                return <ButtonTemplate
                    margin={margin}
                    font={font}
                    handleOpen={handleOpen}
                    xs={xs}
                />;
            case 'description':
                return <ButtonTemplate
                    margin={margin}
                    font={font}
                    handleOpen={handleOpen}
                    xs={xs}
                />;
            case 'readLength':
                return <ButtonTemplate
                    margin={margin}
                    font={font}
                    handleOpen={handleOpen}
                    xs={xs}
                />;
            default:
                return <ButtonTemplate margin={margin} locked={true} />;
        }
    };

    return (
        <>
            {fontSwitch()}

            <Menu
                id="textSize"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {fontOptions.map((item) => {
                    return (
                        <MenuItem
                            style={{
                                textTransform: 'capitalize',
                                fontFamily: `${item.font}, Helvetica, Arial, sans-serif`,
                            }}
                            onClick={() => wrapper(item.font)}
                            key={item.font}
                        >
                            {item.font}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};
