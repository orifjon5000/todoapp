import React from "react";
import { StyledAddToDo } from "./AddToDo.style";

import AddTodo from ".";

export default function AddToDo() {
  return (
    <StyledAddToDo>
      <h2>Too name</h2>
      <AddTodo />
    </StyledAddToDo>
  );
}
