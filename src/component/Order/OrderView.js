import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Order.css";
import { ToastContainer, toast } from 'react-toastify';

function OrderView() {

    const [order, setOrder] = useState({});
    const [address, setAddress] = useState([]);
    const [card, setCart] = useState([]);
    const { id } = useParams();

    const notify = () => toast.success("Cancel Order", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    useEffect(() => {
      fetch(`https://ecommerce-qrcj.onrender.com/api/order/get/${id}`)
      .then((res) => res.json())
      .then((asd) => setOrder(asd.ords))
    },[id])
// console.log(order);

useEffect(() => {
    fetch(`https://ecommerce-qrcj.onrender.com/api/order/get/${id}`)
    .then((res) => res.json())
    .then((asd) => setAddress(asd.ords.address))
  },[id]);

  useEffect(() => {
    fetch(`https://ecommerce-qrcj.onrender.com/api/order/get/${id}`)
    .then((res) => res.json())
    .then((asd) => setCart(asd.ords.product))
  },[id]);

  console.log(card);

  function Cancel() {
    const del = axios.delete(`https://ecommerce-qrcj.onrender.com/api/order/delete/${order._id}`);
    notify()
    setTimeout(() => {
     window.location.href=`/order`;
    },5000)
    return del;
  }


      return (
    <div className='container' id="orderview">
<button onClick={() => window.location.href=`/order`} className='orderviewback'>Back</button>

          <h3 className='orderviewh3'>My Orders</h3>

          <div className='row'>
             <div className='col-md-6 text-center mt-4'>
                <h4 className='orderviewh4'>Address</h4>
               {address.map((add) => (
                <div>
                 <p id="orderviewp">{add.door_no}, {add.street_name},</p>
                 <p id="orderviewp">{add.city},</p>
                 <p id="orderviewp">{add.state},</p>
                 <p id="orderviewp">{add.country},</p>
                 <p id="orderviewp">{add.pincode}.</p>
                 </div>
               ))
               }
             </div>
             <div className='col-md-6 text-center mt-4'>
             <h4 className='orderviewh4'>Payment Detial</h4>
             <p id="orderviewp">Name: {order.name},</p>
             <p id="orderviewp">Email: {order.email},</p>
             <p id="orderviewp">Date: {order.Date},</p>
             <p id="orderviewp">Payment Id: {order.source},</p>
             <p id="orderviewp">Total Amount: {order.totalAmount},</p>
             <p id="orderviewp">Order Status: {order.status}.</p>
             <button className='cancel' onClick={Cancel}>Cancel Order</button>
             </div>
          </div>
          <div className='row text-center'>
           {
            card.map((datas) => (
                <OrderCard key={datas} datas={datas} />
            ))
           }
          </div>
    </div>
  )
}

export default OrderView;


function OrderCard({datas}){
    return(
        <div className='col-sm-4 col-lg-4' id="case"> 
        <div className="card" id='aszze'>
      <img src={datas.image_1} className="card-img-top h-40" id="hoimge"  alt={datas.name} />
      <div className="card-body">
       <div className='co'>
          <p id="orderviewp">{datas.name}.</p>
          <p id="orderviewp">{datas.price} /-</p>
          <p id="orderviewp">Qty: {datas.qty}.</p>
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