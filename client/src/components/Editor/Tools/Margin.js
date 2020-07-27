import React, { useContext } from 'react';
import { EditorContext } from '../../../Context/EditorContext';

import { Typography, TextField, Icon } from '@material-ui/core';

export default ({ margin, md, xs }) => {

    const holder = useContext(EditorContext);

    const marginSwitch = () => {
        switch (holder.sectionMode.el) {
            case 'body':
                return true;
            case 'image':
                return true;
            case 'title':
                return true;
            case' jumbotron':
                return true;
            default:
                return false;
        }
    };

    return (
        <>
            <Typography
                style={{
                    margin: '0 auto',
                    width: '100%'
                }}
                variant="subtitle2"
            >
                Margin Top:
            </Typography>

            {
                marginSwitch()
                    ?
                <TextField
                    style={{
                        width: 40,
                        margin: md ? '0 auto' : 0,
                    }}
                    value={
                        holder.sectionMode.el === 'body' || holder.sectionMode.el === 'image'
                            ?
                        holder.body[holder.sectionMode.index].marginTop
                            :
                        holder[holder.sectionMode.el].marginTop
                    }
                    onChange={holder.handleMarginTop}
                />
                    :
                <Icon
                    style={{ width: 40 }}
                    fontSize={xs ? 'small' : 'large'}
                >
                    lock
                </Icon>
            }

            <Typography
                style={{
                    margin: '0 auto',
                    marginRight: margin,    
                }}
                variant="subtitle2"
            >
                Margin Bottom:
            </Typography>

            {
                marginSwitch()
                    ?
                <TextField
                    style={{
                        width: 40,
                        margin: md ? '0 auto' : 0,
                    }}
                    value={
                        holder.sectionMode.el === 'body' || holder.sectionMode.el === 'image'
                            ?
                        holder.body[holder.sectionMode.index].marginBottom
                            :
                        holder[holder.sectionMode.el].marginBottom
                    }
                    onChange={holder.handleMarginBottom}
                />
                    :
                <Icon
                    style={{ width: 40 }}
                    fontSize={xs ? 'small' : 'large'}
                >
                    lock
                </Icon>
            }
        </>
    );
};
