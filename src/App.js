import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
