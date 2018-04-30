function RecipeDetail(state = {}, action) {
   switch(action.type) {
      case 'GET_RECIPE_DETAIL':
         return action.recipe;
      case 'TEST':
      default:
         return state;
   }
}

export default RecipeDetail;