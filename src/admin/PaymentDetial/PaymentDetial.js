import axios from 'axios';
import React, {useEffect, useState} from 'react';
import "./PaymentDetial.css";


function PaymentDetial() {
 
    const [payment, setPayment] = useState([]);
   

    useEffect(() => {
        fetch(`https://ecommercewebbackend.vercel.app/api/order/get`)
        .then((res) => res.json())
        .then((asd) => setPayment(asd.as));
    },[]);

    console.log(payment);



    

    return (
        <table class="table table-striped" id="table">
        <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Total Amount</th>
      <th scope="col">UserName</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Status</th>
      <th scope="col">Status Update</th>
      <th scope="col">Status Update Button</th>
    </tr>
  </thead>
  {
    payment.map((pays) => (
<StatusEnter key={pays} pays={pays} />
    ))
  }
  
      </table>
  )
}

export default PaymentDetial;


function StatusEnter({pays}) {

    const [status, setStatus]  = useState("");
    console.log(status)

  const state = async(e) => {

    e.preventDefault();

    const up = axios.put(`https://ecommercewebbackend.vercel.app/api/order/update/${pays._id}`,{
        status
    });
    return up;
  }

    return(
<tbody>
    <tr>
    <td>{pays._id}</td>
      <td>{pays.totalAmount}</td>
      <td>{pays.name}</td>
      <td>Online</td>
      <td>{pays.status}</td>
         <td>
<select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} >
<option>None</option>
  <option value="Shipping" >Shipping</option>
  <option value="Delivered" >Delivered</option>
</select>
</td>
<td><button className='sub' type='submit' onClick={state}>Submit</button></td>

    </tr>
   
  </tbody>
    )
}