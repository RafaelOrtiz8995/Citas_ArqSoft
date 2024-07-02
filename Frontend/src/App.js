import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CommerceForm from './components/CommerceForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registro-comercio" component={CommerceForm} />
      </Switch>
    </Router>
  );
};

export default App;
