import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

export const Profile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <h2>Profile page</h2>
      <p>{theme === 'light' ? '☼' : '☀'} </p>
      <button onClick={() => toggleTheme()}>изменить тему</button>
    </>
  );
};
// export default Profile; //для lazy react
