import React, {useContext, useState } from 'react';
import { EditorContext } from '../../Context/EditorContext';

import TextSize from './Tools/TextSize';
import Font from './Tools/Font';
import Styling from './Tools/Styling';
import Justify from './Tools/Justify';
import Margin from './Tools/Margin';
import Notification from '../Notification/Notification';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Icon,
    Button,
    Typography,
    Drawer
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20,
        background: '#ffffff',
        position: 'fixed',
        zIndex: 2,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    editorTools: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    input: {
        width: '80%'
    },
    menuButton: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: 'translate(0%, -50%)',
    },
    save: {
        position: 'relative',
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#379683',
        color: 'white',
        transition: 'all 0.4s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: 'rgb(0, 0, 0, 0.05)',
        },
    },
    backButton: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
}));

const initNotify = {
    error: false,
    success: false,
    warning: false,
    message: ""
};

export default ({ xs, md }) => {

    const classes = useStyles();
    const edit = useContext(EditorContext);

    const [open, setOpen] = useState(false);

    // These will toggle the notification components
    const [notify, setNotify] = useState(initNotify );

    const handleClose = () => setNotify(initNotify);

    const handleSave = async () => {
        const { PreSubmit } = await import('./Services/Services');
        const obj = PreSubmit(edit);

        if (obj.error || obj.warning) return setNotify({ ...obj });
        if (edit.isPublished) return handleChanges();
        console.log(edit.isPublished);

        handleSubmit();
    };

    // If the preSubmit function passes with no errors or warnings it will
    // then log the current date and store it within the database
    const handleSubmit =  async () => {
        const { FetchSubmit } = await import('./Services/Services');
        const result = await FetchSubmit(edit, "newArticle");

        setNotify({ ...result });
        edit.setPublished();
    };

    // If the user has already published the article, this function will then
    // update the article within the database
    const handleChanges = async () => {
        const { FetchSubmit } = await import('./Services/Services');
        const result = await FetchSubmit(edit, "saveChanges");
        setNotify({ ...result });
    };

    return (
        <Grid
            className={classes.container}
            justify="center"
            alignItems="center"
            container
        >

            <Grid className={classes.editorTools} item xs={12}>

                <Button
                    className={classes.menuButton}
                    onClick={() => setOpen(true)}
                >
                    <Icon fontSize={xs ? 'small' : 'large'}>
                        menu
                    </Icon>
                </Button>

                {
                    edit.title.isPublished
                        ?
                    <Button
                        className={classes.save}
                        onClick={handleSave}
                    >
                        <Icon>
                            save
                        </Icon>
                        <Typography style={{ marginLeft: 10 }}>
                            Save
                        </Typography>
                    </Button>
                        :
                    <Button
                        className={classes.save}
                        onClick={handleSave}
                    >
                        <Icon>
                            save
                        </Icon>
                        <Typography style={{ marginLeft: 10 }}>
                            Publish
                        </Typography>
                    </Button>
                }

                <Drawer open={open} onClose={() => setOpen(false)}>
                    <TextSize xs={xs} margin={0} />
                    
                    <Font xs={xs} margin={0} />

                    <Styling xs={xs} margin={0} />

                    <Justify xs={xs} margin={0} />

                    <Margin xs={xs} md={md} margin={'0 auto'} />

                    <a href="/editor" className={classes.backButton}>
                        <Button>
                            <Icon
                                fontSize={xs ? 'small' : 'large'}
                                style={{ marginRight: 10 }}
                            >
                                list_alt_outlined
                            </Icon>
                            <Typography variant={xs ? 'body1' : 'h6'}>
                                Back
                            </Typography>
                        </Button>
                    </a>

                    {/* <a href="/blog" className={classes.backButton}>
                        <Button>
                            <Icon
                                fontSize={xs ? 'small' : 'large'}
                                style={{ marginRight: 10 }}
                            >
                                exit_to_app
                            </Icon>
                            <Typography variant={xs ? 'body1' : 'h6'}>
                                Blog
                            </Typography>
                        </Button>
                    </a> */}

                </Drawer>

            </Grid>

            <Notification
                notify={notify}
                handleClose={handleClose}
            />

        </Grid>
    );
};