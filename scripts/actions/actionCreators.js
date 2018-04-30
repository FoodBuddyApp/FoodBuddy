import * as api from '../api';

export function test(data, cb) {
   console.log("test action creator");
   return (dispatch, prevState) => {
      dispatch({type: 'TEST'});
   };
}

export function searchRecipes(url, cb) {
   return (dispatch, prevState) => {
      api.getRecipes(url)
         .then((response) => {
            dispatch({type: 'GET_RECIPES', recipes: response.results})
         })
         .then(() => cb())
   }
}

export function getRecipeDetail(body, cb) {
   return (dispatch, prevState) => {
      api.getRecipeDetail(body)
         .then((response) => {
            console.log(response)
            dispatch({type: 'GET_RECIPE_DETAIL', recipe: response})
         })
         .then(() => cb())
   }
}
   
export function updateDiet(diet) {
   return (dispatch, prevState) => {
      dispatch({type: 'UPDATE_DIET', diet});
   }
}

export function updateIntolerances(intolerances) {
   return (dispatch, prevState) => {
      dispatch({type: 'UPDATE_INTOLERANCE', intolerances});
   }
}
