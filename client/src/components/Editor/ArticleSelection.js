import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Divider, Typography, Paper, Avatar } from '@material-ui/core';

import { EditorContext } from '../../Context/EditorContext';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flexWrap: 'wrap',
    },
    button: {
        width: '100%',
        padding: 10,
        background: 'linear-gradient(135deg, rgb(26, 118, 30) 0%, rgb(26, 118, 30) 23%,rgb(72, 215, 80) 23%, rgb(72, 215, 80) 28%,rgb(34, 176, 39) 28%, rgb(34, 176, 39) 35%,rgb(42, 126, 41) 35%, rgb(42, 126, 41) 100%)',
        color: 'white'
    },
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
    },
}));

const ArticleSelection = () => {

    const holder = useContext(EditorContext);
    const classes = useStyles();
    
    return (
        <Grid container>

            <Grid className={classes.container} item xs={12}>

                <Link 
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '80%',
                        marginTop: 30,
                    }}
                    to={`/editor/new`}
                >
                    <Button className={classes.button}>
                        <Typography>
                            Make New Article
                        </Typography>
                    </Button>
                </Link>

            </Grid>
            
            <Divider style={{width: '100%', marginTop: 40}} />

            <Grid className={classes.container} item xs={12}>

                {
                    holder.articleList
                        ?
                    holder.articleList.map((article, index) => {
                        return (
                            <Paper
                                className={classes.paper}
                                key={article.title.text}
                            >

                                <Typography style={{ width: '100%', marginBottom: 20 }} align="center" variant="h2">
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/editor/${article.title.text}`}>
                                        {article.title.text}
                                    </Link>
                                </Typography>

                                <Typography style={{ width: '100%'}} align="center" variant="h5" color="textSecondary">
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/editor/${article.title.text}`}>
                                        {article.description.text}
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
                                        {`${article.date.parsedDate} `} &#8226; {` ${article.readLength.text} min read`}
                                    </Typography>

                                </div>

                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/editor/${article.title.text}`}>
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
                                            src={article.jumbotron.src}
                                            alt={article.title.text}
                                        />
                                    </div>
                                </Link>
                                
                            </Paper>
                        )
                    })
                        :
                    
                    ''
                }

            </Grid>

        </Grid>
    );
};

export default ArticleSelection;
