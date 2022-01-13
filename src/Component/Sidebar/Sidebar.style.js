import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants/Index.js";
import { pxToRem } from "../../utils/index.js";

export const StyledSidebar = styled.aside`
  height: calc(100vh - ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)});
  background: ${COLORS.lightGrey};
  width: ${pxToRem(STYLING_CONFIGS.SIDEBAR_WIDTH)};
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(20)};
  border-right: ${pxToRem(1)} solid ${COLORS.iconGrey};
  .menu-list {
    display: flex;
    flex-direction: column;
    margin-top: ${pxToRem(20)};
    margin-bottom: auto;
  }
  .menu-list-item {
    /* margin-bottom: ${pxToRem(25)}; */
    padding: ${pxToRem(20)};
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${COLORS.black};
    height: ${pxToRem(36)};
    font-size: ${pxToRem(14)};

    &:hover {
      background: #fff;
    }

    span {
      margin-left: ${pxToRem(5)};
    }
  }
`;
