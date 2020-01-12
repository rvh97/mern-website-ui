import React from "react";
import { store } from "react-notifications-component";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";

class Notifications extends React.Component {
  componentDidUpdate() {
    if (this.props.error.msg !== "") {
      this.showError(this.props.error.msg);
      this.props.clearErrors();
    }
  }

  showError = message => {
    store.addNotification({
      title: message,
      message: " ",
      type: "danger",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: +process.env.REACT_APP_ERROR_MESSAGE_DELAY,
        onScreen: true
      }
    });
  };

  render() {
    return null;
  }
}

Notifications.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { clearErrors })(Notifications);
