import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Divider, Typography, Paper, Icon } from '@material-ui/core';

import { EditorContext } from '../../Context/EditorContext';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        padding: 10,
        background: 'linear-gradient(135deg, rgb(26, 118, 30) 0%, rgb(26, 118, 30) 23%,rgb(72, 215, 80) 23%, rgb(72, 215, 80) 28%,rgb(34, 176, 39) 28%, rgb(34, 176, 39) 35%,rgb(42, 126, 41) 35%, rgb(42, 126, 41) 100%)',
        color: 'white'
    },
    paper: {
        width: '70%',
        marginTop: 40,
        padding: 30,
    },
}));

const ArticleSelection = () => {

    const holder = useContext(EditorContext);

    const classes = useStyles();
    
    return (

        <Grid container>

            <Grid className={classes.container} item xs={12}>

                <Button onClick={holder.handleMode} className={classes.button}>

                    <Typography>
                        Make New Article
                    </Typography>

                </Button>

            </Grid>
            

            <Divider style={{width: '100%', marginTop: 40}} />

            <Grid className={classes.container} item xs={12}>

                {
                    holder.articleList

                        ?

                    holder.articleList.map((article, index) => {
                        return (

                            <Paper className={classes.paper} key={article.title.text}>

                                <Button onClick={() => holder.editArticle(index)}>
                                    <Icon>edit</Icon>
                                </Button>

                                <Typography align="center" variant="h2">
                                    {article.title.text}
                                </Typography>

                                <img style={{width: '100%', height: 'auto'}} src={article.jumbotron} alt={article.title.text} />

                                <Typography align="center" variant="subtitle1">
                                    {article.date}
                                </Typography>
                                
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