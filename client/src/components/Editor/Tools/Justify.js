import React, { useContext } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import { Button, Icon } from '@material-ui/core';

export default ({ margin, xs }) => {

    const holder = useContext(EditorContext);

    const handleSwitch = (direction) => {
        if ( (holder.sectionMode.el === 'body') || (holder.sectionMode.el === 'image') ) {
            return holder.body[holder.sectionMode.index].justify === direction;
        }

        return holder[holder.sectionMode.el].justify === direction;
    };
    
    return (
        <>
            <Button
                disabled={handleSwitch("left")}
                onClick={() => holder.handleJustify('left')}
                variant="contained"
                style={{ marginRight: margin }}
            >
                <Icon
                    fontSize={xs ? 'small' : 'large'}
                >
                    format_align_left
                </Icon>
            </Button>
            <Button
                disabled={handleSwitch("center")}
                onClick={() => holder.handleJustify('center')}
                variant="contained"
                style={{ marginRight: margin }}
            >
                <Icon
                    fontSize={xs ? 'small' : 'large'}
                >
                    format_align_center
                </Icon>
            </Button>
            <Button
                disabled={handleSwitch("right")}
                onClick={() => holder.handleJustify('right')}
                variant="contained"
                style={{ marginRight: margin }}
            >
                <Icon
                    fontSize={xs ? 'small' : 'large'}
                >
                    format_align_right
                </Icon>
            </Button>
            <Button
                disabled={handleSwitch("justify")}
                onClick={() => holder.handleJustify('justify')}
                variant="contained"
                style={{ marginRight: margin }}
            >
                <Icon
                    fontSize={xs ? 'small' : 'large'}
                >
                    format_align_justify
                </Icon>
            </Button>
        </>
    );
};
