import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{/* <ImageIcon></ImageIcon> */}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary="Dummy Deadline"
        ></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
