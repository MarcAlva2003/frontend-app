import { enUS, es } from "date-fns/locale";
import { useEffect, useMemo, useState } from 'react';

import { CompanyIdStyle } from "./company-id-style";
import { Heading1 } from '../../../ui/styles/typography';
import { ICompany } from '../../../services/interfaces';
import { Subhead2 } from '../../../ui/styles/typography';
import { format } from 'date-fns';
import { getCompanyDetail } from "../../../services/companies";
import { getOrdinal } from '../../../services/date-ordinal';
import { useParams } from "react-router-dom";

export const CompanyId = () => {
  const { id } = useParams();
  const [data, setData] = useState<ICompany | undefined>(undefined);

  useEffect(() => {
    id && getCompanyDetail(id).then(res => setData(res))
  }, [id])

  return (
    <CompanyIdStyle>
      <div className='company-id-background'>
        {data && (
          <div className='company-container'>
            <div className='company-name'>
              <Heading1>{data?.name}</Heading1>
            </div>
            <div className='company-bussiness company-data-row'>
              <div className='company-data-row--item'><Subhead2 weight={600}>Business:</Subhead2></div>
              <div className='company-data-row--item'><Subhead2 weight={400}>{data?.company_business}</Subhead2></div>
            </div>
            <div className='company-foundation-county company-data-row'>
              <div className='company-data-row--item'><Subhead2 weight={600}>Foundation country: </Subhead2></div>
              <div className='company-data-row--item'><Subhead2 weight={400}>{data?.foundation_country}</Subhead2></div>
            </div>
            <div className='company-foundation-date company-data-row'>
              <div className='company-data-row--item'><Subhead2 weight={600}>Foundation date: </Subhead2></div>
              <div className='company-data-row--item'>
                <Subhead2 weight={400}>
                  {getOrdinal(new Date(data?.foundation_date).getDate() + 1)}
                  {format(new Date(data?.foundation_date), ` MMMM, yyyy`, { locale: enUS })}
                </Subhead2>
              </div>
            </div>
          </div>
        )}
      </div>
    </CompanyIdStyle>
  )
}