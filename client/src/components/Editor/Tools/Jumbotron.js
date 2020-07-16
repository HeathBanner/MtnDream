import React, { useContext } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    paper: {
        padding: 20,
        width: 350,
    }
}));

export default () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);
    const imgHelper = "data:image/jpeg;base64,";

    const handleClick = (e) =>  holder.handleSectionMode({ el: 'jumbotron' });

    if (holder.jumbotron.src) {
        return (
            <>
                <input
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'none'
                    }}
                    onChange={(e) => holder.handleInput(e, { El: "jumbotron" })}
                    accept="image/*"
                    id="image-uploader"
                    type="file"
                />
                <label htmlFor="image-uploader" onClick={handleClick}>
                    <Button className={classes.button} component="span">
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
            </>
        );
    } else {
        return (
            <>
                <input
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'none'
                    }}
                    onChange={(e) => holder.handleInput(e, { El: "jumbotron" })}
                    accept="image/*"
                    id="image-uploader"
                    type="file"
                />
                <label htmlFor="image-uploader" style={{ width: '60%' }} onClick={handleClick}>
                    <Button className={classes.button} component="span">
                        Upload Jumbotron                  
                    </Button>
                </label>
            </>
        );
    }
};
