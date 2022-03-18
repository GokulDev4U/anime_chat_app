import React, { useEffect } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { myPosts } from '../../Actions/Post';

const Account = () => {
    const dispstch = useDispatch();
    const { isLoading,error,posts } = useSelector(state => state.myPosts);
    
    useEffect(() => {
      dispstch(myPosts());
    }, [dispstch]);
  return (
    <div className='account'>
        <div className="accountLeft"></div>
        <div className="accountRight"></div>
    </div>
  )
}

export default Account