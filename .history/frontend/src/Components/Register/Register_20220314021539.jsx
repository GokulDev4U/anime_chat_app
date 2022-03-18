import { Avatar, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Actions/User';
import { useAlert } from 'react-alert';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isLoading: loading, error } = useSelector(state => state.user);
    const alert = useAlert();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password, avatar));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = (e) => {
            if (Reader.readyState === 2) {
                setAvatar(e.target.result);
            }
        };
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: 'clearErrors' });
        }
    }, [alert, error, dispatch]);

    return (
        <div className='register'>
            <form className='registerForm' onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>Anime Chat Media</Typography>
                <Avatar src={avatar} alt='avatar' sx={{ height: '10vmax', width: '10vmax' }} />
                <input type="file" accept='image/*' onChange={handleImageChange} />
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required className='registerInputs' />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='registerInputs' />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='registerInputs' />
                <Link to="/">
                    <Typography>Already Signed up? Login Now</Typography>
                </Link>
                <Button disabled={loading} type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default Register;