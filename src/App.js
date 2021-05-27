import React from 'react';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Photography from './Photography';
import { AnimateSharedLayout } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimateSharedLayout type="crossfade">
        <Route path="/photography" component={Photography} />
        <Route path="/" exact component={Home} />
      </AnimateSharedLayout>
    </Router>
  );
}

export default App;
