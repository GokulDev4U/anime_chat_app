import React, { useEffect } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { myPosts } from '../../Actions/Post';
import Loader from '../Loader/Loader';

const Account = () => {
    const dispatch = useDispatch();
    const { isLoading,error,posts } = useSelector(state => state.myPosts);
    const {error: likeError,message} = useSelector(state => state.likePost);


    useEffect(() => {
      dispatch(myPosts());
    }, [dispatch]);

    useEffect(() => {
        if(error){
          alert.error(error);
          dispatch({type:'clearError'});
        }
        if(likeError){
          alert.error(likeError);
          dispatch({type:'clearError'});
        }
        if(message){
          alert.success(message);
          dispatch({type:'clearMessage'});
        }
      }, [alert,error,message,likeError,dispatch]);

  return isLoading ? <Loader /> : (
    <div className='account'>
        <div className="accountLeft"></div>
        <div className="accountRight"></div>
    </div>
  )
}

export default Account