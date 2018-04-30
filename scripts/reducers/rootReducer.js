import { combineReducers } from 'redux';

import Recipes from './Recipes';
import Options from './Options';

const rootReducer = combineReducers({Recipes, Options});

export default rootReducer;
