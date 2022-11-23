import { useEffect, useMemo, useState } from "react";

import { AddCompanyStyle } from "./add-company-style";
import { ICompany } from "../../../services/interfaces";
import axios from "axios";
import { getAddCompany } from "../../../services/companies";
import { useForm } from "react-hook-form";

export const AddCompany = () => {
  const COUNTRIES_API_BASE_URL = 'https://restcountries.com';
  const COUNTRIES_API_PATH = '/v3.1/all';

  const { register, handleSubmit, formState: { errors } } = useForm();
  // Register: registra los campos del formulario
  // handleSubmit: accion cuando se le hace submit al formulario
  // formState: nos da informacion del campo, si fue tocado, visitado, errores, etc
  //defaultValues para colocar calores por default (útil en editar compañia)
  // -->  useForm( { defaultValues: {name: 'asdasd', business:'adsadas'} } );
  const [countriesList, setCountriesList] = useState<string[]>([]);
  useEffect(() => {
    axios.get(`${COUNTRIES_API_BASE_URL}${COUNTRIES_API_PATH}`)
      .then(res => {
        res.data.length > 0
          ? setCountriesList(res.data.map((item: any) => { return item?.name?.common }).sort())
          : setCountriesList(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  const onSubmit = (data: any) => {
    getAddCompany({
      name: data.name,
      company_business: data.company_business,
      foundation_date: data.foundation_date,
      foundation_country: data.foundation_country,
    }).then(res => console.log('data', res))
  }

  return (
    <AddCompanyStyle>
      <div className="add-company-bg">
        <div className="content">
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label>Company name</label>
              <input
                type="text"
                placeholder="Company name"
                {
                ...register('name', {
                  required: true,
                  maxLength: 200,
                  pattern: /^[A-Za-zÀ-ú0-9-ñÑ ]+$/
                })
                }
              />
              <div>
                {errors.name?.type === 'required' && (
                  <p>The name of the company is requiered</p>
                )}
                {errors.name?.type === 'maxLength' && (
                  <p>The name cannot be longer than 200 characters</p>
                )}
                {errors.name?.type === 'pattern' && (
                  <p>The name can only have letters and numbers</p>
                )}
              </div>
            </div>
            <div>
              <label>Business</label>
              <input
                type="text"
                placeholder="Company business"
                {
                ...register('company_business', {
                  required: true,
                  maxLength: 200,
                  pattern: /^[A-Za-zÀ-ú0-9-ñÑ ]+$/
                })
                }
              />
              <div>
                {errors.company_business?.type === 'required' && (
                  <p>The business of the company is requiered</p>
                )}
                {errors.company_business?.type === 'maxLength' && (
                  <p>The business cannot be longer than 200 characters</p>
                )}
                {errors.company_business?.type === 'pattern' && (
                  <p>The business can only have letters and numbers</p>
                )}
              </div>
            </div>
            <div>
              <label>Foundation date</label>
              <input
                type="date"
                placeholder="Foundation date"
                {
                ...register('foundation_date', {
                  required: true,
                })
                }
              />
              <div>
                {errors.foundation_date?.type === 'required' && (
                  <p>The business of the company is requiered</p>
                )}
              </div>
            </div>
            <div>
              <label>Foundation country</label>
              <select
                placeholder="Select country"
                {...register('foundation_country', {
                  required: true
                })}
              >
                {countriesList.length > 0 ? (

                  countriesList?.map((item) => (
                    <option value={`${item}`}>{item}</option>
                  ))
                ) : (
                  <option value="Loading...">loading...</option>
                )}
              </select>
              <div>
                {errors.foundation_country?.type === 'required' && (
                  <p>The business of the company is requiered</p>
                )}
              </div>
            </div>
            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </AddCompanyStyle>
  )
}