import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          {
            items.map(({ name }) => (
              <ListGroupItem>{ name }</ListGroupItem>
            ))
          }
        </ListGroup>
      </Container>
    );
  }
}

ItemList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { getItems })(ItemList)
