import React, {useState, useEffect} from 'react';
import "./Cart.css";
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';



function Cart() {

    const [cart, setCart] = useState([]);
    const [addresss, setAddress] = useState([]);
    const [door_no, setDoor_no] = useState("");
    const [street_name, setStreet_name] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState();


  

    const notify = () => toast.success("Order Successfully...", {
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
    setTimeout(() => {
      fetch(`https://ecommerce-qrcj.onrender.com/api/cart/get`)
      .then((res) => res.json())
       .then((asd) => {
        setCart(asd.cart)
       } );
    }, 2000)
    },[]);

    useEffect(() => {
      setTimeout(() => {
        fetch(`https://ecommerce-qrcj.onrender.com/api/address/get`)
        .then((res) => res.json())
        .then((asds) => {setAddress(asds)
        });
      },2000)
  
    },[]);

    var assas = addresss.filter((pp) => pp.clientId === localStorage.getItem('id'));


    


   const address = async(e) => {
    e.preventDefault();

    const addresspost = await axios.post(`https://ecommerce-qrcj.onrender.com/api/address/post`,{
      door_no, street_name, city, state, country, pincode, clientId: localStorage.getItem("id")
    });
   
    return addresspost;

   }
   
   
    const cartdata = cart.filter((ass) => ass.clientId === localStorage.getItem("id"))


    const totalprice = cartdata.map(item => item.qty  * item.price ).reduce((sum, item ) => sum + item,0)

   const stripe = 'pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3';
    
    const orderpost = async(token) => {
    const order = await axios.post(`https://ecommerce-qrcj.onrender.com/api/order/post`, {
     stripe_id: stripe,  name: localStorage.getItem("username"),address: assas, product: cartdata, totalAmount: totalprice, token, userId: localStorage.getItem("id")
    });
   notify()

   setTimeout(() => {
    window.location.href="/order"
   },5000)
    
    return order;
    }
    

  return (

    <div className='container'>
      {cartdata.length !== 0 && <h2 id="carth2">My Cart</h2> }
      { 
        cartdata.length === 0 ? (
          <h2 className='empty'> CART IS EMPTY  </h2>
        ) : (
          <div className='row '>
          <div className='col-lg-8'>
                    {
                      cartdata.map((carts) => (
                        <CartDetial key={carts._id}  carts={carts} />
                      ))
                    }  
                    <h5 className='cartstotalpr'>Total Amount : {totalprice}/-</h5>
                   {assas ? (<StripeCheckout stripeKey={stripe} token={orderpost} ><button className='check' onClick={orderpost} >Checkout</button></StripeCheckout> ) : ( <h5 className='addressh1q'>Please Enter Address</h5> )} 
          </div>
          <div className='col-md' id="carts2">
          <h4 className='cartsh42'>Delivery Address</h4>{
            assas.map((asse) => (
          <form onSubmit={address}>
           {asse.door_no ? (<p className='addressp'>{asse.door_no},</p>) : ( <input type="text"   id="form3Example3" value={door_no} onChange={(e) => setDoor_no(e.target.value)} className="form-control form-control-lg df"
                          placeholder="Enter Door No" required/> )}
               {asse.street_name ? (<p className='addressp'>{asse.street_name},</p>) : ( <input type="text" value={street_name} onChange={(e) => setStreet_name(e.target.value)} id="form3Example3" className="form-control form-control-lg df"
                          placeholder="Enter  Street Name" required/> )}             
             {asse.city ? (<p className='addressp'>{asse.city},</p>) : ( <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  id="form3Example3" className="form-control form-control-lg df"
                          placeholder="Enter City" required/> )}               
                {asse.state ? ( <p className='addressp'>{asse.state},</p> ) : (  <input type="text"  value={state} onChange={(e) => setState(e.target.value)} id="form3Example3" className="form-control form-control-lg df"
                          placeholder="Enter State" required/> ) }           
                  {asse.country ? ( <p className='addressp'>{asse.country},</p> ) : ( <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}  id="form3Example3" className="form-control form-control-lg df"
                          placeholder="Enter Country" required/> )}          
                   {asse.pincode ? ( <p className='addressp'>{asse.pincode}.</p> ) : ( <input type="Number" value={pincode} onChange={(e) => setPincode(e.target.value)}  id="form3Example3" className="form-control form-control-lg df"
                          placeholder="Enter PinCode" required/> ) }         
                        { assas.length === 0 &&  <button type='submit' className='cartsadds'>Submit</button>}  
          </form>
            ))
          }
          </div>
          </div>
        )
      }
       
       
          

       
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

export default Cart;





function CartDetial({ carts }) {

 const cartdelete = async() => {
  const del = await axios.delete(`https://ecommerce-qrcj.onrender.com/api/cart/delete/${carts._id}`);
if(del.status === 200){
  window.location.href="/home"
}
  return del;
 }

  

  return(
<div className='row' id="carts"> 
<div className='col-sm-4'>
<img src={carts.image_1} className="img-fluid" id="carts-img" alt={carts.name} />
</div>
<div className='col-md-8' id="cartas">
<h3 className='cartsh3'>{carts.name}.</h3>
<h4 className='cartsh4'>₹ {carts.price} /-</h4>
<div className='zzz'>
<h4 className='cartsh4'>Quantity: {carts.qty} </h4>
<button className='butscarts' onClick={cartdelete}><DeleteIcon /></button>
</div>

</div>
</div>

  );
}
