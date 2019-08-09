import React, { Fragment } from 'react';

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

function MGS() {

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
                <ListItemIcon><Icon>camera_alt</Icon></ListItemIcon>
                <ListItemText primary="Attractions" />
            </ListItem>          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <ListItem button>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Mast General Store" />
              </ListItem>
              <ListItem button>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Tweetsie Railroad" />
              </ListItem>
              <ListItem button>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Rocky Knob Mountain Bike Park" />
              </ListItem>
              <ListItem button>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Horn in the West" />
              </ListItem>
              <ListItem button>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="The Blowing Rock" />
              </ListItem>
              <ListItem button>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Mystery Hill" />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
}

export default MGS;