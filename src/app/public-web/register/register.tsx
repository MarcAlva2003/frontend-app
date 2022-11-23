import { Heading2, Text16 } from "../../../ui/styles/typography";

import { Button } from "../../../ui/button/button";
import { Input } from "../../../ui/input/input";
import { RegisterStyle } from "./register-style";
import { registerQuery } from '../../../services/auth';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Register = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [error, setError] = useState<string>('');

  const firstName: string = watch('firstName');
  const secondName: string = watch('secondName');
  const email: string = watch('email');
  const username: string = watch('username');
  const password: string = watch('password');
  const repeatPassword: string = watch('repeatPassword');

  useEffect(() => {
    register('firstName');
    register('secondName');
    register('email');
    register('username');
    register('password');
    register('repeatPassword');
  }, [])

  const handleRegister = async () => {
    await registerQuery({
      firstName: firstName,
      secondName: secondName,
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
              <Text16>First Name</Text16>
              <Input
                type="text"
                placeholder='First Name'
                onChange={(ev: any) => {
                  setValue('firstName', ev.target.value)
                }}
                value={firstName}
              />
            </div>
            <div className='password-input input-group'>
              <Text16>Second Name</Text16>
              <Input
                type="text"
                placeholder='Second Name'
                onChange={(ev: any) => {
                  setValue('secondName', ev.target.value)
                }}
                value={secondName}
              />
            </div>
          </div>
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
                type="password"
                placeholder='Password'
                onChange={(ev: any) => {
                  setValue('password', ev.target.value)
                }}
                value={password}
              />
            </div>
            <div className='password-input input-group'>
              <Text16>Repeat Password</Text16>
              <Input
                type="password"
                placeholder='Repeat Password'
                onChange={(ev: any) => {
                  setValue('repeatPassword', ev.target.value)
                }}
                value={repeatPassword}
              />
            </div>
          </div>
          <div>
            <Button
              type='primary'
              size='large'
              text='Register'
              onClick={(ev: any) => {
                console.log('asdasdas')
                handleRegister();
              }}
            />
          </div>
        </form>
      </div>
    </RegisterStyle>
  )
}