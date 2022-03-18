import React, { useEffect } from 'react'
import Post from '../Post/Post';
import User from '../User/User';  
import Loader from '../Loader/Loader';
import {useDispatch ,useSelector} from 'react-redux';
import './Home.css'
import { getPostOfFollowing, getAllUser } from '../../Actions/User';
import { Typography } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { loading,posts,error } = useSelector(state => state.postOfFollowing); 
  const { users } = useSelector(state => state.allUser); 

  useEffect(() => {
    dispatch(getPostOfFollowing());
    dispatch(getAllUser());
  }, []);

  return (
     loading ? <Loader /> : (
      <div className='home'>
      <div className="homeleft">
          {posts && posts.length > 0 ? posts.map(post => (
              <Post key={post._id} postId={post.id} caption={post.caption} postImage={post.image.url} likes={post.likes} comments={post.comments} ownerImage={post.owner.avatar.url} ownerName={post.owner.name} ownerId={post.owner._id} isDelete={post.isDelete} isAccount={post.isAccount} />        
            )) : <Typography variant='h6'>No Post</Typography>}
      </div>
      <div className="homeright">
          <User 
              userId={"user._id"}
              name={"user.name"}
              avatar={'https://media-exp1.licdn.com/dms/image/C5603AQHlHovW8nMkFA/profile-displayphoto-shrink_200_200/0/1610020467592?e=1651708800&v=beta&t=Wz35S06-ZcWfZYKzVZ9S5WIsXf1nJ8UUCgsGVeiW-5w'}
          />
      </div>
    </div>
    )
  )
}

export default Home
