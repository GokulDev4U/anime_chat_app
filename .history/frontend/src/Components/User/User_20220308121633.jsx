import React from 'react'
import './../Home/Home.css'

const User = ({userId,name,avatar}) => {
  return (
    <Link to={`/user/${userId}`} className='homeUser'>
        <img src={avatar} alt={name} />
    </Link>
  )
}

export default User