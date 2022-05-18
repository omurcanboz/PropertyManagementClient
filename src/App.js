
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard';
import { config } from './Constants'
import Login from './components/Login/LoginScreen';

function App() {
  
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}></Login>
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard></Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
