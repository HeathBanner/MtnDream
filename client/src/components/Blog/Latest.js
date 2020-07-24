import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    containers: {
        position: 'relative',
        marginTop: 40,
        paddingRight: '20%',
    },
    imgs: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '20%',
        height: '100%',
    },
}));

export default ({ articleList }) => {

    const classes = useStyles();
    const imgHelper = "data:image/jpeg;base64,";
    
    return (
        <>
            <Typography style={{ marginTop: 80 }} variant="h5">
                Latest
            </Typography>

            <Divider />

            {articleList.map((article, index) => {
                if (index === 0) return '';

                let data;
                try {
                    data = Buffer.from(article.jumbotron.src.data, 'binary');
                } catch (error) { }

                return (
                    <div className={classes.containers} key={article.title.text}>
                        <Link className={classes.imgs} to={`/blog/${article.title.text}`}>
                            <img
                                src={`${imgHelper}${data}`}
                                alt={article.title.text}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </Link>
            
                        <Typography variant="h4">
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                                {article.title.text}
                            </Link>
                        </Typography>
            
                        <Typography style={{ marginTop: 15, marginBottom: 15 }} variant="h6" color="textSecondary">
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${article.title.text}`}>
                                {article.description.text}
                            </Link>
                        </Typography>
                                
                        <Typography style={{ width: '100%' }} variant="body1">
                            Terri Banner
                        </Typography>
            
                        <Typography style={{ width: '100%' }} variant="body1" color="textSecondary">
                            {`${article.date.parsedDate}`} &#8226; {`${article.readLength.text} min read`}
                        </Typography>     
                    </div>
                );
            })}
        </>
    );
};