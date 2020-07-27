import React, { useContext } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    jumboContainer: {
        width: '100%',
        display: 'flex'
    },
    paper: {
        padding: 20,
        width: 350,
    },
    button: {
        width: '100%',
        padding: 10,
        color: 'white',
        backgroundColor: '#379683'
    }
}));

export default ({ justify }) => {

    const classes = useStyles();
    const holder = useContext(EditorContext);
    const imgHelper = "data:image/jpeg;base64,";

    const handleClick = (e) =>  holder.handleSectionMode({ el: 'jumbotron' });

    if (holder.jumbotron.src) {
        return (
            <div className={classes.jumboContainer} style={{ justifyContent: justify }}>
                <input
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'none'
                    }}
                    onChange={(e) => holder.handleImage(e.target.files[0], { El: "jumbotron" })}
                    accept="image/*"
                    id="image-uploader"
                    type="file"
                />
                <label htmlFor="image-uploader" onClick={handleClick}>
                    <Button component="span">
                        <img 
                            style={{
                                width: '100%',
                                height: 'auto',
                                margin: '20px 0px',
                            }}
                            src={`${imgHelper}${holder.jumbotron.src}`}
                            alt={holder.title.text} 
                        />                    
                    </Button>
                </label>
            </div>
        );
    } else {
        return (
            <div className={classes.jumboContainer} style={{ justifyContent: justify }}>
                <input
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'none'
                    }}
                    onChange={(e) => holder.handleImage(e.target.files[0], { El: "jumbotron" })}
                    accept="image/*"
                    id="image-uploader"
                    type="file"
                />
                <label htmlFor="image-uploader" style={{ width: '60%' }} onClick={handleClick}>
                    <Button className={classes.button} component="span">
                        Jumbotron                  
                    </Button>
                </label>
            </div>
        );
    }
};
