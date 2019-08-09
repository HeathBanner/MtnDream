import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Divider, Grid, Paper, TextField, Typography, Button, Snackbar, SnackbarContent, Slide, Icon, IconButton } from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

const initInfo = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

const useStyles = makeStyles(theme => ({
    formContainer: {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    formPaper: {
        [theme.breakpoints.up('lg')]: {
            width: '60%',
            padding: '30px 60px'
        },
        width: '70%',
        padding: 30,
        background: 'linear-gradient(120deg, #ffffff 30%, #f6fff5 90%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'
    },
    input: {
        [theme.breakpoints.up('lg')]: {
            marginTop: 40,
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 30
        },
        width: '100%',
        marginTop: 20,
    },
    inputBase: {
        [theme.breakpoints.up('lg')]: {
            padding: '25px 20px',
            fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 10
        },
        padding: '22px 18px',
        fontSize: '1.5rem',
    },
    textFieldLabels: {
        [theme.breakpoints.up('lg')]: {
            fontSize: '2rem',
            transform: 'translate(20px, 25px) scale(1)'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
            transform: 'translate(15px, 15px) scale(1)'
        },
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
            [theme.breakpoints.up('lg')]: {
                transform: 'translate(14px, -14px) scale(0.75)'
            },
            [theme.breakpoints.down('xs')]: {
                transform: 'translate(14px, -7.5px) scale(0.75)'
            },
            transform: 'translate(14px, -9px) scale(0.75)'
        },
        fontSize: '1.5rem',
        transform: 'translate(18px, 22px) scale(1)'
    },
    button: {
        [theme.breakpoints.up('lg')]: {
            marginTop: 40,
            padding: 15
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 30
        },
        [theme.breakpoints.down('xs')]: {
            padding: 10
        },
        padding: 15,
        marginTop: 20,
        width: '100%',
        color: 'white',
        transition: 'all 0.4s ease',
        background: 'linear-gradient(45deg, rgba(152, 152, 152, 0.07) 0%, rgba(152, 152, 152, 0.07) 48%,rgba(136, 136, 136, 0.07) 48%, rgba(136, 136, 136, 0.07) 100%),linear-gradient(45deg, rgba(235, 235, 235, 0.06) 0%, rgba(235, 235, 235, 0.06) 79%,rgba(218, 218, 218, 0.06) 79%, rgba(218, 218, 218, 0.06) 100%),linear-gradient(135deg, rgba(12, 12, 12, 0.04) 0%, rgba(12, 12, 12, 0.04) 30%,rgba(79, 79, 79, 0.04) 30%, rgba(79, 79, 79, 0.04) 100%),linear-gradient(45deg, rgba(173, 173, 173, 0.03) 0%, rgba(173, 173, 173, 0.03) 66%,rgba(245, 245, 245, 0.03) 66%, rgba(245, 245, 245, 0.03) 100%),linear-gradient(135deg, rgba(84, 84, 84, 0.06) 0%, rgba(84, 84, 84, 0.06) 51%,rgba(165, 165, 165, 0.06) 51%, rgba(165, 165, 165, 0.06) 100%),linear-gradient(45deg, rgba(15, 15, 15, 0.02) 0%, rgba(15, 15, 15, 0.02) 14%,rgba(95, 95, 95, 0.02) 14%, rgba(95, 95, 95, 0.02) 100%),linear-gradient(0deg, rgba(34, 34, 34, 0.05) 0%, rgba(34, 34, 34, 0.05) 58%,rgba(98, 98, 98, 0.05) 58%, rgba(98, 98, 98, 0.05) 100%),linear-gradient(90deg, rgb(50, 216, 218),rgb(2, 110, 165))',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundPosition: '0px -50px',
        },
    },
    snackbar: {
        backgroundColor: green[600]
    },
}));

const Form = () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    const [info, setInfo] = useState({ initInfo });
    const [status, setStatus] = useState('Your contact information has been sent!');

    const [open, setOpen] = useState(false);

    const handleSubmit = () => {

        console.log('Fire')
        fetch('/api/contact/contactMe', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(!result) { setStatus('Something went wrong!')}
            setOpen(true);
            setInfo({ ...initInfo });
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const slideTransition = props => {
        return <Slide {...props} direction="right" />
    };

    const getHeaderVariant = () => {

        switch (true) {

            case media.xs:
                return 'h4';
            case media.sm:
                return 'h2';
            default:
                return 'h1';
        }
    };

    const getButtonVariant = () => {
         
        switch (true) {

            case media.md:
                return 'h5';
            case media.lg:
                return 'h4';
            default:
                return 'h4';
        }
    };

    return (

        <Grid className={classes.formContainer} item xs={12}>

            <Paper className={classes.formPaper}>

                <Typography className={classes.formHeader} variant={getHeaderVariant()} color="primary" align="center">
                    Contact Us!
                </Typography>

                <Divider style={{ width: '70%' }} />

                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Name"
                    value={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                />
                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Email"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />
                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Phone"
                    value={info.phone}
                    onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                />
                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Message"
                    value={info.message}
                    onChange={(e) => setInfo({ ...info, message: e.target.value })}
                />

                <Button onClick={handleSubmit} className={classes.button}>
                    <Typography variant={getButtonVariant()}>
                        Submit
                    </Typography>
                </Button>


                <Snackbar 
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={ slideTransition }
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    autoHideDuration={6000}
                >

                    <SnackbarContent 
                        className={classes.snackbar}
                        message={ 
                            <Typography variant="h6" align="center">
                                {status}
                            </Typography>
                        }
                        action={
                            <IconButton color="inherit" onClick={handleClose}>
                                <Icon>close</Icon>
                            </IconButton>
                        }
    
                    />

                </Snackbar>

            </Paper>

        </Grid>
    );
};

export default Form;