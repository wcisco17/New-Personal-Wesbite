import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../../../config';

const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: ${theme.fonts.regular};
        src: url('./fonts/Montserrat-Regular.ttf');
    }
    @font-face {
        font-family: ${theme.fonts.bold};
        src: url('./fonts/Montserrat-Bold.ttf');
    }
    @font-face {
        font-family: ${theme.fonts.extraLight};
        src: url('./fonts/Montserrat-ExtraLight.ttf');
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: ${theme.fonts.regular};
    }
    .align-center {
        display: flex;
        align-items: center;
    }
`;

export {
    GlobalStyled,
    ThemeProvider,
}