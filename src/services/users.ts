import { BASE_URL } from "./getApiUrlBase";
import Cookies from "js-cookie";
import { SESSION_COOKIE_NAME } from "./auth";
import axios from "axios";

const USER_DETAIL_PATH = '/users/user/'

export const getUserInformation = async () => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  console.log('token: ', token);
  console.log(`${BASE_URL}${USER_DETAIL_PATH}`);
  try {
    const res = await axios.get(
      `${BASE_URL}${USER_DETAIL_PATH}`,
      {
        headers:{
          "Authorization": `Token ${token}`
        }
      }
    )
    return res.data;
  } catch (err) {
    console.log('getUserInformation: ', err)
    return undefined;
  }
}