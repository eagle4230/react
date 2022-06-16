import React, { useMemo, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatList } from './Components/ChatList/ChatList';
import { Header } from './Components/Header';
import { Main } from './pages/Main';
import { ChatPage } from './pages/ChatPages';
import { nanoid } from 'nanoid';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
// import { Profile } from './pages/Profile';

const Profile = React.lazy(() =>
  Promise.all([
    import('./pages/Profile').then((component) => ({
      default: component.Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
);

const defaultMessages = {
  default: [],
};

export const App = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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

  const onDeleteChat = (name) => {
    const newMessages = { ...messages };
    delete newMessages[name];
    setMessages(newMessages);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Main />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chats">
                <Route
                  index
                  element={
                    <ChatList
                      chats={chats}
                      onAddChat={onAddChat}
                      onDeleteChat={onDeleteChat}
                    />
                  }
                />
                <Route
                  path=":chatId"
                  element={
                    <ChatPage
                      chats={chats}
                      onAddChat={onAddChat}
                      messages={messages}
                      onAddMessage={onAddMessage}
                      onDeleteChat={onDeleteChat}
                    />
                  }
                />
              </Route>
            </Route>
            <Route path="*" element={<h2>404 page</h2>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Suspense>
  );
};
