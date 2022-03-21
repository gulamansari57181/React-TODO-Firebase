import React, { useEffect, useState } from "react";
// importing material UI
import Button from "@mui/material/Button";
import "./App.css";
import { FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  //  Making a state for APP component
  const [todos, setTodos] = useState(["abc", "def"]);
  const [input, setInput] = useState("");

  // when app loads. we have to listen firebase database and add/removed task- done by useEffect

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log("Happy Holi");
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    // This function will fire off when button add Todo button is clicked, we used spread operater to persist our old content of array
    event.preventDefault();
    // setTodos([...todos, input]);
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // to clear the input field
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <FormControl>
        <InputLabel>write your todo..</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>

      <Button
        className="button"
        disabled={!input}
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="success"
      >
        Add task
      </Button>

      <ul>
        {/* iterate through each element of todos array and populate it with jsx and map function */}
        {todos.map((todo) => (
          <Todo text={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
