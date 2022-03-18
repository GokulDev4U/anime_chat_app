import React from 'react'
import './CommentCard.css'
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CommentCard = ({userId,name,avatar,comment,commentId,postId,isAccount}) => {
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
         {isAccount ?( <Button>
            <Delete />
        </Button>) : userId === userId._id ? (    <Button>
            <Delete />
        </Button>) : null }
    </div>  
  )
}

export default CommentCard