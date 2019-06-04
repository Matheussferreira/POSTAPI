import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import './styles.css';

import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
