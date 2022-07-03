import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { ChatPage } from '../../pages/ChatPage/ChatPages';
import { Main } from 'src/pages/Main';
import { Profile } from 'src/pages/Profile';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { firebaseAuth } from 'src/services/firebase';
import { changeAuth } from 'src/store/profile/slice';
import { ChatList } from '../ChatList/ChatList';
import { Header } from '../Header';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  // useEffect(() => {
  //   const unsubscribe = onValue(messagesRef, (snapshot) => {
  //     const data = snapshot.val();

  //     const newChats = Object.entries(data).map((item) => ({
  //       id: item[0],
  //       name: item[1].name,
  //     }));

  //     setChats(newChats);
  //     setMessagesDB(data);
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route
          path="profile"
          element={<PrivateRoute component={<Profile />} />}
        />
        <Route path="articles" element={<Articles />} />
        <Route path="about" element={<AboutWithConnect />} />
        <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chats" element={<PrivateRoute />}>
          <Route index element={<ChatList />} />
          <Route path=":chatId" element={<ChatPage />} />
        </Route>
      </Route>

      <Route path="*" element={<h2>404 page</h2>} />
    </Routes>
  );
};
