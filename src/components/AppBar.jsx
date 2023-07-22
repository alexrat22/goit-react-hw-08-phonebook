import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation';
import { getIsLoggedIn } from 'redux/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
