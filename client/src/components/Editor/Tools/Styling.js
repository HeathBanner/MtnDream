import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon } from '@material-ui/core';

import { EditorContext } from '../../../Context/EditorContext';

import ColorPicker from './ColorPicker';

const useStyles = makeStyles(theme => ({
    container: {
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Styling = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);

    const checkDisabled = (style) => {
        switch (holder.sectionMode.el) {
            case 'jumbotron':
                return true;
            case 'image':
                return true;
            case 'description':
                return true;
            case 'readLength':
                return true;
            default:
                return holder[holder.sectionMode.el][style];
        }
    };

    const disablePicker = () => {
        switch (holder.sectionMode.el) {
            case 'title':
                return true;
            case 'description':
                return true;
            case 'readLength':
                return true;
            case 'body':
                return true;
            default:
                return false;
        }
    };

    return (
        <Fragment>

            <Button
                disabled={checkDisabled('bold')}
                onClick={() => holder.handleStyling('bold')}
            >
                <Icon>format_bold</Icon>
            </Button>

            <Button
                disabled={checkDisabled('italic')}
                onClick={() => holder.handleStyling('italic')}
            >
                <Icon>format_italic</Icon>
            </Button>

            <Button
                disabled={checkDisabled('underline')}
                onClick={() => holder.handleStyling('underline')}
            >
                <Icon>format_underline</Icon>
            </Button>

            {
                disablePicker()
                    ?
                <ColorPicker />
                    :
                <Button disabled={true}>
                    <Icon>format_color_text</Icon>
                </Button>
            }

            <Button
                disabled={checkDisabled('highlight')}
                onClick={() => holder.handleStyling('highlight')}
            >
                <Icon>highlight</Icon>
            </Button>

        </Fragment>
    );
};

export default Styling;
