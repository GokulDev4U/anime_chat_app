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

        <Link to='/' onClick={()=>setTab("/")}>
           {tab === '/' ? <Home /> : <HomeOutlined />}
        </Link>

        <Link to='/' onClick={()=>setTab("/")}>
           {tab === '/' ? <Home /> : <HomeOutlined />}
        </Link>

        <Link to='/' onClick={()=>setTab("/")}>
           {tab === '/' ? <Home /> : <HomeOutlined />}
        </Link>
        
    </div>
  )
}

export default Header