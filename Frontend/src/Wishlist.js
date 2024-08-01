import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';

function Wishlist() {

   const[wish,setWish] = useState([]);
   let uid = localStorage.getItem("uid");
   let obj = {id : uid}
   async function call() {
      let res = await axios.post("http://localhost:8081/wishlist",obj)
      setWish(res.data) 
   }
   call()
  return (
    <div>
        <Header/>
       <main>
         {/* <!-- section--> */}
         <div className="mt-4">
            <div className="container">
               {/* <!-- row --> */}
               <div className="row">
                  {/* <!-- col --> */}
                  <div className="col-12">
                     {/* <!-- breadcrumb --> */}
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                           <li className="breadcrumb-item"><a href="#!">Home</a></li>
                           <li className="breadcrumb-item"><a href="#!">Shop</a></li>
                           <li className="breadcrumb-item active" aria-current="page">My Wishlist</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- section --> */}
         <section className="mt-8 mb-14">
            <div className="container">
               {/* <!-- row --> */}
               <div className="row">
                  <div className="col-lg-12">
                     <div className="mb-8">
                        {/* <!-- heading --> */}
                        <h1 className="mb-1">My Wishlist</h1>
                        <p>There are 5 products in this wishlist.</p>
                     </div>
                     <div>
                        {/* <!-- table --> */}
                        <div className="table-responsive">
                           <table className="table text-nowrap table-with-checkbox">
                              <thead className="table-light">
                                 <tr>
                                    <th>
                                       {/* <!-- form check --> */}
                                       <div className="form-check">
                                          {/* <!-- input --> */}
                                          <input className="form-check-input" type="checkbox" value="" id="checkAll" />
                                          {/* <!-- label --> */}
                                          <label className="form-check-label" for="checkAll"></label>
                                       </div>
                                    </th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                    <th>Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {
                                    wish.map((v)=>(
                                       
                                    
                                 <tr>
                                    <td className="align-middle">
                                       {/* <!-- form check --> */}
                                       <div className="form-check">
                                          {/* <!-- input --> */}
                                          <input className="form-check-input" type="checkbox" value="" id="chechboxTwo" />
                                          {/* <!-- label --> */}
                                          <label className="form-check-label" for="chechboxTwo"></label>
                                       </div>
                                    </td>
                                    <td className="align-middle">
                                       <a href="#"><img src={"uploads/products/"+v.pro_image} className="icon-shape icon-xxl" alt="" /></a>
                                    </td>
                                    <td className="align-middle">
                                       <div>
                                          <h5 className="fs-6 mb-0"><a href="#" className="text-inherit">{v.product_name}</a></h5>
                                          <small>$.98 / lb</small>
                                       </div>
                                    </td>
                                    <td className="align-middle">${v.original_price}.00</td>
                                    <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
                                    <td className="align-middle">
                                       <div className="btn btn-primary btn-sm">Add to Cart</div>
                                    </td>
                                    <td className="align-middle">
                                       <a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                          <i className="feather-icon icon-trash-2"></i>
                                       </a>
                                    </td>
                                 </tr>
                                 ))
                              }
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
    </div>
  )
}

export default Wishlist
