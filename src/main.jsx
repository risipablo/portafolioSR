import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import App from './App.jsx'
import './estilos/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App/>}> </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
)
