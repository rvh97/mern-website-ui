import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'uuid';

class AddItemModal extends Component {
  state = {
    showModal: false,
    name: ''
  }

  toggle = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.name
    }

    this.props.addItem(newItem);
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Add item</Button>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Add item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup onSubmit={this.onSubmit}>
                <Label for="item">Item</Label>
                <Input type="textarea" name="name" id="item" placeholder="Add item" onChange={this.onChange} />
                <Button>Add item</Button>
                <Button onClick={this.toggle}>Cancel</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(AddItemModal);
