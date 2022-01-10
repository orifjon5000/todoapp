import styled from "styled-components";
import { COLORS } from "../../constants/Index";
import { pxToRem } from "../../utils";

export const StyledHeader = styled.header`
  padding: ${pxToRem(5)};
  background-color: ${COLORS.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(48)};

  .header-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${window.location.pathname === "/about"
      ? "red"
      : "transparent"};
  }
`;

