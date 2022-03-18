import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    return (
        <div className='register'>
            <form className='registerForm'>
                <Typography variant='h3'>Register</Typography>
                <input type='text' placeholder='Username' value={name} onChange={() => setName()} />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default Register;