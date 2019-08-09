import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon } from '@material-ui/core';

import { EditorContext } from '../../../Context/EditorContext';

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

    return (

        <Fragment>

            <Button disabled={holder[holder.sectionMode.el].bold} onClick={() => holder.handleStyling('bold')}>
                <Icon>format_bold</Icon>
            </Button>
            <Button disabled={holder[holder.sectionMode.el].italic} onClick={() => holder.handleStyling('italic')}>
                <Icon>format_italic</Icon>
            </Button>
            <Button disabled={holder[holder.sectionMode.el].underline} onClick={() => holder.handleStyling('underline')}>
                <Icon>format_underline</Icon>
            </Button>
            <Button onClick={() => holder.handleStyling('color')}>
                <Icon>format_color_text</Icon>
            </Button>
            <Button disabled={holder[holder.sectionMode.el].highlight} onClick={() => holder.handleStyling('highlight')}>
                <Icon>highlight</Icon>
            </Button>

        </Fragment>
    );
};

export default Styling;