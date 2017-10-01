/*eslint-disable import/default*/

import 'babel-polyfill'; // There are set of features that Babel cannot transpile so we are adding all
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router'; // browserHistory give us nice urls
import routes from './routes';
import {loadCurrencies} from './actions/currenciesActions';
import './styles/styles.css';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/toastr/build/toastr.min.css';

//Set the store redux
//If we pass an initial state parameter it will overwrite the initial state we are passing in each reducer
//  We might need this functionality in some cases where we need to start from a status on the server
const store=configureStore();

//Dispatch Actions
store.dispatch(loadCurrencies());


//The provider should wrap the complete application so it can connect it to our Redux store
//The provider connects with react-redux
render(
   <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
   </Provider>,
    document.getElementById('app')
);
