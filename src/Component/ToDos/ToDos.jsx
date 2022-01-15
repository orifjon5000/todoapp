import React from "react";
import { StyledTodos } from "./ToDos.style";

import AddTodo from "../AddTodo";
import { useLocation } from "react-router-dom";

export default function ToDos() {
  const location= useLocation()
  console.log(location);
  return (
    <StyledTodos>
      <h2>Too name</h2>
      <AddTodo />
    </StyledTodos>
  );
}
