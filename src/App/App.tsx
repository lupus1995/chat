import React, { memo } from 'react';
import './style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterWrapper from '../wrappers/RouterWrapper';

const App = memo(() => {
  return (
    <Router>
      <RouterWrapper />
    </Router>
  );
});

export default App;
