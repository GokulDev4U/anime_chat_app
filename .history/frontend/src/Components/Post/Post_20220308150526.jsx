import { Avatar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({postId,caption,postImage,likes=[],comments=[],ownerImage,ownerName,ownerId,isDelete=false,isAccount=false}) => {
  return (
    <div className='post'>
        <div className="postHeader">
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
            <Typography fontWeight={100} color="" style={{ alignSelf: "center" }}>{caption}</Typography>
        </div>
    </div>
  )
}


export default Post