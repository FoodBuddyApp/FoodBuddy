import { combineReducers } from 'redux';

import Recipes from './Recipes';
import Options from './Options';
import RecipeDetail from './RecipeDetail';

const rootReducer = combineReducers({Recipes, Options, RecipeDetail});

export default rootReducer;
