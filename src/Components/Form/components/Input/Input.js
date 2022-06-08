import './Input.css';

export const Input = ({ text, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="  Your message..."
      value={text}
      onChange={onChange}
      data-testid="input"
    />
  );
};
