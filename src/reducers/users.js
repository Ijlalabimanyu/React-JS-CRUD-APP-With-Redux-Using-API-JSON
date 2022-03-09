import {
  GET_USER_DETAIL,
  GET_USERS_LIST,
  POST_CREATE_USER,
  PUT_USER_EDIT,
  DELETE_USER,
} from "../actions/userAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,

  getUserDetail: false,
  errorUserDetail: false,

  getDataUser: false,
  errorDataUser: false,

  deleteUser: false,
  errordDeleteUser: false,
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
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    case POST_CREATE_USER:
      return {
        ...state,
        getDataUser: action.payload.data,
        errorDataUser: action.payload.errorMessage,
      };

    case PUT_USER_EDIT:
      console.log("4. Masuk Reducer : ");
      return {
        ...state,
        getDataUser: action.payload.data,
        errorDataUser: action.payload.errorMessage,
      };

    case DELETE_USER:
      return {
        ...state,
        deleteUser: action.payload.data,
        errordDeleteUser: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
