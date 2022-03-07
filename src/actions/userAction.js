import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_CREATE_USER = "POST_CREATE_USER";


export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/Ijlalabimanyu/React-JS-CRUD-APP-With-Redux-Using-API-JSON/users"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/Ijlalabimanyu/React-JS-CRUD-APP-With-Redux-Using-API-JSON/users/" + id
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUserCreate = (values) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/Ijlalabimanyu/React-JS-CRUD-APP-With-Redux-Using-API-JSON/users", values
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: POST_CREATE_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: POST_CREATE_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

