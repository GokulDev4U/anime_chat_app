import { Avatar, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='register'>
            <form className='registerForm'>
                <Typography variant='h3'>Anime Chat Media</Typography>
                <Avatar src={avatar} alt='avatar' sx={{ height: '10vmax', width: '10vmax' }} />
                <input type="file" accept='image/*' />
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required className='registerInputs' />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='registerInputs' />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='registerInputs' />
                <Link to="/">Already Signed up? Login Now</Link>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default Register;