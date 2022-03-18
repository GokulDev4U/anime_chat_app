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
        <Link to='/'>
            <Home />
        </Link>
        
    </div>
  )
}

export default Header