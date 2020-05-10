import axios from "axios";

export const LOGIN_URL = "http://localhost:5000/api/users/login";
export const REGISTER_URL = "http://localhost:5000/api/users/register";
export const REQUEST_PASSWORD_URL =
  "http://localhost:5000/api/users/forgot-password";

export const ME_URL = "http://localhost:5000/api/users/me";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(name, email, username, password, password2) {
  return axios.post(REGISTER_URL, {
    name,
    email,
    username,
    password,
    password2,
  });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
