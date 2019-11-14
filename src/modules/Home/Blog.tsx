import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';

import BlogPost from '../../components/BlogPost';
import { BlogPostNode } from '../../types/homepageTypes';
import { SeeAll, SideProjectContainer } from './FeaturedProjects';


interface IProps {
    fithTitle: string;
};

const BlogShowcase: React.FC<IProps> = (props) => {
    return (
        <Fragment>
            <StaticQuery
                query={blogPageQuery}
                render={data => {
                    const blog: Array<BlogPostNode> = data.prismic.allBlogposts.edges;
                    return (
                        <Fragment>
                            <div className="top-header">
                                <h1 className='skills-title'>{props.fithTitle}</h1>
                                <SeeAll to='/blog' big={false} >See All</SeeAll>
                            </div>
                            <SideProjectContainer>
                                {
                                    blog.map(({ node: { title, date, pill, image } }, key) => {
                                        if (key >= 2) return;
                                        return (
                                            <BlogPost
                                                key={key}
                                                title={title[0].text}
                                                date={date[0].text}
                                                pill={pill}
                                                src={image.url}
                                                alt={image.alt}
                                            />
                                        )
                                    })
                                }
                            </SideProjectContainer>
                        </Fragment>
                    )
                }}
            />
        </Fragment>
    )
};

export default BlogShowcase;

export const blogPageQuery = graphql`
{
  prismic {
    allBlogposts {
      edges {
        node {
          date
          image
          pill
          title
        }
      }
    }
  }
}
`;
