import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Manually looks at the url and displays a different set of components on the 
// screen without a http request or screen refresh. Also, displays new URL.
// {BrowserRouter} interacts with the history library and decides what to do 
// based on a change in the URL.
// {Route} will show component on page depending on URL. 
// {Switch} will differentiate between routes. react-router = lazy routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Will handle async GET requests by axios
import promise from 'redux-promise';

import reducers from './reducers';
import Repositories from './components/repositories';
import Saved from './components/saved';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	{/* BrowserRouter can only have one child element... */}
    	<div>
    		{/* Allows specific routing without rendering all / routes */}
    		<Switch>
    			<Route path = '/saved' component={Saved} />
    			<Route path = '/' component={Repositories} />
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
