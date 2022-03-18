import React from 'react'
import './Account.css'
import { useDispatch } from 'react-redux'
const Account = () => {
    const dispstch = useDispatch()
  return (
    <div className='account'>
        <div className="accountLeft"></div>
        <div className="accountRight"></div>
    </div>
  )
}

export default Account