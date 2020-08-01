import React from 'react';
import './style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterWrapper from '../wrappers/RouterWrapper';

const App = () => {
  return (
    <Router>
      <RouterWrapper />
    </Router>
  );
};

export default App;
