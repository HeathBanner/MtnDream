import React, { useContext, useState } from 'react';

import TextSize from './Tools/TextSize';
import Font from './Tools/Font';
import Styling from './Tools/Styling';
import Justify from './Tools/Justify';
import Margin from './Tools/Margin';
import Notification from '../Notification/Notification';
import { PreSubmit, FetchSubmit } from './Services/Services';

import { EditorContext } from '../../Context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Icon,
    Fab,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20,
        background: '#ffffff',
        position: 'fixed',
        top: 70,
        zIndex: 2,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    editorTools: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%'
    },
    save: {
        position: 'relative',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        transition: 'all 0.4s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: 'rgb(0, 0, 0, 0.05)',
        },
    },
}));

const initNotify = {
    error: false,
    success: false,
    warning: false,
    message: ""
};

export default () => {

    const classes = useStyles();
    const edit = useContext(EditorContext);

    // These will toggle the notification components
    const [notify, setNotify] = useState({ ...initNotify });

    const handleClose = () => setNotify({ ...initNotify });

    const handleSave = () => {
        const obj = PreSubmit(edit);
        if (obj.error || obj.warning) return setNotify({ ...obj });
        if (edit.isPublished) return handleChanges();

        handleSubmit();
    }

    // If the preSubmit function passes with no errors or warnings it will
    // then log the current date and store it within the database
    const handleSubmit =  async () => {
        const res = FetchSubmit(edit, "newArticle");

        setNotify({ ...res });
        edit.setPublished();
    };

    // If the user has already published the article, this function will then
    // update the article within the database
    const handleChanges = async () => {
        const res = FetchSubmit(edit, "saveChanges");

        setNotify({ ...res });
    };

    return (
        <Grid
            className={classes.container}
            justify="center"
            alignItems="center"
            container
        >

            <Grid item xs={1}>

                {
                    edit.title.isPublished
                        ?
                    <Fab className={classes.save} onClick={handleSave} variant="extended">
                        <Icon>save</Icon>
                        <Typography style={{ marginLeft: 10 }}>
                            Save
                        </Typography>
                    </Fab>
                        :
                    <Fab className={classes.save} onClick={handleSave} variant="extended">
                        <Icon>save</Icon>
                        <Typography style={{ marginLeft: 10 }}>
                            Publish
                        </Typography>
                    </Fab>
                }

                <Notification
                    notify={notify}
                    handleClose={handleClose}
                />

            </Grid>
            <Grid className={classes.editorTools} item xs={11}>

                <TextSize margin={10} />
                
                <Font margin={10} />

                <Styling margin={10} />

                <Justify margin={10} />

                <Margin margin={10} />

            </Grid>

        </Grid>
    );
};
