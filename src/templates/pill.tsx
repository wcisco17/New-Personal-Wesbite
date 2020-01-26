import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import ItemBlog, { isColorCode } from '../components/BlogItem';
import Back from '../components/common/Back';
import GlobalLayout from '../components/common/GlobalLayout';
import theme from '../config';
import { BlogPostData } from '../types/pill';

const Category = styled.span`
  color: white;
  background-color: ${(props: { color: string }) => props.color};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 1rem;
  font-size: 2rem;
`;

const PillContainer = styled.section`
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    .pill-container {
        text-align: center;
    }
    .blog-pill {
      margin-top: 6rem;
    }
`;


export const BackButton = styled(Link)`
      background:white;
      cursor: pointer;
      box-shadow: 1px 2px 2px
      black;
      position: absolute;
      left: 79px;
      top: -10px;
      border-radius: 50px;

      ${theme.media.media_SM} {
        left: 25px;
      }
`;


const PillPost: React.FC<BlogPostData> = (props) => {
  const title = (props as any).pathContext.pill;
  const color: string = isColorCode((props as any).pathContext.pill);
  const { nodes: blog } = props.data.allPrismicBlogpost;

  return (
    <GlobalLayout path={(props as any).location}>
      <PillContainer>
        <BackButton to='/blog'>
          <Back />
        </BackButton>
        <div className="pill-container">
          <Category color={color}>{title}</Category>
        </div>
        <div className="blog-pill">
          {
            blog.map(({ data: { title, date, pill, image, text } }, id) => {
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
        </div>
      </PillContainer>
    </GlobalLayout>
  )
};



export default PillPost;

export const pillFilter = graphql`
 query PILL_FILTER($pill:String!) {
  allPrismicBlogpost(filter: {data: {pill: {eq: $pill}}}) {
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