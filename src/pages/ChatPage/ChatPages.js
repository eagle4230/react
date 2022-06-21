import { Form } from 'components/Form';
import { MessageList } from 'components/MessagesList';
import style from 'src/App.module.css';
import { ChatList } from 'src/Components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from 'src/HOC/WithClasses';
import style2 from './ChatPage.module.css';
import { useSelector } from 'react-redux';

// const startMessages = [
//   {
//     author: AUTHOR.user,
//     text: 'Hello!',
//   },
// ];

export const ChatPage = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

  const messages = useSelector((state) => state.messages);

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
  //   ) {
  //     const timeout = setTimeout(() => {
  //       onAddMessage(chatId, {
  //         author: AUTHOR.bot,
  //         text: 'Hello Artem!',
  //       });
  //     }, 1500);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [chatId, messages]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList />
      <div className={style.flud}>
        <MessageList messages={chatId ? messages[chatId] : []} />
        <MessageListWithClass
          messages={chatId ? messages[chatId] : []}
          classes={style2.border}
        />
        <Form />
      </div>
    </>
  );
};
