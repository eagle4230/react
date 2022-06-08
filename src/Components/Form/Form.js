import { useState } from "react";
import { AUTHOR } from "../../data";
import style from './Form.module.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export const Form = ({ addMessage }) => {
    const [text, setText] = useState('');

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
            <Input text={text} setText={setText} onChange={(e) => setText(e.target.value)} />
            <Button label="SEND" />
        </form>
    )
}