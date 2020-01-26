import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';
import FeaturedProject from '../components/Projects';
import theme from '../config';
import { SideProjectContainer } from '../modules/Home/FeaturedProjects';
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

const Projects: React.FC = (props) => {
  const data = useStaticQuery(designProjectQuery);
  const { designprojects } = (data as HomePagesData).allPrismicHomepages.nodes[0].data;
  return (
    <GlobalLayout>
      <ProjectsContainer>
        <h1 className='blog-title'>Design Projects</h1>
        <div className="container-projects">
          <SideProjectContainer>
            {
              designprojects.map(({
                title,
                image,
                link,
                subtitle,
              }, id) => {
                return (
                  <FeaturedProject
                    url={link.url}
                    big={true}
                    key={id}
                    title={title.text}
                    image={image.url}
                    link={null}
                    subTitle={subtitle.text}
                  />
                )
              })
            }
          </SideProjectContainer>
        </div>
      </ProjectsContainer>
    </GlobalLayout>
  )
};

export default Projects;

export const designProjectQuery = graphql`
    {
      allPrismicHomepages {
        nodes {
          data {
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
          }
        }
      }
    }
`;