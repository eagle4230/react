import PropTypes from 'prop-types';
import style from './MessagesList.module.css';

export const MessageList = ({ messages }) => (
  <ul className={style.board}>
    {messages.map((message, idx) => (
      <li key={idx} className={style.message}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.array,
};
