import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';

const rootReducer = combineReducers({Recipes, RecipeDetail});

export default rootReducer;
