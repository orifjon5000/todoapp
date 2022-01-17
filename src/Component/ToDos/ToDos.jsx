import React from "react";
import { StyledTodos } from "./ToDos.style";
import { useLocation, useParams } from "react-router-dom";
import AddTodo from "../AddToDo/AddToDo";
import Mockdata from '../../Mocks/todos.js'
import ToDoItems from "./ToDoItems";
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";
impor axios from '../../utils/axios.js'

export default function ToDos() {
  const location = useLocation();
  const params = useParams();

  const fetchTodos=async()=>{
    try{
const data=axios
    }
    catch(error){

    }
  }

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
