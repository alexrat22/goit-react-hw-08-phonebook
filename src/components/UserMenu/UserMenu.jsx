import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { getUserName } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <>
      <p>Welcome, {userName}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </>
  );
}
