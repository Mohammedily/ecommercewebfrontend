import React, {useState} from 'react';
import "./AdminProduct.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



function AdminProduct() {
  
   const [name, setName] = useState("");
   const [price, setPrice] = useState();
   const [image_1, setImage_1] = useState("");
   const [image_2, setImage_2] = useState("");
   const [image_3, setImage_3] = useState("");
   const [category, setCategory] = useState("");
   const  [discount, setDiscount] = useState();
   const [description, setDescription] = useState("");


   const notify = () => toast.success('Product Post Successfully...', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });;

   const productpost = async(e) => {
    e.preventDefault();
    try {
      const post = await axios.post(`https://ecommerce-qrcj.onrender.com/api/product/post`, {
        name, price, image_1, image_2, image_3, category,discount, description, adminId: localStorage.getItem("adminid")
      })
      if(post.status === 201){
       notify();
      }
    } catch (error) {
      console.log(error);
    }
   }
  

  return (
    <section class="vh-100" id="sec" style={{backgroundColor: "#FFFFFF"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
            <div class="card-body p-5 text-center">
  <form onSubmit={productpost}>
              <h3 class="mb-5" id="pos">AOO... Product Post</h3>
  
              <div class="form-outline mb-4">
                <input type="text" id="typeEmailX-2" value={name} onChange={(e) => setName(e.target.value)} class="form-control form-control-lg" placeholder='Enter Title' />
              </div>
  
              <div class="form-outline mb-4">
                <input type="Number" id="typePasswordX-2" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control form-control-lg" placeholder='Enter price' />
              </div>  

              <div class="form-outline mb-4">
                <input type="text" id="typePasswordX-2" value={image_1} onChange={(e) => setImage_1(e.target.value)} class="form-control form-control-lg" placeholder='Enter Image 1 Url' />
              </div>  

              <div class="form-outline mb-4">
                <input type="text" id="typePasswordX-2" value={image_2} onChange={(e) => setImage_2(e.target.value)} class="form-control form-control-lg" placeholder='Enter Image 2 Url' />
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="typePasswordX-2" value={image_3} onChange={(e) => setImage_3(e.target.value)} class="form-control form-control-lg" placeholder='Enter Image 3 Url' />
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="typePasswordX-2" value={category} onChange={(e) => setCategory(e.target.value)} class="form-control form-control-lg" placeholder='Enter Category' />
              </div>
              
              <div class="form-outline mb-4">
                <input type="number" id="typePasswordX-2" value={discount} onChange={(e) => setDiscount(e.target.value)} class="form-control form-control-lg" placeholder='Enter Discount' />
              </div>

              <div class="form-outline mb-4">
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} id="typePasswordX-2" class="form-control form-control-lg" placeholder='Enter Description' />
              </div>

              <button class="btn  btn-lg btn-block" id="post" type="submit">Post</button>
              </form>
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
        </div>
      </div>
    </div>
  </section>
  )
}

export default AdminProduct;