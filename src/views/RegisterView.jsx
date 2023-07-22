import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerContact } from '../redux/operations';

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
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={onChange}
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={onChange}
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={onChange}
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
