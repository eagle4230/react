import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage, addMessageWithReply } from 'src/store/messages/actions';
import { useParams } from 'react-router-dom';
import { AUTHOR } from 'src/data';

export const Form = memo(() => {
  const [text, setText] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (addMessage.autofocus) {
      inputRef.current.autofocus;
    }
  }, [inputRef]);

  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chatId) {
      dispatch(addMessageWithReply(chatId, { AUTHOR, text }));
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Input
        text={text}
        setText={setText}
        onChange={(e) => setText(e.target.value)}
        inputRef={inputRef}
      />
      <Button label="SEND" />
    </form>
  );
});

Form.propTypes = {
  addMessage: PropTypes.func,
};
