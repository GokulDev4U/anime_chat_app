import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Home,
    HomeOutlined,
    Add,
    AddOutlined,
    SearchOutlined,
    Search,
    AccountCircle,
    AccountCircleOutlined,
  } from "@mui/icons-material";

const Header = () => {
    const [tab, setTab] = useState('/');

  return (
    <div className='header'>
        <Link to='/' onClick={()=>setTab("/")}>
           {tab === '/' ? <Home style={{color: 'black'}}/> : <HomeOutlined />}
        </Link>

        <Link to='/newpost' onClick={()=>setTab("/newpost")}>
           {tab === '/newpost' ? <Home style={{color: 'black'}}/> : <HomeOutlined />}
        </Link>

        <Link to='/search' onClick={()=>setTab("/search")}>
           {tab === '/search' ? <Home style={{color: 'black'}}/> : <HomeOutlined />}
        </Link>

        <Link to='/account' onClick={()=>setTab("/account")}>
           {tab === '/account' ? <Home style={{color: 'black'}}/> : <HomeOutlined />}
        </Link>
        
    </div>
  )
}

export default Header