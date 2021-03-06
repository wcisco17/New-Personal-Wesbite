import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import Elipse from '../components/common/Elipse';
import GlobalLayout, { Footer } from '../components/common/GlobalLayout';
import { ContactButton } from '../components/Navigation';
import theme from '../config';
import BlogShowcase from '../modules/Home/Blog';
import DesignProjects from '../modules/Home/DesignProjects';
import FeaturedProjetcs from '../modules/Home/FeaturedProjects';
import Skills from '../modules/Home/Skills';
import { HomePageProps } from '../types';

const me = require("../images/me.png");

const HomeContainer = styled.section`
    position: absolute;
    top: 120px;
    margin: 0 5.3rem;
    .home-container {
        display: flex;
        .home-container__text {
            line-height: 2;
            .home-paragraph {
                max-width: 750px;
            }
        }
        
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

const RootApp: React.FC<HomePageProps> = ({ data }) => {
  function onClick(): string {
    return window.location.href = `mailto:wsissoko65@gmail.com`;
  }
  const doc = data.allPrismicHomepages.nodes[0].data

  return (
    <GlobalLayout>
      <HomeContainer>
        <div className="home-container">
          <div className="home-container__text">
            <h1>{doc.firsttitle.text},</h1>
            <p className="home-paragraph">
              {doc.text.text}
            </p>
            <ContactButton onClick={onClick} big>
              <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              Get a quote
                </ContactButton>
          </div>

          <img src={me} className="home-container__image" />
        </div>
        <div className="elipse-top">
          <Elipse />
        </div>

        <Skills
          secondtitle={doc.secondtitle}
          skillsData={doc.skills}
        />

        <FeaturedProjetcs
          thirdtitle={doc.thirdtitle.text}
          featuredprojects={doc.sideprojects}
          isDisplay
        />

        <div className="elipse-bottom-left">
          <Elipse />
        </div>

        <DesignProjects
          fourthtitle={doc.fourthtitle.text}
          designprojects={doc.designprojects}
        />

        <BlogShowcase
          fithTitle={doc.fifthtitle.text}
        />

        <Footer style={{ marginTop: 50, marginBottom: 50 }} >
          &copy; 2019 by Williams Sissoko. All rights reserved. <br />
          <a href="https://github.com/wcisco17/">GitHub Repository</a> <br />
        </Footer>
      </HomeContainer>
    </GlobalLayout>
  )
};

export const homepageQuery = graphql`
query HomeQuery {
  allPrismicHomepages {
    nodes {
      data {
        fifthtitle {
          text
        }
        designprojects {
          image {
            alt
            url
          }
          title {
            text
          }
          subtitle {
            text
          }
          link {
            url
          }
        }
        firsttitle {
          text
        }
        fourthtitle {
          text
        }
        secondtitle {
          text
        }
        sideprojects {
          title {
            text
          }
          subtitle {
            text
          }
          link {
            url
          }
          image {
            url
          }
        }
        skills {
          image {
            alt
            url
          }
          text1 {
            text
          }
        }
        text {
          text
        }
        thirdtitle {
          text
        }
      }
    }
  }
}
`;

export default RootApp;
