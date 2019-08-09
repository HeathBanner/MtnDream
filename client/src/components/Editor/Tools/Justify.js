import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon } from '@material-ui/core';

import { EditorContext } from '../../../Context/EditorContext';

const useStyles = makeStyles(theme => ({

}));


const Justify = () => {

    const classes = useStyles();

    const holder = useContext(EditorContext);

    return (

        <Fragment>

            <Button disabled={holder[holder.sectionMode.el].justify === 'left'} onClick={() => holder.handleJustify('left')}>
                <Icon>format_align_left</Icon>
            </Button>
            <Button disabled={holder[holder.sectionMode.el].justify === 'center'} onClick={() => holder.handleJustify('center')}>
                <Icon>format_align_center</Icon>
            </Button>
            <Button disabled={holder[holder.sectionMode.el].justify === 'right'} onClick={() => holder.handleJustify('right')}>
                <Icon>format_align_right</Icon>
            </Button>
            <Button disabled={holder[holder.sectionMode.el].justify === 'justify'} onClick={() => holder.handleJustify('justify')}>
                <Icon>format_align_justify</Icon>
            </Button>

        </Fragment>

    );
};

export default Justify;