import React from "react";
import { StyledTodos } from "./ToDos.style";
import { useLocation, useParams } from "react-router-dom";
import AddTodo from "../AddToDo/AddToDo";
import Mockdata from '../../Mocks/todos.js'
import ToDoItems from "./ToDoItems";


export default function ToDos() {
  const location = useLocation();
  const params = useParams();
  return (
    <StyledTodos>
      <h2>Too name</h2>
      <AddTodo/>
      {
        Mockdata.map((item)=>{
          return(
            <ToDoItems key={item.id} data={item}  />
          )
        })
      }
    </StyledTodos>
  );
}
