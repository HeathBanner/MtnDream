import React, { useContext } from 'react';

import { MediaContext } from '../../Context/MediaQuery';

import { Grid } from '@material-ui/core';

import MDToolbar from '../../components/Editor/MDToolbar';
import LGToolbar from '../../components/Editor/LGToolbar';
import Preview from '../../components/Editor/Preview';

export default ({ match }) => {

    const media = useContext(MediaContext);

    return (
        <Grid container>

            <Grid item xs={12}>
                {
                    media.md
                        ?
                    <MDToolbar xs={media.xs} md={media.md} />
                        :
                    <LGToolbar />
                }

                <Preview xs={media.xs} md={media.md} title={match.params.title} />
            </Grid>

        </Grid>
    );
};
