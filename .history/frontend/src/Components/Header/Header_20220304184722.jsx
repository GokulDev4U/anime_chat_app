import React from 'react'
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
  return (
    <div className='header'>
        <Link to='/'>
            <Home />
        </Link>
        
    </div>
  )
}

export default Header