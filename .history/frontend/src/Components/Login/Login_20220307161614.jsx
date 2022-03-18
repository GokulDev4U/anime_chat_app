import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../Actions/User';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();
       dispatch(loginUser(email, password));
    //    setEmail('');
    //    setPassword(''); 
    }


  return (
    <div className='login'>
        <form className="loginForm" onSubmit={loginHandler}>
            <Typography variant="h3" style={{padding: "2vmax"}}>Social App</Typography>
            <input type="email" placeholder="Email" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
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