import { useState } from 'react';

export const ChatList = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: 1,
        name: value,
      },
    ]);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button>Create Chat</button>
    </form>
  );
};
