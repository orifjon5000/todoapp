import styled from "styled-components";
import { COLORS } from "../../constants/Index";
import { pxToRem } from "../../utils";

export const StyledTodos = styled.div`
  .addTodo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${COLORS.blue};
    font-size: ${pxToRem(22)};
    border-radius: ${pxToRem(4)};
    border: none;
    width: 100%;
    outline: none;
    height: ${pxToRem(50)};
    background: ${COLORS.lightGrey};
  }


`;

export const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  border: ${pxToRem(1)} solid ${COLORS.iconGrey};
  padding: ${pxToRem(3)};

  .todo-item_details {
    margin-left: 0;
    h3,
    p {
      margin: 0;
      margin-bottom: ${pxToRem(7)};
    }
  }
`;
