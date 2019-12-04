import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';
import { Typography, Avatar } from '@material-ui/core';


const User = (props) => {
    const {classes} = props;
    return (
        <div className={classes.userCard}>
            {/* <PersonIcon className={classes.user}/> */}
            <Avatar src={props.userImage}/>
            <Typography variant='subtitle1'>{props.userName}</Typography>

        </div>
    );
};

export default withStyles(styles)(User);
