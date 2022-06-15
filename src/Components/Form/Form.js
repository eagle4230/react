import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { AUTHOR } from '../../data';
import style from './Form.module.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useEffect } from 'react';
import { useRef } from 'react';

export const Form = memo(({ addMessage }) => {
  const [text, setText] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (addMessage.autofocus) {
      inputRef.current.autofocus;
    }
  }, [addMessage.autofocus, inputRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      author: AUTHOR.user,
      text,
    });
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
