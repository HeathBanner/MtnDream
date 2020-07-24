import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

export default ({ item, classes, sm, currentVariant }) => {

    return (
        <Link
            key={item.text}
            style={{ textDecoration: 'none', color: 'black' }}
            to={item.link}
        >  
            <ListItem
                className={classes.listItems}
                button
            >
            <ListItemIcon className={classes.iconButtons}>
                <Icon
                    style={{ color: 'white' }}
                    fontSize={!sm ? 'large' : 'small'}
                >
                {item.icon}
                </Icon>
            </ListItemIcon>
            
            <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ variant: currentVariant }}
            />
            </ListItem>
        </Link>
    );
};