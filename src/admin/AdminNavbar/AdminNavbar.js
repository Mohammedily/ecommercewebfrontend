import React from 'react';
import "./AdminNavbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function AdminNAvbar() {

    const logout = () => {
        localStorage.removeItem("adminid");
        localStorage.removeItem("adminname");
        window.location.href = `/admin/signin`;
    }

  return (
    <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" id="navbar-branda" href="/admin/home">Ecom Admin Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar" id="naca"><MenuIcon id="menu" /></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title"  id="offcanvasNavbarLabel" >Ecom</h5>
        <button type="button" id="reset" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" id="navlinks" href="/admin/product/post">Product Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="navlinks" href="/admin/product/delete">Product Delete</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="navlinks" href="/admin/user">User Detials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="navlinks" href="/admin/payment">Payment Detials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={logout} id="navlinks">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default AdminNAvbar;