import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';
import FeaturedProject from '../components/Projects';
import theme from '../config';
import { SideProjectContainer } from '../modules/Home/FeaturedProjects';
import { DesignProjectsRoot } from '../types/design';

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

const Projects: React.FunctionComponent<DesignProjectsRoot> = (props) => {
  const { node } = props.data.prismic.allHomepagess.edges[0];

  return (
    <GlobalLayout path={(props as any).location}>
      <ProjectsContainer>
        <h1 className='blog-title'>Design Projects</h1>
        <div className="container-projects">
          <SideProjectContainer>
            {
              node.designprojects.map(({
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
              ... on PRISMIC__ExternalLink {
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