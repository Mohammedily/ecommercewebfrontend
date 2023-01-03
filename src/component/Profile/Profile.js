import React,{useState, useEffect} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Profile.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



function Profile() {

    const [prof, setProf] = useState([]);
    const [addresss, setAddress] = useState([]);
    const [door_no, setDoor_no] = useState("");
    const [street_name, setStreet_name] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState();


    const id = localStorage.getItem("id");

    const notify = () => toast.success("Address Deleted Successfully...", {
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
        fetch(`https://ecommerce-qrcj.onrender.com/api/sign/${id}`)
        .then((res) => res.json())
        .then((asd) => setProf(asd.user));
    }, [id]);

    useEffect(() => {
        fetch(`https://ecommerce-qrcj.onrender.com/api/address/get`)
        .then((res) => res.json())
        .then((asds) => setAddress(asds));
       },[]);

       var assas = addresss.filter((pp) => pp.clientId === localStorage.getItem('id'));

       const address = async(e) => {
        e.preventDefault();
    
        const addresspost = await axios.post(`https://ecommerce-qrcj.onrender.com/api/address/post`,{
          door_no, street_name, city, state, country, pincode, clientId: localStorage.getItem("id")
        });
       
        return addresspost;
    
       }

       var ids = assas.map((as) => as._id)

       const adddel = () => {
        const del = axios
          .delete(`https://ecommerce-qrcj.onrender.com/api/address/delete${ids}`);
          notify()
          return del;
       }


    console.log(prof)

  return (
    <div className='container'>
      <div className='text-center'>
        <AccountCircleIcon className='acc' />
         <h3 className='profh3'>UserName: {prof.username}.</h3>
         <h3 className='profh3'>Email: {prof.email}.</h3>
        <h4 className='profh4'>Address</h4>
        <div  id="carts2">
  {assas.map((asse) => (
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
<button onClick={adddel} className='delsas'>Delete Address</button>
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

export default Profile