import React, { useEffect } from 'react';
import { Form } from '../Components/Form';
import { MessageList } from '../Components/MessagesList';
import { AUTHOR } from '../data';
import style from '../App.module.css';
import { ChatList } from '../Components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';

// const startMessages = [
//   {
//     author: AUTHOR.user,
//     text: 'Hello!',
//   },
// ];

export const ChatPage = ({ chats, onAddChat, messages, onAddMessage }) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: AUTHOR.bot,
          text: 'Hello Artem!',
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId, messages]);

  const handleAddMessage = (mesasge) => {
    if (chatId) {
      onAddMessage(chatId, mesasge);
    }
  };

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList chats={chats} onAddChat={onAddChat} />
      <div className={style.flud}>
        <MessageList messages={messages[chatId]} />
        <Form addMessage={handleAddMessage} />
      </div>
    </>
  );
};
