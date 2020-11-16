import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {DateTime} from 'luxon';
// MUI stuff
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { Scream as IScream } from '../services/api'

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        marginBottom: '20px'
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    },

}));

interface Props {
    scream: IScream
}

const Scream: React.FC<Props> = ({scream: {body, createdAt, userImage, userHandle, id, likeCount, commentCount}}) => {
    
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                image={userImage}
                title="Profile image" 
            />
            <CardContent className={classes.content}>
                <Typography 
                    variant="h5" 
                    component={Link} 
                    to={`/users/${userHandle}`}
                    color="primary"
                >
                    {userHandle}
                </Typography>
                <Typography variant="body2" color="textSecondary">{DateTime.fromISO(createdAt).toRelative()}</Typography>
                <Typography variant="body1">{body}</Typography>
            </CardContent>
        </Card>
    );
}

export default Scream;
