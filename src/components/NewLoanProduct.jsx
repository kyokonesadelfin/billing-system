import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/admin.scss'

function NewLoanProduct() {
  return (
    <div>
       <div className="container-fluid">
          <header>
               <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "13vh", backgroundColor: "transparent"}}>
                 <div className="container-fluid">
                   <div className="col-md-2">
                       {/* <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/>    */}
                   </div>
                   <div className="col-md-8 mt-3">
                    <ul style={{listStyle: "none"}}>  
                        <li>
                            <NavLink to='/admin' className='me-5 pe-4' id='top-nav'>Loan Application</NavLink>
                            <NavLink to='/operation' className='p-3' id='top-nav' style={{textDecoration: "none", color: "#004ea2"}}>Loan Configuration</NavLink>
                        </li>
                    </ul>
                   </div>
                   <div className="col-md-2">
                   <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span className='profile-name text-dark'>Dhanny Sumilang</span><br/>
                         <i className='profile-title'> &nbsp; &nbsp; &nbsp; &nbsp; System Designer</i>
                   </div>
                 </div>
              </nav>
               
              <nav class="navbar navbar-expand-lg" style={{ position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px", fontSize: "14px" }}>
                  <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul style={{ listStyle: "none", lineHeight: "45px", position: "absolute", top: "16px" }}>
                        <li class="nav-item">
                          <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{ padding: "10px", position: "absolute", left: "0px" }} />
                        </li>
                        <li className="nav-item" style={{ marginTop: "15vh" }}>
                          <NavLink className="text-white" aria-current="page" to="/" style={{ textDecoration: "none" }}>
                            <img src='/assets/house.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                            Home
                        </NavLink>
                      </li>
                      <li class="nav-item">
                          <hr style={{border: "2px solid white"}}/>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          1 &nbsp; &nbsp; <span className='third-word'>Gen</span>eral
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          2 &nbsp; &nbsp; Calculator
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          3 &nbsp; &nbsp; Customer data
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          4 &nbsp; &nbsp; Eligibility criteria
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          5 &nbsp; &nbsp; Loan application data
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          6 &nbsp; &nbsp; Agreement
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                          7 &nbsp; &nbsp; Pre-release
                        </NavLink>
                      </li>
                      <li class="nav-item">
                          <hr style={{border: "2px solid #fff"}}/>
                      </li>
                      <li class="nav-item">
                       <NavLink className="nav-link" to="/admin">
                          View changes activity
                        </NavLink>
                      </li>
                    </ul>
                  </div>
               </div>
             </nav>

          </header>
          
          <main style={{width: "100%", maxWidth: "180vh"}}>
              <div className='container-fluid' style={{marginTop: "17vh"}}>
                  <div className="row ">
                    <h5>New loan product</h5>
                    <div className="col-md-8 col-sm-6 mt-4">
                        <h5>1-General</h5>
                      </div>
                      <div class="col-md-4 col-sm-6 mt-4">
                        <button className="me-2" style={{border: "0px solid #fff", borderRadius: "7px", width: "100%", maxWidth: "150px"}}>Discard changes</button>
                        <button style={{border: "0px solid #fff", borderRadius: "7px"}}>Next</button>
                      </div>
                  </div>

                  <div>
                    <span className='fw-bold text-secondary' style={{fontSize: "14px"}}>Select data collected in the application form</span>
                  </div>
    
                  <div className='row'>
                      <div class="col-3 mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label" style={{color: "#035ec1"}}>Product name</label>
                        <input class="form-control w-100" id="exampleFormControlInput1"/>
                      </div>
                      <div class="col-5 mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label" style={{color: "#035ec1"}}>Currency</label>
                        <input class="form-control w-25" id="exampleFormControlInput1" placeholder='Php'/>
                      </div>
                  </div>
                  
                  <div className="row pt-2" style={{marginTop: "10px", padding: "0"}}>
                    <table style={{width: "100%", maxWidth: "90vh", height: "100%", textAlign: "center"}}>
                      <tr style={{height: "40px"}}>
                        <td style={{borderRight: "3px solid lightgray", paddingRight: "10px", paddingLeft: "10px"}}>
                            <NavLink id="tab" to="/#" style={{color: "#004ea2", fontWeight: "600"}}><span className='second-word'>Act</span>ive duration</NavLink>
                        </td>
                        <td style={{borderRight: "3px solid lightgray", paddingRight: "10px", paddingLeft: "10px"}}>
                            <NavLink id="tab" to="/#">Device</NavLink>
                        </td>
                        <td style={{borderRight: "3px solid lightgray", paddingRight: "10px", paddingLeft: "10px"}}>
                            <NavLink id="tab" to="/#">Description</NavLink>
                        </td> 
                        <td>
                            <NavLink id="tab" to="/#">Finance Company</NavLink>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
          </main>

       </div>   
    </div>
  )
}

export default NewLoanProduct