import React, { useContext, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Drawer, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

import ArticleSelection from './ArticleSelection';
import Toolbar from './Toolbar';
import Preview from './Preview';

import { EditorContext } from '../../Context/EditorContext';

const editorSidebar = [
    {
        text: 'Title',
        icon: 'title',
        param: 'title'
    },
    {
        text: 'Jumbotron',
        icon: 'image',
        param: 'jumbotron'
    },
    {
        text: 'Body',
        icon: 'notes',
        param: 'currentBody'
    }
]

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        zIndex: 2
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        top: 60,
        width: 240,
        position: 'relative',
    },
    content: {
        flexGrow: 1,
    },
}));

const Interface = () => {

    const classes = useStyles();

    const holder = useContext(EditorContext);
    
    return (
        <Fragment>

                    <CssBaseline />
                {
                    holder.editMode
            
                        ?
                    <Fragment>

                    <Grid className={classes.root} item xs={4}>

                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >

                            <div className={classes.toolbar} />

                            <List>

                                {
                                    editorSidebar.map((item, index) => (

                                        <ListItem 
                                            onClick={() => holder.handleSectionMode(item.param)} 
                                            button
                                            disabled={!(index === 0 || holder.title.text)}
                                            key={item.text}
                                        >

                                            <ListItemIcon>

                                                <Icon>{item.icon}</Icon>

                                            </ListItemIcon>

                                            <ListItemText primary={item.text} />

                                        </ListItem>
                                    ))
                                }

                            </List>

                        </Drawer>


                        </Grid>
                        <Grid item xs={8}>

                            {/* <main className={classes.content}> */}
    
    
    
    
                                        <Toolbar />
                                        <Preview />
    
    
                            {/* </main> */}
                        </Grid>


                    </Fragment>


                            :
                        
                    <Grid className={classes.root} item xs={12}>
                            
                            <ArticleSelection />
                        
                    </Grid>        

                }
        </Fragment>


    );
};

export default Interface;