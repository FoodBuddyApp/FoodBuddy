var defaultState = {
   diet: [],
   intolerances: []
};

function Options(state = defaultState, action) {
   switch(action.type) {
      case 'UPDATE_DIET':
         state.diet = action.diet;
         return state;
      case 'UPDATE_INTOLERANCE':
         state.intolerances = action.intolerances;
         return state;
      default:
         return state;
   }
}

export default Options;