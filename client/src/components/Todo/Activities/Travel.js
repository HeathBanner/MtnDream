import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon, Typography, ExpansionPanel, ExpansionPanelSummary, Icon, ExpansionPanelDetails } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    paddingLeft: '0px'
  },
}));

function Travel() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<Icon>expand_more</Icon>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.summary}
              >
                <ListItem button>
                    <ListItemIcon><Icon>assignment</Icon></ListItemIcon>
                    <ListItemText primary="Travel Itineraries" />
                </ListItem>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List>
                  <ListItem button>
                    {/* <ListItemIcon></ListItemIcon> */}
                    <ListItemText primary="Boone Area Wine Trail" />
                  </ListItem>
                  <ListItem button>
                    {/* <ListItemIcon></ListItemIcon> */}
                    <ListItemText primary="Fabulous Long Weekend for Families" />
                  </ListItem>
                  <ListItem button>
                    {/* <ListItemIcon></ListItemIcon> */}
                    <ListItemText primary="High Country Back Roads" />
                  </ListItem>
                  <ListItem button>
                    {/* <ListItemIcon></ListItemIcon> */}
                    <ListItemText primary="Boone Area Shopper's Sojourn" />
                  </ListItem>
                  <ListItem button>
                    {/* <ListItemIcon></ListItemIcon> */}
                    <ListItemText primary="Romantic Mountain Weekend" />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>    
    );
}

export default Travel;