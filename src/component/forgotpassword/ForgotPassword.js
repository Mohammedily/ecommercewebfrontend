import React, {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ForgotPassword() {

    const [email, setEmail] = useState("");

 
    const notify = () => toast.success('Email Send Successfully...', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
     });

     const forgotpasswordsuccess = (data) => toast.error(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
 
    const post = async(e) => {
     e.preventDefault();
 
     try {
         const posts = await axios.post(`https://ecommercewebbackend.vercel.app/api/sign/`, 
         { email});
         if(posts.status === 201){
           notify();
         } 
       return posts;
       } catch (error) {
       if(error.response.status === 500){
        forgotpasswordsuccess("Error"); 
       }
         
     }
    }

  return (
    <section className="vh-90" id="aaa">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-9 col-lg-6 col-xl-5">
        <h2 id="aoo-">AOO... </h2>
          <h3 id="aoos">Forgot-Password</h3>
          <h3 id="aooss">Page</h3>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={post}>
          <h3 id="asxa">AOO... Forgot Password </h3>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <label className="form-label" for="form3Example3">Email address</label>
            </div>
    <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" id="azz"  className="btn btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Forgot Password</button>
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

export default ForgotPassword