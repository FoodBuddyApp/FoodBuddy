const baseURL = "https://nameless-hollows-31951.herokuapp.com/";
const headers = new Headers();
var cookie;

headers.set('Content-Type', 'application/json');

const reqConf = {
   headers: headers,
   credentials: 'include',
};

// Helper functions for the common request types

/**
 * make a get request
 * @param {string} endpoint
 * @returns {Promise}
 */
export function get(endpoint) {
   return fetch(baseURL + endpoint, {
      method: 'GET',
      ...reqConf
   })
}

/**
 * make a post request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function post(endpoint, body) {
   return fetch(baseURL + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...reqConf
   })
}

/**
 * make a put request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function put(endpoint, body) {
   return fetch(baseURL + endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...reqConf
   })
}

export function del(endpoint) {
   return fetch(baseURL + endpoint, {
      method: 'DELETE',
      ...reqConf
   })
}

// Functions for performing the api requests

export function getRecipes(url) {
   return get(url)
      .then((res) => res.json())
}