import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import {
    Paper,
    Typography,
    Avatar
} from '@material-ui/core';

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

    return (
        <Paper
            className={classes.paper}
            key={title.text}
        >
            <Typography
                style={{ width: '100%', marginBottom: 20 }}
                align="center"
                variant="h2"
            >
                <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/editor/${title.text}`}
                >
                    {title.text}
                </Link>
            </Typography>

            <Typography
                style={{ width: '100%'}}
                align="center"
                variant="h5"
                color="textSecondary"
            >
                <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/editor/${title.text}`}
                >
                    {description.text}
                </Link>
            </Typography>

            <div className={classes.infoContainer} style={{ width: 'auto' }}>
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

                <Typography color="textSecondary">
                    {`${date.parsedDate} `} &#8226; {` ${readLength.text} min read`}
                </Typography>
            </div>

            <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={`/editor/${title.text}`}
            >
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
                        src={jumbotron.src}
                        alt={title.text}
                    />
                </div>
            </Link>
        </Paper>
    );
};
