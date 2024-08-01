import React, { useState } from 'react'
import Aheader from './Aheader'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddSubCategory() {

    const[result,setResult] = useState("");
    const[category,setCategory] = useState({
        name:"",
        visible:"",
     });
     const nav = useNavigate();
     let data = (e)=>{
        setCategory((prev)=>({...prev,[e.target.name]:e.target.value}))
     }
  
     let handleSub = async ()=>{
        let response = await axios.post("http://localhost:8081/AddSubcategory",category);
        if(response.data == "done"){
          setResult("Data added !")
        }else{
            setResult("Fail to add")
        }  
     }  

  return (
    <div>
        <Aheader/>
         <main className="main-content-wrapper" style={{marginLeft:"280px"}}>
            {/* <!-- container --> */}
            <div className="container">
               {/* <!-- row --> */}
               <div className="row mb-8">
                  <div className="col-md-12">
                     <div className="d-md-flex justify-content-between align-items-center">
                        {/* <!-- page header --> */}
                        <div>
                           <h2>Add New Sub-Category</h2>
                           {/* <!-- breacrumb --> */}
                           <nav aria-label="breadcrumb">
                              <ol className="breadcrumb mb-0">
                                 <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                 <li className="breadcrumb-item"><a href="#" className="text-inherit">Categories</a></li>
                                 <li className="breadcrumb-item active" aria-current="page">Add New Category</li>
                              </ol>
                           </nav>
                        </div>
                        <div>
                           <a href="/SubCategories" className="btn btn-light">Back to Sub Categories</a>
                        </div>
                     </div>
                  </div>
               </div>
                    {
                        result ? 
                        result == "Data added !" ? 
                        <div className='ps-3' style={{fontSize:"15px",borderRadius:"10px",border:"2px solid green",color:"#0a3622",height:"30px",backgroundColor:"#ceefce"}}>
                            {result}
                        </div>
                        :
                        <div className='ps-3' style={{fontSize:"15px",borderRadius:"10px",border:"2px solid red",color:"#db3030",height:"30px",backgroundColor:"#f8d6d6"}}>
                            {result}
                        </div>
                            :""
                    }
               <div className="row">
                  <div className="col-lg-12 col-12">
                     {/* <!-- card --> */}
                     <div className="card mb-6 shadow border-0">
                        {/* <!-- card body --> */}
                        <div className="card-body p-6">
                           <h4 className="mb-5 h5">Category Image</h4>
                           <div className="mb-4 d-flex">
                              <div className="position-relative">
                                 <img className="image icon-shape icon-xxxl bg-light rounded-4" src="../assets/images/icons/bakery.svg" alt="Image" />

                                 <div className="file-upload position-absolute end-0 top-0 mt-n2 me-n1">
                                    <input type="file" className="file-input" onChange={data} />
                                    <span className="icon-shape icon-sm rounded-circle bg-white">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil-fill text-muted" viewBox="0 0 16 16">
                                          <path
                                             d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                       </svg>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <h4 className="mb-4 h5 mt-5">Category Information</h4>

                           <div className="row">
                              {/* <!-- input --> */} 
                              <div className="mb-3 col-lg-6">
                                 <label className="form-label">Category Name</label>
                                 <input type="text" className="form-control" name='name' onChange={data} placeholder="Category Name" required />
                              </div>
                              {/* <!-- input --> */}
                              {/* <div className="mb-3 col-lg-6">
                                 <label className="form-label">Slug</label>
                                 <input type="text" className="form-control" placeholder="Slug" required />
                              </div> */}
                              {/* <!-- input --> */}
                              {/* <div className="mb-3 col-lg-6">
                                 <label className="form-label">Parent Category</label>
                                 <select className="form-select">
                                    <option selected>Category Name</option>
                                    <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
                                    <option value="Snacks & Munchies">Snacks & Munchies</option>
                                    <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                                 </select>
                              </div> */}
                              {/* <div className="mb-3 col-lg-6">
                                 <label className="form-label">Date</label>
                                 <input type="text" className="form-control flatpickr" placeholder="Select Date" />
                              </div> */}

                              <div></div>
                              {/* <!-- input --> */}
                              {/* <div className="mb-3 col-lg-12">
                                 <label className="form-label">Descriptions</label>

                                 <div className="py-8" id="editor"></div>
                              </div> */}

                              {/* <!-- input --> */}
                              <div className="mb-3 col-lg-12">
                                 <label className="form-label" id="productSKU">Status</label>
                                 <br />
                                 <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="visible" onChange={data} type="radio" id="inlineRadio1" value="true"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
                                 </div>
                                 {/* <!-- input --> */}
                                 <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="visible" onChange={data} type="radio" id="inlineRadio2" value="false"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Disabled</label>
                                 </div>
                                 {/* <!-- input --> */}
                              </div>
                              <div className="col-lg-12">
                                 <button href="#" className="btn btn-primary" onClick={handleSub}>Create Product</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
  )
}

export default AddSubCategory
