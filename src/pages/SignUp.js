import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/firebase';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      await signUp(email, password);
      navigate('/signin', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
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
        <button>sign up</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
