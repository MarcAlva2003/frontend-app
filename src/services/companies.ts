import { BASE_URL } from "./getApiUrlBase";
import axios from "axios";
import Cookies from "js-cookie";
import { ICompany } from "./interfaces";

const COMPANIES_LIST_PATH = '/companies/list/'

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