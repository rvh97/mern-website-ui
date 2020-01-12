import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import AddItemModal from "./components/AddItemModal";
import LoginModal from "./components/LoginModal";
import Notifications from "./components/Notifications";
import ReactNotifications from "react-notifications-component";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ReactNotifications />
      <Notifications />
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
