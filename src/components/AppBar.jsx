import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/selectors';
import {
  Header,
  NavigationMenu,
  NavLinkHome,
  NavLinkContacts,
} from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <NavigationMenu>
          <NavLinkHome to="/">Home</NavLinkHome>
          {isLoggedIn && (
            <NavLinkContacts to="/contacts">Contacts</NavLinkContacts>
          )}
        </NavigationMenu>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
