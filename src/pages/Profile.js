import { useContext, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { changeName, toggleProfile } from '../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../store';

export const Profile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const visible = useSelector((state) => state.visible);
  const name = useSelector((state) => state.name);

  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <div>
        <p>{theme === 'light' ? '☼' : '☀'} </p>
        <button onClick={() => toggleTheme()}>изменить тему</button>
      </div>
      <p>{name}</p>
      <hr />
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => store.dispatch(toggleProfile())}>change visible</button>
      <br />
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => dispatch(changeName(value))} >change name</button>
    </>
  );
};
