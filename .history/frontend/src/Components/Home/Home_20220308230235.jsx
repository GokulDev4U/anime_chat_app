import React from 'react'
import Post from '../Post/Post';
import User from '../User/User';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
    <div className="homeleft">
        <Post postImage="https://static.toiimg.com/photo/80482428.cms?imgsize=99038" ownerName={'Gokul Pisharody'}/>
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
}

export default Home
