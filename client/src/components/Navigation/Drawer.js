import React, { useContext, useState } from 'react';
import { MediaContext } from '../../Context/MediaQuery';

import CustomList from './List';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Icon, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
  {
    text: 'Blog',
    icon: 'message_outlined',
    link: '/blog'
  },
  {
    text: 'Editor',
    icon: 'edit_outlined',
    link: '/editor'
  }
];

export default ({ query }) => {

  const classes = useStyles();
  const media = useContext(MediaContext);

  const [open, setOpen] = useState(false);

  const currentVariant = (() => {
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
  })();

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setOpen(open);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.menuList}>
        {drawerList.map((item) => (
          <CustomList
            key={item.text}
            item={item}
            classes={{ listItems: classes.listItems, iconButtons: classes.iconButtons }}
            sm={media.sm}
            currentVariant={currentVariant}
          />
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        style={{ padding: 0 }}
        onClick={toggleDrawer(true)}
      >
        <Icon
          className={classes.menuIcon}
          fontSize={query ? 'small' : 'large'}
        >
          menu
        </Icon>
      </IconButton>
      
      <Drawer 
        PaperProps={{ 
          style: { backgroundColor: '#984843' }
        }}
        open={open} 
        onClose={toggleDrawer(false)}
      >
        
        {sideList()}
      
      </Drawer>
    </div>
  );
};
