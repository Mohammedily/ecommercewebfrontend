import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "./AdminProductDelete.css";

function AdminProductDelete() {

    const [product, setProduct] = useState([]);

  
  

    useEffect(() => {
      fetch(`https://ecommercewebbackend.vercel.app/api/product/get`)
      .then((res) => res.json())
      .then((asd) => setProduct(asd.product));
    },[]);

    console.log(product)

  return (
    <div className='container'>
       <div className='row a' >
        {
            product.map((datas) => (
                <ProductCart key={datas} datas={datas} />
            ))
        }
       </div>
    </div>
  )
}

export default AdminProductDelete;


function ProductCart({datas}) {

    const notify = () => toast.success("Product Deleted Successfully...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    const productdeletes = () => {
        const deletes = axios.delete(`https://ecommercewebbackend.vercel.app/api/product/delete/${datas._id}`)
       notify()
        return deletes;
    }

    return (
        <div className='col-sm-4 col-lg-4'  id="case"> 
          <div className="card" id='aszze'>
        <img src={datas.image_1} className="card-img-top h-40" id="hoimge"  alt={datas.name} />
        <div className="card-body">
         <div className='co'>
            <button className='soc' onClick={productdeletes}>Delete</button>
         </div>
        </div>
      </div> 
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
          </div>
    )
}