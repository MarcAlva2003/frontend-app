import { Heading2, Text16 } from "../../../ui/styles/typography";

import { Button } from "../../../ui/button/button";
import { IconList } from "../../../ui/iconsList";
import { Input } from "../../../ui/input/input";
import { Link } from 'react-router-dom';
import { RegisterStyle } from "./register-style";
import { Theme } from "../../../ui/styles/theme";
import { emailRegex } from "../../../services/validations";
import { registerQuery } from '../../../services/auth';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Register = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [error, setError] = useState<string>('');

  const [showPassword, setShowPassword] = useState<{pass1: boolean, pass2: boolean}>({
    pass1: false,
    pass2: false,
  })

  const email: string = watch('email');
  const username: string = watch('username');
  const password: string = watch('password');
  const repeatPassword: string = watch('repeatPassword');

  useEffect(() => {
    register('email');
    register('username');
    register('password');
    register('repeatPassword');
  }, [])

  const handleRegister = async () => {

    await registerQuery({
      email: email,
      username: username,
      password: password,
      repeatPassword: repeatPassword,
    })
      .then(
        (data) => {
          if (data) {
            window.location.href = '/profile';
          } else {
            setError('El usuario y/o contraseña que ingresó son incorrectos.')
          }
        }
      )
  }

  return (
    <RegisterStyle>
      <div className='register-container'>
        <div className='register-header'>
          <Heading2>REGISTER</Heading2>
        </div>
        <form onSubmit={(ev: any)=>{ev.preventDefault()}}>
          <div className="input-row">
            <div className='username-input input-group'>
              <Text16>Email</Text16>
              <Input
                type="text"
                placeholder='Email'
                onChange={(ev: any) => {
                  setValue('email', ev.target.value)
                }}
                value={email}
              />
            </div>
            <div className='password-input input-group'>
              <Text16>Username</Text16>
              <Input
                type="text"
                placeholder='Username'
                onChange={(ev: any) => {
                  setValue('username', ev.target.value)
                }}
                value={username}
              />
            </div>
          </div>
          <div className="input-row">
            <div className='username-input input-group'>
              <Text16>Password</Text16>
              <Input
                type={showPassword.pass1 ? 'text' : 'password'}
                placeholder='Password'
                onChange={(ev: any) => {
                  setValue('password', ev.target.value)
                }}
                value={password}
                iconRight={{
                  icon: showPassword.pass1 ? IconList.actions.showPassword : IconList.actions.hidePassword,
                  size: "20px",
                  fillColor: Theme.greys.grey400,
                  onClickFunction: () => {setShowPassword({...showPassword, pass1: !showPassword.pass1})}
                }}
              />
            </div>
            <div className='password-input input-group'>
              <Text16>Repeat Password</Text16>
              <Input
                type={showPassword.pass2 ? 'text' : 'password'}
                placeholder='Repeat Password'
                onChange={(ev: any) => {
                  setValue('repeatPassword', ev.target.value)
                }}
                value={repeatPassword}
                iconRight={{
                  icon: showPassword.pass2 ? IconList.actions.showPassword : IconList.actions.hidePassword,
                  size: "20px",
                  fillColor: Theme.greys.grey400,
                  onClickFunction: () => {setShowPassword({...showPassword, pass2: !showPassword.pass2})}
                }}
              />
            </div>
          </div>
          {error && (
            <div>{error}</div>
          )}
          <div>
            <Button
              type='primary'
              size='large'
              text='Register'
              onClick={(ev: any) => {
                console.log('asdasdas')
                handleRegister();
              }}
              disabled={
                watch('password')?.length < 8 ||
                watch('repeatPassword')?.length < 8 ||
                // watch('username') === '' ||
                !watch('username') ||
                !emailRegex.test(watch('email')) || 
                watch('password') !== watch('repeatPassword')
              }
            />
          </div>
          <div className='login-option'>
            <Text16>
              You already have an account? <Link to={'/login'}><span>Login</span></Link>
            </Text16>
          </div>
          <div className='home-option'>
            <Text16>
              Go back <Link to={'/'}><span>home</span></Link>
            </Text16>
          </div>
        </form>
      </div>
    </RegisterStyle>
  )
}