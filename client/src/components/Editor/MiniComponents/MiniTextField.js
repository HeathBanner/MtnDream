import React from 'react';

import { TextField } from '@material-ui/core';

export default ({ body, xs, fonts, index, inputClass, handleSectionMode, handleInput }) => {

    return (
        <TextField
            style={{
                width: '100%',
                marginTop: parseInt(body.marginTop),
                marginBottom: parseInt(body.marginBottom),
            }}
            multiline={true}
            inputProps={{
                style: {
                    width: '100%',
                    fontSize: xs ? fonts.mobileFontSizes[body.textStyle] : fonts.fontSizes[body.textStyle],
                    fontFamily: `${body.font}, Helvetica, Arial, sans-serif`,
                    fontWeight: body.bold ? 'bold' : 'normal',
                    fontStyle: body.italic ? 'italic' : 'normal',
                    textDecoration: body.underline ? 'underline' : 'none',
                    textAlign: body.justify,
                    color: body.color,
                    backgroundColor: body.highlight ? '#ffff00' : 'inherit',
                    lineHeight: 1.17,
                } 
            }}
            InputProps={{ className: inputClass }}
            value={body.text}
            onClick={() => handleSectionMode({ el: 'body', index: index })}
            onChange={(e) => handleInput(e.target.value, { El: 'body', index: index })}
            key={index}
        />
    );
};