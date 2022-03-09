import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_CREATE_USER = "POST_CREATE_USER";
export const PUT_USER_EDIT = "PUT_USER_EDIT";
export const DELETE_USER = "DELETE_USER";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/users")
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
      .get("http://localhost:3000/users/" + id)
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
      .post("http://localhost:3000/users", values)
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

export const putUserEdit = (values, id) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then(function (response) {
        // handle success
        console.log("3. Berhasil Update: ", response);
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log("3. Gagal Update : ", error);
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
