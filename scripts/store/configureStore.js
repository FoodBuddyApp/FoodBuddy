import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

let initialState = {

};

export default function configureStore() {
   return createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      // initialState,
      applyMiddleware(thunk, logger)
   );
}