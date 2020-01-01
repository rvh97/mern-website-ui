import React from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
