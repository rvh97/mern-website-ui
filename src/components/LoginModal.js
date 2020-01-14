import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { getUser } from "../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class LoginModal extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    this.props.getUser();
  }

  buttonAction = () => {
    this.toggleLoginModal();
  };

  isLoggedIn = () => !!this.props.user.user;

  buttonLabel = () =>
    this.props.user.user ? this.props.user.user.email : "Login";

  toggleLoginModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  loginGoogle = () => {
    const { height, width } = window.screen;
    window.open(
      `${process.env.REACT_APP_SERVER_SOCKET}/auth/google`,
      "googleLoginWindow",
      `height=${height / 2},width=${width / 2},left=${width / 4},top=${height /
        4}`
    );
  };

  render() {
    return (
      <div>
        <Button onClick={this.buttonAction}>{this.buttonLabel()}</Button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleLoginModal}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Button color="primary" onClick={this.loginGoogle}>
              Login using Google
            </Button>{" "}
            <Button onClick={this.toggleLoginModal}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { getUser })(LoginModal);
