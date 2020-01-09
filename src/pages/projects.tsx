import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';
import theme from '../config';
import FeaturedProjetcs from '../modules/Home/FeaturedProjects';
import { HomePageProps } from '../types';

const ProjectsContainer = styled.section`
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;

    .blog-title {
        text-align: center;
        font-size: 3rem;
    }

    .container-projects {
        margin: 20px 80px;
        @media (max-width: ${theme.other.breakpoints.s}) {
            margin: 20px 30px;
        }
    }
`;

const Projects: React.FC<HomePageProps> = ({ data, location }) => {
  const { prismic: { allHomepagess: { edges } } } = data;
  const doc = edges.slice(0, 1).pop();
  if (!doc) return null;
  return (
    <GlobalLayout path={location}>
      <ProjectsContainer>
        <h1 className='blog-title'>Projects</h1>
        <div className="container-projects">

          <FeaturedProjetcs
            featuredprojects={edges[0].node.sideprojects}
            isDisplay={false}
          />

        </div>
      </ProjectsContainer>
    </GlobalLayout>
  )
};

export default Projects;

export const projectQuery = graphql`
{
  prismic {
    allHomepagess {
      edges {
        node {
          sideprojects {
            image
            link {
              ... on PRISMIC__ExternalLink {
                url
                _linkType
              }
            }
            subtitle
            title
          }
        }
      }
    }
  }
}
`;