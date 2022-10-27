import { Routes, Route } from 'react-router-dom';
import { Login } from '../app/public-web/login/login';
import { Profile } from '../app/user-panel/profile/profile';
import { Home } from '../app/public-web/home/home';
import PrivateRoute  from './privateRoutes';

export const AppRoutes = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<PrivateRoute component={Profile}/>}/>
    </Routes>
    </>
  )
}