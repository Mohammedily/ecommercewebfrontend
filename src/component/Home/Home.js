import React, { useState, useEffect } from 'react';
import "./Home.css";
import Footer from '../Footer/Footer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Home() {

  const [data, setData] = useState([]);
   const [isLoading, setISLodaing]  = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://ecommercewebbackend.vercel.app/api/product/get/api`)
      .then((res) => res.json())
      .then((product) => {setData(product)
      setISLodaing(false);
      });
    },2000)
   
  },[])

  return (  
   <SkeletonTheme highlightColor='#C38787'>
    <div className="container">
  <div className="row" id="ro">
    <div className="col-md-4">
      <img className='img-fluid' id="aszimg" src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/7/q/w/s-all-rbc-white-one-nb-nicky-boy-original-imagjz5bgpmhcaea.jpeg?q=70" alt='#' />
    </div>
    <div className="col">
    <h1 className='homeh1'>Shop Now...</h1>
    <h4 className='homeh4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
    <a href='/product' className='homea'>Shop Now</a>
    </div>
  </div>
  </div>
   <div className='cas'>
    <h3 className='sim'>Similar Products...</h3>
    
    <div className='container'>
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
   </div>
   <Footer />
  </SkeletonTheme>
  )
}

export default Home