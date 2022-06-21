import { ListItem } from '@mui/material';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/messages/actions';

export const ChatList = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chats = useSelector((state) =>
    Object.keys(state.messages).map((chat) => ({
      id: nanoid(),
      name: chat,
    }))
  );

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(addChat(value));
      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}> X </button>
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
