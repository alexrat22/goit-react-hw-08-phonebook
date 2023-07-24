import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerContact } from '../redux/operations';
import { Form, Input, Button } from '../views/LoginView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(registerContact({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={name}
        onChange={onChange}
        name="name"
        placeholder="Name"
        required
      />

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
        placeholder="Password (min 7 symbols)"
        required
      />

      <Button type="submit">Register</Button>
    </Form>
  );
}
