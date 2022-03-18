import { Typography } from '@mui/material';
import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form className="loginForm">
            <Typography variant="h4" gutterBottom></Typography>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login