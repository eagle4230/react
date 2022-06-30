import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../store/profile/slice';

export const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (login === 'gb' && password === 'gb') {
      dispatch(auth(true));
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <p>Логин:</p>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <p>Пароль:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>login</button>
      </form>
      {error && <p style={{ color: 'red' }}>Логин или пароль не верны!</p>}
    </>
  );
};
