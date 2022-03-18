import { Avatar } from '@mui/material';
import React from 'react'
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
        </div>
    </div>
  )
}


export default Post