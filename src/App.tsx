import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Assets/Hooks/authContext';
import Routes from './Routes/index';

function App() {
  return (
  <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  </AuthProvider> 
  );
}

export default App;
