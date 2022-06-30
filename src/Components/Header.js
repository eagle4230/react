import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { NAVIGATE } from '../data';
import { selectAuth } from '../store/profile/selectors';
import { auth } from '../store/profile/slice';

export const Header = () => {
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/signin', { replace: true });
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
        {isAuth && <button onClick={() => dispatch(auth(false))}>logout</button>}
        {!isAuth && <button onClick={handleLogin}>login</button>}
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
