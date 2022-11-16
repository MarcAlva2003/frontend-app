import { BASE_URL } from "./getApiUrlBase";
import Cookies from "js-cookie";
import { ICompany } from "./interfaces";
import { SESSION_COOKIE_NAME } from "./auth";
import axios from "axios";

const COMPANIES_LIST_PATH = '/companies/list/';
const COMPANY_ID_PATH = '/companies/';
const COMPANY_DELETE_PATH = '/companies/delete/'
const COMPANY_ADD_PATH = '/companies/add/'

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
          "Authorization": `Token ${token}`
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
  console.log(token)
  // token && console.log(token);

  // axios({
  //   method: 'post',
  //   url: baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
  //   headers: {}, 
  //   data: {
  //     foo: 'bar', // This is the body part
  //   }
  // });


  try {
    // const res = await axios.post(
    //   `${BASE_URL}${COMPANY_ADD_PATH}`,
    //   data: {
    //   name: data.name,
    //   company_business: data.company_bussiness,
    //   foundation_date: data.foundation_date,
    //   foundation_country: data.foundation_country,
    // },
    //   headers: {
    //   "Authorization": `Token ${token}`
    // }
    // )
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}${COMPANY_ADD_PATH}`,
      headers: {
        "Authorization": `Token ${token}`
      },
      data: {
        name: data.name,
        company_business: data.company_bussiness,
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