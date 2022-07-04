import { Form } from '../../Components/Form/Form';
import { MessageList } from '../../Components/MessagesList';
import { ChatList } from '../../Components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from '../../HOC/WithClasses';
import style from './ChatPage.module.css';

export const ChatPage = ({ chats, messagesDB }) => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

  if (chatId && !messagesDB.find((chat) => chat?.name === chatId)) {
    console.log('redirect');
    return <Navigate to="/chats" replace />;
  }

  const messages = Object.entries(
    messagesDB.find((chat) => chat?.name === chatId).messageList
  ).map((message) => ({
    id: message[0],
    text: message[1].text,
    author: message[1].author,
  }));

  return (
    <>
      <ChatList chats={chats} messagesDB={messagesDB} />

      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <MessageListWithClass
        messages={chatId ? messages : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
