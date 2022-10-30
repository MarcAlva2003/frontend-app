import { LoginStyle } from './login-style'
import { login } from '../../../services/auth'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { SESSION_COOKIE_NAME } from '../../../services/auth';
import { isAuthenticated } from "../../../services/auth";

export const Login = () => {
  const navigate  = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');


  const handleLogin = async () => {
    const token = await login({username: username, password:password})
    .then(
      (token) => {
        if(token){
          Cookies.set(SESSION_COOKIE_NAME, token.token)
          window.location.href = '/profile'; 
        } else {
          setError('El usuario y/o contraseña que ingresó son incorrectos.')
        }
      }  
    )
    
  }
  
  useEffect(()=>{
    isAuthenticated() && navigate('/profile')
  })

  return (
    <LoginStyle>
      LOGIN
      <div>
        <label htmlFor="">User</label>
        <input
          type="text"
          placeholder='User'
          value={username}
          onChange={(ev: any)=>{setError(''); setUsername(ev.target.value)}}    
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(ev: any)=>{setError(''); setPassword(ev.target.value)}}  
        />
      </div>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <div>
        <button onClick={()=>{handleLogin()}}>Login</button>
      </div>
    </LoginStyle>
  )
}