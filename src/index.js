import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Conversation from './containers/Conversation/Conversation';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={App}
      />

      <Route
        path="/conversation/:id"
        exact
        component={Conversation}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
