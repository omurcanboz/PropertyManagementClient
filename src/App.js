
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard';
import { config } from './Constants'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard></Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
