import {createStore,compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

//here we can also add other arguments in the middleware function
// we can also add support for hot reloading or redux dev tools extension
// https://github.com/coryhouse/react-slingshot/blob/master/src/store/configureStore.js
function configureStoreDev (initialState)
{
  const middlewares = [
  // Add other middleware on this line...

  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  reduxImmutableStateInvariant(),

  // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  thunk
];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );
  return store;
}

function configureStoreProd(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;


export default configureStore;
