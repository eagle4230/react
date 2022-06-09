import Fab from '@mui/material/Fab';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ label }) => {
  return (
    <Fab className="button" variant="contained" type="submit" size="small">
      {label}
    </Fab>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};
