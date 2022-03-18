import { Avatar, Button, Dialog, Typography } from '@mui/material';
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
import { addCommentOnPost, likePost } from '../../Actions/Post';
import { getPostOfFollowing } from '../../Actions/User';
import User from '../User/User';  



const Post = ({postId,caption,postImage,likes=[],comments=[],ownerImage,ownerName,ownerId,isDelete=false,isAccount=false}) => {
 const [liked, setLiked] = useState(false);
 const [likesUser, setLikesUser] = useState(false)
 const [commentValue, setCommentValue] = useState('');
 const [commentToggle, setCommentToggle] = useState(false);

 const dispatch = useDispatch();
 const {user} = useSelector(state => state.user);

 const handleLike = async() => {
  setLiked(!liked);
  await dispatch(likePost(postId));
  if(isAccount){
    console.log('bring me back my post')
  }else{
  dispatch(getPostOfFollowing());
  } 
}

 const addCommentHandler = (e) => {
   console.log('add comment');
   e.preventDefault();
   dispatch(addCommentOnPost(postId,commentValue));
 }

  useEffect(() => {
    likes.forEach(like => {
      if(like._id === user._id){
        setLiked(true);
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
        }}
        onClick={()=>setLikesUser(!likesUser)}
        disabled={likes.length === 0 ? true : false}
        >
          <Typography>{likes.length} likes</Typography>
        </button>
        <div className="postFooter">
        <Button onClick={handleLike}>
          {
            liked ? <Favorite style={{color: 'red'}} /> : <FavoriteBorder  />
          }        
        </Button>
        <Button onClick={()=>setCommentToggle(!likesUser)}>
          <ChatBubbleOutline />         
        </Button>
        {isDelete ?  <Button>
          <DeleteOutline />         
        </Button> : null } 
        </div>

        <Dialog open={likesUser} onClose={()=> setLikesUser(!likesUser)}>
          <div className="DialogBox">
            <Typography variant='h4'>Likes</Typography>
              {
                likes.map(like => (
                  <User key={like._id} user={like._id} name={like.name} avatar={like.avatar.url} />
                ))
              }
          </div>
        </Dialog>  

        <Dialog open={commentToggle} onClose={()=> setCommentToggle(!commentToggle)}>
          <div className="DialogBox">
            <Typography variant='h4'>Comments</Typography>
            <form className='commentForm' onSubmit={addCommentHandler}>
              <input type="text" placeholder="Add Comment..." value={commentValue} onChange={(e)=> setCommentValue(e.target.value)} required/>
              <Button type='submit' variant='contained'>Add</Button>
            </form>
          </div>
        </Dialog>  
    </div>
  )
}

export default Post