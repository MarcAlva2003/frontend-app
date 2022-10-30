import { BASE_URL } from "./getApiUrlBase";
import axios from "axios";
import { SESSION_COOKIE_NAME } from "./auth";
import Cookies from "js-cookie";
import { ICompany } from "./interfaces";

const COMPANIES_LIST_PATH = '/companies/list/';
const COMPANY_DELETE_PATH = '/companies/delete/'

export const getCompaniesList = async () => {
  try{
    const res = await axios.get<any>(
      `${BASE_URL}${COMPANIES_LIST_PATH}`
    )
    return res.data;
  } catch (err) {
    return undefined;
  }
}

export const getDeleteCompany = async (id: string) => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  token && console.log(token);
  try{
    const res = await axios.delete<any>(
      `${BASE_URL}${COMPANY_DELETE_PATH}${id}`,
      {
        headers:{
          "Authorization": `Token ${token}`
        }
      }
    )
    return res.data;
  } catch (err) {
    return undefined;
  }
}