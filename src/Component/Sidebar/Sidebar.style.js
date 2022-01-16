import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants/Index.js";
import { pxToRem } from "../../utils/index.js";

export const StyledSidebar = styled.aside`
  height: calc(100vh - ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)});
  background: ${COLORS.lightGrey};
  width: ${pxToRem(STYLING_CONFIGS.SIDEBAR_WIDTH)};
  display: flex;
  flex-direction: column;
  /* padding: ${pxToRem(20)}; */
  border-right: ${pxToRem(1)} solid ${COLORS.iconGrey};
  .menu-list {
    display: flex;
    flex-direction: column;
    margin-top: ${pxToRem(20)};
    margin-bottom: auto;
  }

  .footer-menu {
    margin: 0;
    flex-direction: row;
    border-top: ${pxToRem(1)} solid ${COLORS.iconGrey};
    justify-content: space-between;
    span {
      display: none;
    }
    .menu-list {
      height: ${pxToRem(48)};
      width: auto;
    }
    a.active {
      color:${COLORS.black};
      background-color: transparent;
    }
    a.active::after {
      content: unset;
    }
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
    &.active {
      background-color: ${COLORS.iconGrey};
      position: relative;
      color: ${COLORS.blue};
      font-weight: 500;
    }
    &::after {
      content: "";
      width: 7px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: ${COLORS.blue};
    }
  }
`;
