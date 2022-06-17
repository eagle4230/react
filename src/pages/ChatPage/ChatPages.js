import React, { useCallback, useEffect } from 'react';
import { Form } from 'components/Form';
import { MessageList } from 'components/MessagesList';
import { AUTHOR } from 'src/data';
import style from '../../App.module.css';
import { ChatList } from 'src/Components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from 'src/HOC/WithClasses';

import style2 from './ChatPage.module.css';

// const startMessages = [
//   {
//     author: AUTHOR.user,
//     text: 'Hello!',
//   },
// ];

export const ChatPage = ({
  chats,
  onAddChat,
  messages,
  onAddMessage,
  onDeleteChat,
}) => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

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

  const handleAddMessage = useCallback(
    (message) => {
      if (chatId) {
        onAddMessage(chatId, message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chatId, onAddMessage]
  );

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList
        chats={chats}
        onAddChat={onAddChat}
        onDeleteChat={onDeleteChat}
      />
      <div className={style.flud}>
        {/* <MessageList messages={messages[chatId]} /> */}
        <MessageListWithClass
          messages={messages[chatId]}
          classes={style2.border}
        />
        <Form addMessage={handleAddMessage} />
      </div>
    </>
  );
};
