import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer itemQuantity="4" />
  </React.StrictMode>
);
