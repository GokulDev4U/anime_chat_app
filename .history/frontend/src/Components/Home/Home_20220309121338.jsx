import React, { useEffect } from 'react'
import Post from '../Post/Post';
import User from '../User/User';  
import Loader from '../Loader/Loader';
import {useDispatch ,useSelector} from 'react-redux';
import './Home.css'
import { getPostOfFollowing, getAllUsers } from '../../Actions/User';
import { Typography } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { loading,posts,error } = useSelector(state => state.postOfFollowing); 
  const { users, loading: usersLoading } = useSelector(state => state.allUsers); 

  useEffect(() => {
    dispatch(getPostOfFollowing());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
     loading=== true || usersLoading===true ? <Loader /> : (
      <div className='home'>
      <div className="homeleft">
          {posts && posts.length > 0 ? posts.map(post => (
              <Post key={post._id} postId={post.id} caption={post.caption} postImage={post.image.url} likes={post.likes} comments={post.comments} ownerImage={post.owner.avatar.url} ownerName={post.owner.name} ownerId={post.owner._id} isDelete={post.isDelete} isAccount={post.isAccount} />        
            )) : <Typography variant='h6'>No Post</Typography>}
      </div>
      <div className="homeright">
         {
           users && users.length > 0 ? users.map(user => (
              <User key={user._id} userId={user._id} name={user.name} avatar={user.avatar.url} />
            )) : <Typography variant='h6'>No User</Typography>
         }
      </div>
    </div>
    )
  )
}

export default Home
