import React,{useState, useEffect} from 'react';
import axios from "axios";
import "./Order.css";

function Order() {

    const [order, setOrder] = useState([]);
  
   const id = localStorage.getItem("id")

     useEffect(() => {
      axios.get(`https://ecommerce-qrcj.onrender.com/api/order/findget/${id}`)
  
     .then((asd) => setOrder(asd.data.o))

     },[id]);

     


    return (
    <div className='container'>
        <h2 className='orderh2'>My Order</h2>
       <div className='row'  id="col">
         <div className='col-md-6' >
            <h3 className='orderh3'>Token</h3>
         </div>
         <div className='col-md-4'>
            <h3 className='orderh3'>Payment Mode</h3>
         </div>
         <div className='col-sm-2'>
            <h3 className='orderh3'>View</h3>
         </div>
       </div>
       <div>
       {
            order.map((orders) => (
                <OrderDetial key={orders} orders={orders} />
            ))
         }
       </div>
    </div>
  )
}

export default Order;



function OrderDetial({orders}) {
    return (
        <div className='row'  id="col">
        <div className='col-md-6' >
           <h3 className='col-md-6 orderh31'>{orders.source}</h3>
        </div>
        <div className='col-md-4'>
           <h3 className='col-md-4 orderh31'>Online</h3>
        </div>
        <div className='col-sm-2'>
           <button className='orderview' onClick={() => window.location.href=`/orderview/${orders._id}`}>View</button>
        </div>
      </div>
    )
}