import { NavLink, Outlet } from 'react-router-dom';
import { NAVIGATE } from '../data';

export const Header = () => {
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
      <main>
        <Outlet />
      </main>
    </>
  );
};
