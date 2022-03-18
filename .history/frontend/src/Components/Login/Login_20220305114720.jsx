import { Button, Typography } from '@mui/material';
import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form className="loginForm">
            <Typography variant="h3">Social App</Typography>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Button>Login</Button>
        </form>
    </div>
  )
}

export default Login