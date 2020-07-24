import React, { useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    TextField,
    IconButton,
    Avatar,
    CircularProgress,
    Icon
} from '@material-ui/core';

import Jumbotron from './Tools/Jumbotron';
import Image from './Tools/Image';
import MiniTextField from './MiniComponents/MiniTextField';

import { EditorContext } from '../../Context/EditorContext';

const fontSizes = {
    h1: '6rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.125rem',
    h5: '1.5rem',
    h6: '1.25rem',
};
const mobileFontSizes = {
    h1: '2.125rem',
    h2: '2.125em',
    h3: '1.5rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
};
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export default ({ title, xs }) => {

    const context = useContext(EditorContext);

    // Once the component mounts, it will send the url parameter to the context
    // to have it update with the currently selected article
    useEffect(() => {
        context.editArticle(title);
    }, []);

    // The makeStyles hook was added within the component due to the reliance of
    // the context information
    const useStyles = makeStyles(() => ({
        container: {
            marginTop: 120 + parseInt(context.title.marginTop),
            padding: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
        },
        typo: {
            fontSize: xs ? mobileFontSizes[context.title.textStyle] : fontSizes[context.title.textStyle],
            fontFamily: `${context.title.font}, Helvetica, Arial, sans-serif`,
            fontWeight: context.title.bold ? 'bold' : 'normal',
            fontStyle: context.title.italic ? 'italic' : 'normal',
            textDecoration: context.title.underline ? 'underline' : 'none',
            textAlign: context.title.justify,
            color: context.title.color,
            backgroundColor: context.title.highlight ? '#ffff00' : 'inherit',
            padding: 0,
            width: '100%',
            lineHeight: 1.17,
        },
        description: {
            fontSize: xs ? mobileFontSizes[context.description.textStyle] : fontSizes[context.description.textStyle],
            fontFamily: `${context.description.font}, Helvetica, Arial, sans-serif`,
            color: context.description.color,
            textAlign: context.description.justify,
            marginTop: 20,
            padding: 0,
            lineHeight: 1.17,
        },
        newSectionContainers: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        },
        newSectionButtons: {
            padding: 15,
            marginTop: 20,
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
            transition: 'background-color .4s ease',
            '&:hover': {
                backgroundColor: 'rgb(0, 0, 0, 0.2)',
            },
        },
        inputs: {
            width: '100%',
            padding: 0,
            lineHeight: '1.5rem',
        },
        infoContainer: {
            position: 'relative',
            height: 60,
            marginTop: 20,
            paddingLeft: 80,
            display: 'inline-flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            flexBasis: 'auto',
        },
        avatar: {
            height: 60,
            width: 60,
            position: 'absolute',
            top: 0,
            left: 0,
        },
        readLength: {
            color: 'rgba(0, 0, 0, 0.54)',
        },
    }));
    
    const classes = useStyles();

    // This function generate the current date and parses it to be applied to the
    // elements below
    const generateDate = () => {
        const now = new Date();
        return `${months[now.getMonth()]} ${now.getDate()}`;
    };

    if ( (title) && (title !== 'new') && (!context.title.text) ) {
        return (
            <Grid className={classes.container} item xs={12}>
                <CircularProgress />
            </Grid>
        );
    }
    return (
        <>
            <Grid className={classes.container} item xs={12}>

                <TextField
                    style={{
                        width: '100%',
                        marginBottom: parseInt(context.title.marginBottom),
                    }}
                    inputProps={{ className: classes.typo }}
                    InputProps={{ className: classes.inputs }}
                    value={context.title.text}
                    onClick={() => context.handleSectionMode({ el: 'title' })}
                    onChange={(e) => context.handleInput(e.target.value, { El: 'title' })}
                    multiline={true}
                />

                <TextField
                    style={{ width: '100%' }}                
                    inputProps={{ className: classes.description }}
                    InputProps={{ className: classes.inputs }}
                    value={context.description.text}
                    onClick={() => context.handleSectionMode({ el: 'description' })}
                    onChange={(e) => context.handleInput(e.target.value, { El: 'description' })}
                    multiline={true}
                />

                <div
                    className={classes.infoContainer}
                    style={{ width: context.readLength.justify === 'flex-start' ? '100%' : 'auto' }}
                >

                    <Avatar
                        className={classes.avatar}
                        src={`https://media.licdn.com/dms/image/C4E03AQESXvxigX8NfQ/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=jVs0jK8YKBHrOOcmnghTMtN9bhPfu7rH9MHADyTboBY`}
                        alt="Terri Banner Profile Photo"
                    />

                    <div style={{ width: '100%' }}>
                        <Typography>
                            Terri Banner
                        </Typography>
                    </div>

                    <Typography className={classes.readLength}>
                        {generateDate()} &#8226;
                    </Typography>

                    <TextField
                        style={{ width: 20, padding: 0 }}                
                        inputProps={{
                            className: classes.readLength,
                            style: { textAlign: 'center', padding: 0 },
                        }}
                        InputProps={{ className: classes.inputs }}
                        value={context.readLength.text}
                        onClick={() => context.handleSectionMode({ el: 'readLength' })}
                        onChange={(e) => context.handleInput(e.target.value, { El: 'readLength' })}
                    />

                    <Typography className={classes.readLength}>
                        min read
                    </Typography>

                </div>
                
                <Jumbotron justify={context.jumbotron.justify} />
                                
                {/* Since the body object contains both image and text elements,
                a conditional was required to render both */}
                {context.body.map((section, index) => {
                    if (section.isText) {
                        return (
                            <MiniTextField
                                body={section}
                                index={index}
                                fonts={{ mobileFontSizes, fontSizes }}
                                inputClass={classes.inputs}
                                handleSectionMode={context.handleSectionMode}
                                handleInput={context.handleInput}
                                xs={xs}
                            />
                        );
                    }
                    if (section.isImage) {
                        return (
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: section.justify,
                                    marginTop: parseInt(context.body[index].marginTop),
                                    marginBottom: parseInt(context.body[index].marginBottom),
                                }}
                                key={index}
                            >
                                <Image
                                    src={section.src}
                                    index={index}
                                />
                            </div>
                        );
                    }
                })}
                <div className={classes.newSectionContainers}>
                    <IconButton
                        className={classes.newSectionButtons}
                        onClick={context.handleNewBody}
                        style={{ marginRight: xs ? 0 : 20 }}
                    >
                        <Icon>
                            view_headline_outlined
                        </Icon>
                    </IconButton>
                </div>
                <div className={classes.newSectionContainers}>
                    <IconButton
                        className={classes.newSectionButtons}
                        onClick={context.newImgEl}
                    >
                        <Icon>
                            add_to_photos_outlined
                        </Icon>
                    </IconButton>
                </div>

            </Grid>
        </>
    );
};
