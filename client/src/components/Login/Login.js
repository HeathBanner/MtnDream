import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { Paper, Typography, TextField, Button, Icon, Snackbar, SnackbarContent } from '@material-ui/core';

const signupInit = {
    username: '',
    email: '',
    password: '',
};

const loginInit = {
    email: '',
    password: '',
};

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '60%',
        padding: 40,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    inputs: {
        width: '100%',
        marginTop: 20,
    },
    submit: {
        width: '100%',
        padding: 10,
        marginTop: 20,
        color: 'rgb(255, 255, 255)',
    },
    loginSignup: {
        width: '100%',
        padding: 10,
        marginTop: 20,
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    success: {
        backgroundColor: green[600],
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const Login = (props) => {

    const classes = useStyles();

    const [signup, setSignup] = useState(false);
    const [signupInfo, setSignupInfo] = useState({ ...signupInit });
    const [loginInfo, setLoginInfo] = useState({ ...loginInit });

    const [success, setSuccess] = useState({
        open: false,
        message: '',
    });
    const [error, setError] = useState({
        open: false,
        message: '',
    });

    const closeError = () => { setError({ open: false, message: '' }); };
    const closeSuccess = () => { setSuccess({ open: false, message: 'Article Saved!' }); };

    const handleSubmit = () => {
        if (signup) {
            fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify(signupInfo),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then((result) => {
                    if (result.error) { return setError({ open: true, message: result.message }); }
                    setSuccess({ open: true, message: 'Sign up successful!' });
                    setSignupInfo({ ...signupInit });
                    return setSignup(!signup);
                })
                .catch((error) => { setError({ open: true, message: error }); });
        } else {
            fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify(loginInfo),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then((result) => {
                    if (result.error) {
                        return setError({ open: true, message: result.message });
                    }
                    return props.close();
                })
                .catch((error) => {
                    setError({ open: true, message: error });
                });
        }
    };

    if (signup) {
        return (
            <Paper className={classes.paper}>
    
                <Typography variant="h2">
                    Sign Up
                </Typography>
    
                <TextField
                    className={classes.inputs}
                    variant="outlined"
                    label="Username"
                    value={signupInfo.username}
                    onChange={(e) => setSignupInfo({ ...signupInfo, username: e.target.value })}
                />
    
                <TextField
                    className={classes.inputs}
                    variant="outlined"
                    label="Email"
                    type="email"
                    value={signupInfo.email}
                    onChange={(e) => setSignupInfo({ ...signupInfo, email: e.target.value })}
                />
    
                <TextField
                    className={classes.inputs}
                    variant="outlined"
                    label="Password"
                    type="password"
                    value={signupInfo.password}
                    onChange={(e) => setSignupInfo({ ...signupInfo, password: e.target.value })}
                />
    
                <Button
                    className={classes.submit}
                    onClick={handleSubmit}
                    variant="contained"
                >
                    <Typography variant="h6">
                        Submit
                    </Typography>
                </Button>
    
                <Button
                    className={classes.loginSignup}
                    onClick={() => setSignup(!signup)}
                    variant="contained"
                >
                    <Typography variant="body1">
                        Already Signed Up?
                    </Typography>
                </Button>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={success.open}
                    autoHideDuration={6000}
                    onClose={closeSuccess}
                >
                    <SnackbarContent
                        className={classes.success}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    error
                                </Icon>

                                {success.message}

                            </Typography>
                        }
                        action={
                            <Button onClick={closeSuccess}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={error.open}
                    autoHideDuration={6000}
                    onClose={closeError}
                >
                    <SnackbarContent
                        className={classes.error}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    error
                                </Icon>

                                {error.message}

                            </Typography>
                        }
                        action={
                            <Button onClick={closeError}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>
            
            </Paper>
        );    
    } else {
        return (
            <Paper className={classes.paper}>
    
                <Typography variant="h2">
                    Login
                </Typography>
    
                <TextField
                    className={classes.inputs}
                    variant="outlined"
                    label="Email"
                    type="email"
                    value={loginInfo.email}
                    onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
                />
    
                <TextField
                    className={classes.inputs}
                    variant="outlined"
                    label="Password"
                    type="password"
                    value={loginInfo.password}
                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                />
    
                <Button
                    className={classes.submit}
                    onClick={handleSubmit}
                    variant="contained"
                >
                    <Typography variant="h6">
                        Submit
                    </Typography>
                </Button>
    
                <Button
                    className={classes.loginSignup}
                    onClick={() => setSignup(!signup)}
                    variant="contained"
                >
                    <Typography variant="body1">
                        Not Signed Up?
                    </Typography>
                </Button>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={success.open}
                    autoHideDuration={6000}
                    onClose={closeSuccess}
                >
                    <SnackbarContent
                        className={classes.success}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    error
                                </Icon>

                                {success.message}

                            </Typography>
                        }
                        action={
                            <Button onClick={closeSuccess}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={error.open}
                    autoHideDuration={6000}
                    onClose={closeError}
                >
                    <SnackbarContent
                        className={classes.error}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    error
                                </Icon>

                                {error.message}

                            </Typography>
                        }
                        action={
                            <Button onClick={closeError}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>
            
            </Paper>
        );
    }
};

export default Login;
