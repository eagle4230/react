import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatList } from './Components/ChatList/ChatList';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<ChatList />} />
      </Routes>
    </BrowserRouter>
  );
};
