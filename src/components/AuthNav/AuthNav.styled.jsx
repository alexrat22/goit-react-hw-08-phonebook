import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
`;

export const NavLinkReg = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  &.active {
    color: tomato; 
`;

export const NavLinkLog = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin: 0 30px;

  &.active {
    color: tomato; 
`;
