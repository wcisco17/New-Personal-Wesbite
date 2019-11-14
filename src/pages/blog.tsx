import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import ItemBlog from '../components/BlogItem';
import GlobalLayout, { Footer } from '../components/common/GlobalLayout';
import theme from '../config';
import { BlogPostNode } from '../types/homepageTypes';

const BlogContainer = styled.section`
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;

    .blog-title {
        text-align: center;
        font-size: 3rem;
    }

    .blog-small-text {
        text-align: center;
        color: ${theme.colors.grey};
        margin-bottom: 36px;
        top: -12px;
        position: relative;
    }
`;

interface IBlogProps {
    location: {
        pathName: string
    }
    data: any;
}

const BlogPage: React.FC<IBlogProps> = ({ data, location }) => {
    const blog: Array<BlogPostNode> = data.prismic.allBlogposts.edges;
    console.log('Blog', blog);

    return (
        <GlobalLayout path={location} >
            <BlogContainer>
                <h1 className='blog-title' >Blog</h1>
                <p className="blog-small-text">Tech stuff & a mix of tutorials and news</p>
                {
                    blog.map(({ node: { title, date, pill, image, text } }, id) => {
                        return (
                            <ItemBlog
                                key={id}
                                title={title[0].text}
                                date={date[0].text}
                                pill={pill}
                                src={image.url}
                                alt={image.alt}
                                excerpt={!text ? null : text[0].text}
                            />
                        )
                    })
                }
                <Footer>
                    &copy; 2019 by Williams Sissoko. All rights reserved. <br />
                    <a href="https://github.com/wcisco17/">GitHub Repository</a> <br />
                </Footer>
            </BlogContainer>
        </GlobalLayout>
    )
};

export default BlogPage;

export const queryBlog = graphql`
{
  prismic {
    allBlogposts {
      edges {
        node {
          date
          image
          pill
          text
          title
        }
      }
    }
  }
}
`;