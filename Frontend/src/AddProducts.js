import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios'

function AddProducts() {
    const [tagData, setTagData] = useState([]);
    const [tagData1, setTagData1] = useState([]);
    const [products, setProducts] = useState({});
    const [result, setResult] = useState("");
    fetch();
    async function fetch() {
        const data = await axios.get("http://localhost:8081/categories");
        const data1 = await axios.get("http://localhost:8081/SubCategories");
        setTagData(data.data);
        setTagData1(data1.data);
    }

    let handleChange = (e) => {
        setProducts((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    }

    let handleSub = async()=>{
        if(products.image){
            products.image = products.image.split("\\")[2]
        }
        let res = await axios.post("http://localhost:8081/Addproducts",products);
        if(res.data == "added"){
            setResult("Data added !")
        }else{
            setResult("Fail to add")
        }
        
    }

    return (
        <div>
            <Aheader />
            <main className="main-content-wrapper" style={{ marginLeft: "280px" }}>
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row mb-8">
                        <div className="col-md-12">
                            <div className="d-md-flex justify-content-between align-items-center">
                                {/* <!-- page header --> */}
                                <div>
                                    <h2>Add New Product</h2>
                                    {/* <!-- breacrumb--> */}
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                            <li className="breadcrumb-item"><a href="#" className="text-inherit">Products</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Add New Product</li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* <!-- button--> */}
                                <div>
                                    <a href="/products" className="btn btn-light">Back to Product</a>
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
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            {/* <!-- card --> */}
                            <div className="card mb-6 card-lg">
                                {/* <!-- card body --> */}
                                <div className="card-body p-6">
                                    <h4 className="mb-4 h5">Product Information</h4>
                                    <div className="row">
                                        {/* <!-- input --> */}
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label">Title</label>
                                            <input type="text" name='name' className="form-control" placeholder="Product Name" required onChange={handleChange} />
                                        </div>
                                        {/* <!-- input --> */}
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label">Product Category</label>
                                            <select className="form-select" name='category' onChange={handleChange}>
                                                <option selected hidden>Product Category</option>
                                                {tagData.map((v) => (
                                                    <option value={v.id}>{v.name}</option>
                                                ))}
                                                {/* <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
                                    <option value="Snacks & Munchies">Snacks & Munchies</option>
                                    <option value="Fruits & Vegetables">Fruits & Vegetables</option> */}
                                            </select>
                                        </div>
                                        {/* <!-- input --> */}
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label">Weight</label>
                                            <input type="text" name='weight' className="form-control" placeholder="1 - kg" required onChange={handleChange} />
                                        </div>
                                        {/* <!-- input --> */}
                                        <div className="mb-3 col-lg-6">
                                 <label className="form-label">Sub Category</label>
                                 <select className="form-select" name='subCategory' onChange={handleChange}>
                                    <option selected hidden>Sub Category</option>
                                                {tagData1.map((v) => (
                                                    <option value={v.id}>{v.name}</option>
                                                ))}
                                    {/* <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option> */}
                                 </select>
                              </div>
                                        <div>
                                            <div className="mb-3 col-lg-12 mt-5">
                                                {/* <!-- heading --> */}
                                                <h4 className="mb-3 h5">Product Images</h4>

                                                {/* <!-- input --> */}
                                                <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0">
                                                    <input type='file' accept='.jpg,.png,.jpeg' name='image' onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- input --> */}
                                        <div className="mb-3 col-lg-12 mt-5">
                                            <h4 className="mb-3 h5">Product Descriptions</h4>
                                            <div className="py-8" id="editor"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            {/* <!-- card --> */}
                            <div className="card mb-6 card-lg">
                                {/* <!-- card body --> */}
                                <div className="card-body p-6">
                                    {/* <!-- input --> */}
                                    {/* <div className="form-check form-switch mb-4">
                                        <input className="form-check-input" name='' onChange={handleChange} type="checkbox" role="switch" id="flexSwitchStock" />
                                        <label className="form-check-label" htmlFor="flexSwitchStock">In Stock</label>
                                    </div> */}
                                    {/* <!-- input --> */}
                                    <div>
                                        {/* <div className="mb-3">
                                            <label className="form-label">Product Code</label>
                                            <input type="text" onChange={handleChange} className="form-control" placeholder="Enter Product Title" />
                                        </div> */}
                                        {/* <!-- input --> */}
                                        {/* <div className="mb-3">
                                            <label className="form-label">Product SKU</label>
                                            <input type="text" onChange={handleChange} className="form-control" placeholder="Enter Product Title" />
                                        </div> */}
                                        {/* <!-- input --> */}
                                        <div className="mb-3">
                                            <label className="form-label" id="productSKU">Status</label>
                                            <br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" onChange={handleChange} name="status" value={"true"} type="radio" id="inlineRadio1" />
                                                <label className="form-check-label"  value="true" htmlFor="inlineRadio1">Active</label>
                                            </div>
                                            {/* <!-- input --> */}
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" onChange={handleChange} name="status" value={"false"} type="radio" id="inlineRadio2" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Disabled</label>
                                            </div>
                                            {/* <!-- input --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card --> */}
                            <div className="card mb-6 card-lg">
                                {/* <!-- card body --> */}
                                <div className="card-body p-6">
                                    <h4 className="mb-4 h5">Product Price</h4>
                                    {/* <!-- input --> */}
                                    <div className="mb-3">
                                        <label className="form-label">Regular Price</label>
                                        <input type="text" name='original_price' onChange={handleChange} className="form-control" placeholder="$0.00" />
                                    </div>
                                    {/* <!-- input --> */}
                                    <div className="mb-3">
                                        <label className="form-label">Sale Price</label>
                                        <input type="text" name='selling_price' onChange={handleChange} className="form-control" placeholder="$0.00" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card --> */}
                            <div className="card mb-6 card-lg">
                                {/* <!-- card body --> */}
                                <div className="card-body p-6">
                                    <h4 className="mb-4 h5">Meta Data</h4>
                                    {/* <!-- input --> */}
                                    <div className="mb-3">
                                        <label className="form-label">Meta Title</label>
                                        <input type="text" name="metaTitle" className="form-control" onChange={handleChange} placeholder="Title" />
                                    </div>

                                    {/* <!-- input --> */}
                                    <div className="mb-3">
                                        <label className="form-label">Meta Description</label>
                                        <textarea className="form-control" name='metaDesc' id='text' onChange={handleChange} rows="3" placeholder="Meta Description"></textarea>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- button--> */}
                            <div className="d-grid">
                                <a href="#" className="btn btn-primary" onClick={handleSub}>Create Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddProducts
