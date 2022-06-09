import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({ text, onChange, inputRef }) => {
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
      size="small"
      autoFocus
      inputRef={inputRef}
    />
  );
};

Input.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};
