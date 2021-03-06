import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../Actions/User';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();
    const { error } = useSelector((state) => state.user);

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
        //    setEmail('');
        //    setPassword(''); 
    };
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [alert, error, message, dispatch]);


    return (
        <div className='login'>
            <form className="loginForm" onSubmit={loginHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>Anime Chat Media</Typography>
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to="/forgot/password">
                    <Typography>Forgot Password?</Typography>
                </Link>
                <Button type="submit">Login</Button>
                <Link to="/register">
                    <Typography>Don't have an account?</Typography>
                </Link>
            </form>
        </div>
    );
};

export default Login;