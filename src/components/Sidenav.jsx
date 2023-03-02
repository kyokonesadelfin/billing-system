import React from 'react'
import { NavLink } from 'react-router-dom';
import '../sass/sidenav.scss';

function Sidenav() {
  return (
    <div>
      <div className="container-fluid">
        <header>
           <nav id='main-sidenav' class="navbar" >
              <div class="container-fluid">
                  <ul id='main-side-ul'>
                    <li class="nav-item">
                      <img id='main-side-logo' src="/assets/gms_logo_w_r.svg" alt="logo" />
                    </li>
                    <li className="nav-item" style={{ marginTop: "12vh" }}>
                      <NavLink className="text-white" aria-current="page" to="/" style={{ textDecoration: "none" }}>
                        <img src='/assets/house.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                        <span className='first-word' id='sidenav-menu'>Home</span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      <img src='/assets/receipt.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      <span id='sidenav-menu'>Dashboard</span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink className="nav-link" to="/loan-management">
                         <img src='/assets/done.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                         <span id='sidenav-menu'>Loan Management</span>
                      </NavLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="/#">
                      <img src='/assets/headache.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      <span id='sidenav-menu'>Billing</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      <span id='sidenav-menu'>Admin Portal</span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink className="nav-link" to="/serviceticket">
                         <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                         <span id='sidenav-menu'>Service Ticket</span>
                      </NavLink>
                  </li>
                </ul>
              </div>
         </nav>

      <div className="navbar" style={{height: "100%", width: "100%", maxHeight: "11vh", background: "white", position: "absolute"}}>
        <div className="col-md-2">
      </div>
      <div className='col-md-8 mt-2'>
                  <nav aria-label="breadcrumb">
                    <ol id='header-breadcrumb' class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a id='first-bc' href="/#">Home</a>
                      </li>
                      <span style={{color: "black"}}> &gt; </span>
                      <li class="breadcrumb-item active" aria-current="page">
                        Dashboard
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-2">
                   <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span id='sidenav-name' className='profile-name text-dark'>Dhanny Sumilang</span>
                </div>
      </div>

        </header>
            <main>
              <div className="container-fluid">
                  <img id='gms-finance-logo' src='/assets/GMS_fin_logo.png' alt='finlogo'/>
              </div>
            </main>
      </div>

    </div>






  )
}

export default Sidenav