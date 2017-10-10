import React from 'react'
import { render } from 'react-dom'

// Import routing components
import { HashRouter as Router} from 'react-router-dom';
import {IndexRoute, Route, Redirect } from 'react-router';


import { Provider } from 'react-redux';
import store  from './store';

const hashHistory = Router.hashHistory;

render(
   <Provider store={store}>
      <div>
        New Testing 19
      </div>
    </Provider>,
  document.getElementById('app')
)
