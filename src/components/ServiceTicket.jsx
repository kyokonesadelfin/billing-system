import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/serviceticket.scss'

function ServiceTicket() {
  return (
    <div>
        <div className="container-fluid">
            <header>
               <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "11vh", backgroundColor: "none"}}>
                 <div className="container-fluid">
                   <div className="col-md-2">
                             {/* <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/> */}
                   </div>
                   <div className='col-md-8 mt-2'>
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb" style={{fontSize: "14px"}}>
                            <li class="breadcrumb-item">
                              <a href="/#" style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "30px" }}>Home</a>
                            </li>
                            <span style={{color: "black"}}>&gt;</span>
                            <li class="breadcrumb-item active" aria-current="page" style={{ textDecoration: "none", color: "black", fontWeight: "600"}}>
                              Service Ticket
                            </li>
                          </ol>
                        </nav>
                   </div>
                   <div className="col-md-2 ">
                   <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span className='profile-name text-dark'>Dhanny Sumilang</span>
                   </div>
                 </div>
              </nav>
              
              <nav class="navbar navbar-expand-lg" style={{ position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px" }}>
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul style={{ listStyle: "none", lineHeight: "55px", position: "absolute", top: "16px" }}>
                    <li class="nav-item">
                      <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="55" style={{ padding: "10px", position: "absolute", left: "0px" }} />
                    </li>
                    <li className="nav-item" style={{ marginTop: "15vh" }}>
                      <NavLink className="nav-link text-white" aria-current="page" to="/" style={{ textDecoration: "none" }}>
                        <img src='/assets/house.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                        Home
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/dashboard" style={{ color: "white" }}>
                      <img src='/assets/receipt.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      Dashboard
                    </NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink className="nav-link text-white" to="/loan-management" style={{textDecoration: "none", color: "white"}}>
                         <img src='/assets/done.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                           Loan Management
                      </NavLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="/#">
                      <img src='/assets/headache.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      Billing
                    </a>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      Admin Portal
                    </NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink className="text-white" to="/serviceticket" style={{textDecoration: "none"}}>
                         <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                         <span className='first-word'>Service</span> Ticket
                      </NavLink>
                  </li>
                </ul>
              </div>
           </div>
         </nav>
            </header>

            <main id='service_ticket'>
                <div className='container-fluid'>
                   <div className='row d-flex justify-content-left align-items-left' style={{marginTop: "3vh", marginLeft: "0", marginRight: "0"}}>
                   <div className="cards">
                      <div className="service">
                       <div class="row g-0">
                        <div className="col-md-5 mt-3">
                          <img src='/assets/headache.png' alt="house" width="70" height="80"/>
                        </div> 
                        <div class="col-md-7">
                          <div class="card-body">
                             <span style={{fontSize: "x-small", float: "right"}}>Active Service Ticket</span>
                              <h1 style={{float: "right"}}>200</h1>
                              <span style={{fontSize: "small", float: "right"}}>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>  
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service">
                    <div class="row g-0">
                        <div className="col-md-5 mt-3">
                          <img src='/assets/done.png' alt="house" width="70" height="80"/>
                        </div>
                        <div class="col-md-7">
                          <div class="card-body">
                             <span style={{fontSize: "x-small", float: "right"}}>Close Service Ticket</span>
                              <h1 style={{float: "right"}}>300</h1>
                              <span style={{fontSize: "small", float: "right"}}>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>  
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="service">
                    <div class="row g-0">
                        <div className="col-md-5 mt-3">
                          <img src='/assets/satisfied.png' alt="house" width="70" height="80"/>
                        </div>
                        <div class="col-md-7">
                          <div class="card-body">
                             <span style={{fontSize: "x-small", float: "right"}}>Satisfied Client</span><br/>
                              <h1 style={{float: "right"}}>280</h1>
                              <span style={{fontSize: "small", float: "right"}}>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>  
                          </div>
                        </div>
                      </div> 
                    </div>
                  <div className="service">
                    <div class="row g-0">
                        <div className="col-md-5 mt-3">
                          <img src='/assets/sad.png' alt="house" width="70" height="80"/>
                        </div>
                        <div class="col-md-7">
                          <div class="card-body">
                             <span style={{fontSize: "x-small", float: "right"}}>Unhappy client</span><br/>
                              <h1 style={{float: "right"}}> 20</h1>
                              <span style={{fontSize: "small", float: "right"}}>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>  
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service">
                      <div class="row g-0">
                        <div className="col-md-5 mt-3">
                          <img src='/assets/time-management.png' alt="house" width="70" height="80"/>
                        </div>
                        <div class="col-md-7">
                          <div class="card-body">
                             <span style={{fontSize: "x-small", float: "right"}}>In progress</span><br/>
                              <h1 style={{float: "right"}}> 10</h1>
                              <span style={{fontSize: "small", float: "right"}}>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   </div>

                  <div className='row d-flex justify-content-left align-items-left' style={{marginTop: "15px", marginLeft: "15px", marginRight: "5vh"}}>
                      
                    <div style={{border: "solid 0px #000000", margin: "10px", paddingTop: "20px", backgroundColor: "white", height: "120vh", paddingLeft: "10px", paddingRight: "10px", boxShadow: "5px 5px 10px #999"}}>
                            <div className='p-3' id="table-font">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                  <label class="form-check-label" for="inlineCheckbox1">Open Ticket (100)</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                  <label class="form-check-label" for="inlineCheckbox2">Unassigned Ticket (100)</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                  <label class="form-check-label" for="inlineCheckbox3">In progress (100)</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option3"/>
                                  <label class="form-check-label" for="inlineCheckbox3">Pending (100)</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3"/>
                                  <label class="form-check-label" for="inlineCheckbox3">For Approval (100)</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3"/>
                                  <label class="form-check-label" for="inlineCheckbox3">Done (100)</label>
                                </div>
                            </div>
                         <div id='inner_box'>
                              <div style={{padding: "20px"}}>
                                <table className="table" style={{borderBottom: "1px solid black"}} id="table-font">
                                  <thead>
                                  <span className='fw-bolder'>All open tickets</span>
                                    <tr>
                                      <th scope="col">Reference Key</th>
                                      <th scope="col">Issue Type</th>
                                      <th scope="col">Summary</th>
                                      <th scope="col">Creator</th>
                                      <th scope="col">Client name</th>
                                      <th scope="col">Bank</th>
                                      <th scope="col">Loan ID</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Created</th>
                                      <th scope="col">View</th>
                                    </tr>
                                  </thead>
                                </table>  
                              </div>
                         </div>
                    </div>
                  </div>




                </div>
            </main>
        </div>
    </div>
  )
}

export default ServiceTicket