import React from 'react'
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
            <Link to={"/"} className='text-decoration-none'>
            <li class="nav-item">
            <a class="nav-link active " aria-current="page" href="#">Home</a>
          </li>
          </Link>
            <Link to={"/card"} className='text-decoration-none'>
            <li class="nav-item">
            <a class="nav-link" href="#">Card</a>
          </li>
            </Link>
            <Link to={"/pricing"} className='text-decoration-none'>
            <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
            </Link>
            <Link to={"/student"} className='text-decoration-none'>
            <li class="nav-item">
            <a class="nav-link" href="#">Student</a>
          </li>
            </Link>
            <Link to={"/studentapi"} className='text-decoration-none'>
            <li class="nav-item">
            <a class="nav-link" href="#">Studentapi</a>
          </li>
            </Link>
        </ul>
      </div>
      <div>
      <Link to={"/settings"}>
      {/* <a class="nav-link" href="#">Settings</a> */}
      <i class="fa fa-cog text-white" aria-hidden="true"></i>
      </Link>
      </div>
    </div>
  </nav>
  )
}

export default Topbar;
