import { Heading2, Text14, Text16 } from '../../../ui/styles/typography';
import { useEffect, useState } from 'react'

import { Button } from '../../../ui/button/button';
import Cookies from 'js-cookie';
import { IconList } from '../../../ui/iconsList';
import { Input } from '../../../ui/input/input';
import { Link } from 'react-router-dom';
import { LoginStyle } from './login-style'
import { SESSION_COOKIE_NAME } from '../../../services/auth';
import { Theme } from '../../../ui/styles/theme';
import { isAuthenticated } from "../../../services/auth";
import { login } from '../../../services/auth'
import { useNavigate } from "react-router-dom";
import { watch } from 'fs';

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    const token = await login({ username: username, password: password })
      .then(
        (token) => {
          if (token) {
            window.location.href = '/profile';
          } else {
            setError('El usuario y/o contraseña que ingresó son incorrectos.')
          }
        }
      )
  }

  useEffect(() => {
    isAuthenticated() && navigate('/profile')
  }, [])

  return (
    <LoginStyle>
      <div className='login-container'>
        <div className='login-header'>
          <Heading2>LOGIN</Heading2>
        </div>
        <form action="">
          <div className='username-input input-group'>
            <Text16>User</Text16>
            <Input
              type="text"
              placeholder='User'
              value={username}
              onChange={(ev: any) => { setError(''); setUsername(ev.target.value) }}
            />
          </div>
          <div className='password-input input-group'>
            <Text16>Password</Text16>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={(ev: any) => { setError(''); setPassword(ev.target.value) }}
              iconRight={{
                icon: showPassword ? IconList.actions.showPassword : IconList.actions.hidePassword,
                size: "20px",
                fillColor: Theme.greys.grey400,
                onClickFunction: () => {setShowPassword(!showPassword)}
              }}
            />
          </div>
          {error && (
            <div className='error-message'>
              <Text14
                color={Theme.danger.danger400}
                weight={400}
              >{error}</Text14>
            </div>
          )}
          <div>
            <Button
              type='primary'
              size='large'
              text='Login'
              disabled={password.length < 8 || username.length === 0}
              onClick={(ev: any) => {
                ev.preventDefault();
                handleLogin()
              }}
            />
          </div>
          <div className='register-option'>
            <Text16>
              You don´t have an account yet? <Link to={'/register'}><span>Register</span></Link>
            </Text16>
          </div>
        </form>
      </div>
    </LoginStyle >
  )
}