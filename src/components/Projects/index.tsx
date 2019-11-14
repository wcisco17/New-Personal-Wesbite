import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import theme from '../../config';

const ImageOverlay = styled.div`
  border-radius: ${theme.other.borderRadius.default};
  position: absolute;
  top: 0;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 2;
  opacity: 0.1;
  transition: opacity ${theme.other.transitions.default.duration};
  background-image: linear-gradient(
    30deg, ${theme.colors.primary.lightRed} 0%,
    ${theme.colors.primary.darkGray} 100%
  );
`

const Wrapper = styled(animated.article)`
  position: relative;
  z-index: 100;
  border-radius: ${theme.other.borderRadius.default};
  box-shadow: ${theme.other.shadow.feature.big.default};
  transition: ${theme.other.transitions.boom.transition};
  height: ${(props: { big: boolean }) => props.big ? '30rem' : '20rem'};
  margin-bottom: ${(props: { isDisplay: boolean }) => props.isDisplay && 50 + 'px'};
  &:hover {
    box-shadow: ${theme.other.shadow.feature.big.hover};
    transform: translateY(-20px) !important;
    ${ImageOverlay} {
      opacity: 0.9;
    }
  }
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: ${(props: { big: boolean }) => props.big ? 'calc(99.9% * 1 / 2 - 1rem)' : 'calc(80.9% * 1 / 3 - 2.5rem)'};
  width: calc(99.9% * 1 / 3 - 2.5rem);
  @media (max-width: 1340px) {
    height: ${(props: { big: boolean }) => props.big ? '30rem' : '15rem'};
  }
  @media (max-width: ${theme.other.breakpoints.l}) {
    &:first-child {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      margin-bottom: 2rem;
      height: ${(props: { big: boolean }) => props.big ? '30rem' : '15rem'};
    }
    &:nth-child(n + 2) {
      flex-basis: calc(99.9% * 1 / 2 - 1rem);
      max-width: calc(99.9% * 1 / 2 - 1rem);
      width: ${(props: { big: boolean }) => props.big ? 'calc(99.9% * 1 / 2 - 1rem)' : 'calc(80.9% * 1 / 3 - 2.5rem)'};
      height: ${(props: { big: boolean }) => props.big ? '30rem' : '15rem'};
    }
  }
  @media (max-width: ${theme.other.breakpoints.m}) {
    &:nth-child(n + 2) {
      height: 25rem;
    }
  }
  @media (max-width: 700px) {
    &:nth-child(n) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      margin-bottom: 2rem;
      height: 15rem;
    }
  }
  @media (max-width: ${theme.other.breakpoints.s}) {
    &:nth-child(n) {
      height: 12.5rem;
    }
  }
`

const StyledLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  text-decoration: none;
  z-index: 3;
  border-radius: ${theme.other.borderRadius.default};
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(#3498db, 0.35);
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
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
  overflow: hidden;
  top: 0;
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

const Customer = styled.div`
  text-align: left;
  margin-bottom: 0.5rem;
  color: #f0f0f0;
`

const Title = styled.h2`
  text-align: left;
  margin-bottom: 0;
  color: #f0f0f0;
`;

interface ProjectsProps {
  big: boolean;

  image: string | FluidObject['src'];
  title: string;
  subTitle: string;
  link: string;
  isDisplay?: boolean;
}

const FeaturedProject = ({
  big,
  image,
  title,
  subTitle,
  link,
  isDisplay
}: ProjectsProps) => {
  const fp = useSpring({
    delay: 100 * 1,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  return (
    <Wrapper isDisplay={isDisplay} big={big} data-testid={1} style={fp}>
      <Image>
        <Img
          fluid={{
            src: `${image}`
          } as any} />
      </Image>
      <StyledLink href={link} >
        <Customer>{subTitle}</Customer>
        <Title>{title}</Title>
      </StyledLink>
      <ImageOverlay />
    </Wrapper>
  )
}

export default FeaturedProject