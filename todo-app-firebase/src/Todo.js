import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemAvatar>
          <Avatar>{/* <ImageIcon></ImageIcon> */}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary="❤ Dummy Deadline"
        ></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
