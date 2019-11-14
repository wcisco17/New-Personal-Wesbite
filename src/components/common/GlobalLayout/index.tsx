import * as React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

import theme from '../../../config';
import Navigation from '../../Navigation';
import { GlobalStyled, ThemeProvider } from './styles';

export const Footer = styled.footer`
    text-align: center;
    padding: 3rem 1rem;
    bottom: -2000px;
    span {
        font-size: 0.75rem;
    }
`

const GlobalLayout: React.FC<{ path: any }> = ({ children, path }) => {
    return (
        <ThemeProvider theme={theme} >
            <Fragment>
                <GlobalStyled />
                <Navigation path={path} />
                {children}
            </Fragment>
        </ThemeProvider>
    )
}

export default GlobalLayout;
