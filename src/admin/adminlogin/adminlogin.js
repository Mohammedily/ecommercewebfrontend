import React, {useState} from 'react';
import "../adminregister/adminregister.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Adminlogin() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const notify = () => toast.success('Signin Successfully...', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });;

   const post = async(e) => {
    e.preventDefault();

    try {
        const posts = await axios.post(`https://ecommerce-qrcj.onrender.com/api/admin/signin`, 
        { email, password});
        if(posts.status === 201){
          notify()
          localStorage.setItem("adminname",posts.data.existing.username)
          localStorage.setItem("adminid", posts.data.existing._id);
        
          setTimeout(() => {
            window.location.href="/admin/product/post"
          },5000)
        } 
      return posts;
      } catch (error) {
      console.log(error);      
    }
   }



  return (
    <section className="vh-90" id="aaa">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-9 col-lg-6 col-xl-5">
        <h2 id="aoo-">Ecom</h2>
          <h3 id="aoos">Admin</h3>
          <h3 id="aooss">Page</h3>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={post}>
          <h3 id="asxa">Ecom Admin Signin</h3>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <label className="form-label" for="form3Example3">Email address</label>
            </div>

            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" id="azz"  className="btn btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/admin/signup"
                  className="link-danger">Register</a></p>
            </div>
          </form>
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
      </div>
    </div>
  </section>
  )
}

export default Adminlogin;
