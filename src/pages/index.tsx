import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import Elipse from '../components/common/Elipse';
import GlobalLayout, { Footer } from '../components/common/GlobalLayout';
import { ContactButton } from '../components/Navigation';
import theme from '../config';
import DesignProjects from '../modules/Home/DesignProjects';
import FeaturedProjetcs from '../modules/Home/FeaturedProjects';
import Skills from '../modules/Home/skills';
import { HomePageProps } from '../types';

const me = require("../images/me.png");

const HomeContainer = styled.section`
    position: absolute;
    top: 120px;
    margin: 0 5.3rem;
    .home-container {
        display: flex;
        .home-container__image {
            border-radius: 20px;
            width: auto;
            height: auto;
            ${theme.media.media_MD} {
                display: none;
            }
        }
    }
    .skills-title {
        font-size: 2rem;
        ${theme.media.media_MD} {
            font-size: 1.7rem;
        }
    }
    ${theme.media.media_MD} {
        margin: 0 2rem;
    }

    .home-paragraph {
        font-size: 1.3rem;
        line-height: 2rem;

        ${theme.media.media_SM} {
            font-size: 1rem;
        }
    }
    .elipse-top {
        position: absolute;
        top: -310px;
        left: -210px;
        ${theme.media.media_MD} {
            left: -200px;
        }
    }
    .elipse-bottom-left {
        position: absolute;
        top: 350px;
        left: -210px;
    }

    .top-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 7rem;

        h4 {
            ${theme.media.media_SM} {
                font-size: 1.7rem;
            }
        }
    }
`;

const RootApp: React.FC<HomePageProps> = ({ data, location }) => {
    const { prismic: { allHomepagess: { edges } } } = data;
    const doc = edges.slice(0, 1).pop();
    if (!doc) return null;

    function onClick() {
        window.location.href = `mailto:wsissoko65@gmail.com`;
    }

    return (
        <GlobalLayout path={location} >
            <HomeContainer>
                <div className="home-container">
                    <div className="">

                        <h1>{(edges as any)[0].node.firsttitle[0].text},</h1>
                        <p className="home-paragraph">
                            {(edges as any)[0].node.text[0].text}
                        </p>
                        <ContactButton onClick={onClick} big>
                            <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                            </svg>
                            Contact
                </ContactButton>
                    </div>

                    <img src={me} className="home-container__image" />
                </div>
                <div className="elipse-top">
                    <Elipse />
                </div>

                <Skills
                    secondtitle={edges[0].node.secondtitle[0].text}
                    skillsData={(edges as Array<any>)[0].node.skills}
                />

                <FeaturedProjetcs
                    thirdtitle={edges[0].node.thirdtitle[0].text}
                    featuredprojects={edges[0].node.sideprojects}
                    isDisplay
                />

                <div className="elipse-bottom-left">
                    <Elipse />
                </div>

                <DesignProjects
                    fourthtitle={edges[0].node.fourthtitle[0].text}
                    designprojects={edges[0].node.designprojects}
                />

                {/* <BlogShowcase
                    fithTitle={edges[0].node.fifthtitle[0].text}
                /> */}

                <Footer style={{ marginTop: 50, marginBottom: 50 }} >
                    &copy; 2019 by Williams Sissoko. All rights reserved. <br />
                    <a href="https://github.com/wcisco17/">GitHub Repository</a> <br />
                </Footer>
            </HomeContainer>
        </GlobalLayout>
    )
};

export const homepageQuery = graphql`
{
  prismic {
    allHomepagess {
      edges {
        node {
          fourthtitle
          text
          firsttitle
          sideprojects {
            image
            link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            subtitle
            title
          }
          fifthtitle
          secondtitle
          designprojects {
            image
            link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            title
            subtitle
          }
          thirdtitle
          skills {
            image
            text1
          }
        }
      }
    }
  }
}
`;

export default RootApp;
