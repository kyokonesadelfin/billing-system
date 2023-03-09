import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import '../sass/loan_management.scss'


export default function LoanManagement() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg" style={{ position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px", zIndex: "2" }}>
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
                <NavLink className="text-white" to="/loan-management" style={{ textDecoration: "none" }}>
                  <img src='/assets/done.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                  <span className='first-word'>Loan</span> Management
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link text-white" to="/billing">
                  <img src='/assets/headache.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                  Billing
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/admin">
                  <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                  Admin Portal
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link text-white" to="/serviceticket" style={{ textDecoration: "none", color: "white" }}>
                  <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                  Service Ticket
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="navbar" style={{ height: "100%", width: "100%", maxHeight: "11vh", padding: "0", position: "fixed", background: "white", marginLeft: "30px" }}>
        <div className="col-md-2">
        </div>
        <div className="col-md-8 mt-3 navOptions" style={{ background: "white" }}>
          <ul style={{ listStyle: "none", overflow: "hidden" }}>
            <li className='navOptions1'>
              <NavLink to='/loan-management' className='tab1 me-5 pe-4'><span className='firstWord'>Loan</span> Application</NavLink>
              <NavLink to='/loan-configuration' className='tab2 p-3'>Loan Configuration</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2" />
          <span className='profile-name text-dark'>Dhanny Sumilang</span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="instruction">
          <p className="loan-application">Loan applications review</p>
          <p className="new-loan">Select from existing loan applications below or start a new application by clicking on "New Loan"</p>

          <ul style={{ listStyle: "none" }}>
            <li className='navOptions2'>
              <NavLink to='/loan-management' className='tab3 me-4 mw-0 pe-4' autofocus><span className='firstWord'>List</span> of process loan</NavLink>
              <NavLink to='/submitted-application' className='tab4 pe-3' style={{ margin: "0px" }}><span>List</span> of submitted application</NavLink>
            </li>
          </ul>
        </div>

        <div className="searchList">
          <p id='search'>Search</p>
          <input type="number" placeholder='Reference No.' id='referenceNo' />
          <input type="text" placeholder="Applicant's Name" id='applicantName' />
          <span id='filters'>Filters:<span id='myApplication'>My Application only</span></span>
          <NavLink type='btn' to='/new-loan-product' id='newLoanBtn'><span id='newLoanTxt'>New Loan</span></NavLink>

        </div>

        <div className='label'>
          <p id='caseSensitive'>Case-sensitive</p>
        
        </div>
      </div>
    </div>
  )
}
