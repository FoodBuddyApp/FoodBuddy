import { combineReducers } from 'redux';

import Recipes from './Recipes';
import Options from './Options';
import RecipeDetail from './RecipeDetail';
import Users from './Users';

const rootReducer = combineReducers({Recipes, Options, RecipeDetail, Users});

export default rootReducer;
