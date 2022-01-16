import React from "react";
import { BsStar } from "react-icons/bs";
import { StyledTodosItem } from "./ToDos.style";
function ToDoItems(props) {
 const {title, due_date,is_completed,collection_id, content, category,is_important}=props.data
    return (
    <StyledTodosItem className="todo-item">
      <div><input type="checkbox" /></div>
      <div>
        <h4> {title}1</h4>
        <p>{content}</p>
        <div className="todo-item_details">
        <span>{category}2</span>
        <span>{due_date}3aa</span>
        </div>
      </div>
      <div><BsStar/></div>
    </StyledTodosItem>
  );
}

export default ToDoItems;
