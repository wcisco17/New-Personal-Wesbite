import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import ItemBlog from '../components/BlogItem';
import GlobalLayout, { Footer } from '../components/common/GlobalLayout';
import theme from '../config';
import { BlogPostData } from '../types/blogPost';

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

const BlogPage: React.FC<BlogPostData> = (props) => {
    const { nodes: blog } = props.data.allPrismicBlogpost
    return (
        <GlobalLayout path={(props as any).location} >
            <h3>Blog Post</h3>
            <BlogContainer>
                <h1 className='blog-title' >Blog</h1>
                <p className="blog-small-text">Tech stuff & a mix of tutorials and news</p>
                {
                    blog.map(({ data: { title, date, pill, image, text } }, id) => {
                        console.log()
                        return (
                            <ItemBlog
                                key={id}
                                title={title.text}
                                date={date.text}
                                pill={pill}
                                src={image.url}
                                alt={image.alt}
                                excerpt={!text ? null : text.text}
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
query BlogPostQuery {
  allPrismicBlogpost {
    nodes {
      data {
        text {
          text
        }
        title {
          text
        }
        image {
          alt
          url
        }
        date {
          text
        }
        pill
        keytext
      }
    }
  }
}

`;