import { ListItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { onValue, push, remove } from 'firebase/database';
import { getChatById, messagesRef } from '../../services/firebase';
import { useEffect } from 'react';

export const ChatList = () => {
  const [value, setValue] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const messages = snapshot.val();
      const newChats = Object.entries(messages).map((item) => ({
        id: item[0],
        name: item[1].name,
      }));
      setChats(newChats);
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      push(messagesRef, {
        name: value,
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
