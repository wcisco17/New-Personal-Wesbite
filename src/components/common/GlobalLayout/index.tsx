import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import theme from '../../../config';
import Navigation from '../../Navigation';
import { GlobalStyled, ThemeProvider } from './styles';

interface SiteMetadata {
    title: string;
    description: string;
    author: string;
}

interface Site {
    siteMetadata: SiteMetadata;
}

interface SiteData {
    site: Site;
}

export const Footer = styled.footer`
    text-align: center;
    padding: 3rem 1rem;
    bottom: -2000px;
    span {
        font-size: 0.75rem;
    }
`;

const GlobalLayout: React.FC = ({ children }) => {
    const data = useStaticQuery(staticQuery);
    const { title, author } = (data as SiteData).site.siteMetadata;

    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} - {author}</title>
            </Helmet>
            <ThemeProvider theme={theme} >
                <Fragment>
                    <GlobalStyled />
                    <Navigation />
                    {children}
                </Fragment>
            </ThemeProvider>
        </Fragment>
    )
}

export default GlobalLayout;

export const staticQuery = graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
`;

