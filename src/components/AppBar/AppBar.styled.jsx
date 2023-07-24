import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  width: 80%;
  margin: 10px auto 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: rgba(86, 141, 229, 1);
`;

export const NavigationMenu = styled.div`
  font-size: 20px;
  margin: auto 0;
`;

export const NavLinkHome = styled(NavLink)`
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  margin: 0 20px;

  &.active {
    color: tomato;
  }
`;

export const NavLinkContacts = styled(NavLink)`
  font-weight: 600;
  color: #fff;
  text-decoration: none;

  &.active {
    color: tomato;    
`;
