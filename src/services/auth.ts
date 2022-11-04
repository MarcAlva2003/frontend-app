import { BASE_URL } from "./getApiUrlBase";
import axios from "axios";
import Cookies from "js-cookie";

export const SESSION_COOKIE_NAME = 'user_session';
const AUTH_PATH = "/auth/login"

export const isAuthenticated = () => Cookies.get(SESSION_COOKIE_NAME) !== undefined;

export const login = async ({username, password} : {username: string, password: string}) => {
  try{
    const res = await axios.post(
      `${BASE_URL}${AUTH_PATH}`,
      {
        username: username,
        password: password
      }
    )
    return res.data;
  } catch (err) {
    return undefined;
  }
}