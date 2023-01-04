import React, {useState, useEffect} from 'react';
import "./Product.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Product() {
    const [data, setData] = useState([]);
    
    const [isLoading, setISLodaing]  = useState(true);



    useEffect(() => {
      setTimeout(() => {
        fetch(`https://ecommercewebbackend.vercel.app/api/product/get`)
        .then((res) => res.json())
        .then((product) => { setData(product.product)
           setISLodaing(false) })
      },2000)
      },[]);

    


  return (
    <div className='container'>
      <SkeletonTheme highlightColor='#C38787'>

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

</SkeletonTheme>
    </div>
  )
}

export default Product;