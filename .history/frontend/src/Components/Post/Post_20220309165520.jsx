import { Avatar, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline,
} from "@mui/icons-material";
import './Post.css'
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from '../../Actions/Post';
import { getPostOfFollowing } from '../../Actions/User';


const Post = ({postId,caption,postImage,likes=[],comments=[],ownerImage,ownerName,ownerId,isDelete=false,isAccount=false}) => {
 const [like, setLike] = useState(false);

 const dispatch = useDispatch();
 const {user} = useSelector(state => state.user);

 const handleLike = () => {
  setLike(!like);
  dispatch(likePost(postId));
  dispatch(getPostOfFollowing());
  } 


  useEffect(() => {
    likes.forEach(like => {
      if(like._id === user._id){
        setLike(true);
      }
    })
  }, [likes,user._id])
  

  return (
    <div className='post'>
        <div className="postHeader">
          {isAccount ? <Button>
            <MoreVert />
          </Button>
          : null }
        </div>
        <img src={postImage} alt="Post" /> 
        <div className="postDetails">
            <Avatar src={ownerImage}  alt='user' sx={{
                width: '3vmax',
                height: '3vmax',
            }}/>

            <Link to={`/user/${ownerId}`}>
                <Typography fontWeight={700}>{ownerName}</Typography>    
            </Link>
            <Typography fontWeight={100} color="rgba(0,0,0, 0.582)" style={{ alignSelf: "center" }}>{caption}</Typography>
        </div>
        <button style={{
          border: 'none',
          backgroundColor: 'white',
          cursor: 'pointer',
          margin: '1vmax 2vmax',
        }}>
          <Typography>{likes.length} likes</Typography>
        </button>
        <div className="postFooter">
        <Button onClick={handleLike}>
          {
            like ? <Favorite style={{color: 'red'}} /> : <FavoriteBorder  />
          }        
        </Button>
        <Button>
          <ChatBubbleOutline />         
        </Button>
        {isDelete ?  <Button>
          <DeleteOutline />         
        </Button> : null }
       
        </div>
        
    </div>
  )
}


export default Post