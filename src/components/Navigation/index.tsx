import { Link } from 'gatsby';
import * as React from 'react';
import { useEffect } from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';

import theme from '../../config';
import Logo from '../common/Logo';

export const ContactButton = styled.button`
  background: ${theme.colors.primary.darkRed};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${((props: { big: boolean }) => props.big ? '1.5rem' : '1rem')};
  font-size: ${props => ((props: { big: boolean }) => props.big ? '1.2rem' : '1rem')};
  color: ${props => props.theme.colors.white};
  padding: ${props => ((props: { big: boolean }) => props.big ? '0.5rem 1.75rem' : '0.35rem 1.65rem')};
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background: #FBB03B;
    cursor: pointer;
    transform: translateY(-9px);
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: ${props => props.theme.colors.white};
  }

  
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${theme.fonts.regular};
  align-items: center;
  position: absolute;
  top: 46px;
  right: 20px;
`;

interface RouteProp {
  isRoute: boolean;
}

const NavItems = styled(Link)`
      color: ${(props: RouteProp) => props.isRoute ?
    theme.colors.primary.lightRed : theme.colors.primary.darkGray};
      text-decoration: none;
      font-weight: ${(props: RouteProp) => props.isRoute ? 900 : ''};
      margin-left: 2rem;
      font-weight: 900;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Routes = [
  {
    id: 0,
    title: 'Home',
    path: '/'
  },
  {
    id: 1,
    title: 'About Me',
    path: '/about'
  },
  {
    id: 2,
    title: 'Blog',
    path: '/blog'
  },
]

const Navigation: React.FC<{ path: any }> = ({ path }) => {
  const [pathName, setPath] = React.useState<string>('');

  let p = path.pathname;
  let globalTitle: string = document.title = `Sissoko | ${pathName}`;

  const changePath = () => Routes.map(({ title, path }) => p === path ? setPath(title) : setPath(title))

  useEffect(() => {
    changePath();
  }, [globalTitle]);

  useEffect(() => {
    globalTitle
  }, []);

  return (
    <div>
      <Headroom calcHeightOnResize disableInlineStyles>
        <div className="container-logo">
          <Link to="/" aria-label="LekoArts, Back to homepage">
            <Logo
            />
          </Link>
        </div>
        <Nav>
          {
            Routes.map(({ id, title, path }) => {
              return (
                <NavItems isRoute={p === path ? true : false} key={id} to={path}>
                  {title}
                </NavItems>
              )
            })
          }
        </Nav>
      </Headroom>
    </div>
  )
}

export default Navigation