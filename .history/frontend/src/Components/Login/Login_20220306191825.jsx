import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = (e) => {
        e.preventDefault();
        console.log('Login button clicked') 
    }
  return (
    <div className='login'>
        <form className="loginForm">
            <Typography variant="h3" style={{padding: "2vmax"}}>Social App</Typography>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <Link to="/forgot/password">
                <Typography>Forgot Password?</Typography>
            </Link>
            <Button type="submit">Login</Button>
            <Link to="/register">
                <Typography>Don't have an account?</Typography>
            </Link>
        </form>
    </div>
  )
}

export default Login