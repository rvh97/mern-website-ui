import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class LoginModal extends Component {
  state = {
    showModal: false,
    isLoggedIn: false,
    buttonLabel: 'Login'
  }

  buttonAction = () => {
    if(this.state.isLoggedIn) {
      this.logout();
    } else {
      this.toggleLoginModal();
    }
  }

  logout = () => {
    this.setState({ isLoggedIn: false, buttonLabel: 'Login' });
  }

  toggleLoginModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  loggedInSuccessfully = () => {
    this.setState({ isLoggedIn: true, buttonLabel: 'Logout' });
    this.toggleLoginModal();
  }

  render() {
    return (
      <div>
        <Button onClick={this.buttonAction}>{this.state.buttonLabel}</Button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleLoginModal}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Button color="primary" onClick={this.loggedInSuccessfully}>Login using Google</Button>
            {' '}
            <Button onClick={this.toggleLoginModal}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
