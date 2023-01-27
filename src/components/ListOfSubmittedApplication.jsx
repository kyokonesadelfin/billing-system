import React from 'react';
import { NavLink } from 'react-router-dom'
import '../sass/submitted_application.scss'


export default function ListOfSubmittedApp() {
  
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
              <NavLink to='/loan-management' className='tab1 me-5 pe-4'>Loan Application</NavLink>
              <NavLink to='/loan-configuration' className='tab2 p-3'>Loan Configuration</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2" style={{background: "white", marginTop: "5px"}}>
          <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
          <span className='text-dark fw-bold'>Kyokonesa Delfin</span>
        </div>
      </div>
      <div className="instruction">
        <p className="loan-application">Loan applications review</p>
        <p className="new-loan">Select from existing loan applications below or start a new application by clicking on "New Loan"</p>

        <ul style={{listStyle: "none"}}>
          <li className='navOptions2'>
            <NavLink to='/loan-management' className='processLoan me-4 mw-0 pe-4' autofocus><span>List</span> of process loan</NavLink>
            <NavLink to='/submitted-applications'className='submitApp pe-3' style={{margin: "0px"}}><span className='firstWord1'>List</span> of submitted application</NavLink>
          </li>
        </ul>
      </div>
      <div className="pendingApplication">
        <ul style={{listStyle: "none"}}>
          <li>
            <span id='totalPending'>Total Pending Applications</span>
            <span id='totalUnread'>Total Unread Applications</span>
          </li>
          <li>
            <span id='totalPendingVal' style={{fontSize: '30px'}}>00000000001000</span>
            <span id='totalUnreadVal'>00000000001000</span>
            <button id='refreshBtn'><span id='refreshBtnTxt'>Refresh</span></button>
          </li>
        </ul>
        
      </div>

      <div>
      <table className='applicationsTable'>
          <tr className='tableColumnHeads'>
            <th>Branch Name</th>
            <th>Reference No</th>
            <th>Applicant Name</th>
            <th>CIF No.</th>
            <th>Product Name</th>
            <th>Principal Amount</th>
            <th>Interest Rate</th>
            <th>Status</th>
            <th></th>
          </tr>
          <tr>
            <td>Dipolog</td>
            <td>0000000000011</td>
            <td>Dhanny Lou Sumilang</td>
            <td>00002</td>
            <td>GMSF 01</td>
            <td>200,000.00</td>
            <td>10 % annually</td>
            <td>Draft</td>
            <td></td>
          </tr>
          <tr>
            <td>Cavite</td>
            <td>0000000000001</td>
            <td>Michael Apirin</td>
            <td>00003</td>
            <td>GMSF 01</td>
            <td>500,000.00</td>
            <td>10 % annually</td>
            <td>In progress</td>
            <td></td>
          </tr>
          <tr>
            <td>Makati</td>
            <td>0000000000002</td>
            <td>Kenji</td>
            <td>00004</td>
            <td>GMSF 01</td>
            <td>1,000,000.00</td>
            <td>10 % annually</td>
            <td>Waiting for approval</td>
            <td></td>
          </tr>
          <tr>
            <td>Manila</td>
            <td>0000000000003</td>
            <td>Jeffrey</td>
            <td>00005</td>
            <td>GMSF 02</td>
            <td>1,000,000.00</td>
            <td>5 % annually</td>
            <td>Released</td>
            <td></td>
          </tr>
          <tr>
            <td>Manila</td>
            <td>0000000000004</td>
            <td>Ramil</td>
            <td>00006</td>
            <td>GMSF 02</td>
            <td>1,000,000.00</td>
            <td>5 % annually</td>
            <td>Cancelled</td>
            <td></td>
          </tr>
          <tr className="lastRow">
            <td>Manila</td>
            <td>0000000000005</td>
            <td>Dhanny Lou Sumilang</td>
            <td>00002</td>
            <td>GMSF 02</td>
            <td>1,000,000.00</td>
            <td>5 % annually</td>
            <td>Rejected</td>
            <td></td>
          </tr>
        </table>
      </div>
      
    </div>
  )
}