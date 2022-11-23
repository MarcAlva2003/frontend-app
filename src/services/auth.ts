import { BASE_URL } from "./getApiUrlBase";
import Cookies from "js-cookie";
import { IRegister } from "./interfaces";
import axios from "axios";

export const SESSION_COOKIE_NAME = 'user_session';
const AUTH_PATH = "/auth/login"
const REGISTER_PATH = "/users/register/"

export const isAuthenticated = () => Cookies.get(SESSION_COOKIE_NAME) !== undefined;

const loginUser = (token: string) => {
  console.log(token)
  const cookie_expitarion_time = new Date(new Date().getTime() + 15 * 60 * 1000);
  Cookies.set(SESSION_COOKIE_NAME, token, {
    expires: cookie_expitarion_time
  })
}

export const login = async ({ username, password }: { username: string, password: string }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}${AUTH_PATH}`,
      {
        username: username,
        password: password
      }
    )
    loginUser(res.data);
    return res.data;
  } catch (err) {
    return undefined;
  }
}

export const registerQuery = async ({ ...data }: IRegister) => {
  try {
    const res = await axios.post(
      `${BASE_URL}${REGISTER_PATH}`,
      {
        first_name: data.firstName,
        second_name: data.secondName,
        email: data.email,
        username: data.username,
        password: data.password
      }
    )
    loginUser(res.data.token);
    return res.data;
  } catch (err) {
    console.log(err);
    
    return undefined;
  }
}