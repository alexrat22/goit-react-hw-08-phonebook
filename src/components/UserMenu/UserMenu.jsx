import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { getUserName } from 'redux/selectors';
import { User, UserText, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <User>
      <UserText>{userName}</UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </User>
  );
}
