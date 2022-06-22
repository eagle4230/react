import { connect } from 'react-redux';
import { toggleProfile } from 'src/store/profile/actions';

export const About = (props) => {
  return (
    <>
      <h2>About page</h2>

      <p>{props.name}</p>

      <input type="checkbox" checked={props.visible} readOnly />
      <button onClick={() => props.toggle()}>change visible</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name,
  visible: state.profile.visible,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
});

export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
