import { AuthContainer, NavLinkReg, NavLinkLog } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthContainer>
      <NavLinkReg to="/register">Register</NavLinkReg>
      <NavLinkLog to="/login">LogIn</NavLinkLog>
    </AuthContainer>
  );
}
