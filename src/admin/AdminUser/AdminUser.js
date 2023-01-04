import React, {useState, useEffect} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./AdminUser.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function AdminUser() {

    const [user, setUser]  = useState([]);

    useEffect(() => {
        fetch(`https://ecommercewebbackend.vercel.app/api/sign/get`)
        .then((res) => res.json())
        .then((asd) => setUser(asd.data));
    },[]);

    console.log(user);

  return (
    <div className='container'>
      <div className='row az'>
           {
            user.map((users) => (
                <User key={users} users={users} />
            ))
           }
      </div>
    </div>
  )
}

export default AdminUser;

function User({users}){

    const notify = () => toast.success("User Has Blocked", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });


    const block = () => {
        const del = axios.delete(`https://ecommercewebbackend.vercel.app/api/sign/delete/${users._id}`)
        notify()
        return del;
    }

    return (
        <div className='col-sm-4 col-lg-4 '  id="cases"> 
          <div className="card" id='aszzes'>
        <div className="card-body">
         <div className='co'>
         <AccountCircleIcon className='accs'  />
         <h4 className='userh4'>UserName : {users.username}.</h4>
         <h5 className='userh4'>Email : {users.email}.</h5>
         <button onClick={block} className='userbutton'>Block</button>
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
      </div> </div>
    )
}