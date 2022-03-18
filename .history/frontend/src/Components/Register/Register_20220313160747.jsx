import { Button, Typography } from '@mui/material';
import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register'>
            <form className='registerForm'>
                <Typography variant='h3'>Register</Typography>
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default Register;