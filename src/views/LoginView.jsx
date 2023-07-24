import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Form, Input, Button } from './LoginView.styled';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Form>
        <Input
          value={email}
          onChange={onChange}
          name="email"
          placeholder="Email"
          required
        />

        <Input
          value={password}
          onChange={onChange}
          name="password"
          placeholder="Password"
          required
        />

        <Button type="submit">LogIn</Button>
      </Form>
    </form>
  );
}
