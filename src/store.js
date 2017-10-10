import { applyMiddleware, createStore } from 'redux';
import logger  from 'redux-logger';
import promiseMiddleware  from 'redux-promise-middleware';

import reducer from './reducers';

const createStoreWithMiddleware  = applyMiddleware(promiseMiddleware(),logger);

/* Store which maintaint the complete state of invoice application */

export default
createStore(reducer, createStoreWithMiddleware );
