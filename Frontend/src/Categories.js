import React, { useEffect, useState } from "react";
import Aheader from "./Aheader";
import axios from "axios";

function Categories() {
  const [tagData, setTagData] = useState([]);
  fetch();
  async function fetch() {
    const data = await axios.get("http://localhost:8081/categories");
    setTagData(data.data);
  }

  return (
    <div>
      <Aheader />
      <main className="main-content-wrapper" style={{ marginLeft: 280 + "px" }}>
        <div className="container">
          {/* <!-- row --> */}
          <div className="row mb-8">
            <div className="col-md-12">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                {/* <!-- pageheader --> */}
                <div>
                  <h2>Categories</h2>
                  {/* <!-- breacrumb --> */}
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#" className="text-inherit">
                          Dashboard
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Categories
                      </li>
                    </ol>
                  </nav>
                </div>
                {/* <!-- button --> */}
                <div>
                  <a href="/Add-Categories" className="btn btn-primary">
                    Add New Category
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-12 mb-5">
              {/* <!-- card --> */}
              <div className="card h-100 card-lg">
                <div className="px-6 py-6">
                  <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-md-0">
                      {/* <!-- form --> */}
                      <form className="d-flex" role="search">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search Category"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                    {/* <!-- select option --> */}
                    <div className="col-xl-2 col-md-4 col-12">
                      <select className="form-select">
                        <option selected>Status</option>
                        <option value="Published">Published</option>
                        <option value="Unpublished">Unpublished</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!-- card body --> */}
                <div className="card-body p-0">
                  {/* <!-- table --> */}
                  <div className="table-responsive">
                    <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
                      <thead className="bg-light">
                        <tr>
                          <th>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkAll"
                              />
                              <label
                                className="form-check-label"
                                for="checkAll"
                              ></label>
                            </div>
                          </th>
                          <th>Icon</th>
                          <th>Name</th>
                          <th>Proudct</th>
                          <th>Status</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                        {tagData.map((v) => (
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="categoryTwo"
                                />
                                <label
                                  className="form-check-label"
                                  for="categoryTwo"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a href="#!">
                                <img
                                  src="../assets/images/icons/bakery.svg"
                                  alt=""
                                  className="icon-shape icon-sm"
                                />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="text-reset">
                                {v.cate_name}
                              </a>
                            </td>
                            <td>8</td>

                            <td>
								{v.status == "true" ? 
                              <span className="badge bg-light-primary text-dark-primary">
                                Published
                              </span>
								  :
								  <span className="badge bg-light-danger text-dark-danger">
								  Unpublished
								</span>}
                            </td>

                            <td>
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-reset"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
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
                        ))}
                        {/* <tr>
													<td>
														<div className="form-check">
															<input className="form-check-input" type="checkbox" value="" id="categoryOne" />
															<label className="form-check-label" for="categoryOne"></label>
														</div>
													</td>
													<td>
														// <a href="#!"><img src="../assets/images/icons/snacks.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Snack & Munchies</a></td>
													<td>12</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryTwo" />
															<label className="form-check-label" for="categoryTwo"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/bakery.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Bakery & Biscuits</a></td>
													<td>8</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryThree" />
															<label className="form-check-label" for="categoryThree"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/baby-food.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Baby Care</a></td>
													<td>32</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryFour" />
															<label className="form-check-label" for="categoryFour"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/wine.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Cold Drinks & Juices</a></td>
													<td>34</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryFive" />
															<label className="form-check-label" for="categoryFive"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/toiletries.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Toiletries</a></td>
													<td>23</td>

													<td>
														<span className="badge bg-light-danger text-dark-danger">Unpublished</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categorySeven" />
															<label className="form-check-label" for="categorySeven"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/dairy.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Dairy, Bread & Eggs</a></td>
													<td>16</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryEight" />
															<label className="form-check-label" for="categoryEight"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/fish.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Chicken, Meat & Fish</a></td>
													<td>14</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryNine" />
															<label className="form-check-label" for="categoryNine"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/fruit.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Fruits & Vegetables</a></td>
													<td>32</td>

													<td>
														<span className="badge bg-light-primary text-dark-primary">Published</span>
													</td>

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
															<input className="form-check-input" type="checkbox" value="" id="categoryTen" />
															<label className="form-check-label" for="categoryTen"></label>
														</div>
													</td>
													<td>
														<a href="#!"><img src="../assets/images/icons/petfoods.svg" alt="" className="icon-shape icon-sm" /></a>
													</td>
													<td><a href="#" className="text-reset">Pet Food</a></td>
													<td>25</td>

													<td>
														<span className="badge bg-light-danger text-dark-danger">Unpublished</span>
													</td>

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
                <div className="border-top d-flex justify-content-between align-items-md-center px-6 py-6 flex-md-row flex-column gap-4">
                  <span>Showing 1 to 8 of 12 entries</span>
                  <nav>
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#!">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link active" href="#!">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#!">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#!">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#!">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Categories;
