import Button from 'UIcomponents/buttons/Button'
import Input from '../../UIcomponents/input/Input'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import style from './RegisterForm.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { register } from 'api/auth'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { register } from '../../api/auth'

export default function Register() {

  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const navigate = useNavigate();

  const handleRegisterClick = async () => {

    if (account.length === 0) {
      return;
    }
    if (name.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (checkPassword.length === 0) {
      return;
    }

    const { success, token } = await register({ account, name, email, password, checkPassword })

    if (success) {
      localStorage.setItem('authToken', token);
      Swal.fire({
        position: 'top',
        title: '註冊成功！',
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      return
    }

  }

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value)
  }

  // useEffect(() => {
  //   const checkTokenIsVaild = async () => {
  //     const authToken = localStorage.getItem('authToken');
      
  //     if(!authToken){
  //       return
  //     }
  //     const result = await checkPassword(authToken)
  //     if(result){
  //       navigate('/home')
  //     }
  //   }
  //   checkTokenIsVaild()
  // }, [navigate])

  return (
    <div className={`${style.registerWrapper}`}>
      <div className={`${style.registerContainer}`}>
        <div className={`${style.registerLogo}`}>
          <Logo />
        </div>
        <h1 className={`${style.registerTitle}`}>建立你的帳號</h1>
        <div className={`${style.registerInputGroup}`}>
            <Input
              label='帳號'
              placeholder='請輸入帳號'
              value={account}
              onChange={handleAccountChange} />
            <Input
              label='名稱'
              placeholder='請輸入使用者名稱'
              value={name}
              onChange={handleNameChange} />
            <Input
              label='Email'
              placeholder='請輸入Email'
              value={email}
              onChange={handleEmailChange} />
            <Input
              label='密碼'
              placeholder='請設定密碼'
              type='password'
              value={password}
              onChange={handlePasswordChange} />
            <Input
              label='密碼確認'
              placeholder='請再次輸入密碼'
              type='password'
              value={checkPassword}
              onChange={handleCheckPasswordChange} />
          <Input
            label='帳號'
            placeholder='請輸入帳號'
            value={account}
            onChange={(accountInputValue) => setAccount(accountInputValue)} />
          <Input
            label='名稱'
            placeholder='請輸入使用者名稱'
            value={name}
            onChange={(nameInputValue) => setName(nameInputValue)} />
          <Input
            label='Email'
            placeholder='請輸入Email'
            value={email}
            onChange={(emailInputValue) => setEmail(emailInputValue)} />
          <Input
            label='密碼'
            placeholder='請設定密碼'
            type='password'
            value={password}
            onChange={(passwordInputValue) => setPassword(passwordInputValue)} />
          <Input
            label='密碼確認'
            placeholder='請再次輸入密碼'
            type='password'
            value={checkPassword}
            onChange={(checkInputValue) => setCheckPassword(checkInputValue)} />
        </div>
        <div className={`${style.registerButtonGroup}`}>
          <Button
            text='註冊'
            size='large'
            onClick={handleRegisterClick} />
        </div>
        <div className={`${style.registerSecButtonGroup}`}>
          <Link to='/login'>
            <u className={`${style.registerCancelLink}`}>取消</u>
          </Link>
        </div>
      </div>
    </div>
  )
}

