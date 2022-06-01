import { useState } from "react";

export const Form = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('gb');

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <hr />
            <div style={{ marginLeft: '60px' }}>
                <p style={{ color: 'red' }}>Hello, React {count}</p>
                <button onClick={handleClick}>click</button>
                <p>Name: {name}</p>
                <input type="text" onChange={handleChange} value={name} />
            </div>
        </>
    );
}