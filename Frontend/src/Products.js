import React, { useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios'
import Admin from './Admin';

function Products() {

   const[products,setproducts]=useState([]);
   async function call() {  
      let data = await axios.get("http://localhost:8081/products")
      setproducts(data.data);
   }
   call();
  return (
    <div>
      <Admin/>
        <Aheader/>
      <main className="main-content-wrapper" style={{marginLeft:"280px"}}>
            <div className="container">
               <div className="row mb-8">
                  <div className="col-md-12">
                     {/* <!-- page header --> */}
                     <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                           <h2>Products</h2>
                           {/* <!-- breacrumb --> */}
                           <nav aria-label="breadcrumb">
                              <ol className="breadcrumb mb-0">
                                 <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                 <li className="breadcrumb-item active" aria-current="page">Products</li>
                              </ol>
                           </nav>
                        </div>
                        {/* <!-- button --> */}
                        <div>
                           <a href="AddProducts" className="btn btn-primary">Add Product</a>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- row --> */}
               <div className="row">
                  <div className="col-xl-12 col-12 mb-5">
                     {/* <!-- card --> */}
                     <div className="card h-100 card-lg">
                        <div className="px-6 py-6">
                           <div className="row justify-content-between">
                              {/* <!-- form --> */}
                              <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                                 <form className="d-flex" role="search">
                                    <input className="form-control" type="search" placeholder="Search Products" aria-label="Search" />
                                 </form>
                              </div>
                              {/* <!-- select option --> */}
                              <div className="col-lg-2 col-md-4 col-12">
                                 <select className="form-select">
                                    <option selected>Status</option>
                                    <option value="1">Active</option>
                                    <option value="2">Deactive</option>
                                    <option value="3">Draft</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        {/* <!-- card body --> */}
                        <div className="card-body p-0">
                           {/* <!-- table --> */}
                           <div className="table-responsive">
                              <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                 <thead className="bg-light">
                                    <tr>
                                       <th>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="checkAll" />
                                             <label className="form-check-label" for="checkAll"></label>
                                          </div>
                                       </th>
                                       <th>Image</th>
                                       <th>Proudct Name</th>
                                       <th>Weight</th>
                                       <th>Category</th>
                                       <th>Sub category</th>
                                       <th>Status</th>
                                       <th>Price</th>
                                       <th>Meta Title</th>
                                       <th>Meta Desc.</th>
                                       {/* <th>Create at</th> */}
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                          {
                                             products.map((v)=>(
                                                <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productOne" />
                                             <label className="form-check-label" for="productOne"></label>
                                          </div>
                                       </td>
                                       <td style={{padding:"0px"}}>
                                          <a href="#!"><img src={"../uploads/Products/"+v.pro_ximage} style={{width:"100px",height:"100px"}} alt="img" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">{v.product_name}</a></td>
                                       <td>
                                          {v.weight}
                                       </td>
                                       <td>{v.cate_name}</td>
                                       <td>{v.subCate_name}</td>
                                       <td>
                                          {v.status == "true" ? <span className="badge bg-light-primary text-dark-primary">Activate</span> :
                                             <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                          }
                                          
                                       </td>
                                       <td > <span style={{color:"red",textDecoration:"line-through"}}>${v.original_price}.00</span> <br/> <span style={{color:'green'}}>${v.selling_price}.00</span></td>
                                       <td>{v.metaData}</td>
                                       <td style={{overflow:'wrap', width:'70px',padding:'0px',whiteSpace:'wrap'}}>{v.metaDesc}</td>
                                       {/* <td>24 Nov 2022</td> */}
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                             ))
                                          }
                                    {/* <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productOne" />
                                             <label className="form-check-label" for="productOne"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-1.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Haldiram's Sev Bhujia</a></td>
                                       <td>Snack & Munchies</td>

                                       <td>
                                          <span className="badge bg-light-primary text-dark-primary">Active</span>
                                       </td>
                                       <td>$18.00</td>
                                       <td>24 Nov 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productTwo" />
                                             <label className="form-check-label" for="productTwo"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-2.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">NutriChoice Digestive</a></td>
                                       <td>Bakery & Biscuits</td>

                                       <td>
                                          <span className="badge bg-light-primary text-dark-primary">Active</span>
                                       </td>
                                       <td>$24.00</td>
                                       <td>20 Nov 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productThree" />
                                             <label className="form-check-label" for="productThree"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-3.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Cadbury 5 Star Chocolate</a></td>
                                       <td>Snack & Munchies</td>

                                       <td>
                                          <span className="badge bg-light-primary text-dark-primary">Active</span>
                                       </td>
                                       <td>$3.00</td>
                                       <td>14 Nov 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productFour" />
                                             <label className="form-check-label" for="productFour"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-4.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Onion Flavour Potato</a></td>
                                       <td>Snack & Munchies</td>

                                       <td>
                                          <span className="badge bg-light-warning text-dark-warning">Draft</span>
                                       </td>
                                       <td>$13.00</td>
                                       <td>08 Nov 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productFive" />
                                             <label className="form-check-label" for="productFive"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-5.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Salted Instant Popcorn</a></td>
                                       <td>Instant Food</td>

                                       <td>
                                          <span className="badge bg-light-warning text-dark-warning">Draft</span>
                                       </td>
                                       <td>$9.00</td>
                                       <td>09 Nov 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productSix" />
                                             <label className="form-check-label" for="productSix"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-6.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Blueberry Greek Yogurt</a></td>
                                       <td>Dairy, Bread & Eggs</td>

                                       <td>
                                          <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                       </td>
                                       <td>$11.00</td>
                                       <td>02 Nov 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productSeven" />
                                             <label className="form-check-label" for="productSeven"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-7.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Britannia Cheese Slices</a></td>
                                       <td>Dairy, Bread & Eggs</td>

                                       <td>
                                          <span className="badge bg-light-success text-dark-success">Active</span>
                                       </td>
                                       <td>$24.00</td>
                                       <td>15 Oct 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productEight" />
                                             <label className="form-check-label" for="productEight"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-8.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Blueberry Greek Yogurt</a></td>
                                       <td>Instant Food</td>

                                       <td>
                                          <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                       </td>
                                       <td>$12.00</td>
                                       <td>24 Oct 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productNine" />
                                             <label className="form-check-label" for="productNine"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-9.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Slurrp Millet Chocolate</a></td>
                                       <td>Instant Food</td>

                                       <td>
                                          <span className="badge bg-light-primary text-dark-primary">Active</span>
                                       </td>
                                       <td>$8.00</td>
                                       <td>08 Oct 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="productTen" />
                                             <label className="form-check-label" for="productTen"></label>
                                          </div>
                                       </td>
                                       <td>
                                          <a href="#!"><img src="../assets/images/products/product-img-10.jpg" alt="" className="icon-shape icon-md" /></a>
                                       </td>
                                       <td><a href="#" className="text-reset">Amul Butter - 500 g</a></td>
                                       <td>Instant Food</td>

                                       <td>
                                          <span className="badge bg-light-primary text-dark-primary">Active</span>
                                       </td>
                                       <td>$8.00</td>
                                       <td>09 Oct 2022</td>
                                       <td>
                                          <div className="dropdown">
                                             <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul className="dropdown-menu">
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a className="dropdown-item" href="#">
                                                      <i className="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr> */}
                                 </tbody>
                              </table>
                           </div>
                        </div>
                        <div className="border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                           <span>Showing 1 to 8 of 12 entries</span>
                           <nav className="mt-2 mt-md-0">
                              <ul className="pagination mb-0">
                                 <li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
                                 <li className="page-item"><a className="page-link active" href="#!">1</a></li>
                                 <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                 <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                 <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
  )
}

export default Products
