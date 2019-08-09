import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Icon, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

import Attractions from './Activities/Attractions';
import Travel from './Activities/Travel';

import Main from './Sections/Main';
import EnA from './Sections/EnA';
import ChristmasTrees from './Sections/ChristmasTrees';
import GameParking from './Sections/GameParking';
import Grandfather from './Sections/Grandfather';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    zIndex: 20,
    marginTop: 20
  },
  appBar: {
    zIndex: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 20,
    position: 'relative',
    backgroundColor: '#EDF5E1'

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#5CDB95',
    marginTop: 40,
  },
  toolbar: theme.mixins.toolbar,
}));

const todoList = [
  {
    text: 'Attractions',
    icon: 'camera_alt',
    expansion: true,
    content: function() {
      return (
        <Fragment>
          <Attractions />
        </Fragment>
      )
    }
  },
  {
    text: 'Events',
    icon: 'event_note',
    state: 'events',
    component: 'Events'
  },
  {
    text: 'Entertainment and Amusements',
    icon: 'local_movies',
    state: 'eNa'
  },
  {
    text: 'Choose & Cut Christmas Trees',
    icon: 'ac_unit',
    state: 'christmasTrees'
  },
  {
    text: 'Guide to Game Day Parking',
    icon: 'where_to_vote',
    state: 'gameParking'
  },
  {
    text: 'Shopping',
    icon: 'shopping_cart',
    state: 'shopping',
  },
  {
    text: 'Grandfather Mountain',
    icon: 'filter_hdr',
    state: 'grandfather',
  },
  {
    text: 'Explore Boone Area Breweries',
    icon: 'local_drink',
    state: 'breweries'
  },
  {
    text: 'Travel Itineraries',
    icon: 'assignment',
    expansion: true,
    content: function() {
      return (
        <Travel />
      )
    }
  },
  {
    text: 'History Travels & Tours',
    icon: 'directions_bus',
    state: 'historyTours',
  },
  {
    text: 'Art Galleries & Museums',
    icon: 'palette',
    state: 'artGalleries',
  },
  {
    text: 'Parks & Playgrounds',
    icon: 'nature_people',
    state: 'parks',
  },
  {
    text: 'Spas & Wellness',
    icon: 'spa',
    state: 'spas',
  },
  {
    text: 'Bon Appetit Appelachia',
    icon: 'local_dining',
    state: 'bonAppetit'
  }
]

export default function ClippedDrawer() {
  const classes = useStyles();

  const [state, setState] = useState({
    main: true,
    generalStore: false,
    tweetsie: false,
    rockyBikePark: false,
    hornWest: false,
    blowingRock: false,
    mysteryHill: false,
    events: false,
    eNa: false,
    christmasTrees: false,
    gameParking: false,
    shopping: false,
    grandfather: false,
    breweries: false,
    wineTrail: false,
    longWeekends: false,
    backRoads: false,
    sojourn: false,
    romanticWeekend: false,
    historyTours: false,
    artGalleries: false,
    parks: false,
    spas: false,
    bonAppetit: false
  });

  const changeState = (text) => {
    let newState = {
      main: false,
      generalStore: false,
      tweetsie: false,
      rockyBikePark: false,
      hornWest: false,
      blowingRock: false,
      mysteryHill: false,
      events: false,
      eNa: false,
      christmasTrees: false,
      gameParking: false,
      shopping: false,
      grandfather: false,
      breweries: false,
      wineTrail: false,
      longWeekends: false,
      backRoads: false,
      sojourn: false,
      romanticWeekend: false,
      historyTours: false,
      artGalleries: false,
      parks: false,
      spas: false,
      bonAppetit: false
    };
    newState[text] = true;
    setState(newState)
  };

  const renderSection = () => {
      switch (true) {
        case state.generalStore:
          break;
        case state.tweetsie:
          break;
        case state.rockyBikePark:
          break;
        case state.hornWest:
          break;
        case state.blowingRock:
          break;
        case state.mysteryHill:
          break;
        case state.events:
          break;
        case state.eNa:
          return <EnA />
        case state.christmasTrees:
          return <ChristmasTrees />
        case state.gameParking:
          return <GameParking />
        case state.shopping:
          break;
        case state.grandfather:
          return <Grandfather />
        case state.breweries:
          break;
        case state.wineTrail:
          break;
        case state.longWeekends:
          break;
        case state.backRoads:
          break;
        case state.sojourn:
          break;
        case state.romanticWeekend:
          break;
        case state.historyTours:
          break;
        case state.artGalleries:
          break;
        case state.parks:
          break;
        case state.spas:
          break;
        case state.bonAppetit:
          break;
        default:
          return <Main />
      }
  };

  return (

    <div className={classes.root}>

      <CssBaseline />

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
            todoList.map((item, index) => (
            
              !item.expansion 
                ? 
                  <Fragment>

                    <ListItem button onClick={() => changeState(item.state)} key={item.text}>
                      
                      <ListItemIcon>
                        <Icon>{item.icon}</Icon>
                      </ListItemIcon>

                      <ListItemText primary={item.text} />

                    </ListItem>

                    <Divider />

                  </Fragment>

                : 

                  item.content()
            ))
          }

        </List>

      </Drawer>

      <main className={classes.content}>
        
        {renderSection()}

        <div className={classes.toolbar} />
        
      </main>

    </div>
  );
}