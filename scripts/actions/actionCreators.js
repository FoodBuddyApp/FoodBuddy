export function test(data, cb) {
   console.log("test action creator");
   return (dispatch, prevState) => {
      dispatch({type: 'TEST'});
   };
}

export function searchRecipes(ingredients) {
   console.log("TODO: Implement search actionCreator")
   return (dispatch, prevState) => {
      dispatch({type: 'SEARCH'});
   }
}