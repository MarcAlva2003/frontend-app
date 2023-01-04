import { FormProvider, useForm } from "react-hook-form";
import { Heading1, Text14 } from "../../../ui/styles/typography";
import { getAddCompany, getEditCompany } from "../../../services/companies";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { AddCompanyStyle } from "./add-company-style";
import { Button } from "../../../ui/button/button";
import { ICompany } from "../../../services/interfaces";
import { ISelectOption } from "../../../ui/input-select/input-select";
import { Input } from "../../../ui/input/input";
import { InputCalendar } from "../../../ui/input-calendar/input-calendar";
import { Select } from "../../../ui/input-select/input-select";
import { Theme } from "../../../ui/styles/theme";
import axios from "axios";
import { getCompanyDetail } from "../../../services/companies";

export const AddCompany = () => {
  const COUNTRIES_API_BASE_URL = 'https://restcountries.com';
  const COUNTRIES_API_PATH = '/v3.1/all';
  const { pathname } = useLocation();
  const isEditView = pathname.split('/')[2] === 'edit'

  const { id } = useParams();
  const [data, setData] = useState<ICompany | undefined>(undefined);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const [countriesList, setCountriesList] = useState<ISelectOption[]>([]);
  useEffect(() => {
    axios.get(`${COUNTRIES_API_BASE_URL}${COUNTRIES_API_PATH}`)
      .then(res => {
        // console.log(res.data)
        if(res.data.length > 0) {
          const dataSorted = res.data.map((item: any) => { return item?.name?.common }).sort();
          console.log('dataSorted', dataSorted)
          setCountriesList(
            dataSorted.map((country: string) => { return {label: country, value: country}})
          )
        } else {
          setCountriesList([])
        }
        // res.data.length > 0
        //   ? setCountriesList(
        //     res.data.map((item: any) => { return item?.name?.common }).sort()
        //   )
        //   : setCountriesList([])
      })
      .catch(err => console.log(err));
  }, []);
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    (isEditView) ?
      getEditCompany({
        name: data.name,
        company_business: data.company_business,
        foundation_date: data.foundation_date,
        foundation_country: data.foundation_country,
      }, id || '')
        .then(res => navigate('/'))
      :
      getAddCompany({
        name: data.name,
        company_business: data.company_business,
        foundation_date: data.foundation_date,
        foundation_country: data.foundation_country,
      })
        .then(res => navigate('/'))
  }
  const formMethods = useForm({
    defaultValues: {
      name: [],
      company_business: [],
      foundation_date: [],
      foundation_country: [],
    },
  });

  useEffect(() => {
    id && getCompanyDetail(id).then(res => setData(res))
  }, [id])

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('company_business', data.company_business);
      setValue('foundation_date', data.foundation_date);
      setValue('foundation_country', data.foundation_country);
    }
    // eslint-disable-next-line
  }, [data])

  useEffect(() => {
    register('foundation_country', {
      required: true
    })
  }, [register])

  return (
    <AddCompanyStyle>
      <div className="add-company-bg">
        <div className="content">
          <div className='content-title'>
            <Heading1>{isEditView ? 'Edit company' : 'Add company'}</Heading1>
          </div>
          <FormProvider {...formMethods}>
            <div className="form-inputs">
              <div className="input-group">
                <label>Company name</label>
                <Input
                  type="text"
                  placeholder="Company name"
                  {
                  ...register('name', {
                    required: true,
                    maxLength: 200,
                    // pattern: /^[A-Za-zÀ-ú0-9-ñÑ ]+$/
                  })
                  }
                  value={watch('name')}
                  onChange={(ev: any) => { setValue('name', ev.target.value) }}
                />
                {/* <input
                  type="text"
                  placeholder="Company name"
                  {
                  ...register('name', {
                    required: true,
                    maxLength: 200,
                    // pattern: /^[A-Za-zÀ-ú0-9-ñÑ ]+$/
                  })
                  }
                /> */}
                <div>
                  {errors.name?.type === 'required' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The name of the company is requiered</Text14></div>
                  )}
                  {errors.name?.type === 'maxLength' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The name cannot be longer than 200 characters</Text14></div>
                  )}
                  {/* {errors.name?.type === 'pattern' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The name can only have letters and numbers</Text14></div>
                  )} */}
                </div>
              </div>
              <div className="input-group">
                <label>Business</label>
                <Input
                  type="text"
                  placeholder="Company business"
                  {
                  ...register('company_business', {
                    required: true,
                    maxLength: 200,
                    pattern: /^[A-Za-zÀ-ú0-9-ñÑ ]+$/
                  })
                  }
                  value={watch('company_business')}
                  onChange={(ev: any) => { setValue('company_business', ev.target.value) }}
                />

                <div>
                  {errors.company_business?.type === 'required' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The business of the company is requiered</Text14></div>
                  )}
                  {errors.company_business?.type === 'maxLength' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The business cannot be longer than 200 characters</Text14></div>
                  )}
                  {errors.company_business?.type === 'pattern' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The business can only have letters and numbers</Text14></div>
                  )}
                </div>
              </div>
              <div className="input-group">
                <label>Foundation date</label>
                <InputCalendar
                  placeholder="Foundation date"
                  {
                  ...register('foundation_date', {
                    required: true,
                  })
                  }
                  value={watch('foundation_date')}
                  onChange={(ev: any) => {
                    setValue('foundation_date', ev.target.value);
                  }}
                />
                <div>
                  {errors.foundation_date?.type === 'required' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The foundation date of the company is requiered</Text14></div>
                  )}
                </div>
              </div>
              <div className="input-group">
                <label>Foundation country</label>
                <Select
                  placeholder="Select country"
                  value={watch('foundation_country')}
                  name={'foundation_country'}
                  onChange={(ev: any) => setValue(ev.target.name, ev.target.value)}
                  options={countriesList.length > 0 ? countriesList : [{value: 'loading', label: 'Loading...'}]}
                />
                {/* <select
                  placeholder="Select country"
                  value={watch('foundation_country')}
                  name={'foundation_country'}
                  onChange={(ev: any) => setValue(ev.target.name, ev.target.value)}
                >
                  {countriesList.length > 0 ? (

                    countriesList?.map((item) => (
                      <option value={`${item}`}>{item}</option>
                    ))
                  ) : (
                    <option value="Loading...">loading...</option>
                  )}
                </select> */}
                <div>
                  {errors.foundation_country?.type === 'required' && (
                    <div className="error-field"><Text14 weight={400} color={Theme.danger.danger500}>The business of the company is requiered</Text14></div>
                  )}
                </div>
              </div>

            </div>
          </FormProvider>
          <div className="form-submit">
            <Button
              onClick={handleSubmit(onSubmit)}
              size="large"
              type="primary"
              text={isEditView ? 'Save' : 'Add'}
            />
          </div>
        </div>
      </div>
    </AddCompanyStyle>
  )
}