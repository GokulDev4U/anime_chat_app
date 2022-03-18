import { Button, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form className="loginForm">
            <Typography variant="h3" style={{padding: "2vmax"}}>Social App</Typography>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/forgot/password">
                <Typography variant="h6" style={{padding: "2vmax"}}>Forgot Password?</Typography>
            </Link>
            <Button>Login</Button>
        </form>
    </div>
  )
}

export default Login