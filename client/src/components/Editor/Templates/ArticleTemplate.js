import React from 'react';
import { Link } from 'react-router-dom';

import profilePhoto from '../../../resources/avatar';

import { makeStyles } from '@material-ui/styles';
import { Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    paper: {
        width: '70%',
        marginTop: 40,
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        cursor: 'pointer',
        boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        borderRadius: 10,
        backgroundColor: '#fff',
        textDecoration: 'none',
        color: 'inherit'
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
    }
}));

export default ({ title, jumbotron, description, date, readLength  }) => {

    const classes = useStyles();
    const imgHelper = "data:image/jpeg;base64,";
    
    if (!jumbotron.src) return "";
    const data = Buffer.from(jumbotron.src.data, 'binary');
    return (
        <Link
            className={classes.paper}
            key={title.text}
            to={`/editor/${title.text}`}
        >
            <Typography
                style={{ width: '100%', marginBottom: 20 }}
                align="center"
                variant="h2"
            >
                {title.text}
            </Typography>

            <Typography
                style={{ width: '100%'}}
                align="center"
                variant="h5"
                color="textSecondary"
            >
                {description.text}
            </Typography>

            <div className={classes.infoContainer} style={{ width: 'auto' }}>
                <Avatar
                    className={classes.avatar}
                    src={`data:image/jpeg;base64,${profilePhoto.url}`}
                    alt="Terri Banner Profile Photo"
                />

                <div style={{ width: '100%' }}>
                    <Typography>
                        Terri Banner
                    </Typography>
                </div>

                <Typography color="textSecondary">
                    {`${date.parsedDate} `} &#8226; {` ${readLength.text} min read`}
                </Typography>
            </div>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                        width: '50%',
                    }}
                    src={`${imgHelper}${data}`}
                    alt={title.text}
                />
            </div>
        </Link>
    );
};
