import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

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
      <div>
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={onChange}
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
      <button type="submit">LogIn</button>
    </form>
  );
}
