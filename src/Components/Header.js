import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { NAVIGATE } from '../data';
import { logOut } from '../services/firebase';
import { selectAuth } from '../store/profile/selectors';

export const Header = () => {
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signin', { replace: true });
  };

  const handleSignUp = () => {
    navigate('/signup', { replace: true });
  };

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <>
      <header style={{ backgroundColor: 'gold' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          {NAVIGATE.map((link) => (
            <li key={link.id}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </header>
      <div>
        {!isAuth && (
          <>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleSignUp}>sign up</button>
          </>
        )}
        {isAuth && (
          <>
            <button onClick={handleLogOut}>logout</button>
          </>
        )}
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
