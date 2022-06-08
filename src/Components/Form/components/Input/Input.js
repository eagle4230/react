import TextField from '@mui/material/TextField';
import './Input.css';

export const Input = ({ text, onChange }) => {
  return (
    <TextField
      className="input"
      type="text"
      placeholder="  Your message..."
      value={text}
      onChange={onChange}
      data-testid="input"
      variant="outlined"
      style={{ marginRight: '10px' }}
    />
  );
};
