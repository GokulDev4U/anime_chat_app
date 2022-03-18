import { Avatar, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, avatar, password);
    };


    return (
        <div className='register'>
            <form className='registerForm' onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>Anime Chat Media</Typography>
                <Avatar src={avatar} alt='avatar' sx={{ height: '10vmax', width: '10vmax' }} />
                <input type="file" accept='image/*' />
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required className='registerInputs' />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='registerInputs' />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='registerInputs' />
                <Link to="/">
                    <Typography>Already Signed up? Login Now</Typography>
                </Link>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default Register;