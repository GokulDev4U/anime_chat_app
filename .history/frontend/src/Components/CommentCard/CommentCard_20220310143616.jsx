import React from 'react'
import './CommentCard.css'
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const CommentCard = ({userId,name,avatar,comment,commentId,postId,isAccount}) => {
 const {user} = useSelector(state => state.user);

 const deleteCommentHandler = async() => {
    console.log('delete comment');
 }

  return (
    <div className='commentUser'>
        <Link to={`/user/${userId}`}>
            <img src={avatar} alt={name} />
            <Typography style={{
                minWidth: '6vmax',
            }}>
            {name}
            </Typography>
        </Link>
        <Typography >
            {comment}
        </Typography> 
         {isAccount ?( <Button onClick={deleteCommentHandler}>
            <Delete />
        </Button>) : userId === user._id ? (<Button onClick={deleteCommentHandeler}>
            <Delete />
        </Button>) : null }
    </div>  
  )
}

export default CommentCard