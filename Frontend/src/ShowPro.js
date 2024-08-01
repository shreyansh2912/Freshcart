import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import Header from './Header';
import axios from 'axios';
import Dummy from './Dummy';
import { FindProductContext, ProductContext } from './Context/AppContext';

function ShowPro() {
    let inputData  = useContext(FindProductContext);
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
                           <li className="breadcrumb-item active" aria-current="page">Snacks & Munchies</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- section--> */}
         <div className="mt-8 mb-lg-14 mb-8">
            {/* <!-- container --> */}
            <div className="container">
               {/* <!-- row --> */}
               <div className="row gx-10">
                  {/* <!-- col --> */}
                  <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
                     <div className="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabindex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                        <div className="offcanvas-header d-lg-none">
                           <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body ps-lg-2 pt-lg-0">
                           <div className="mb-8">
                              {/* <!-- title --> */}
                              <h5 className="mb-3">Categories</h5>
                              {/* <!-- nav --> */}
                              <ul className="nav nav-category" id="categoryCollapseMenu">
                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">
                                       Dairy, Bread & Eggs
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>
                                    {/* <!-- accordion collapse --> */}
                                    <div id="categoryFlushOne" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          {/* <!-- nav --> */}

                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Milk</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Milk Drinks</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Curd & Yogurt</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Eggs</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Bread</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Buns & Bakery</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Butter & More</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Cheese</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Paneer & Tofu</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Cream & Whitener</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Condensed Milk</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Vegan Drinks</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 {/* <!-- nav item --> */}
                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                       Snacks & Munchies
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>

                                    {/* <!-- collapse --> */}
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Chips & Crisps</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Nachos</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Popcorn</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Bhujia & Mixtures</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Namkeen Snacks</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Healthy Snacks</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Cakes & Rolls</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Energy Bars</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Papad & Fryums</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Rusks & Wafers</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                       Fruits & Vegetables
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>

                                    {/* <!-- collapse --> */}
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#!">Fresh Vegetables</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Herbs & Seasonings</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Fresh Fruits</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Organic Fruits & Vegetables</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Cuts & Sprouts</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Exotic Fruits & Veggies</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Flower Bouquets, Bunches</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                       Cold Drinks & Juices
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>

                                    {/* <!-- collapse --> */}
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Soft Drinks</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Fruit Juices</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Coldpress</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Energy Drinks</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Water & Ice Cubes</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Soda & Mixers</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Concentrates & Syrups</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Detox & Energy Drinks</a></li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item"><a href="#!" className="nav-link">Juice Collection</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>

                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                       Breakfast & Instant Food
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>

                                    {/* <!-- collapse --> */}
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#!">Batter</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Breakfast Cereal</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Noodles, Pasta & Soup</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Frozen Non-Veg Snackss</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Frozen Veg</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Vermicelli</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Instant Mixes</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                       Bakery & Biscuits
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>

                                    {/* <!-- collapse --> */}
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#!">Cookies</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Glucose & Marie</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Sweet & Salty</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Healthy & Digestive</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Cream Biscuits</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Rusks & Wafers</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Cakes & Rolls</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Buns & Bakery</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="nav-item border-bottom w-100">
                                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                       Chicken, Meat & Fish
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>

                                    {/* <!-- collapse --> */}
                                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul className="nav flex-column ms-3">
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#!">Chicken</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Sausage, Salami & Ham</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Exotic Meat</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Eggs</a>
                                             </li>
                                             {/* <!-- nav item --> */}
                                             <li className="nav-item">
                                                <a className="nav-link" href="#!">Frozen Non-Veg Snacks</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </div>

                           <div className="mb-8">
                              <h5 className="mb-3">Stores</h5>
                              <div className="my-4">
                                 {/* <!-- input --> */}
                                 <input type="search" className="form-control" placeholder="Search by store" />
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="eGrocery" checked />
                                 <label className="form-check-label" for="eGrocery">E-Grocery</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="DealShare" />
                                 <label className="form-check-label" for="DealShare">DealShare</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="Dmart" />
                                 <label className="form-check-label" for="Dmart">DMart</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="Blinkit" />
                                 <label className="form-check-label" for="Blinkit">Blinkit</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="BigBasket" />
                                 <label className="form-check-label" for="BigBasket">BigBasket</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="StoreFront" />
                                 <label className="form-check-label" for="StoreFront">StoreFront</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="Spencers" />
                                 <label className="form-check-label" for="Spencers">Spencers</label>
                              </div>
                              {/* <!-- form check --> */}
                              <div className="form-check mb-2">
                                 {/* <!-- input --> */}
                                 <input className="form-check-input" type="checkbox" value="" id="onlineGrocery" />
                                 <label className="form-check-label" for="onlineGrocery">Online Grocery</label>
                              </div>
                           </div>
                           <div className="mb-8">
                              {/* <!-- price --> */}
                              <h5 className="mb-3">Price</h5>
                              <div>
                                 {/* <!-- range --> */}
                                 <div id="priceRange" className="mb-3"></div>
                                 <small className="text-muted">Price:</small>
                                 <span id="priceRange-value" className="small"></span>
                              </div>
                           </div>
                           {/* <!-- rating --> */}
                           <div className="mb-8">
                              <h5 className="mb-3">Rating</h5>
                              <div>
                                 {/* <!-- form check --> */}
                                 <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingFive" />
                                    <label className="form-check-label" for="ratingFive">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                    </label>
                                 </div>
                                 {/* <!-- form check --> */}
                                 <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingFour" checked />
                                    <label className="form-check-label" for="ratingFour">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                    </label>
                                 </div>
                                 {/* <!-- form check --> */}
                                 <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingThree" />
                                    <label className="form-check-label" for="ratingThree">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                    </label>
                                 </div>
                                 {/* <!-- form check --> */}
                                 <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingTwo" />
                                    <label className="form-check-label" for="ratingTwo">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                    </label>
                                 </div>
                                 {/* <!-- form check --> */}
                                 <div className="form-check mb-2">
                                    {/* <!-- input --> */}
                                    <input className="form-check-input" type="checkbox" value="" id="ratingOne" />
                                    <label className="form-check-label" for="ratingOne">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                       <i className="bi bi-star text-warning"></i>
                                    </label>
                                 </div>
                              </div>
                           </div>
                           <div className="mb-8 position-relative">
                              {/* <!-- Banner Design --> */}
                              {/* <!-- Banner Content --> */}
                              <div className="position-absolute p-5 py-8">
                                 <h3 className="mb-0">Fresh Fruits</h3>
                                 <p>Get Upto 25% Off</p>
                                 <a href="#" className="btn btn-dark">
                                    Shop Now
                                    <i className="feather-icon icon-arrow-right ms-1"></i>
                                 </a>
                              </div>
                              {/* <!-- Banner Content --> */}
                              {/* <!-- Banner Image --> */}
                              {/* <!-- img --> */} 
                              <img src="../assets/images/banner/assortment-citrus-fruits.png" alt="" className="img-fluid rounded" />
                              {/* <!-- Banner Image --> */}
                           </div>
                        </div>
                     </div>
                  </aside>
                  <section className="col-lg-9 col-md-12">
                    
                     {/* <!-- card --> */}
                     <div className="card mb-4 bg-light border-0">
                        {/* <!-- card body --> */}
                        <div className="card-body p-4">
                           <h5 className="h5 mb-0" style={{alignContent:"center"}}><span style={{fontSize:"20px"}}> You Search it for " {inputData[0]} "</span></h5>
                        </div>
                     </div>
                     {/* <!-- list icon --> */}
                     <div className="d-lg-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-lg-0">
                           <p className="mb-0">
                              <span className="text-dark">24</span>
                              Products found
                           </p>
                        </div>

                        {/* <!-- icon --> */}
                        <div className="d-md-flex justify-content-between align-items-center">
                           <div className="d-flex align-items-center justify-content-between">
                              <div>
                                 <a href="shop-list.html" className="text-muted me-3"><i className="bi bi-list-ul"></i></a>
                                 <a href="shop-grid.html" className="me-3 text-muted"><i className="bi bi-grid"></i></a>
                                 <a href="shop-grid-3-column.html" className="me-3 active"><i className="bi bi-grid-3x3-gap"></i></a>
                              </div>
                              <div className="ms-2 d-lg-none">
                                 <a className="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
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
                                       className="feather feather-filter me-2">
                                       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                    Filters
                                 </a>
                              </div>
                           </div>

                           <div className="d-flex mt-2 mt-lg-0">
                              <div className="me-2 flex-grow-1">
                                 {/* <!-- select option --> */}
                                 <select className="form-select">
                                    <option selected>Show: 50</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                 </select>
                              </div>
                              <div>
                                 {/* <!-- select option --> */}
                                 <select className="form-select">
                                    <option selected>Sort by: Featured</option>
                                    <option value="Low to High">Price: Low to High</option>
                                    <option value="High to Low">Price: High to Low</option>
                                    <option value="Release Date">Release Date</option>
                                    <option value="Avg. Rating">Avg. Rating</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!-- row --> */}
                     <div style={{display:"flex"}} className="d-flex row g-4 row-cols-xl-3 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                           <Dummy/>
                     </div>
                     {/* <!-- row --> */}
                     <div className="row mt-8">
                        <div className="col">
                           {/* <!-- nav --> */}
                           <nav>
                              <ul className="pagination">
                                 <li className="page-item disabled">
                                    <a className="page-link mx-1" href="#" aria-label="Previous">
                                       <i className="feather-icon icon-chevron-left"></i>
                                    </a>
                                 </li>
                                 <li className="page-item"><a className="page-link mx-1 active" href="#">1</a></li>
                                 <li className="page-item"><a className="page-link mx-1" href="#">2</a></li>

                                 <li className="page-item"><a className="page-link mx-1" href="#">...</a></li>
                                 <li className="page-item"><a className="page-link mx-1" href="#">12</a></li>
                                 <li className="page-item">
                                    <a className="page-link mx-1" href="#" aria-label="Next">
                                       <i className="feather-icon icon-chevron-right"></i>
                                    </a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </main>
    </div>
  )
}

export default ShowPro
