import { useMemo, useEffect, useState } from 'react';
import { CompanyIdStyle } from "./company-id-style";
import { useParams } from "react-router-dom";
import { Heading1 } from '../../../ui/styles/typography';
import { getCompanyDetail } from "../../../services/companies";
import { ICompany } from '../../../services/interfaces';

export const CompanyId = () => {
  const {id} = useParams();
  const [data, setData] = useState<ICompany | undefined>(undefined);
  // const data = useMemo(()=>{
  //   if(id){
  //       const asd: any = 
  //         // console.log(res)
  //         return Object(asd);
  //       } );
  //   } else {
  //     return undefined;
  //   }
    
  // },[id])

  useEffect(()=>{
    id && getCompanyDetail(id).then(res => setData(res))
  },[id])

  return(
    <CompanyIdStyle>
      <div className='company-id-background'>
        <div className='company-heading'>
          <div className='company-heading--back'>
            {/* BACK BUTTON */}
          </div>
          <div className='company-heading--title'>
            <Heading1>{data?.name}</Heading1>
          </div>
        </div>
        
        <p>COMPANY ID - {id}</p>
        <br />
        <br />
        <br />
        <br />
        <p>{JSON.stringify(data)}</p>
      </div>
    </CompanyIdStyle>
  )
}