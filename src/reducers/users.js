import { GET_USER_DETAIL, GET_USERS_LIST } from '../actions/userAction';

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  userDetail: false,
  errorUserDetail: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
