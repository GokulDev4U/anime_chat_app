import { Avatar, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='register'>
            <form className='registerForm'>
                <Typography variant='h3'>Anime Chat Media</Typography>
                <Avatar src={avatar} alt='avatar' sx={{ height: '10vmax', width: '10vmax' }} />
                <input type="file" accept='image/*' />
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required className='registerInput' />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='registerInput' />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='registerInput' />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default Register;