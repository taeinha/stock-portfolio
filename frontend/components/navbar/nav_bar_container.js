import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.id,
  };
};

const mdp = dispatch => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(msp, mdp)(NavBar);
