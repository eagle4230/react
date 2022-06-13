import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatList } from './Components/ChatList/ChatList';
import { Header } from './Components/Header';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatPage } from './pages/ChatPages';

export const App = () => {
  const [chats, setChats] = useState([]);

  const onAddChat = (newChat) => {
    setChats([...chats, newChat]);
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
              element={<ChatPage chats={chats} onAddChat={onAddChat} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404 page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
