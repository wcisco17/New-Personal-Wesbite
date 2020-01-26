import { graphql, Link } from 'gatsby';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import Back from '../components/common/Back';
import theme from '../config';
import { BlogPostData } from '../types/pill';

const BlogsContainer = styled.section`
`;

const Background = styled.div`
  background-image: url(${props => props.itemProp});
  height: 60vh;
  background-position: bottom;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Dark = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  .title-blog {
    color: black !important;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    h1 {
      text-align: center;
      font-size: 3rem;
    }
  }
`;

const BackButton = styled(Link)`
      background:white;
      cursor: pointer;
      box-shadow: 1px 2px 2px
      black;
      border-bottom-right-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      ${theme.media.media_SM} {
        /* left: 25px; */
      }
`;

export const Wrapper = styled.section`
        grid-column: 2;
        box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
        background-color: ${theme.colors.white};
        border-radius: 1rem;
        margin: 0px 20vh;
        position: absolute;
        top: 300px;
        padding: ${props => props.about};

        .container-blog-items {
          p {
            font-size: 1.2rem;
            line-height: 2.5rem;
            margin: 20px;
          }
          img {
            margin: 0 auto;
            display: block;
            border-radius: 20px;
          }
        }
        
    @media (max-width: ${theme.other.breakpoints.l}) {
            padding: 2rem 2rem;
            margin: 0px 4vh
        }
        @media (max-width: ${theme.other.breakpoints.m}) {
            padding: 3rem 2rem;
            margin: 0px 8vh;
            text-align: center;
        }
        @media (max-width: ${theme.other.breakpoints.xs}) {
            padding: 2rem 1.2em;
            margin: 0px 1vh;
        }
        overflow: hidden;
`

const BlogPost: React.FC<BlogPostData> = (props) => {
  const { nodes: blog } = props.data.allPrismicBlogpost;

  return (
    <BlogsContainer>
      {
        blog.map((items, key: number | any) => {
          return (
            <Background itemProp={items.data.image.url}>
              <Dark>
                <Wrapper>
                  <div className="content">
                    <div className="back">

                      <BackButton to='/blog'>
                        <Back />
                      </BackButton>
                    </div>
                    <div className="title-blog">
                      <h1 style={{ color: theme.colors.white }}>{items.data.title.text}</h1>
                    </div>
                  </div>
                  <Fragment key={key}>

                    <div className="container-blog-items">
                      <p>
                        {items.data.text.text}
                      </p>
                      {
                        items.data.image.url !== null && (
                          <Fragment>
                            {
                              typeof items.data.image.url !== 'undefined' && (
                                <img src={items.data.image.url} alt={items.data.image.alt} style={{ width: 400, height: 300 }} />
                              )
                            }
                          </Fragment>
                        )
                      }
                    </div>
                  </Fragment>
                </Wrapper>
              </Dark>
            </Background>
          )
        })
      }
    </BlogsContainer>
  )
}

export default BlogPost;

export const blogPostFilter = graphql`
query BLOG_FILTER($keytext: String!) {
  allPrismicBlogpost(filter: {data: {keytext: {eq: $keytext}}}) {
    nodes {
      data {
        date {
          text
        }
        image {
          alt
          url
        }
        keytext
        pill
        text {
          text
        }
        title {
          text
        }
      }
    }
  }
}

`;