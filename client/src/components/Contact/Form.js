import React, {
    useState,
    useContext
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
    Snackbar,
    SnackbarContent,
    Slide,
    Icon,
    IconButton
} from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

const initInfo = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

const useStyles = makeStyles((theme) => ({
    formContainer: {
        height: '100vh',
        backgroundColor: '#18121E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    formPaper: {
        [theme.breakpoints.up('lg')]: {
            width: '50%',
            padding: '30px 60px'
        },
        width: '70%',
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'
    },
    formHeader: {
        color: '#25472e',
    },
    input: {
        width: '100%',
        marginTop: 20,
    },
    button: {
        padding: 10,
        marginTop: 20,
        width: '100%',
        color: 'white',
        backgroundColor: '#25472e',
        transition: 'all 0.4s ease',
        '&:hover': {
            transform: 'scale(1.01)',
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
        fetch('/api/contact/contactMe', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (!result) { return setStatus('Something went wrong!'); }
                setOpen(true);
                setInfo({ ...initInfo });
            })
            .catch(() => { return; })
    };

    const handleClose = () => { setOpen(false); };

    const slideTransition = (props) => {
        return <Slide {...props} direction="right" />;
    };

    return (
        <Grid className={classes.formContainer} item xs={12}>

            <Paper className={classes.formPaper}>

                <Typography
                    className={classes.formHeader}
                    variant={media.xs ? 'h4' : 'h2'}
                    align="center"
                >
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

                <Button
                    className={classes.button}
                    onClick={handleSubmit}
                >
                    <Typography variant={media.xs ? 'h6' : 'h5'}>
                        Submit
                    </Typography>
                </Button>


                <Snackbar 
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={ slideTransition }
                    ContentProps={{ 'aria-describedby': 'message-id' }}
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
