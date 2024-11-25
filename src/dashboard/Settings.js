import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Settings() {
  return (
    <div className='m-3 '>
      <div>
        <Link to={'profile'}>
        <button className='btn btn-primary'>Profile</button>
        </Link>
        <Link to={'contact'}>
        <button className='btn btn-info ms-3'>Contact</button>
        </Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Settings;
