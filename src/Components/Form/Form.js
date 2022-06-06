import { useState } from "react";
import { AUTHOR } from "../../data";
import style from './Form.module.css';
import { Button } from "./components/Button/Button";

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
            <input className={style.input}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="  Your message..."
            />
            <Button label="SEND" />
        </form>
    )
}