import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: tomato;
`;

export const NavigationMenu = styled.div`
  font-size: 20px;
  margin: auto 0;
`;

export const NavLinkHome = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
`;

export const NavLinkContacts = styled(NavLink)`
  text-decoration: none;
`;
