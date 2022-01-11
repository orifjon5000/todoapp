import {createGlobalStyle} from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../constants/Index";
export default createGlobalStyle`
*, *::after, *::before{
    box-sizing: border-box;
}
:root{
    font-size:${STYLING_CONFIGS.ROOT_SIZE};
    font-family: 'Source Sans Pro', 'Open sans', Arial,sans-serif;
}
body{
    background-color: ${COLORS.lightGrey};
}

`