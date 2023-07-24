import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { getUserName } from 'redux/selectors';
import { User, UserText, Span, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <User>
      <UserText>
        <Span>Welcome, &nbsp;</Span>
        {userName}!
      </UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </User>
  );
}
