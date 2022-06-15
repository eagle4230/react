import { ListItem } from '@mui/material';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => onDeleteChat(chat.name)}> X </button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>Create Chat</button>
      </form>
    </>
  );
};
