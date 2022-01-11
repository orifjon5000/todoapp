import styled from "styled-components";
import { COLORS } from "../../constants/Index";
import { pxToRem } from "../../utils";

export const StyledHeader = styled.header`
  /* padding: ${pxToRem(5)}; */
  background-color: ${COLORS.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(48)}; //48

  .grid-wrapper {
    display: flex;
    align-items: center;
  }

  h5 {
    /* padding:${pxToRem(32)}; */
    margin-left: ${pxToRem(10)};
    font-weight: 400;
    cursor: pointer;
  }
  .header-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${pxToRem(12)};

    button {
      background-color: red;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      position: relative;
      height: 100%;

      &:hover {
        background: ${COLORS.darkblue};
      }
      .header-notification > span {
        background: ${COLORS.darkblue};
        width: ${pxToRem(20)};
        color: #fff;
        font-size: ${pxToRem(14)};
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${pxToRem(20)};
        border-radius: 50%;
        position: absolute;
        top: ${pxToRem(-5)};
      }
    }
  }

  .header-input {
    width: 100%;
    max-width: ${pxToRem(400)};
    margin: 0 ${pxToRem(10)};
    border: none;
    input {
      width: 100%;
      height: ${pxToRem(32)};
      border-radius: ${pxToRem(4)};
      border: ${pxToRem(1)} solid ${COLORS.grey};
      background-color: ${COLORS.lightGrey};
    }
  }
`;
