import React from 'react'
import { NavLink } from 'react-router-dom';
import '../sass/admin.scss';

function Sidenav() {
  return (
        <div>
          <div className="container-fluid">
            <header>
            <nav class="navbar navbar-expand-lg" style={{position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px", zIndex: "2"}}>
        <div class="container-fluid">
          <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul style={{listStyle: "none", lineHeight: "70px", position: "absolute", top: "16px"}}>
                      <li class="nav-item">
                      <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", position: "absolute", left: "0px"}}/>
                        </li> 
                        <li className="nav-item" style={{marginTop: "15vh"}}>
                           <NavLink className="text-white" aria-current="page" to="/" style={{textDecoration: "none"}}>
                           <img src='/assets/house.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                           <span className='first-word'>Home</span>
                           </NavLink>
                        </li> 
                        <li class="nav-item">
                          <NavLink className="nav-link" to="/dashboard" style={{color: "white"}}>
                             <img src='/assets/receipt.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                               Dashboard
                          </NavLink>
                        </li>
                        <li class="nav-item">
                          <NavLink class="nav-link text-white" to="/loan-management" style={{textDecoration: "none", color: "white"}}>
                             <img src='/assets/done.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                               Loan Management
                          </NavLink>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="/#">
                             <img src='/assets/headache.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                               Billing
                          </a>
                        </li>
                        <li class="nav-item">
                          <NavLink className="nav-link active text-white" to="/admin">
                             <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                              Admin Portal
                          </NavLink>
                        </li>
                        <li class="nav-item">
                          <NavLink class="nav-link text-white" to="/serviceticket" style={{textDecoration: "none", color: "white"}}>
                             <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                             Service Ticket
                          </NavLink>
                        </li>
                    </ul>
                  </div>
        </div>
      </nav>

      <div className="navbar" style={{height: "100%", width: "100%", maxHeight: "13vh", padding: "0", position: "fixed", background: "white"}}>
        <div className="col-md-2">
      </div>
      <div className='col-md-8'>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="/#" style={{ textDecoration: "none", color: "black" }}>Home</a>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-2 ">
                   <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span className='profile-name text-dark'>Dhanny Sumilang</span><br/>
                         <i className='profile-title'> &nbsp; &nbsp; &nbsp; &nbsp; System Designer</i>
                   </div>
      </div>


            </header>

            <main>
                <img src='/assets/GMS_fin_logo.png' alt='finlogo' width="300px" height="300px" style={{marginLeft: "50vh", marginTop: "30vh"}}/>
            </main>
          </div>
            
        </div>

        



  )
}

export default Sidenav