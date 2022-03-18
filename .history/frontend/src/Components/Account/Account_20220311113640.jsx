import React, { useEffect } from 'react'
import './Account.css'
import { useDispatch } from 'react-redux'
import { myPosts } from '../../Actions/Post';

const Account = () => {
    const dispstch = useDispatch();

    useEffect(() => {
      dispstch(myPosts());
    }, [])
  return (
    <div className='account'>
        <div className="accountLeft"></div>
        <div className="accountRight"></div>
    </div>
  )
}

export default Account