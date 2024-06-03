import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetial.css";
import Footer from '../Footer/Footer';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function ProductDetial() {

    const [api, setApi] = useState([]);
    const [loading,setLoading]  = useState(true);

   const [size, setSize] = useState("");


   const [qty, setQty] = useState(1);
  
   let increment = () => {
     setQty(qty + 1);
   }
 
   let decrement = () => {
     setQty(qty - 1);
   }
 
   if(qty === 0){
     setQty(1);
   }
   
    const {id} = useParams()

    useEffect(() => {
      setTimeout(() => {
        fetch(`https://ecommerce-qrcj.onrender.com/api/product/${id}`)
        .then((res) => res.json())
        .then((as) => {setApi(as.data)
        setLoading(false)
        });
      },2000)
    },[id])

    const [data, setData] = useState([]);
    const [isLoading, setISLodaing]  = useState(true);

    useEffect(() => {
      setTimeout(() => {
        fetch(`https://ecommerce-qrcj.onrender.com/api/product/get/api`)
        .then((res) => res.json())
        .then((product) => {setData(product)
       setISLodaing(false)
       });
      },2000)  
    },[]);

    var datas = data.filter((as) => as.category === api.category);

    console.log(datas);

    const cart = async() => {
        const cartpost = await axios.post(`https://ecommerce-qrcj.onrender.com/api/cart/post`, {
          name: api.name, price: api.price, image_1: api.image_1, category: api.category, description: api.description, qty,size: size.toUpperCase(), discount: api.discount, adminId: api.adminId, clientId: localStorage.getItem("id")
        })

        if(cartpost.status === 201){
          window.location.href=`/cart`;
        }
      return cartpost;
    }
console.log(size)


 
    
  return (
    <div>
      <SkeletonTheme highlightColor='#C38787'>
        <div>
            <button onClick={() => window.location.href=`/product`} className='back'>Back</button>
        </div>
        <div className='container'>
          {
            loading ? (  <div className='row' id="rose">
            <div className='col-md-4'>
           <Skeleton className='skeprodimg' />
            </div>
            <div className='col-md-8' id='sss'>
         <h2 className='shirtname'><Skeleton /></h2>
         <h3 className='shirtprice'><Skeleton /></h3>
         <p className='shirtdescription'><Skeleton /></p>
         <h3 className='shirtprice'><Skeleton /></h3>
         <h3 className='shirtprice'><Skeleton /></h3>
         <div className='cartsdiv'> 
         <Skeleton />
         <Skeleton />
         <Skeleton />
           </div>
           <Skeleton />
         </div>
                  </div> ) : (  <div className='row' id="rose">
            <div className='col-md-4'>
           <img className='img-fluid' id="roses" src={api.image_1} alt={api.name} />
            </div>
            <div className='col-md-8' id='sss'>
         <h2 className='shirtname'>Name: {api.name}.</h2>
         <h3 className='shirtprice'>Price: {api.price} /-</h3>
         <p className='shirtdescription'>Description: {api.description}</p>
         <h3 className='shirtprice'>Discount: {api.discount}%</h3>
         <h3 className='shirtprice'>Size: <select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)} required>
  <option >None</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
  <option value="XXL">XXL</option>
</select></h3>
         <div className='cartsdiv'> 
         <button className='butscartse' onClick={increment}><AddIcon /></button>
         <p className='cartspp'>{qty}</p>
         <button className='butscarts' onClick={decrement}><RemoveIcon /></button>
           </div>
         <button type='button' className='addtocart' onClick={cart}>Add To Cart</button>
         </div>
                  </div> )
          }
        </div>
        <div className='container'>
            <p className='phead'>suggestion Product...</p>
            {
          isLoading ? ( 
            <div className='row'>

          <div className='col-sm-4 col-lg-4' id="case">
          <div className='card' id='aszze'>
        <Skeleton className='ske' />
        <div className="card-body">
               <div className='co'>
                <Skeleton className='ss' />
               </div>
              </div>
          </div>
        </div>
        <div className='col-sm-4 col-lg-4' id="case">
          <div className='card' id='aszze'>
        <Skeleton className='ske' />
        <div className="card-body">
               <div className='co'>
                <Skeleton className='ss' />
               </div>
              </div>
          </div>
        </div>
        <div className='col-sm-4 col-lg-4' id="case">
          <div className='card' id='aszze'>
        <Skeleton className='ske' />
        <div className="card-body">
               <div className='co'>
                <Skeleton className='ss' />
               </div>
              </div>
          </div>
        </div>
        <div className='col-sm-4 col-lg-4' id="case">
          <div className='card' id='aszze'>
        <Skeleton className='ske' />
        <div className="card-body">
               <div className='co'>
                <Skeleton className='ss' />
               </div>
              </div>
          </div>
        </div>
        <div className='col-sm-4 col-lg-4' id="case">
          <div className='card' id='aszze'>
        <Skeleton className='ske' />
        <div className="card-body">
               <div className='co'>
                <Skeleton className='ss' />
               </div>
              </div>
          </div>
        </div>
        <div className='col-sm-4 col-lg-4' id="case">
          <div className='card' id='aszze'>
        <Skeleton className='ske' />
        <div className="card-body">
               <div className='co'>
                <Skeleton className='ss' />
               </div>
              </div>
          </div>
        </div>
                      
        </div>
         ) : ( 
          <div className='row' > 
 {
   data.map((datas) => (
     <div className='col-sm-4 col-lg-4' id="case"> 
     <div className="card" id='aszze'>
   <img src={datas.image_1} className="card-img-top h-40" id="hoimge"  alt={datas.name} />
   <div className="card-body">
    <div className='co'>
       <button className='soc' onClick={() => window.location.href=`/product/${datas._id}`}>View {datas.category}</button>
    </div>
   </div>
 </div> 
     </div>
   ))
 }
 </div>

         )
        }
    </div>
    <Footer />
    </SkeletonTheme>
    </div>
  )
}

export default ProductDetial;


