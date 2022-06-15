import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatList } from './Components/ChatList/ChatList';
import { Header } from './Components/Header';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatPage } from './pages/ChatPages';
import { nanoid } from 'nanoid';

// const defaultChats = [
//   {
//     id: 1,
//     name: 'default',
//   },
// ];

const defaultMessages = {
  default: [],
};

export const App = () => {
  const [messages, setMessages] = useState(defaultMessages);

  const chats = useMemo(
    () =>
      Object.keys(messages).map((chat) => ({
        id: nanoid(),
        name: chat,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.keys(messages).length, messages]
  );

  const onAddChat = (newChat) => {
    setMessages({
      ...messages,
      [newChat.name]: [],
    });
  };

  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats">
            <Route
              index
              element={<ChatList chats={chats} onAddChat={onAddChat} />}
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  onAddChat={onAddChat}
                  messages={messages}
                  onAddMessage={onAddMessage}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404 page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
