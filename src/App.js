import { useEffect, useState } from 'react';
import { Form } from './Components/Form';
import { MessageList } from './Components/MessagesList';
import { AUTHOR } from './data';
import style from './App.module.css';

const startMessages = [
  {
    author: AUTHOR.user,
    text: 'Hello!',
  },
];

export const App = () => {
  const [messages, setMessages] = useState(startMessages);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Hello Artem!',
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  });

  return (
    <div className={style.flud}>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
};
