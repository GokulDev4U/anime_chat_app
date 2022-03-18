import React, { useEffect, useState } from 'react';
import './Account.css';
import { useDispatch, useSelector } from 'react-redux';
import { myPosts } from '../../Actions/Post';
import Loader from '../Loader/Loader';
import { Avatar, Button, Dialog, Typography } from '@mui/material';
import Post from '../Post/Post';
import { Link } from 'react-router-dom';
import User from '../User/User';
import { useAlert } from 'react-alert';
import { logoutUser } from '../../Actions/User';

const Account = () => {
    const dispatch = useDispatch();
    const { isLoading, error, posts } = useSelector(state => state.myPosts);
    const { error: likeError, message } = useSelector(state => state.likePost);
    const { user, isLoading: userLoading } = useSelector(state => state.user);
    const [followersToggle, setFollowersToggle] = useState(false);
    const [followingToggle, setFollowingToggle] = useState(false);
    const alert = useAlert();

    const logoutHandler = async () => {
        await dispatch(logoutUser());
        alert.success('Logged out successfully');
    };

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
                    <Post key={post._id} postId={post._id} caption={post.caption} postImage={post.image.url} likes={post.likes} comments={post.comments} ownerImage={post.owner.avatar.url} ownerName={post.owner.name} ownerId={post.owner._id} isDelete={true} isAccount={true} />
                )) : <Typography variant='h6'>You have not made any posts</Typography>}
            </div>

            <div className="accountRight">
                <Avatar src={user?.avatar?.url} sx={{ height: "8vmax", width: "8vmax" }} />
                <Typography variant='h6'>{user?.name}</Typography>
                <div>
                    <button onClick={() => setFollowersToggle(!followersToggle)}>
                        <Typography>Followers</Typography>
                    </button>
                    <Typography>{user?.followers.length}</Typography>
                </div>

                <div>
                    <button onClick={() => setFollowingToggle(!followingToggle)}>
                        <Typography>Following</Typography>
                    </button>
                    <Typography>{user?.following.length}</Typography>
                </div>

                <div>
                    <Typography>Posts</Typography>
                    <Typography>{user?.posts.length}</Typography>
                </div>

                <Button variant="contained" onClick={logoutHandler}>Logout</Button>

                <Link to={`/update/profile`}>Edit Profile</Link>
                <Link to={`/update/password`}>Change Password</Link>

                <Button variant="text" style={{ color: 'red', margin: '2vmax' }}>Delete My Profile</Button>

                <Dialog open={followersToggle} onClose={() => setFollowersToggle(!followersToggle)}>
                    <div className="DialogBox">
                        <Typography variant='h4'>Followers</Typography>
                        {
                            user && user?.followers.length > 0 ? user.followers.map(follower => (
                                <User key={follower._id} userId={follower._id} userName={follower.name} userImage={follower.avatar.url} />
                            )) : <Typography style={{ margin: "2vmax" }}>You have no followers</Typography>

                        }
                    </div>
                </Dialog>

                <Dialog open={followingToggle} onClose={() => setFollowingToggle(!followingToggle)}>
                    <div className="DialogBox">
                        <Typography variant='h4'>Following</Typography>
                        {
                            user && user?.following.length > 0 ? user.following.map(follow => (
                                <User key={follow._id} userId={follow._id} name={follow.name} avatar={follow.avatar.url} />
                            )) : <Typography style={{ margin: "2vmax" }}>You're not following any one</Typography>
                        }
                    </div>
                </Dialog>

            </div>
        </div>
    );
};

export default Account;