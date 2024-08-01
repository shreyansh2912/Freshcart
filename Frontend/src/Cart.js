import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import Header from './Header'
import Auth from './Auth'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cart() {
   const[cart,setCart] = useState([]);
   const[quantity,setQuantity] = useState([]);
   const[change,setChange] = useState([])
   let[total,setTotal] = useState(0);
   let hide = document.getElementById("hide");
   let message = document.getElementById("message");
   
         async function fetch() {
         let id ={id : localStorage.getItem("uid")}
         let res = await axios.post("http://localhost:8081/fetchCart",id);
         setCart(res.data)
      }
   fetch();
     
   let qua = cart;
   qua.map((v)=>{
      quantity.push(v.quantity);
   })

      let handleRemove = async(id)=>{
         let pro_id ={pro_id : id}
       
         let res = await axios.post("http://localhost:8081/deleteCart",pro_id);
         if(res.statusText == "OK"){
            message.innerHTML = "Product Removed from the cart"
            hide.style.display = "block"
            message.style.color= "red"
            document.getElementById("container").style.borderColor = "red";
            hide.classList.add("bg-dark");
            setTimeout(()=>{
               hide.style.display = "none"
            },1200)
         }
         setTimeout(()=>{
            window.location.reload();
         },1500)
      }

      let handleCount = (type,id,key,)=>{
         let num = parseInt(quantity[key]);
         if(type == "plus"){
            if(num < 10){
               num = num +1
            }
         }else{
            if(num > 1){
               num = num-1
            }
         }
         quantity[key] = num;
         change[id]= num;
         change.flat()
      }

   let handleChange = async ()=>{
      let res = await axios.post("http://localhost:8081/saveCart",change)
         if(res.data == "ok"){
            message.innerHTML = "Cart Updated Successfully"
            hide.style.display = "block"
            message.style.color= "green"
            document.getElementById("container").style.borderColor = "green";
            hide.classList.remove("bg-dark");
            setTimeout(()=>{
               hide.style.display = "none"
            },1200)
         }
   }

  return (
    <div>
      <div className='w-25 hide container bg-light mt-3 bg-dark' style={{padding:"8px", borderRadius:"10px",position:"fixed", right:"500px",zIndex:"50000" ,display:"none"}} id="hide">
         <div id="container" className='container text-center pt-2' style={{alignContent:"center", border:"3px solid red",borderRadius:"10px"}}>
            <h5><span id="message" style={{fontWeight:"700",color:"red",fontSize:"18px",fontFamily:"cursive"}}></span> </h5>
         </div>
      </div>
      <Auth/>
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
                           <li className="breadcrumb-item active" aria-current="page">Shop Cart</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- section --> */}
         <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
               {/* <!-- row --> */}
               <div className="row">
                  <div className="col-12">
                     {/* <!-- card --> */}
                     <div className="card py-1 border-0 mb-8">
                        <div>
                           <h1 className="fw-bold">Shop Cart</h1>
                           <p className="mb-0">Shopping in 382480</p>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- row --> */}
               <div className="row">
                  <div className="col-lg-8 col-md-7">
                     <div className="py-3">
                        {/* <!-- alert --> */}
                        <div className="alert alert-danger p-2" role="alert">
                           You’ve got FREE delivery. Start
                           <a href="#!" className="alert-link">checkout now!</a>
                        </div>
                        <ul className="list-group list-group-flush">
                           {/* <!-- list group --> */}
                           {
                              cart.map((v,k)=>(
                                 <li className="list-group-item py-3 ps-0">
                                 {/* <!-- row --> */}
                                 <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                       <div className="d-flex">
                                          <img src={"uploads/products/"+v.pro_image} alt="Ecommerce" className="icon-shape icon-xxl" />
                                          <div className="ms-3">
                                             <a href="shop-single.html" className="text-inherit">
                                                <h6 className="mb-0">{v.product_name}</h6>
                                             </a>
                                             <span><small className="text-muted">{v.weight}</small></span>
                                             {/* <!-- text --> */}
                                             <div className="mt-2 small lh-1">
                                                <a style={{cursor:"pointer"}} className="text-decoration-none text-inherit"onClick={()=>{handleRemove(v.id)}}>
                                                   <span className="me-1 align-text-bottom">
                                                      <svg
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="14"
                                                         height="14"
                                                         viewBox="0 0 24 24"
                                                         fill="none"
                                                         stroke="currentColor"
                                                         stroke-width="2"
                                                         stroke-linecap="round"
                                                         stroke-linejoin="round"
                                                         className="feather feather-trash-2 text-success">
                                                         <polyline points="3 6 5 6 21 6"></polyline>
                                                         <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                         <line x1="10" y1="11" x2="10" y2="17"></line>
                                                         <line x1="14" y1="11" x2="14" y2="17"></line>
                                                      </svg>
                                                   </span>
                                                   <span className="text-muted" >Remove</span>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
   
                                    {/* <!-- input group --> */}
                                    <div className="col-4 col-md-4 col-lg-3">
                                       {/* <!-- input --> */}
                                       {/* <!-- input --> */}
                                       <div className="input-group input-spinner">
                                          <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" id={v.id} onClick={()=>{handleCount("minus",v.id,k)}} />
                                          <input type="number" value={quantity[k]} name="quantity" id={"num"+v.id} className="quantity-field form-control-sm form-input" />
                                          <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" id={v.id} onClick={()=>{handleCount("plus",v.id,k)}} />
                                       </div>
                                    </div>
                                    {/* <!-- price --> */}
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                       <span className="fw-bold text-danger">${v.selling_price}.00</span>
                                       <div className="text-decoration-line-through text-muted small">${v.original_price}.00</div>
                                    </div>
                                    <div className="col-2 text-lg-end w-100 text-md-end col-md-2" style={{float:"right"}}>
                                       <span>Total : </span>
                                       <span className="fw-bold text-success name total" style={{textDecoration:"underline"}}>${v.selling_price * quantity[k]}.00
                                       </span>
                                          <span style={{display:"none"}}>
                                          {total = total +(v.selling_price * quantity[k])}
                                          </span>
                                    </div>
                                 </div>
                             </li>
                              ))
                           }
                          
                        </ul>
                        {/* <!-- btn --> */}
                        <div className="d-flex justify-content-between mt-4">
                           <a href="/"  className="btn btn-primary">Continue Shopping</a>
                           <a className="btn btn-dark" onClick={handleChange}>Update Cart</a>
                        </div>
                     </div>
                  </div>

                  {/* <!-- sidebar --> */}
                  <div className="col-12 col-lg-4 col-md-5">
                     {/* <!-- card --> */}
                     <div className="mb-5 card mt-6">
                        <div className="card-body p-6">
                           {/* <!-- heading --> */}
                           <h2 className="h5 mb-4">Summary</h2>
                           <div className="card mb-2">
                              {/* <!-- list group --> */}
                              <ul className="list-group list-group-flush">
                                 {/* <!-- list group item --> */}
                                 <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="me-auto">
                                       <div>Item Subtotal</div>
                                    </div>
                                    {
                                          <span>${total}.00</span>
                                    }
                                 </li>

                                 {/* <!-- list group item --> */}
                                 <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="me-auto">
                                       <div>Service Fee</div>
                                    </div>
                                    <span>$3.00</span>
                                 </li>
                                 {/* <!-- list group item --> */}
                                 <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="me-auto">
                                       <div className="fw-bold">Subtotal</div>
                                    </div>
                                    <span className="fw-bold">${total+3}.00</span>
                                 </li>
                              </ul>
                           </div>
                           <div className="d-grid mb-1 mt-4">
                              {/* <!-- btn --> */}
                              <button className="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
                                 Go to Checkout
                                 <span className="fw-bold">${total+3}.00</span>
                              </button>
                           </div>
                           {/* <!-- text --> */}
                           <p>
                              <small>
                                 By placing your order, you agree to be bound by the Freshcart
                                 <a href="#!">Terms of Service</a>
                                 and
                                 <a href="#!">Privacy Policy.</a>
                              </small>
                           </p>

                           {/* <!-- heading --> */}
                           <div className="mt-8">
                              <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                              <form>
                                 <div className="mb-2">
                                    {/* <!-- input --> */}
                                    <label for="giftcard" className="form-label sr-only">Email address</label>
                                    <input type="text" className="form-control" id="giftcard" placeholder="Promo or Gift Card" />
                                 </div>
                                 {/* <!-- btn --> */}
                                 <div className="d-grid"><button type="submit" className="btn btn-outline-dark mb-1">Redeem</button></div>
                                 <p className="text-muted mb-0"><small>Terms & Conditions apply</small></p>
                              </form>
                           </div>
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

export default Cart
