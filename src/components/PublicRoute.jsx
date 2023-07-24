import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
}