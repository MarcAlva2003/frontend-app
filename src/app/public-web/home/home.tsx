import { HomeStyle } from "./home-style";
import { format } from 'date-fns';
import { getCompaniesList } from "../../../services/companies";
import {
  Heading1,
  Subhead1,
  Text16
} from "../../../ui/styles/typography";
import { Button } from "../../../ui/button/button";
import { useState, useMemo, useEffect } from "react";
import { ICompany } from "../../../services/interfaces";


export const Home = () => {

  const dataMock = [
    {
      name: 'Cocacola',
      date: new Date(),
      country: "EEUU",
    },
    {
      name: 'McDonalds',
      date: new Date(),
      country: "EEUU",
    },
    {
      name: 'Toyota',
      date: new Date(),
      country: "Japan",
    },
    {
      name: 'Cocacola',
      date: new Date(),
      country: "EEUU",
    },
  ]
  const [companies, setCompanies] = useState<ICompany[]>();
  useEffect(()=>{
    getCompaniesList().then(res => setCompanies(res));
  },[])

  return (
    <HomeStyle>
      <div className="home-background">
        <div className="home-content">
          <div className="home">
            <div className="home-title">
              <Heading1>Companies List</Heading1>
              <Button
                text="Add company"
                type="primary"
                size="large"
                radius="medium"
              />
            </div>
            <div className="companies-list">
              {companies?.map((item: any, index: number) => (
                <div className="company-card" key={`company-item-${index}`}>
                  <div className="company-card-name">
                    <Subhead1>{item?.name}</Subhead1>
                  </div>
                  <div className="company-card-text">
                    <div className="company-card-text--country">
                      <Text16>Foundation country: {item?.foundation_country}</Text16>
                    </div>
                    <div className="company-card-text--date">
                      <Text16>Foundation date: {
                        format(new Date(item?.foundation_date), 'dd/MM/yyyy')
                      }</Text16>
                    </div>
                  </div>
                  <div className="company-card-buttons">
                    <Button
                      type="secondary"
                      size="large"
                      text="Button Test"
                      radius="low"
                      // disabled
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeStyle>
  )
}