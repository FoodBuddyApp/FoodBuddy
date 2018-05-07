var defaultState = {
   loggedIn: window.sessionStorage.getItem("token") ? true : false,
   token: window.sessionStorage.getItem("token") ? window.sessionStorage.getItem("token") : ""
};

function Users(state = defaultState, action) {
   switch(action.type) {
      case 'SUCCESFUL_LOGIN':
         state.token = action.token;
         state.loggedIn = true;
         return state;
      default:
         return state;
   }
}

export default Users;