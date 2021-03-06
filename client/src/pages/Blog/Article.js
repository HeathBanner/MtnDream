import React, { useEffect, useState, useContext } from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar, CircularProgress } from '@material-ui/core';

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

const useStyles = makeStyles(() => ({
    container: {
        minHeight: '100vh',
        marginTop: 60,
        marginBottom: 80,
        padding: '0px 10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    progressContainer: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    articlesContainer: {
        paddingLeft: '20%',
        paddingRight: 40,
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

export default ({ match }) => {

    const media = useContext(MediaContext);
    const classes = useStyles();
    const imgHelper = "data:image/jpeg;base64,";

    const [article, setArticle] = useState('');

    // Once the component mounts, this function will grab the article that matches
    // the url parameter value and update the state with the matched article's elements
    useEffect(() => fetchArticle(), []);

    const fetchArticle = async () => {
        try {
            const title = match.params.title;
            const options = {
                method: 'POST',
                body: JSON.stringify({ title }),
                headers: { 'Content-Type': 'application/json' },
            };
            const res = await fetch('/api/editors/getArticle', options);
            const json = await res.json();
            if (json.error) {
                return media.openNotify({ error: true, message: json.message });                ;
            }
            
            setArticle(json);
        } catch (error) {
            media.errorNotify();
        }
    };

    if (!article) return (
        <Grid container className={classes.progressContainer}>
            <CircularProgress />
        </Grid>
    );

    let data;
    try {
        data = Buffer.from(article.jumbotron.src.data, 'binary');
    } catch (error) {
        media.errorNotify();
    }

    return (
        <Grid container>
            <Grid className={classes.container} item xs={12}>

                {/* The elements will have styles applied inline due to
                the reliance of the information retrieved from the database and stored
                within the state */}
                <Typography
                    style={{
                        fontSize: media.md ? mobileFontSizes[article.title.textStyle] : fontSizes[article.title.textStyle],
                        fontFamily: `${article.title.font}, Helvetica, Arial, sans-serif`,
                        fontWeight: article.title.bold ? 'bold' : 'normal',
                        fontStyle: article.title.italic ? 'italic' : 'normal',
                        textDecoration: article.title.underline ? 'underline' : 'none',
                        textAlign: article.title.justify,
                        color: article.title.color,
                        backgroundColor: article.title.highlight ? '#ffff00' : 'none',
                        marginTop: parseInt(article.title.marginTop),
                        marginBottom: parseInt(article.title.marginBottom),
                        width: '100%',
                    }}
                >
                    {article.title.text}
                </Typography>

                <Typography
                    style={{
                        fontSize: media.md ? mobileFontSizes[article.description.textStyle] : fontSizes[article.description.textStyle],
                        fontFamily: `${article.description.font}, Helvetica, Arial, sans-serif`,
                        textAlign: article.description.justify,
                        width: '100%',
                    }}                
                >
                    {article.description.text}
                </Typography>

                <div
                    className={classes.infoContainer}
                    style={{ width: article.readLength.justify === 'flex-start' ? '100%' : 'auto' }}
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
                        {`Aug 21 `} &#8226; {` ${article.readLength.text} min read`}
                    </Typography>
                </div>

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: article.jumbotron.justify,
                    }}
                >
                    <img
                        style={{
                            marginTop: article.jumbotron.marginTop,
                            marginBottom: article.jumbotron.marginBottom,
                            width: '50%',
                        }}
                        src={`${imgHelper}${data}`}
                        alt={article.title.text}
                    />
                </div>

                {/* Since the body element can contain either text or image elements,
                I had to write a conditional to appropriately apply elements and their styles */}
                {article.body.map((section, index) => {
                    if (section.isText) {
                        return (
                            <Typography
                                style={{
                                    width: '100%',
                                    fontSize: media.md ? mobileFontSizes[section.textStyle] : fontSizes[section.textStyle],
                                    fontFamily: `${section.font}, Helvetica, Arial, sans-serif`,
                                    fontWeight: section.bold ? 'bold' : 'normal',
                                    fontStyle: section.italic ? 'italic' : 'normal',
                                    textDecoration: section.underline ? 'underline' : 'none',
                                    textAlign: section.justify,
                                    color: section.color,
                                    backgroundColor: section.highlight ? '#ffff00' : 'none',
                                    marginTop: parseInt(section.marginTop),
                                    marginBottom: parseInt(section.marginBottom),    
                                }}
                                key={index}
                            >
                                {section.text}
                            </Typography>
                        );
                    }
                    let bodyImage;
                    try {
                        bodyImage = Buffer.from(section.src.data, 'binary');
                    } catch (error) {
                        media.errorNotify();
                    }

                    return (
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: section.justify,
                                marginTop: section.marginTop,
                                marginBottom: section.marginBottom
                            }}
                        >
                            <img
                                src={`${imgHelper}${bodyImage}`}
                                alt={section.alt}
                                style={{ width: '70%' }}
                            />
                        </div>
                    );
                })}

            </Grid>
        </Grid>
    );
};
