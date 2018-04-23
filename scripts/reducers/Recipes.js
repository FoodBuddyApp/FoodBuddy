function Recipes(state = {}, action) {
   switch(action.type) {
      case 'GET_RECIPES':
         return action.recipes;
      case 'TEST':
      default:
         return state;
   }
}

export default Recipes;