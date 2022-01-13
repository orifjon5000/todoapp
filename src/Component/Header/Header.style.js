import styled from "styled-components";
import { COLORS,STYLING_CONFIGS } from "../../constants/Index";
import { pxToRem } from "../../utils";

export const StyledHeader = styled.header`
padding: 0 ${pxToRem(16)};
  background-color: ${COLORS.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)}; //48
  color:#fff; 

  .grid-wrapper {
    display: flex;
    align-items: center;
  }

  h5 {
    margin-left: ${pxToRem(10)};
    font-weight: 400;
    cursor: pointer;
  }
  .header-action {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      position: relative;
      height: 100%;
      width: ${pxToRem(40)};
      cursor: pointer;

      &:hover {
        background: ${COLORS.darkblue};
      }
       span {
        background: ${COLORS.darkblue};
        color: #fff;
        font-size: ${pxToRem(11)};
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${pxToRem(16)};
        height: ${pxToRem(16)};
        border-radius: 50%;
        position: absolute;
        top: ${pxToRem(2)};
        right: ${pxToRem(2)};
      }
    }
  }

  .header-input {
    width: 100%;
    max-width: ${pxToRem(400)};
    margin: 0 ${pxToRem(10)};
    input {
      border: none;
      outline: none;
      width: 100%;
      height: ${pxToRem(32)};
      border-radius: ${pxToRem(4)};
      border: ${pxToRem(1)} solid ${COLORS.grey};
      background-color: ${COLORS.lightGrey};
    }
  }
`;
