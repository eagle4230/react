import style from './MessagesList.module.css';

export const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message, idx) => (
      <li key={idx} className={style.drive}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
