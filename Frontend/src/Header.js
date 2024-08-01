import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AppContext, FindProductContext, ProductContext, UserContext } from './Context/AppContext'
import axios from 'axios';
import Dummy from './Dummy';

function Header() {
   const[whish ,setWhish] = useState(1);
   const[cart ,setCart] = useState(1);
   let nav = useNavigate();
   let showPro = useContext(FindProductContext);

   let handleLogout = ()=>{
      localStorage.clear("uid")
   }
   let cartCall = async ()=>{
      let obj  = {
         id:"id",
         table:"cart",
         uid : localStorage.getItem("uid")
      }
      let res = await axios.post("http://localhost:8081/count",obj);
      let data = res.data[0]
      for (const key in data) {
         setCart(data[key])
      }
   }
   let wishCall = async ()=>{
      let obj  = {
         id:"id",
         table:"wishlists",
         uid : localStorage.getItem("uid")
      }
      let res = await axios.post("http://localhost:8081/count",obj);
      let data = res.data[0]
      for (const key in data) {
            setWhish(data[key])
      }
   }
   cartCall();
   wishCall();
   
   let handlesub = (e)=>{
      e.preventDefault();
      showPro[0] = document.getElementById("input").value ;
         if(window.location.pathname != "/ShowProduct"){
            nav("/ShowProduct")
         }
   }

  return ( 
    <div>
      <div className="border-bottom">
         <div className="bg-light py-1">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-12 text-center text-md-start"><span>Super Value Deals - Save more with coupons</span></div>
                  <div className="col-6 text-end d-none d-md-block">
                     <div className="dropdown selectBox">
                        <a className="dropdown-toggle selectValue text-reset" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                           <span className="me-2">
                              <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#selectedlang)">
                                    <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                                    <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
                                    <path
                                       d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                                       fill="#C8102E" />
                                    <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
                                    <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
                                 </g>
                                 <defs>
                                    <clipPath id="selectedlang">
                                       <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </span>
                           English
                        </a>

                        <ul className="dropdown-menu">
                           <li>
                              <a className="dropdown-item" href="javascript:void(0)">
                                 <span className="me-2">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <g clipPath="url(#selectedlang)">
                                          <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                                          <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
                                          <path
                                             d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                                             fill="#C8102E" />
                                          <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
                                          <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
                                       </g>
                                       <defs>
                                          <clipPath id="selectedlang">
                                             <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </span>
                                 English
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="javascript:void(0)">
                                 <span className="me-2">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <g clipPath="url(#clip0_5543_19751)">
                                          <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
                                          <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
                                          <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
                                       </g>
                                       <defs>
                                          <clipPath id="clip0_5543_19751">
                                             <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </span>
                                 Deutsch
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="py-5">
            <div className="container">
               <div className="row w-100 align-items-center gx-lg-2 gx-0">
                  <div className="col-xxl-2 col-lg-3 col-md-6 col-5">
                     <a className="navbar-brand d-none d-lg-block" href="index.html">
                        <img src="assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                     </a>
                     <div className="d-flex justify-content-between w-100 d-lg-none">
                        <a className="navbar-brand" href="index.html">
                           <img src="assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                        </a>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
                     <form onSubmit={handlesub} >
                        <div className="input-group">
                           <input className="form-control rounded" name='name'id="input" type="search" placeholder="Search for products" />
                           <span className="input-group-append">
                              <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
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
                                    className="feather feather-search">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                 </svg>
                              </button>
                           </span>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-2 col-xxl-3 d-none d-lg-block">
                     {/* <!-- Button trigger modal --> */}
                     <button type="button" className="btn btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#locationModal">
                        <i className="feather-icon icon-map-pin me-2"></i>
                        Location
                     </button>
                  </div>
                  <div className="col-lg-2 col-xxl-2 text-end col-md-6 col-7">
                     <div className="list-inline">
                        <div className="list-inline-item me-5">
                           <a href="/wishlist" className="text-muted position-relative">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-heart">
                                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                              </svg>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                 {whish}
                                 <span className="visually-hidden">unread messages</span>
                              </span>
                           </a>
                        </div>
                        <div className="list-inline-item me-5">
                           <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-user">
                                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                 <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                           </a>
                        </div>
                        <div className="list-inline-item me-5 me-lg-0">
                           <a  className="text-muted position-relative" href="/cart" role="button" >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-shopping-bag">
                                 <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                 <line x1="3" y1="6" x2="21" y2="6"></line>
                                 <path d="M16 10a4 4 0 0 1-8 0"></path>
                              </svg>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                 {cart}
                                 <span className="visually-hidden">unread messages</span>
                              </span>
                           </a>
                        </div>
                        <div className="list-inline-item d-inline-block d-lg-none">
                           {/* <!-- Button --> */}
                           <button
                              className="navbar-toggler collapsed"
                              type="button"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#navbar-default"
                              aria-controls="navbar-default"
                              aria-label="Toggle navigation">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                 <path
                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4" aria-label="Offcanvas navbar large">
            <div className="container">
               <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
                  <div className="offcanvas-header pb-1">
                     <a href="index.html"><img src="assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                     <div className="d-block d-lg-none mb-4">
                        <form action="#">
                           <div className="input-group">
                              <input className="form-control rounded" type="search" placeholder="Search for products" />
                              <span className="input-group-append">
                                 <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
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
                                       className="feather feather-search">
                                       <circle cx="11" cy="11" r="8"></circle>
                                       <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                 </button>
                              </span>
                           </div>
                        </form>
                        <div className="mt-2">
                           <button type="button" className="btn btn-outline-gray-400 text-muted w-100" data-bs-toggle="modal" data-bs-target="#locationModal">
                              <i className="feather-icon icon-map-pin me-2"></i>
                              Pick Location
                           </button>
                        </div>
                     </div>
                     <div className="d-block d-lg-none mb-4">
                        <a
                           className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                           data-bs-toggle="collapse"
                           href="#collapseExample"
                           role="button"
                           aria-expanded="false"
                           aria-controls="collapseExample">
                           <span className="me-2">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-grid">
                                 <rect x="3" y="3" width="7" height="7"></rect>
                                 <rect x="14" y="3" width="7" height="7"></rect>
                                 <rect x="14" y="14" width="7" height="7"></rect>
                                 <rect x="3" y="14" width="7" height="7"></rect>
                              </svg>
                           </span>
                           All Departments
                        </a>
                        <div className="collapse mt-2" id="collapseExample">
                           <div className="card card-body">
                              <ul className="mb-0 list-unstyled">
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Dairy, Bread & Eggs</a></li>
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Snacks & Munchies</a></li>
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Fruits & Vegetables</a></li>
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Cold Drinks & Juices</a></li>
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Breakfast & Instant Food</a></li>
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Bakery & Biscuits</a></li>
                                 <li><a className="dropdown-item" href="pages/shop-grid.html">Chicken, Meat & Fish</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown me-3 d-none d-lg-block">
                        <button className="btn btn-primary px-6" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           <span className="me-1">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="1.2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-grid">
                                 <rect x="3" y="3" width="7" height="7"></rect>
                                 <rect x="14" y="3" width="7" height="7"></rect>
                                 <rect x="14" y="14" width="7" height="7"></rect>
                                 <rect x="3" y="14" width="7" height="7"></rect>
                              </svg>
                           </span>
                           All Departments
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Dairy, Bread & Eggs</a></li>
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Snacks & Munchies</a></li>
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Fruits & Vegetables</a></li>
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Cold Drinks & Juices</a></li>
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Breakfast & Instant Food</a></li>
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Bakery & Biscuits</a></li>
                           <li><a className="dropdown-item" href="pages/shop-grid.html">Chicken, Meat & Fish</a></li>
                        </ul>
                     </div>
                     <div>
                        <ul className="navbar-nav d-flex gap-6 align-items-center" style={{marginTop:"-3px"}}>
                           <li className="nav-item dropdown w-100 w-lg-auto">
                              <a className="nav-link" href="/" role="button" style={{fontSize:"18px"}} >Home</a>
                           </li>
                           <li className="nav-item dropdown w-100 w-lg-auto">
                              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{fontSize:"18px"}}>Shop</a>
                           </li>
                           <li className="nav-item dropdown w-100 w-lg-auto">
                              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"18px"}}>Stores</a>
                           </li>
                           <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"18px"}}>Mega menu</a>
                              <div className="dropdown-menu pb-0">
                                 <div className="row p-2 p-lg-4">
                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                       <h6 className="text-primary ps-3">Dairy, Bread & Eggs</h6>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Butter</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Milk Drinks</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Curd & Yogurt</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Eggs</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Buns & Bakery</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Cheese</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Condensed Milk</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Dairy Products</a>
                                    </div>
                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                       <h6 className="text-primary ps-3">Breakfast & Instant Food</h6>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Breakfast Cereal</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Noodles, Pasta & Soup</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Frozen Veg Snacks</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Frozen Non-Veg Snacks</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Vermicelli</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Instant Mixes</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Batter</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Fruit and Juices</a>
                                    </div>
                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                       <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Soft Drinks</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Fruit Juices</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Coldpress</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Water & Ice Cubes</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Soda & Mixers</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Health Drinks</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Herbal Drinks</a>
                                       <a className="dropdown-item" href="pages/shop-grid.html">Milk Drinks</a>
                                    </div>
                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                       <div className="card border-0">
                                          <img src="assets/images/banner/menu-banner.jpg" alt="eCommerce HTML Template" className="img-fluid" />
                                          <div className="position-absolute ps-6 mt-8">
                                             <h5 className="mb-0">
                                                Dont miss this
                                                <br />
                                                offer today.
                                             </h5>
                                             <a href="#" className="btn btn-primary btn-sm mt-3">Shop Now</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="nav-item dropdown w-100 w-lg-auto">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"18px"}}>Pages</a>
                              <ul className="dropdown-menu">
                                 <li><a className="dropdown-item" href="pages/blog.html">Blog</a></li>
                                 <li><a className="dropdown-item" href="pages/blog-single.html">Blog Single</a></li>
                                 <li><a className="dropdown-item" href="pages/blog-category.html">Blog Category</a></li>
                                 <li><a className="dropdown-item" href="pages/about.html">About us</a></li>
                                 <li><a className="dropdown-item" href="pages/404error.html">404 Error</a></li>
                                 <li><a className="dropdown-item" href="pages/contact.html">Contact</a></li>
                              </ul>
                           </li>
                           <li className="nav-item dropdown w-100 w-lg-auto">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"18px"}}>Account</a>
                              <ul className="dropdown-menu">
                                 {/* <li><a className="dropdown-item" href="pages/signin.html">Sign in</a></li> */}
                                 {window.localStorage.getItem("uid") == null ?
                                 <>
                                    <li><Link to="/SignIn" className="dropdown-item" href="pages/signin.html">Sign in</Link></li>
                                    <li><Link to="/SignUp" className="dropdown-item" href="pages/signin.html">Signup</Link></li>
                                 </>
                                    :
                                    <li onClick={handleLogout} ><a href='/SIgnIn' className="dropdown-item">SignOut</a></li>
                                 }
                                 {/* <li><a className="dropdown-item" href="pages/signup.html">Signup</a></li> */}
                                 <li><a className="dropdown-item" href="pages/forgot-password.html">Forgot Password</a></li>
                                 <li className="dropdown-submenu dropend">
                                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">My Account</a>
                                    <ul className="dropdown-menu">
                                       <li><a className="dropdown-item" href="pages/account-orders.html">Orders</a></li>
                                       <li><a className="dropdown-item" href="pages/account-settings.html">Settings</a></li>
                                       <li><a className="dropdown-item" href="pages/account-address.html">Address</a></li>
                                       <li><a className="dropdown-item" href="pages/account-payment-method.html">Payment Method</a></li>
                                       <li><a className="dropdown-item" href="pages/account-notification.html">Notification</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li className="nav-item w-100 w-lg-auto">
                              {
                                 window.localStorage.getItem("role") == 1 ?
                                 <a className="nav-link" href="/dashboard" style={{fontSize:"18px"}}>Dashboard</a> :
                                 ""
                              }
                           </li>
                           {/* <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
                              <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="navbarDropdownDocs">
                                 <a className="dropdown-item align-items-start" href="docs/index.html">
                                    <div>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-text text-primary" viewBox="0 0 16 16">
                                          <path
                                             d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                       </svg>
                                    </div>
                                    <div className="ms-3 lh-1">
                                       <h6 className="mb-1">Documentations</h6>
                                       <p className="mb-0 small">Browse the all documentation</p>
                                    </div>
                                 </a>
                                 <a className="dropdown-item align-items-start" href="docs/changelog.html">
                                    <div>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-layers text-primary" viewBox="0 0 16 16">
                                          <path
                                             d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                                       </svg>
                                    </div>
                                    <div className="ms-3 lh-1">
                                       <h6 className="mb-1">
                                          Changelog
                                          <span className="text-primary ms-1">v1.3.0</span>
                                       </h6>
                                       <p className="mb-0 small">See what's new</p>
                                    </div>
                                 </a>
                              </div>
                           </li> */}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </div>
    </div>
  )
}

export default Header
