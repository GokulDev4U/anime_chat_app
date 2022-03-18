import React, { useEffect } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { myPosts } from '../../Actions/Post';
import Loader from '../Loader/Loader';
import { Typography } from '@mui/material';
import Post from '../Post/Post';

const Account = () => {
    const dispatch = useDispatch();
    const { isLoading,error,posts } = useSelector(state => state.myPosts);
    const { error: likeError,message } = useSelector(state => state.likePost);


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
        <div className="accountLeft">
        {posts && posts.length > 0 ? posts.map(post => (
              <Post key={post._id} postId={post._id} caption={post.caption} postImage={post.image.url} likes={post.likes} comments={post.comments} ownerImage={post.owner.avatar.url} ownerName={post.owner.name} ownerId={post.owner._id} isDelete={post.isDelete} isAccount={post.isAccount} />        
            )) : <Typography variant='h6'>No Post</Typography>}
        </div>
        <div className="accountRight"></div>
    </div>
  )
}

export default Account