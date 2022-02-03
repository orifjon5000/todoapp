import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants/Index";
import { pxToRem } from "../../utils";

export const StyledAddToDo = styled.div`
  margin: 0 24px;
  flex: 1;
  background: linear-gradient(
    180deg,
    white,
    white 52px,
    #e5e5e5 52px,
    #e5e5e5 52px
  );
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 #e5e5e5;
  background-color: ${COLORS.lightGrey};
`;
