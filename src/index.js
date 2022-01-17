import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './Components/Sidebar-Modal/Context';


ReactDOM.render(
  <React.StrictMode>
  <AppProvider>
  <App />
  </AppProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


