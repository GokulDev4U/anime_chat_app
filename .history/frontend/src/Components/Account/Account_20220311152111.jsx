import React, { useEffect } from 'react';
import './Account.css';
import { useDispatch, useSelector } from 'react-redux';
import { myPosts } from '../../Actions/Post';
import Loader from '../Loader/Loader';
import { Avatar, Button, Typography } from '@mui/material';
import Post from '../Post/Post';
import { Link } from 'react-router-dom';

const Account = () => {
    const dispatch = useDispatch();
    const { isLoading, error, posts } = useSelector(state => state.myPosts);
    const { error: likeError, message } = useSelector(state => state.likePost);
    const { user, isLoading: userLoading } = useSelector(state => state.user);


    useEffect(() => {
        dispatch(myPosts());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: 'clearError' });
        }
        if (likeError) {
            alert.error(likeError);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [alert, error, message, likeError, dispatch]);

    return isLoading === true || userLoading === true ? <Loader /> : (
        <div className='account'>
            <div className="accountLeft">
                {posts && posts.length > 0 ? posts.map(post => (
                    <Post key={post._id} postId={post._id} caption={post.caption} postImage={post.image.url} likes={post.likes} comments={post.comments} ownerImage={post.owner.avatar.url} ownerName={post.owner.name} ownerId={post.owner._id} isDelete={post.isDelete} isAccount={post.isAccount} />
                )) : <Typography variant='h6'>You have not made any post</Typography>}
            </div>
            <div className="accountRight">
                <Avatar src={user.avatar.url} sx={{ height: "8vmax", width: "8vmax" }} />
                <Typography variant='h6'>{user.name}</Typography>
                <div>
                    <button>
                        <Typography>Followers</Typography>
                    </button>
                    <Typography>{user.followers.length}</Typography>
                </div>

                <div>
                    <button>
                        <Typography>Following</Typography>
                    </button>
                    <Typography>{user.following.length}</Typography>
                </div>

                <div>
                    <Typography>Posts</Typography>
                    <Typography>{user.posts.length}</Typography>
                </div>

                <Button variant="contained">Logout</Button>

                <Link to={`/update/profile`}>Edit Profile</Link>
                <Link to={`/update/password`}>Change Password</Link>
            </div>
        </div>
    );
};

export default Account;