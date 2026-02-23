import React, { useState, useEffect } from "react";
import { API_URL } from "../api.js";

const TodoCounter = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    try {
      const response = await fetch(`${API_URL}/todos/count`);
      const jsonData = await response.json();

      setCount(jsonData.count);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCount();
  }, []);
  return (
    <>
      <h3 className="text-center mt-3">Total Todos: {count}</h3>
    </>
  );
};
export default TodoCounter;
