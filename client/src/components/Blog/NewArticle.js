import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    infoContainer: {
        position: 'relative',
        height: 60,
        width: 'auto',
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
}));

export default ({ article, url }) => {

    const classes = useStyles();
    const imgHelper = "data:image/jpeg;base64,";
    let data;
    try {
        data = Buffer.from(article.jumbotron.src.data, 'binary');
    } catch (error) { }

    return (
        <>
            <Link
                style={{ width: '100%', height: 'auto' }}
                to={`/blog/${article.title.text}`}
            >
                <img
                    style={{ width: 'auto', height: 300 }}
                    src={`${imgHelper}${data}`}
                    alt={article.title.text}
                />
            </Link>

            <Typography style={{ marginTop: 20 }} variant="h2">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                    {article.title.text}
                </Link>
            </Typography>

            <Typography style={{ marginTop: 15, marginBottom: 15 }} variant="h6" color="textSecondary">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                    {article.description.text}
                </Link>
            </Typography>

            <div className={classes.infoContainer}>

                <Avatar
                    className={classes.avatar}
                    src={`${imgHelper}${url}`}
                    alt="Terri Banner Profile Photo"
                />
    
                <Typography style={{ width: '100%' }} variant="body1">
                    Terri Banner
                </Typography>
    
                <Typography style={{ width: '100%' }} variant="body1" color="textSecondary">
                    {`${article.date.parsedDate} `} &#8226; {` ${article.readLength.text} min read`}
                </Typography>
                
            </div>
        </>
    );
};
