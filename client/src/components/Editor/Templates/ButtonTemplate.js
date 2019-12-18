import React from 'react';

import { Button, Typography, Icon } from '@material-ui/core';

export default ({ margin, font, handleOpen, xs, locked }) => {

    if (locked) return (
        <Button
            disabled={true}
            style={{ marginRight: margin }}
            variant="contained"
        >
            <Icon>lock</Icon>
        </Button>
    );
    
    return (
        <Button
            style={{
                marginRight: margin,
                textTransform: 'capitalize',
                fontFamily: `${font}, Helvetica, Arial, sans-serif`
            }}
            onClick={handleOpen}
            variant="contained"
        >
            <Typography
                variant={xs ? 'body1' : 'h6'}
            >
                {font}
            </Typography>
        </Button>
    );
};
