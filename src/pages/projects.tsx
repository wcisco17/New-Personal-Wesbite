import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';
import theme from '../config';
import FeaturedProjetcs from '../modules/Home/FeaturedProjects';
import { HomePagesData } from '../types';

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

const Projects: React.FC = () => {
  const projectsData = useStaticQuery(projectQuery);
  const { sideprojects } = (projectsData as HomePagesData).allPrismicHomepages.nodes[0].data;
  return (
    <GlobalLayout path={location}>
      <ProjectsContainer>
        <h1 className='blog-title'>Projects</h1>
        <div className="container-projects">

          <FeaturedProjetcs
            featuredprojects={sideprojects}
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
      allPrismicHomepages {
        nodes {
          data {
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
          }
        }
      }
    }
`;