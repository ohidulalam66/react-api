import React from 'react';
import './Navber.css'

const Navber = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
    <div className="container-fluid">
      <img className= "nav-img" src="images/logo.png" alt="" />
    <a className="navbar-brand" href="/mr.developer">MR.Developer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href= "/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Sign Up</a>
        </li>
        <a className="nav-link" href="/https://github.com/ohidulalam66" target="_blank"><img className= "rounded img-fluid profile-img" src="images/profile.jpg" alt="" /></a>
      </ul>
    </div>
  </div>
</nav>
);
};

export default Navber;