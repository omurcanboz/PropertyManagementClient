
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard';
import { config } from './Constants'

function App() {

  const keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}`,
    realm: "property-realm",
    clientId: "react-web-app"
  })

  const initOptions = { pkceMethod: 'S256' }

  const handleOnEvent = async (event, error) => {

    if (event === 'onAuthSuccess') {

      if (keycloak.authenticated) {

        
      }

    }

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
