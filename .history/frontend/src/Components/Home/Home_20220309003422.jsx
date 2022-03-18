import React, { useEffect } from 'react'
import Post from '../Post/Post';
import User from '../User/User';  
import Loader from '../Loader/Loader';
import {useDispatch ,useSelector} from 'react-redux';
import './Home.css'
import { getPostOfFollowing } from '../../Actions/User';
import { Typography } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { loading,posts,error } = useSelector(state => state.postOfFollowing);  

  useEffect(() => {
    dispatch(getPostOfFollowing());
  }, [dispatch]);

  return (
     loading ? <Loader /> : (
      <div className='home'>
      <div className="homeleft">
          {posts && posts.length > 0 ? posts.map(post => (
              // <Post key={post.id} postId={post.id} caption={post.caption} postImage={post.imageUrl} likes={post.likes} comments={post.comments} ownerImage={post.userImage} ownerName={post.userName} ownerId={post.userId} isDelete={post.isDelete} isAccount={post.isAccount} />        
              <Post postImage="https://static.toiimg.com/photo/80482428.cms?imgsize=99038" 
              ownerName={'Gokul Pisharody'}
              caption={'This is a post'}
              // isDelete={true}
              // isAccount={true}
              />
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
