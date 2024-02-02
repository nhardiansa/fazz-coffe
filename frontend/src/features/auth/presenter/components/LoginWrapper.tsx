'use client'

import React, { useEffect, useState } from 'react'
import FormLogin, { PropsFormLogin } from './LoginForm'
import { Credential } from '../../entities'
import { useDispatch } from 'react-redux'
import { login } from '../../adapters'
import { AppDispatch } from '../../../../core/services/redux/redux'

function LoginWrapper() {
  const dispatch = useDispatch<AppDispatch>()
  const [credential, setCredential] = useState<Credential>({
    email: '',
    password: ''
  })

  const onInputChange: PropsFormLogin['onEmailChange'] | PropsFormLogin['onPasswordChange'] = (e) => {
    if (e.currentTarget.name === 'email') {
      setCredential({
        ...credential,
        email: e.target.value
      })
    } else {
      setCredential({
        ...credential,
        password: e.target.value
      })
    }
  }

  const submitLogin: PropsFormLogin['onLoginSubmit'] = (e) => {
    e.preventDefault()
    dispatch(login(credential))
  }

  return (
    <FormLogin
      email={credential.email}
      password={credential.password}
      onLoginSubmit={submitLogin}
      onEmailChange={onInputChange}
      onPasswordChange={onInputChange}
    />
  )
}

export default LoginWrapper
