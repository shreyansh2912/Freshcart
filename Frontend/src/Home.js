import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ProductContext, UserContext } from './Context/AppContext';

function Home() {
   const [products, setProducts] = useState([]);
   let nav = useNavigate();
   let show = useContext(ProductContext);
   let uid = localStorage.getItem("uid")
   let handleCart = async (id) => {
      let hide = document.getElementById("hide");
      if(uid != null){
         let data = {
            user_id : uid,
            pro_id : id
         }
         let res = await axios.post("http://localhost:8081/Addcart",data)
         if(res.data == "ok"){
            hide.style.display = "block";
            setTimeout(()=>{
               hide.style.display = "none";
            },1500)
         }
      }else{
         alert("Please Sign In First")
         nav("/SignIn")
      }
   }
   let handleShow = (id) => {
      show[0] = id;
      nav("/product")
   }
   async function fetch() {
      let res = await axios.get("http://localhost:8081/products");
      setProducts(res.data);
   }
   let wish = (id)=>{
      let obj = {
         uid : uid,
         pro_id : id
      }
      let res = axios.post("http://localhost:8081/wish",obj);
   }
   fetch()
   return (
      <>
         <div className='w-25 hide container bg-light mt-3' style={{padding:"8px", borderRadius:"10px",position:"fixed", right:"500px",zIndex:"50000" ,display:"none"}} id="hide">
         <div className='container   text-center pt-2' style={{alignContent:"center", border:"3px solid green",borderRadius:"10px"}}>
            <h5><span style={{fontWeight:"700",color:"green",fontSize:"18px",fontFamily:"cursive"}}>Product added to cart</span> </h5>
         </div>
      </div>
         <Header />
         <div id='body'>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-4">
                     <div className="modal-header border-0">
                        <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div className="modal-body">
                        <form className="needs-validation" noValidate>
                           <div className="mb-3">
                              <label htmlFor="fullName" className="form-label">Name</label>
                              <input type="text" className="form-control" id="fullName" placeholder="Enter Your Name" required />
                              <div className="invalid-feedback">Please enter name.</div>
                           </div>
                           <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="email" placeholder="Enter Email address" required />
                              <div className="invalid-feedback">Please enter email.</div>
                           </div>
                           <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
                              <div className="invalid-feedback">Please enter password.</div>
                              <small className="form-text">
                                 By Signup, you agree to our
                                 <a href="#!">Terms of Service</a>
                                 &
                                 <a href="#!">Privacy Policy</a>
                              </small>
                           </div>

                           <button type="submit" className="btn btn-primary" >Sign Up</button>
                        </form>
                     </div>
                     <div className="modal-footer border-0 justify-content-center">
                        Already have an account?
                        <a href="#">Sign in</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* <!-- Shop Cart --> */}

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
               <div className="offcanvas-header border-bottom">
                  <div className="text-start">
                     <h5 id="offcanvasRightLabel" className="mb-0 fs-4">Shop Cart</h5>
                     <small>Location in 382480</small>
                  </div>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div className="offcanvas-body">
                  <div>
                     {/* <!-- alert --> */}
                     <div className="alert alert-danger p-2" role="alert">
                        You’ve got FREE delivery. Start
                        <a href="#!" className="alert-link">checkout now!</a>
                     </div>
                     <ul className="list-group list-group-flush">
                        {/* <!-- list group --> */}
                        <li className="list-group-item py-3 ps-0 border-top">
                           {/* <!-- row --> */}
                           <div className="row align-items-center">
                              <div className="col-6 col-md-6 col-lg-7">
                                 <div className="d-flex">
                                    <img src="assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                    <div className="ms-3">
                                       {/* <!-- title --> */}
                                       <a href="pages/shop-single.html" className="text-inherit">
                                          <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                       </a>
                                       <span><small className="text-muted">.98 / lb</small></span>
                                       {/* <!-- text --> */}
                                       <div className="mt-2 small lh-1">
                                          <a href="#!" className="text-decoration-none text-inherit">
                                             <span className="me-1 align-text-bottom">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="14"
                                                   height="14"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-trash-2 text-success">
                                                   <polyline points="3 6 5 6 21 6"></polyline>
                                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                   <line x1="10" y1="11" x2="10" y2="17"></line>
                                                   <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                             </span>
                                             <span className="text-muted">Remove</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              {/* <!-- input group --> */}
                              <div className="col-4 col-md-3 col-lg-3">
                                 {/* <!-- input --> */}
                                 {/* <!-- input --> */}
                                 <div className="input-group input-spinner">
                                    <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                    <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                    <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                 </div>
                              </div>
                              {/* <!-- price --> */}
                              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                 <span className="fw-bold">$5.00</span>
                              </div>
                           </div>
                        </li>
                        {/* <!-- list group --> */}
                        <li className="list-group-item py-3 ps-0">
                           {/* <!-- row --> */}
                           <div className="row align-items-center">
                              <div className="col-6 col-md-6 col-lg-7">
                                 <div className="d-flex">
                                    <img src="assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                    <div className="ms-3">
                                       <a href="pages/shop-single.html" className="text-inherit">
                                          <h6 className="mb-0">NutriChoice Digestive</h6>
                                       </a>
                                       <span><small className="text-muted">250g</small></span>
                                       {/* <!-- text --> */}
                                       <div className="mt-2 small lh-1">
                                          <a href="#!" className="text-decoration-none text-inherit">
                                             <span className="me-1 align-text-bottom">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="14"
                                                   height="14"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-trash-2 text-success">
                                                   <polyline points="3 6 5 6 21 6"></polyline>
                                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                   <line x1="10" y1="11" x2="10" y2="17"></line>
                                                   <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                             </span>
                                             <span className="text-muted">Remove</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* <!-- input group --> */}
                              <div className="col-4 col-md-3 col-lg-3">
                                 {/* <!-- input --> */}
                                 {/* <!-- input --> */}
                                 <div className="input-group input-spinner">
                                    <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                    <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                    <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                 </div>
                              </div>
                              {/* <!-- price --> */}
                              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                 <span className="fw-bold text-danger">$20.00</span>
                                 <div className="text-decoration-line-through text-muted small">$26.00</div>
                              </div>
                           </div>
                        </li>
                        {/* <!-- list group --> */}
                        <li className="list-group-item py-3 ps-0">
                           {/* <!-- row --> */}
                           <div className="row align-items-center">
                              <div className="col-6 col-md-6 col-lg-7">
                                 <div className="d-flex">
                                    <img src="assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                    <div className="ms-3">
                                       {/* <!-- title --> */}
                                       <a href="pages/shop-single.html" className="text-inherit">
                                          <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                                       </a>
                                       <span><small className="text-muted">1 kg</small></span>
                                       {/* <!-- text --> */}
                                       <div className="mt-2 small lh-1">
                                          <a href="#!" className="text-decoration-none text-inherit">
                                             <span className="me-1 align-text-bottom">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="14"
                                                   height="14"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-trash-2 text-success">
                                                   <polyline points="3 6 5 6 21 6"></polyline>
                                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                   <line x1="10" y1="11" x2="10" y2="17"></line>
                                                   <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                             </span>
                                             <span className="text-muted">Remove</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* <!-- input group --> */}
                              <div className="col-4 col-md-3 col-lg-3">
                                 {/* <!-- input --> */}
                                 {/* <!-- input --> */}
                                 <div className="input-group input-spinner">
                                    <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                    <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                    <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                 </div>
                              </div>
                              {/* <!-- price --> */}
                              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                 <span className="fw-bold">$15.00</span>
                                 <div className="text-decoration-line-through text-muted small">$20.00</div>
                              </div>
                           </div>
                        </li>
                        {/* <!-- list group --> */}
                        <li className="list-group-item py-3 ps-0">
                           {/* <!-- row --> */}
                           <div className="row align-items-center">
                              <div className="col-6 col-md-6 col-lg-7">
                                 <div className="d-flex">
                                    <img src="assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                    <div className="ms-3">
                                       {/* <!-- title --> */}
                                       {/* <!-- title --> */}
                                       <a href="pages/shop-single.html" className="text-inherit">
                                          <h6 className="mb-0">Onion Flavour Potato</h6>
                                       </a>
                                       <span><small className="text-muted">250g</small></span>
                                       {/* <!-- text --> */}
                                       <div className="mt-2 small lh-1">
                                          <a href="#!" className="text-decoration-none text-inherit">
                                             <span className="me-1 align-text-bottom">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="14"
                                                   height="14"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-trash-2 text-success">
                                                   <polyline points="3 6 5 6 21 6"></polyline>
                                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                   <line x1="10" y1="11" x2="10" y2="17"></line>
                                                   <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                             </span>
                                             <span className="text-muted">Remove</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* <!-- input group --> */}
                              <div className="col-4 col-md-3 col-lg-3">
                                 {/* <!-- input --> */}
                                 {/* <!-- input --> */}
                                 <div className="input-group input-spinner">
                                    <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                    <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                    <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                 </div>
                              </div>
                              {/* <!-- price --> */}
                              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                 <span className="fw-bold">$15.00</span>
                                 <div className="text-decoration-line-through text-muted small">$20.00</div>
                              </div>
                           </div>
                        </li>
                        {/* <!-- list group --> */}
                        <li className="list-group-item py-3 ps-0 border-bottom">
                           {/* <!-- row --> */}
                           <div className="row align-items-center">
                              <div className="col-6 col-md-6 col-lg-7">
                                 <div className="d-flex">
                                    <img src="assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                    <div className="ms-3">
                                       {/* <!-- title --> */}
                                       <a href="pages/shop-single.html" className="text-inherit">
                                          <h6 className="mb-0">Salted Instant Popcorn</h6>
                                       </a>
                                       <span><small className="text-muted">100g</small></span>
                                       {/* <!-- text --> */}
                                       <div className="mt-2 small lh-1">
                                          <a href="#!" className="text-decoration-none text-inherit">
                                             <span className="me-1 align-text-bottom">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="14"
                                                   height="14"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-trash-2 text-success">
                                                   <polyline points="3 6 5 6 21 6"></polyline>
                                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                   <line x1="10" y1="11" x2="10" y2="17"></line>
                                                   <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                             </span>
                                             <span className="text-muted">Remove</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* <!-- input group --> */}
                              <div className="col-4 col-md-3 col-lg-3">
                                 {/* <!-- input --> */}
                                 {/* <!-- input --> */}
                                 <div className="input-group input-spinner">
                                    <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                    <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                    <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                 </div>
                              </div>
                              {/* <!-- price --> */}
                              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                 <span className="fw-bold">$15.00</span>
                                 <div className="text-decoration-line-through text-muted small">$25.00</div>
                              </div>
                           </div>
                        </li>
                     </ul>
                     {/* <!-- btn --> */}
                     <div className="d-flex justify-content-between mt-4">
                        <a href="#!" className="btn btn-primary">Continue Shopping</a>
                        <a href="#!" className="btn btn-dark">Update Cart</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="locationModal" tabIndex="-1" aria-labelledby="locationModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-sm modal-dialog-centered">
                  <div className="modal-content">
                     <div className="modal-body p-6">
                        <div className="d-flex justify-content-between align-items-start">
                           <div>
                              <h5 className="mb-1" id="locationModalLabel">Choose your Delivery Location</h5>
                              <p className="mb-0 small">Enter your address and we will specify the offer you area.</p>
                           </div>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="my-5">
                           <input type="search" className="form-control" placeholder="Search your area" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                           <h6 className="mb-0">Select Location</h6>
                           <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Clear All</a>
                        </div>
                        <div>
                           <div data-simplebar style={{ height: "30px" }}>
                              <div className="list-group list-group-flush">
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active">
                                    <span>Alabama</span>
                                    <span>Min:$20</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Alaska</span>
                                    <span>Min:$30</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Arizona</span>
                                    <span>Min:$50</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>California</span>
                                    <span>Min:$29</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Colorado</span>
                                    <span>Min:$80</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Florida</span>
                                    <span>Min:$90</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Arizona</span>
                                    <span>Min:$50</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>California</span>
                                    <span>Min:$29</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Colorado</span>
                                    <span>Min:$80</span>
                                 </a>
                                 <a href="#" className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                    <span>Florida</span>
                                    <span>Min:$90</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <script src="assets/js/vendors/validation.js"></script>

            <main>
               <section className="mt-8">
                  <div className="container">
                     <div className="hero-slider">
                        <div style={{ background: " url(assets/images/slider/slide-1.jpg) no-repeat", backgroundSize: "cover", borderRadius: 0.5 + "rem", backgroundPosition: "center" }}>
                           <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                              <span className="badge text-bg-warning">Opening Sale Discount 50%</span>

                              <h2 className="text-dark display-5 fw-bold mt-4">SuperMarket For Fresh Grocery</h2>
                              <p className="lead">Introduced a new model for online grocery shopping and convenient home delivery.</p>
                              <a href="#!" className="btn btn-dark mt-3">
                                 Shop Now
                                 <i className="feather-icon icon-arrow-right ms-1"></i>
                              </a>
                           </div>
                        </div>
                        {/* <div style={{background:" url(assets/images/slider/slider-2.jpg) no-repeat",backgroundSize:"cover",borderRadius: 0.5+"rem", backgroundPosition: "center"}}>
                     <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                        <span className="badge text-bg-warning">Free Shipping - orders over $100</span>
                        <h2 className="text-dark display-5 fw-bold mt-4">
                           Free Shipping on
                           <br />
                           orders over
                           <span className="text-primary">$100</span>
                        </h2>
                        <p className="lead">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.</p>
                        <a href="#!" className="btn btn-dark mt-3">
                           Shop Now
                           <i className="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                     </div>
                  </div> */}
                     </div>
                  </div>
               </section>

               {/* <!-- Category Section Start--> */}
               {/* <section className="mb-lg-10 mt-lg-14 my-8">
            <div className="container">
               <div className="row">
                  <div className="col-12 mb-6">
                     <h3 className="mb-0">Featured Categories</h3>
                  </div>
               </div>
               <div className="category-slider">
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                              <div className="text-truncate">Dairy, Bread & Eggs</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-snack-munchies.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Snack & Munchies</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-bakery-biscuits.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Bakery & Biscuits</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-instant-food.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Instant Food</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-tea-coffee-drinks.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Tea, Coffee & Drinks</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-atta-rice-dal.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Atta, Rice & Dal</div>
                           </div>
                        </div>
                     </a>
                  </div>

                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-baby-care.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Baby Care</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-chicken-meat-fish.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Chicken, Meat & Fish</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-cleaning-essentials.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Cleaning Essentials</div>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="item">
                     <a href="pages/shop-grid.html" className="text-decoration-none text-inherit">
                        <div className="card card-product mb-lg-4">
                           <div className="card-body text-center py-8">
                              <img src="assets/images/category/category-pet-care.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                              <div className="text-truncate">Pet Care</div>
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </section> */}
               {/* <!-- Category Section End--> */}
               <section>
                  <div className="container mt-5">
                     <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-lg-0">
                           <div>
                              <div className="py-10 px-8 rounded" style={{ background: "url(assets/images/banner/grocery-banner.png)no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                 <div>
                                    <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
                                    <p className="mb-4">
                                       Get Upto
                                       <span className="fw-bold">30%</span>
                                       Off
                                    </p>
                                    <a href="#!" className="btn btn-dark">Shop Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 col-md-6">
                           <div>
                              <div className="py-10 px-8 rounded" style={{ background: "url(assets/images/banner/grocery-banner-2.jpg) no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}  >
                                 <div>
                                    <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                                    <p className="mb-4">
                                       Get Upto
                                       <span className="fw-bold">25%</span>
                                       Off
                                    </p>
                                    <a href="#!" className="btn btn-dark">Shop Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               {/* <!-- Popular Products Start--> */}
               <section className="my-lg-14 my-8">
                  <div className="container">
                     <div className="row">
                        <div className="col-12 mb-6">
                           <h3 className="mb-0">Popular Products</h3>
                        </div>
                     </div>

                     <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
                        {
                           products.map((v) => (
                              <div className="col">
                                 <div className="card card-product">
                                    <div className="card-body">
                                       <div className="text-center position-relative">
                                          <div className="position-absolute top-0 start-0">
                                             <span className="badge bg-danger">Sale</span>
                                          </div>
                                          <div style={{ height: "200px" }}>
                                             <a href="#!"><img src={"uploads/products/" + v.pro_image} alt={v.product_name + "'s img"} className="mb-3 img-fluid" /></a>
                                          </div>

                                          <div className="card-product-action">
                                             <span className="btn-action" onClick={() => { handleShow(v.product_id) }}>
                                                <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                             </span>
                                             <a onClick={()=>{wish(v.product_id)}} className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                             <a href="" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                                          </div>
                                       </div>
                                       <div className="text-small mb-1">
                                          <a href="#!" className="text-decoration-none text-muted"><small>{v.cate_name}</small></a>
                                       </div>
                                       <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">{v.product_name}</a></h2>
                                       <div>
                                          <small className="text-warning">
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-half"></i>
                                          </small>
                                          <span className="text-muted small">4.5(149)</span>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center mt-3">
                                          <div>
                                             <span className="text-dark">${v.selling_price}</span>
                                             <span className="text-decoration-line-through text-muted">${v.original_price}</span>
                                          </div>
                                          <div onClick={() => { handleCart(v.product_id) }}>
                                             <div className="btn btn-primary btn-sm">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="16"
                                                   height="16"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth="2"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-plus">
                                                   <line x1="12" y1="5" x2="12" y2="19"></line>
                                                   <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))
                        }
                        {/* <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Sale</span>
                              </div>
                              <a href="#!"><img src="assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>

                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Haldiram's Sev Bhujia</a></h2>
                           <div>
                              <small className="text-warning">
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5(149)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$18</span>
                                 <span className="text-decoration-line-through text-muted">$24</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-success">14%</span>
                              </div>
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Bakery & Biscuits</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">NutriChoice Digestive</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (25)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div><span className="text-dark">$24</span></div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Bakery & Biscuits</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                              </small>
                              <span className="text-muted small">5 (469)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$32</span>
                                 <span className="text-decoration-line-through text-muted">$35</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Hot</span>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Onion Flavour Potato</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                                 <i className="bi bi-star"></i>
                              </small>
                              <span className="text-muted small">3.5 (456)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$3</span>
                                 <span className="text-decoration-line-through text-muted">$5</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-5.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Instant Food</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Salted Instant Popcorn</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (39)</span>
                           </div>
                           <div className="d-flex justify-content-between mt-4">
                              <div>
                                 <span className="text-dark">$13</span>
                                 <span className="text-decoration-line-through text-muted">$18</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Sale</span>
                              </div>
                              <a href="#!"><img src="assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread & Eggs</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Blueberry Greek Yogurt</a></h2>
                           <div>
                              <small className="text-warning">
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (189)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$18</span>
                                 <span className="text-decoration-line-through text-muted">$24</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-7.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread & Eggs</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Britannia Cheese Slices</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                              </small>
                              <span className="text-muted small">5 (345)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div><span className="text-dark">$24</span></div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-8.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Instant Food</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Kellogg's Original Cereals</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4 (90)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$32</span>
                                 <span className="text-decoration-line-through text-muted">$35</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp Millet Chocolate</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (67)</span>
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$3</span>
                                 <span className="text-decoration-line-through text-muted">$5</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              <a href="pages/shop-single.html"><img src="assets/images/products/product-img-10.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread & Eggs</small></a>
                           </div>
                           <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Amul Butter - 500 g</a></h2>
                           <div className="text-warning">
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                                 <i className="bi bi-star"></i>
                              </small>
                              <span className="text-muted small">3.5 (89)</span>
                           </div>
                           <div className="d-flex justify-content-between mt-4">
                              <div>
                                 <span className="text-dark">$13</span>
                                 <span className="text-decoration-line-through text-muted">$18</span>
                              </div>
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div> */}
                     </div>
                  </div>
               </section>
               {/* <!-- Popular Products End--> */}
               <section>
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12 mb-6">
                           <h3 className="mb-0">Daily Best Sells</h3>
                        </div>
                     </div>
                     <div className="table-responsive-lg pb-6">
                        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
                           <div className="col">
                              <div className="pt-8 px-6 px-xl-8 rounded" style={{ background: "url('assets/images/banner/banner-deal.jpg') no-repeat", backgroundSize: "cover", height: "470px" }}>
                                 <div>
                                    <h3 className="fw-bold text-white">100% Organic Coffee Beans.</h3>
                                    <p className="text-white">Get the best deal before close.</p>
                                    <a href="#!" className="btn btn-primary">
                                       Shop Now
                                       <i className="feather-icon icon-arrow-right ms-1"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col">
                              <div className="card card-product">
                                 <div className="card-body">
                                    <div className="text-center position-relative">
                                       <a href="pages/shop-single.html"><img src="assets/images/products/product-img-11.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>

                                       <div className="card-product-action">
                                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                          </a>
                                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                                       </div>
                                    </div>
                                    <div className="text-small mb-1">
                                       <a href="#!" className="text-decoration-none text-muted"><small>Tea, Coffee & Drinks</small></a>
                                    </div>
                                    <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Roast Ground Coffee</a></h2>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                       <div>
                                          <span className="text-dark">$13</span>
                                          <span className="text-decoration-line-through text-muted">$18</span>
                                       </div>
                                       <div>
                                          <small className="text-warning">
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-half"></i>
                                          </small>
                                          <span><small>4.5</small></span>
                                       </div>
                                    </div>
                                    <div className="d-grid mt-2">
                                       <a href="#!" className="btn btn-primary">
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="16"
                                             height="16"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-plus">
                                             <line x1="12" y1="5" x2="12" y2="19"></line>
                                             <line x1="5" y1="12" x2="19" y2="12"></line>
                                          </svg>
                                          Add to cart
                                       </a>
                                    </div>
                                    <div className="d-flex justify-content-start text-center mt-3">
                                       <div className="deals-countdown w-100" data-countdown="2028/10/10 00:00:00"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col">
                              <div className="card card-product">
                                 <div className="card-body">
                                    <div className="text-center position-relative">
                                       <a href="pages/shop-single.html"><img src="assets/images/products/product-img-12.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                                       <div className="card-product-action">
                                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                          </a>
                                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                                       </div>
                                    </div>
                                    <div className="text-small mb-1">
                                       <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                                    </div>
                                    <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Crushed Tomatoes</a></h2>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                       <div>
                                          <span className="text-dark">$13</span>
                                          <span className="text-decoration-line-through text-muted">$18</span>
                                       </div>
                                       <div>
                                          <small className="text-warning">
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-half"></i>
                                          </small>
                                          <span><small>4.5</small></span>
                                       </div>
                                    </div>
                                    <div className="d-grid mt-2">
                                       <a href="#!" className="btn btn-primary">
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="16"
                                             height="16"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-plus">
                                             <line x1="12" y1="5" x2="12" y2="19"></line>
                                             <line x1="5" y1="12" x2="19" y2="12"></line>
                                          </svg>
                                          Add to cart
                                       </a>
                                    </div>
                                    <div className="d-flex justify-content-start text-center mt-3 w-100">
                                       <div className="deals-countdown w-100" data-countdown="2028/12/9 00:00:00"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col">
                              <div className="card card-product">
                                 <div className="card-body">
                                    <div className="text-center position-relative">
                                       <a href="pages/shop-single.html"><img src="assets/images/products/product-img-13.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                                       <div className="card-product-action">
                                          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                             <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                          </a>
                                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                                       </div>
                                    </div>
                                    <div className="text-small mb-1">
                                       <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                                    </div>
                                    <h2 className="fs-6"><a href="pages/shop-single.html" className="text-inherit text-decoration-none">Golden Pineapple</a></h2>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                       <div>
                                          <span className="text-dark">$13</span>
                                          <span className="text-decoration-line-through text-muted">$18</span>
                                       </div>
                                       <div>
                                          <small className="text-warning">
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-fill"></i>
                                             <i className="bi bi-star-half"></i>
                                          </small>
                                          <span><small>4.5</small></span>
                                       </div>
                                    </div>
                                    <div className="d-grid mt-2">
                                       <a href="#!" className="btn btn-primary">
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="16"
                                             height="16"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-plus">
                                             <line x1="12" y1="5" x2="12" y2="19"></line>
                                             <line x1="5" y1="12" x2="19" y2="12"></line>
                                          </svg>
                                          Add to cart
                                       </a>
                                    </div>
                                    <div className="d-flex justify-content-start text-center mt-3">
                                       <div className="deals-countdown w-100" data-countdown="2028/11/11 00:00:00"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section className="my-lg-14 my-8">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6 col-lg-3">
                           <div className="mb-8 mb-xl-0">
                              <div className="mb-6"><img src="assets/images/icons/clock.svg" alt="" /></div>
                              <h3 className="h5 mb-3">10 minute grocery now</h3>
                              <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="mb-8 mb-xl-0">
                              <div className="mb-6"><img src="assets/images/icons/gift.svg" alt="" /></div>
                              <h3 className="h5 mb-3">Best Prices & Offers</h3>
                              <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="mb-8 mb-xl-0">
                              <div className="mb-6"><img src="assets/images/icons/package.svg" alt="" /></div>
                              <h3 className="h5 mb-3">Wide Assortment</h3>
                              <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                           <div className="mb-8 mb-xl-0">
                              <div className="mb-6"><img src="assets/images/icons/refresh-cw.svg" alt="" /></div>
                              <h3 className="h5 mb-3">Easy Returns</h3>
                              <p>
                                 Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked
                                 <a href="#!">policy</a>
                                 .
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </>
   )
}

export default Home
