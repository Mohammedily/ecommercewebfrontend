import React from 'react';
import "./Footer.css";


function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
        <div className='col-sm-4' id="az">
            <h2 className='footh2'>Social</h2>
           <br/>
           <h3 className='footh3'>Instagram</h3>
           <h3 className='footh3'>Facebook</h3>
           <h3 className='footh3'>Whatsapp</h3>
           <h3 className='footh3'>Twitter</h3>
        </div>
        <div className='col-sm-4' id="az">
            <h2 className='footh2'>Navbar</h2>
           <br/>
           <h3 className='footh3'>Home</h3>
           <h3 className='footh3'>Product</h3>
           <h3 className='footh3'>Cart</h3>
           <h3 className='footh3'>Order</h3>
        </div>
        <div className='col-sm-4' id="az">
            <h2 className='footh2'>Selling</h2>
           <br/>
           <h3 className='footh3'>Men Dress</h3>
           <h3 className='footh3'>Men Pant</h3>
           <h3 className='footh3'>Men Shoe</h3>
           <h3 className='footh3'>Men Airpods</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;