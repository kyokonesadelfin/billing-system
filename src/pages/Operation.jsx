import React from 'react'
import { NavLink } from 'react-router-dom'


function Operation() {
  return (
    <div>
         <div className="container-fluid">
         <header>
           <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "11vh", backgroundColor: "transparent"}}>
             <div className="container-fluid">
               <div className="col-md-2">
                         {/* <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/> */}
               </div>
               <div className="col-md-8 mt-3">
                <ul style={{listStyle: "none", marginLeft: "20px"}}>  
                      <li>
                          <NavLink to='/admin' className='me-5 pe-4' style={{textDecoration: "none", color: "#000" , fontWeight: "500", fontSize: "17px"}}>Admin</NavLink>
                          <NavLink to='/operation' className='p-3' style={{textDecoration: "none",color: "#004ea2", fontWeight: "700", fontSize: "17px"}}><span className='second-word'>O</span>peration</NavLink>
                      </li>
                  </ul>
               </div>
               <div className="col-md-2 ">
               <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                     <span className='profile-name text-dark'>Dhanny Sumilang</span><br/>
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
                    <NavLink className="nav-link text-white" to="/admin">
                      <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      <span className='first-word'>Admin</span> Portal
                    </NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink className="nav-link text-white" to="/serviceticket" style={{textDecoration: "none", color: "white"}}>
                         <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                         Service Ticket
                      </NavLink>
                  </li>
                </ul>
              </div>
           </div>
         </nav>

         <div className="tab-container">
          <table style={{width: "100%", maxWidth: "200vh", textAlign: "center", lineHeight: "5px"}}>
              <tr style={{height: "40px"}}>
              <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/admin" style={{color: "#004ea2"}}><span className='second-word'>M</span>anage User</NavLink>
                </td>
                <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/branch">Branch</NavLink>
                </td>
                <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/department" >Department</NavLink>
                </td> 
                <td style={{borderRight: "3px solid lightgray"}}> 
                    <NavLink id="tab" to="/position">Position</NavLink>
                </td>
                <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/access">Access</NavLink> 
                </td>
                <td>
                    <NavLink id="tab" to="/#">Activity Logs</NavLink>
                </td> 
              </tr>
            </table>
          </div>

          <div className='row' id='search_form'>
                <form className="d-flex" role="search" style={{display: "inline"}}>
                      <input class="me-3" type="text" placeholder="Search" value="Search" style={{color: "#004ea2", border: "1px solid #004ea2", width: "49vh", padding: "5px", paddingLeft: "25px"}}/>
                      <img src='/assets/settings.png' alt='settings' width="30" height="30" className='mt-1'/>
                      <span style={{fontSize: "14px", marginLeft: "40px", paddingTop: "10px", fontWeight: "bold"}}>Filtered: &nbsp; &nbsp; &nbsp; Branch - GMS Cebu; Active accounts</span>
                      <button id='createAccountBtn' style={{position: "absolute", right: "120px"}}>Create Account</button>
                </form>
              </div>

        </header>

            <main style={{overflowY: "scroll", paddingBottom: "20vh", width: "100%", maxWidth: "170vh", marginTop: "20px"}}> 
              <div className='d-flex flex-row mt-4'>
                <p style={{position: "absolute", right: "37vh", color: "#004ea2", fontSize: "14px"}}>Last Login</p>
                <p style={{position: "absolute", right: "24vh", color: "#004ea2", marginTop: "10vh", fontSize: "14px"}}>Jan. 10, 2022 2:40 PM &nbsp; &nbsp;...</p>
              </div>
            </main>


        </div>
    </div>
  )
}

export default Operation