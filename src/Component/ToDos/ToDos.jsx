import React from 'react';
import { StyledTodos } from './ToDos.style';
import AddTodo from '../AddToDo';
import axios from '../../utils/axios';

import ToDoItems from './ToDoItems';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/todos');
      const { data: todosa, meta: { pagination } } = data;
      setTodos(todosa);
      setLoading(false);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [])
  console.log(todos)

  return (
    <StyledTodos>
      <h2>Todo name</h2>
      {
        loading ? 'Loading...' : <AddTodo />
      }

      {
        todos.map((item) => {
          const { id, attributes } = item;
          return <ToDoItems key={id} data={{ ...attributes, id }} />
        })
      }
    </StyledTodos>
  )
}
