import { Route, Routes } from 'react-router-dom';

import { AddCompany } from '../app/user-panel/add-company/add-company';
import { CompanyId } from '../app/public-web/company-id/company-id';
import { Home } from '../app/public-web/home/home';
import { Login } from '../app/public-web/login/login';
import PrivateRoute  from './privateRoutes';
import { Profile } from '../app/user-panel/profile/profile';
import { Register } from '../app/public-web/register/register';

export const AppRoutes = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/companies/:id" element={<CompanyId/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={<PrivateRoute component={Profile}/>}/>
      <Route path="/companies/add" element={<PrivateRoute component={AddCompany}/>}/>
      <Route path="/companies/edit/:id" element={<PrivateRoute component={AddCompany}/>}/>
    </Routes>
    </>
  )
}