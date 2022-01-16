import styled from "styled-components";
import { COLORS } from "../../constants/Index";
import { pxToRem } from "../../utils";

export const StyledTodos = styled.div``;

export const StyledTodosItem = styled.div`
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
