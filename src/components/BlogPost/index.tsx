import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import theme from '../../config';
import { triming } from '../BlogItem';

const ImageOverlay = styled.div`
  border-radius: ${theme.other.borderRadius.default};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  opacity: 0.1;
  transition: opacity ${theme.other.transitions.default.duration};
  background-image: linear-gradient(
    30deg,
    ${theme.colors.primary.orange} 0%,
    #000 100%
  );
`

const Wrapper = styled.article`
  position: relative;
  z-index: 100;
  border-radius: ${theme.other.borderRadius.default};
  box-shadow: ${theme.other.shadow.feature.small.default};
  transition: ${theme.other.transitions.boom.transition};
  height: 20rem;
  &:hover {
    box-shadow: ${theme.other.shadow.feature.small.hover};
    transform: translateY(-12px);
    ${ImageOverlay} {
      opacity: 0.9;
    }
  }
  flex-basis: calc(99.9% * 1 / 2 - 1rem);
  max-width: calc(99.9% * 1 / 2 - 1rem);
  width: calc(99.9% * 1 / 2 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 18rem;
    &:first-child {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: ${theme.other.breakpoints.s}) {
    height: 15rem;
  }

  .bottom {
    padding-left: 1.5rem;
    padding-bottom: 1.4rem;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: ${theme.other.borderRadius.default};
  &:focus {
    outline: none;
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: -10;
    border-radius: ${theme.other.borderRadius.default};
    transition: opacity ${theme.other.transitions.default.duration};
  }
  &:hover {
    &:after {
      opacity: 0;
    }
  }
`

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: ${theme.other.borderRadius.default};
  img {
    border-radius: ${theme.other.borderRadius.default};
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const Category = styled.span`
  color: white;
  background-color: ${(props: { color: string }) => props.color};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: ${theme.other.borderRadius.round};
  padding: 0.25rem 1rem;
`

export const Date = styled.div`
  color: white;
  background: ${props => props.color};
  position: absolute;
    right: 0;
    top: 0;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-left: 20px;

  p {
    margin-right: 15px;
  }
`

const Title = styled.h2`
  color: white;
  text-align: left;
  margin-bottom: 0;
  font-size: 1.7rem;
`;

interface IProps {
  date: string;
  pill: string;
  title: string;
  alt: string | any;
  src: string;
}

const BlogPost: React.FC<IProps> = ({
  date,
  pill,
  title,
  src,
  alt
}) => (
    <Wrapper data-testid={1}>
      <Image>
        <Img fluid={{ src } as any} alt={alt} />
      </Image>
      <StyledLink to={`/blog/${triming(title)}`}>
        <Information>
          <Date color={theme.colors.primary.lightRed} >
            <p>{date}</p>
          </Date>
        </Information>
        <div className="bottom">
          <Category color={(theme.colors.primary.darkRed)}>{pill}</Category>
          <Title>{title}</Title>
        </div>
      </StyledLink>
      <ImageOverlay />
    </Wrapper>
  )

export default BlogPost