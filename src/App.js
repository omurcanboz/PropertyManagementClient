import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Property Management System</h1>
      <Dashboard></Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
