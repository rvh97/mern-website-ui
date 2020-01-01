import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import uuid from 'uuid';

class ItemList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'An item' },
            { id: uuid(), name: 'Another item' },
            { id: uuid(), name: 'One more item' },
            { id: uuid(), name: 'Last item' }
        ]
    }

    render() {
        const { items } = this.state;
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

export default ItemList