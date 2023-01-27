import React from 'react';
import { NavLink } from 'react-router-dom'
import '../sass/loan_configuration.scss'


export default function LoanConfiguration() {
  
  return (
    <div>
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
                               Home
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
                             <span className='first-word'>Loan</span> Management
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
                          <a class="nav-link text-white" href="/#">
                             <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                             Service Ticket
                          </a>
                        </li>
                    </ul>
                  </div>
        </div>
      </nav>

      <div className="navbar" style={{height: "100%", width: "100%", maxHeight: "13vh", padding: "0", position: "fixed", background: "white"}}>
        <div className="col-md-2">
        
        </div>
        <div className="col-md-8 mt-3 navOptions" style={{background: "white"}}>
          <ul style={{listStyle: "none", overflow: "hidden"}}>
            <li className='navOptions1'>
              <NavLink to='/loan-management' className='loan-app me-5 pe-4'>Loan Application</NavLink>
              <NavLink to='/loan-configuration' className='loan-config p-3'>Loan Configuration</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2" style={{background: "white", marginTop: "5px"}}>
          <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
          <span className='text-dark fw-bold'>Kyokonesa Delfin</span>
        </div>
      </div>

      <div className="instruction">
        <p className="loan-application">Loan configurations</p>
        <span className="new-loan">Select from existing loan configurations below and take actions by clicking on "more".</span>
        <button id='refreshBtn'><span id='refreshBtnTxt'>Refresh</span></button>
        <button id='newLoanConfig'><span id='newLoanConfigTxt'>New Loan Configuration</span></button>
      </div>
      <div>
        <table className='applicationsTable'>
            <tr className='tableColumnHeads'>
                <th>No</th>
                <th>Loan Code</th>
                <th>Product Name</th>
                <th>Modified By</th>
                <th>Last Edit</th>
                <th>Channel</th>
                <th>Status</th>
                <th></th>
            </tr>
            <tr>
                <td>001</td>
                <td>200</td>
                <td>Personal Loan A</td>
                <td>Dhanny Lou Sumilang</td>
                <td>GMSF 01 </td>
                <td>Web, Desktop, Mobile</td>
                <td>Published</td>
                <td>More</td>
                <td></td>
            </tr>
            <tr>
                <td>002</td>
                <td>300</td>
                <td>Personal Loan B</td>
                <td>Dhanny Lou Sumilang</td>
                <td>GMSF 01 </td>
                <td>Desktop, Mobile</td>
                <td>Draft</td>
                <td>More</td>
                <td></td>
            </tr>
        </table>
      </div>
    </div>
  )
}