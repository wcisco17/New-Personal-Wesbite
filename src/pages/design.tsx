import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';
import FeaturedProject from '../components/Projects';
import theme from '../config';
import { SideProjectContainer } from '../modules/Home/FeaturedProjects';
import { DesignProject } from '../types/design';

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

const Projects: React.FC<DesignProject> = ({ data: { prismic: { allHomepagess: { edges } } } }) => {
  // console.log("Props", prismic.allHomepagess.edges);
  return (
    <GlobalLayout path={location}>
      <ProjectsContainer>
        <h1 className='blog-title'>Design Projects</h1>
        <div className="container-projects">
          <SideProjectContainer>
            {
              edges[0].node.designprojects.map(({
                title,
                image,
                link,
                subtitle,
              }, id) => {
                return (
                  <FeaturedProject
                    big={true}
                    key={id}
                    title={title[0].text}
                    image={image.url}
                    link={null}
                    subTitle={subtitle[0].text}
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
  prismic {
    allHomepagess {
      edges {
        node {
          designprojects {
            image
            link {
              ... on PRISMIC__FileLink {
                _linkType
                url
              }
            }
            title
            subtitle
          }
        }
      }
    }
  }
}
`;