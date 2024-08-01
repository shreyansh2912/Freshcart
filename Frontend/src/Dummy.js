import React, { useContext, useEffect, useState } from "react";
import { FindProductContext, ProductContext } from "./Context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dummy() {
  const [findproducts, setpro] = useState([]);
  const [demo, setDemo] = useState([]);
  let input = useContext(FindProductContext);
  let show = useContext(ProductContext);
  let uid = localStorage.getItem("uid")
  let nav = useNavigate();

  useEffect(() => {
    setpro(input[0]);
  }, []);

  let tagdata = { input: input[0] };

  async function call() {
    input[0] = tagdata.input;
    let res = await axios.post("http://localhost:8081/find", tagdata);
    setDemo(res.data);
  }
  call();
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
 let wish = (id)=>{
    let obj = {
       uid : uid,
       pro_id : id
    }
    let res = axios.post("http://localhost:8081/wish",obj);
 }
 let handleShow = (id) => {
    show[0] = id;
    nav("/product")
 }
  return (
    <>
      {
        <>
         <div className='w-25 hide container bg-light mt-3' style={{padding:"8px", borderRadius:"10px",position:"fixed",top:"10px", right:"500px",zIndex:"50000" ,display:"none"}} id="hide">
         <div className='container text-center pt-2' style={{alignContent:"center", border:"3px solid green",borderRadius:"10px"}}>
            <h5><span style={{fontWeight:"700",color:"green",fontSize:"18px",fontFamily:"cursive"}}>Product added to cart</span> </h5>
         </div>
      </div>
        {demo.map((v) => (
        <div className="col">
          <div className="card card-product">
            <div className="card-body">
              {/* <!-- badge --> */}
              <div
                className="text-center position-relative"
                style={{ height: "220px" }}
              >
                <div className="position-absolute top-0 start-0">
                  <span className="badge bg-danger">Sale</span>
                </div>
                <a href="shop-single.html">
                  {/* <!-- img --> */}
                  <img
                    src={"uploads/products/" + v.pro_image}
                    alt="Grocery Ecommerce Template"
                    className="mb-3 img-fluid"
                  />
                </a>
                {/* <!-- action btn --> */}
                <div className="card-product-action">
                  <a
                    className="btn-action"
                  >
                    <i
                      className="bi bi-eye"
                      onClick={() => { handleShow(v.product_id) }}
                    ></i>
                  </a>
                  <a
                    onClick={()=>{wish(v.product_id)}}
                    className="btn-action"
                  >
                    <i className="bi bi-heart"></i>
                  </a>
                  <a
                    href="#!"
                    className="btn-action"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Compare"
                  >
                    <i className="bi bi-arrow-left-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- heading --> */}
              <div className="text-small mb-1">
                <a href="#!" className="text-decoration-none text-muted">
                  <small>Snack & Munchies</small>
                </a>
              </div>
              <h2 className="fs-6">
                <a
                  href="shop-single.html"
                  className="text-inherit text-decoration-none"
                >
                  {v.product_name}
                </a>
              </h2>
              <div>
                {/* <!-- rating --> */}
                <small className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </small>
                <span className="text-muted small">4.5(149)</span>
              </div>
              {/* <!-- price --> */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <span className="text-dark">$18</span>
                  <span className="text-decoration-line-through text-muted">
                    $24
                  </span>
                </div>
                {/* <!-- btn --> */}
                <div>
                  <a onClick={()=>{handleCart(v.product_id)}} className="btn btn-primary btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-plus"
                    >
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
      ))}
      </>
      }
    </>
  );
}

export default Dummy;
