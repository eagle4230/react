import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../services/firebase';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(email, password);
      navigate('/chats', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <p>Логин:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      {loading && <div>Loading...</div>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
