import React, { useState, useContext } from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
    Button
} from '@material-ui/core';

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
}));

const initInfo = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

export default () => {

    const classes = useStyles();
    const media = useContext(MediaContext);

    const [info, setInfo] = useState(initInfo);

    const handleSubmit = async () => {
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify(info),
                headers: { 'Content-Type': 'application/json' }
            };
            const res = await fetch('/api/contact/contactMe', options);
            const json = await res.json();
    
            if (!json || json.statusCode === 500) {
                return media.errorNotify();
            }
            media.openNotify({ success: true, message: 'Contact was successful' });
            setInfo(initInfo);
        } catch (error) {
            media.errorNotify();
        }
    };

    const handleInput = (event, type) => setInfo({ ...info, [type]: event.target.value });

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
                    onChange={(e) => handleInput(e, 'name')}
                />
                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Email"
                    value={info.email}
                    onChange={(e) => handleInput(e, 'email')}
                />
                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Phone"
                    value={info.phone}
                    onChange={(e) => handleInput(e, 'phone')}
                />
                <TextField 
                    className={classes.input}
                    InputLabelProps={{ className: classes.textFieldLabels }}
                    inputProps={{ className: classes.inputBase }}
                    variant="outlined"
                    label="Message"
                    value={info.message}
                    onChange={(e) => handleInput(e, 'message')}
                />

                <Button
                    className={classes.button}
                    onClick={handleSubmit}
                >
                    <Typography variant={media.xs ? 'h6' : 'h5'}>
                        Submit
                    </Typography>
                </Button>
            </Paper>
        </Grid>
    );
};
