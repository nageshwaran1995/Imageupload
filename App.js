import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Image from './Image.js';
import AddImage from './AddImage.js';
import ViewImage from './ViewImage.js';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Image} />
          <Route exact path="/new" component={AddImage} />
          <Route path="/:id" component={ViewImage} />
        </Switch>
      </div>
    </Router>
  );
}
