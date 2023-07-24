import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { getUserName } from 'redux/selectors';
import defaultAvatar from '../../images/avatar.jpg';
import { User, UserText, Image, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <User>
      <UserText>
        <Image src={defaultAvatar}></Image>
        {userName}
      </UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </User>
  );
}
