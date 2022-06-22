import { ListItem } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/messages/actions';
import { selectChats } from '../../store/messages/selectors';

export const ChatList = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );

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
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Create Chat</button>
      </form>
    </>
  );
};
