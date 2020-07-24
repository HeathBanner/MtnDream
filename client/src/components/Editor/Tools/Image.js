import React, { useContext } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
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

export default ({ src, alt, index }) => {
    
    const classes = useStyles();
    const holder = useContext(EditorContext);
    const imgHelper = "data:image/jpeg;base64,";

    const handleClick = () => {
        holder.handleSectionMode({ el: 'image', index: index });
    };

    const handleInput = (e) => {
        holder.handleImage(e.target.files[0], { El: "image", index: index });
    };

    if (src) {
        return (
            <>
                <input
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'none'
                    }}
                    onChange={handleInput}
                    accept="image/*"
                    id={`bodyUploader${index}`}
                    type="file"
                />
                <label htmlFor={`bodyUploader${index}`} onClick={handleClick}>
                    <Button component="span">
                        <img 
                            style={{
                                width: '100%',
                                height: 'auto',
                                margin: '20px 0px',
                            }}
                            src={`${imgHelper}${src}`}
                            alt={alt} 
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
                    onChange={handleInput}
                    accept="image/*"
                    id={`bodyUploader${index}`}
                    type="file"
                />
                <label htmlFor={`bodyUploader${index}`} style={{ width: '60%' }} onClick={handleClick}>
                    <Button className={classes.button} component="span">
                        Upload Image
                    </Button>
                </label>
            </>
        );
    };
};
