import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import theme from '../../config';
import { Date } from '../BlogPost';


const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
  margin-left: 4rem;

  ${theme.media.media_MEDIUM} {
        margin: 4rem 3rem;
  }
`

const Image = styled.div`
  position: relative;
  box-shadow: ${theme.other.shadow.feature.small.default};
  transition: ${theme.other.transitions.boom.transition};
  border-radius: ${theme.other.borderRadius.default};
  min-height: 300px;
  img {
    border-radius: ${theme.other.borderRadius.default};
  }
  &:hover {
    box-shadow: ${theme.other.shadow.feature.small.hover};
    transform: translateY(-12px);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${theme.other.borderRadius.default};
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
    &:focus {
      outline: none;
    }
  }
  flex-basis: calc(99.9% * 2 / 5 - 1rem);
  max-width: calc(99.9% * 2 / 5 - 1rem);
  width: calc(99.9% * 2 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`

const Information = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: ${theme.colors.primary.darkGray};
    transition: all ${theme.other.transitions.default.duration};
    ${theme.media.media_SM} {
        font-size: 1.4rem;
        line-height: 1.4;
    }
    &:hover {
      color: ${theme.colors.primary.lightRed};
    }
  }
  .category-item {
      display: flex;
    justify-content: flex-start;
  }
  flex-basis: calc(99.9% * 3 / 5 - 1rem);
  max-width: calc(99.9% * 3 / 5 - 1rem);
  width: calc(99.9% * 3 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`

const Excerpt = styled.div`
    margin-top: 2rem;
    line-height: 2.2rem;
    font-size: 1.3rem;

    ${theme.media.media_SM} {
        line-height: 1.5rem;
        font-size: 1rem;
    }
`

const Category = styled(Link)`
  color: white;
  background-color: ${(props: { color: string }) => props.color};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: ${theme.other.borderRadius.round};
  padding: 0.7rem 1rem;
  text-decoration: none;
  margin-right: 0.7rem;
`;

export const isColorCode = (pill: string) => {
  enum Color {
    react = "#61dafb",
    tech = "#00d301",
    news = "#FBB03B",
    isNull = '#EA4C89'
  }

  switch (pill) {
    case 'Tech':
      return Color.tech
    case 'React':
      return Color.react
    case 'News':
      return Color.news
    default:
      return Color.isNull
  }
};

interface ItemProps {
  title: string;
  date: string;
  pill: string;
  excerpt?: string | undefined | null;
  alt: any;
  src: string | FluidObject['src'];
};

export const triming = (s: string) => s.toLocaleLowerCase().split(' ').join().replace(/,/g, '-').trimEnd();

const ItemBlog: React.FC<ItemProps> = ({
  title,
  date,
  pill,
  excerpt,
  alt,
  src,
}) => {
  const color = isColorCode(pill);
  const text = `${(excerpt as string).slice(0, 400)}...`;
  const link = triming(title);
  return (
    <Wrapper>
      <Image>
        <Link to={`/blog/${link}`} title={'title'}>
          <Img fluid={{ src } as any} alt={alt} />
        </Link>
        <Date color={theme.colors.primary.lightRed}>
          <p>{date}</p>
        </Date>
      </Image>
      <Information>
        <Link to={`/blog/${link}`}>
          <h2>{title}</h2>
        </Link>
        <div className="category-item">
          <Category to={`/categories/${pill.toLowerCase()}`} color={(color as string)}>{pill}</Category>
        </div>
        <Excerpt>
          {text}
        </Excerpt>
      </Information>
    </Wrapper>
  )
}
export default ItemBlog;

