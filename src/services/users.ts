import { BASE_URL } from "./getApiUrlBase";
import Cookies from "js-cookie";
import { IUserEdit } from "./interfaces";
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

export const getEditUserInformation = async (data: IUserEdit) => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  try {
    const res = await axios({
      method: 'put',
      url: `${BASE_URL}${USER_DETAIL_PATH}`,
      headers: {
        "Authorization": `Token ${token}`
      },
      data: {
        operation: data.operation,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
      },
    });
    return res.data;
  } catch (err) {
    return undefined;
  }
}