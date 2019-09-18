import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon, IconButton } from '@material-ui/core';

import { MediaContext } from '../../Context/MediaQuery';

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: 'white',
    transition: 'transform .4s ease',
    '&:hover': {
      transform: 'scale(1.1)'
    },
  },
  list: {
    [theme.breakpoints.up('lg')]: {
      width: 300
    },
    [theme.breakpoints.down('xs')]: {
      width: 150
    },
    width: 250,
  },
  listItems: {
    [theme.breakpoints.down('xs')]: {
      padding: '8px 16px',
    },
    '&:hover': {
      transform: 'translate(20px, 0px)'
    },
    transition: 'transform .4s ease',
    padding: '12px 22px',
    color: 'white',
  },
  iconButtons: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 36
    },
  },
  menuList: {
    marginTop: '30px',
  },
  fullList: {
    width: 'auto',
  },
}));

const drawerList = [
  {
    text: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    text: 'Contact',
    icon: 'contact_phone',
    link: '/contact'
  },
];

const NavDrawer = (props) => {

  const classes = useStyles();
  const media = useContext(MediaContext);

  const [state, setState] = React.useState({
    left: false,
  });

  const getVariant = () => {

    switch (true) {

      case media.xs:
        return 'h6';
      case media.sm:
        return 'h5';
      case media.md:
        return 'h5';
      default:
        return 'h4';
    }
  };

  const toggleDrawer = (side, open) => event => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    else {
      setState({ ...state, left: open });
    }
  };

  const sideList = () => (

    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List className={classes.menuList}>

        {
          drawerList.map((item) => (

            <Link
              key={item.text}
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              to={item.link}
            >
              
              <ListItem
                className={classes.listItems}
                button
              >
              
                <ListItemIcon className={classes.iconButtons}>
                  <Icon
                    style={{ color: 'white' }}
                    fontSize={!media.sm ? 'large' : 'small'}
                  >
                    {item.icon}
                  </Icon>
                </ListItemIcon>
                
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ variant: getVariant() }}
                />
              
              </ListItem>

            </Link>
          ))
        }

        {
          media.xs
            ?
          ''
            :
        
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            to={'/blog'}
          >
            
            <ListItem
              className={classes.listItems}
              button
            >
            
              <ListItemIcon className={classes.iconButtons}>
                <Icon
                  style={{ color: 'white' }}
                  fontSize={!media.sm ? 'large' : 'small'}
                >
                  vertical_split
                </Icon>
              </ListItemIcon>
              
              <ListItemText 
                primary={'Blog'} 
                primaryTypographyProps={{ variant: getVariant() }}
              />
            
            </ListItem>

          </Link>
        }

      </List>

    </div>
  );

  return (

    <div>

      <IconButton
        style={{ padding: 0 }}
        onClick={toggleDrawer('left', true)}
      >

        <Icon
          className={classes.menuIcon}
          fontSize={props.query ? 'small' : 'large'}
        >
          menu
        </Icon>

      </IconButton>
      
      <Drawer 
        PaperProps={{ 
          style: {
            backgroundColor: '#984843',
          }
        }}
        open={state.left} 
        onClose={toggleDrawer('left', false)}
      >
        
        {sideList('left')}
      
      </Drawer>

    </div>
  );
};

export default NavDrawer;
