import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";

export default function Day(props) {
  const { day } = props;
  //   const classes = useStyles();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img style={{ width: "60px" }} src={day.image} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={day.day} secondary="Two workouts" />
    </ListItem>
  );
}
