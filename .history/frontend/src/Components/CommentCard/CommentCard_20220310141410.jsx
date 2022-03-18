import React from 'react'
import './CommentCard.css'
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CommentCard = ({userId,name,avatar,comment,commentId,postId}) => {
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
    <Button>
    <Delete />
    </Button>   
    </div>
  )
}

export default CommentCard