import React from 'react';

import { green, amber } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import {
    Snackbar,
    SnackbarContent,
    Icon,
    Typography,
    Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    error: {
        backgroundColor: "#c70629",
    },
    warning: {
        backgroundColor: amber[700],
    },
    success: {
        backgroundColor: green[600],
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default ({ notify, handleClose }) => {
    const { error, success, warning, message } = notify;
    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={error || success || warning}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <SnackbarContent
                className={error ? classes.error : success ? classes.success : classes.warning}
                message={
                    <Typography className={classes.message}>

                        <Icon style={{ marginRight: 10 }}>
                            {error ? "error" : success ? "check_cicle" : "warning"}
                        </Icon>

                        {message}

                    </Typography>
                }
                action={
                    <Button onClick={handleClose}>
                        <Icon>close</Icon>
                    </Button>
                }
            />
        </Snackbar>
    );
};
