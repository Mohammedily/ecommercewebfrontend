import React from 'react';
import "./Navbar.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  
  const logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("username")
    window.location.href='/signin';
  }

 

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a className="navbar-brand" href="/home" id="navbar-brands"><ShoppingBagIcon className='sho' />Ecom</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto" id="asazz">
        <li className="nav-item" id="naz">
            <a className="nav-link" id="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item" id="naz">
            <a className="nav-link" id="nav-link" href="/product">Product</a>
          </li> 
          <li className="nav-item" id="naz">
            <a className="nav-link" id="nav-link" href="/cart">Cart</a>
          </li>
          <li className="nav-item" id="naz">
            <a className="nav-link" id="nav-link" href="/order">Order</a>
          </li>
          <li className="nav-item" id="naz" onClick={() => window.location.href=`/profile`}>
          <AccountCircleIcon className='aco'/>
          </li>
          <li className="nav-item" id="naz">
            <button className='logs' onClick={logout}>Logout</button>
          </li>
          </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;

