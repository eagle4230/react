import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatList } from './Components/ChatList/ChatList';
import { Header } from './Components/Header';
import { Main } from './pages/Main';
import { ChatPage } from './pages/ChatPage/ChatPages';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { AboutWithConnect } from './pages/About';

const Profile = React.lazy(() =>
  Promise.all([
    import('./pages/Profile').then((component) => ({
      default: component.Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
);

export const App = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // const chats = useMemo(
  //   () =>
  //     Object.keys(messages).map((chat) => ({
  //       id: nanoid(),
  //       name: chat,
  //     })),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [Object.keys(messages).length, messages]
  // );

  return (
    <Provider store={store}>
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
                <Route path="/about" element={<AboutWithConnect />} />
                <Route path="/chats">
                  <Route index element={<ChatList />} />
                  <Route path=":chatId" element={<ChatPage />} />
                </Route>
              </Route>
              <Route path="*" element={<h2>404 page</h2>} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </Provider>
  );
};
