import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
