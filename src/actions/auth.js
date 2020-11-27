import * as types from "./types";
import history from "../history";

const userLogin = (email, password) => ({
  type: types.AUTH_LOGIN,
  email, password
});

const userLogout = () => ({
  type: types.AUTH_LOGOUT,
});

const fakeLoginRequest = (email, password) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      email === "tam.doan@codecomplete.jp", password = "Abc123456" ? resolve(email, password) : reject("No such user");
    }, 1000),
  );

export const doLogin = (email, password) => async dispatch => {
  try {
    const userResponse = await fakeLoginRequest(email, password);
    dispatch(userLogin(userResponse));
    history.push("/");
  } catch (error) {
    alert(error);
  }
};

export const doLogout = () => dispatch => {
  dispatch(userLogout());
};
