import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ItemList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteButtonClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <ListGroup>
        {items.map(({ name, _id }) => (
          <ListGroupItem key={_id}>
            <Button onClick={this.onDeleteButtonClick.bind(this, _id)}>
              X
            </Button>
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

ItemList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);
