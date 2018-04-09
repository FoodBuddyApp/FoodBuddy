import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

let initialState = {

};

export default function configureStore() {
   return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
   );
}