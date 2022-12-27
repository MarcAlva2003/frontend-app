import { BASE_URL } from "./getApiUrlBase";
import Cookies from "js-cookie";
import { ICompany } from "./interfaces";
import { SESSION_COOKIE_NAME } from "./auth";
import axios from "axios";

const COMPANIES_LIST_PATH = '/companies/list/';
const COMPANY_ID_PATH = '/companies/';
const COMPANY_DELETE_PATH = '/companies/delete/'
const COMPANY_ADD_PATH = '/companies/add/'
const COMPANY_EDIT_PATH = '/companies/edit/'

export const getCompaniesList = async () => {
  try {
    const res = await axios.get<any>(
      `${BASE_URL}${COMPANIES_LIST_PATH}`
    )
    return res.data;
  } catch (err) {
    return undefined;
  }
}

export const getCompanyDetail = async (id: string) => {
  try {
    const res = await axios.get<any>(
      `${BASE_URL}${COMPANY_ID_PATH}${id}`
    )
    return res.data
  } catch (err) {
    return undefined;
  }
}

export const getDeleteCompany = async (id: string) => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  token && console.log(token);
  try {
    const res = await axios.delete<any>(
      `${BASE_URL}${COMPANY_DELETE_PATH}${id}`,
      {
        headers: {
          "Authorization": `Token 6721b4e84d8079671dd4e629e24e595e57c9ef3d`
        }
      }
    )
    return res.data;
  } catch (err) {
    return undefined;
  }
}

export const getAddCompany = async (data: ICompany) => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  console.log(token);
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}${COMPANY_ADD_PATH}`,
      headers: {
        "Authorization": `Token ${token}`
      },
      data: {
        name: data.name,
        company_business: data.company_business,
        foundation_date: data.foundation_date,
        foundation_country: data.foundation_country,
      },
    });
    console.log('res', res.data) 
    return res.data;
  } catch (err) {
    console.log('err', err);

    return undefined;
  }
}

export const getEditCompany = async (data: ICompany, id: string) => {
  const token = Cookies.get(SESSION_COOKIE_NAME);
  console.log(token);
  try {
    const res = await axios({
      method: 'put',
      url: `${BASE_URL}${COMPANY_EDIT_PATH}${id}`,
      headers: {
        "Authorization": `Token ${token}`
      },
      data: {
        name: data.name,
        company_business: data.company_business,
        foundation_date: data.foundation_date,
        foundation_country: data.foundation_country,
      },
    });
    return res.data;
  } catch (err) {
    return undefined;
  }
}