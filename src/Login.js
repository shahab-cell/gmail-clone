import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
  const dispatch = useDispatch()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
      <div className='login_container'>
        <img
          src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
          alt=''
        />
        <Button varient='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
