import React from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import AddItemModal from './components/AddItemModal';
import LoginModal from './components/LoginModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <LoginModal />
        <Container>
          <AddItemModal />
          <ItemList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
