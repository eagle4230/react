import React, { useEffect, useState } from 'react';
import { Form } from '../Components/Form';
import { MessageList } from '../Components/MessagesList';
import { AUTHOR } from '../data';
import style from '../App.module.css';
import { ChatList } from '../Components/ChatList/ChatList';

const startMessages = [
  {
    author: AUTHOR.user,
    text: 'Hello!',
  },
];

export const ChatPage = ({ chats, onAddChat }) => {
  const [messages, setMessages] = useState(startMessages);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Hello Artem!',
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <>
      <ChatList chats={chats} onAddChat={onAddChat} />
      <div className={style.flud}>
        <MessageList messages={messages} />
        <Form addMessage={addMessage} />
      </div>
    </>
  );
};
