import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login