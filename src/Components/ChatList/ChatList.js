import { ListItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { push, remove, set } from 'firebase/database';
import {
  getChatById,
  getMessageListById,
  messagesRef,
} from '../../services/firebase';

export const ChatList = ({ chats, messagesDB }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      set(messagesRef, {
        ...messagesDB,
        [value]: {
          name: value,
        },
      });

      push(getMessageListById(value), {
        text: 'Chat has been created',
        author: 'Admin',
      });

      setValue('');
    }
  };

  const handleDeleteChat = (chatId) => {
    remove(getChatById(chatId));
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => handleDeleteChat(chat.id)}> X </button>
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
