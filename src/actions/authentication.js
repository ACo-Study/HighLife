import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE
} from "./ActionTypes";
import axios from "axios";

/* LOGIN */
export function loginRequest(user_id, user_pw) {
  return dispatch => {
    dispatch(login());

    return axios
      .post("/api/auth/login", { user_id, user_pw })
      .then(response => {
        dispatch(loginSuccess(user_id));
      })
      .catch(error => {
        dispatch(loginFailure());
      });
  };
}

export function login() {
  return {
    type: AUTH_LOGIN
  };
}

export function loginSuccess(user_id) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    user_id
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE
  };
}
