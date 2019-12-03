import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';
import { Typography } from '@material-ui/core';


const User = (props) => {
    const {classes} = props;

    return (
        <div className={classes.userCard}>
            <PersonIcon className={classes.user}/>
            <Typography variant='subtitle'>John Snow</Typography>
        </div>
    );
};

export default withStyles(styles)(User);
