import * as api from '../api';

export function test(data, cb) {
   console.log("test action creator");
   return (dispatch, prevState) => {
      dispatch({type: 'TEST'});
   };
}

export function searchRecipes(body, cb) {
   return (dispatch, prevState) => {
      api.getRecipes(body)
         .then((response) => {
            dispatch({type: 'GET_RECIPES', recipes: response.results})
         })
         .then(() => cb())
   }
}