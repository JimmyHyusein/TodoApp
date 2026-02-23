import React from "react";
import "./App.css";
import useEffect from "react";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
import TodoCounter from "./components/TodoCounter";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
