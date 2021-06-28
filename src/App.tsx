import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photography from './Photography';
import Programming from './Programming';
import Work from './Work';
import Other from './Other';
import { AnimateSharedLayout } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimateSharedLayout type="crossfade">
          <Route path="/photography" component={Photography} />
          <Route path="/programming" component={Programming} />
          <Route path="/work" component={Work} />
          <Route path="/other" component={Other} />
          <Route path="/" exact component={Home} />
      </AnimateSharedLayout>
    </Router>
  );
}

export default App;
