import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import '../sass/submitted_application.scss'


export default function ListOfSubmittedApp() {

  const [moreInfo1, setMoreInfo1] = useState(false);
  const [moreInfo2, setMoreInfo2] = useState(false);
  const [moreInfo3, setMoreInfo3] = useState(false);
  const [moreInfo4, setMoreInfo4] = useState(false);
  const [moreInfo5, setMoreInfo5] = useState(false);
  const [moreInfo6, setMoreInfo6] = useState(false);

  const moreInfoRef = useRef();

  useEffect(() => {

    document.addEventListener("mousedown", (e) => {
      e.preventDefault();
      if (!moreInfoRef.current.contains(e.target)) {
        setMoreInfo1(false);
        setMoreInfo2(false);
        setMoreInfo3(false);
        setMoreInfo4(false);
        setMoreInfo5(false);
        setMoreInfo6(false);
      }
    });
  });

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
              <NavLink to='/loan-management' className='processLoan me-4 mw-0 pe-4' autofocus><span>List</span> of process loan</NavLink>
              <NavLink to='/submitted-applications' className='submitApp pe-3' style={{ margin: "0px" }}><span className='firstWord1'>List</span> of submitted application</NavLink>
            </li>
          </ul>
        </div>
        <div className="pendingApplication">
          <ul style={{ listStyle: "none" }}>
            <li>
              <span id='totalPending'>Total Pending Applications</span>
              <span id='totalUnread'>Total Unread Applications</span>
            </li>
            <li>
              <span id='totalPendingVal' style={{ fontSize: '30px' }}>00000000001000</span>
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
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo1(!moreInfo1)}></i></td>
              {
                !moreInfo1
                  ?
                  <></>
                  :
                  <div className="moreInfoSection">
                    <div className="row">
                      <div className="col-md-6">
                        <ul id='firstColumn' style={{ listStyle: "none" }}>
                          <li><span>CIF No:</span></li>
                          <li><span>Reference No:</span></li>
                          <li><span>Created by:</span></li>
                          <li><span>Creation Type:</span></li>
                          <li><span>Payment Interval:</span></li>
                          <li><span>Total amortization number:</span></li>
                          <li><span>Approval status:</span></li>
                          <li><span>Application status:</span></li>
                          <li><span>Modified by:</span></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul id='secondColumn' style={{ listStyle: "none" }}>
                          <li><span>0002</span></li>
                          <li><span>000000000001</span></li>
                          <li><span>Michael Aperin</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Waiting for approval</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
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
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo2(!moreInfo2)}></i></td>
              {
                !moreInfo2
                  ?
                  <></>
                  :
                  <div className="moreInfoSection">
                    <div className="row">
                      <div className="col-md-6">
                        <ul id='firstColumn' style={{ listStyle: "none" }}>
                          <li><span>CIF No:</span></li>
                          <li><span>Reference No:</span></li>
                          <li><span>Created by:</span></li>
                          <li><span>Creation Type:</span></li>
                          <li><span>Payment Interval:</span></li>
                          <li><span>Total amortization number:</span></li>
                          <li><span>Approval status:</span></li>
                          <li><span>Application status:</span></li>
                          <li><span>Modified by:</span></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul id='secondColumn' style={{ listStyle: "none" }}>
                          <li><span>0002</span></li>
                          <li><span>000000000001</span></li>
                          <li><span>Michael Aperin</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Waiting for approval</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
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
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo3(!moreInfo3)}></i></td>
              {
                !moreInfo3
                  ?
                  <></>
                  :
                  <div className="moreInfoSection">
                    <div className="row">
                      <div className="col-md-6">
                        <ul id='firstColumn' style={{ listStyle: "none" }}>
                          <li><span>CIF No:</span></li>
                          <li><span>Reference No:</span></li>
                          <li><span>Created by:</span></li>
                          <li><span>Creation Type:</span></li>
                          <li><span>Payment Interval:</span></li>
                          <li><span>Total amortization number:</span></li>
                          <li><span>Approval status:</span></li>
                          <li><span>Application status:</span></li>
                          <li><span>Modified by:</span></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul id='secondColumn' style={{ listStyle: "none" }}>
                          <li><span>0002</span></li>
                          <li><span>000000000001</span></li>
                          <li><span>Michael Aperin</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Waiting for approval</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
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
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo4(!moreInfo4)}></i></td>
              {
                !moreInfo4
                  ?
                  <></>
                  :
                  <div className="moreInfoSection">
                    <div className="row">
                      <div className="col-md-6">
                        <ul id='firstColumn' style={{ listStyle: "none" }}>
                          <li><span>CIF No:</span></li>
                          <li><span>Reference No:</span></li>
                          <li><span>Created by:</span></li>
                          <li><span>Creation Type:</span></li>
                          <li><span>Payment Interval:</span></li>
                          <li><span>Total amortization number:</span></li>
                          <li><span>Approval status:</span></li>
                          <li><span>Application status:</span></li>
                          <li><span>Modified by:</span></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul id='secondColumn' style={{ listStyle: "none" }}>
                          <li><span>0002</span></li>
                          <li><span>000000000001</span></li>
                          <li><span>Michael Aperin</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Waiting for approval</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
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
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo5(!moreInfo5)}></i></td>
              {
                !moreInfo5
                  ?
                  <></>
                  :
                  <div className="moreInfoSection">
                    <div className="row">
                      <div className="col-md-6">
                        <ul id='firstColumn' style={{ listStyle: "none" }}>
                          <li><span>CIF No:</span></li>
                          <li><span>Reference No:</span></li>
                          <li><span>Created by:</span></li>
                          <li><span>Creation Type:</span></li>
                          <li><span>Payment Interval:</span></li>
                          <li><span>Total amortization number:</span></li>
                          <li><span>Approval status:</span></li>
                          <li><span>Application status:</span></li>
                          <li><span>Modified by:</span></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul id='secondColumn' style={{ listStyle: "none" }}>
                          <li><span>0002</span></li>
                          <li><span>000000000001</span></li>
                          <li><span>Michael Aperin</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Waiting for approval</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
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
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo6(!moreInfo6)}></i></td>
              {
                !moreInfo6
                  ?
                  <></>
                  :
                  <div className="moreInfoSection">
                    <div className="row">
                      <div className="col-md-6">
                        <ul id='firstColumn' style={{ listStyle: "none" }}>
                          <li><span>CIF No:</span></li>
                          <li><span>Reference No:</span></li>
                          <li><span>Created by:</span></li>
                          <li><span>Creation Type:</span></li>
                          <li><span>Payment Interval:</span></li>
                          <li><span>Total amortization number:</span></li>
                          <li><span>Approval status:</span></li>
                          <li><span>Application status:</span></li>
                          <li><span>Modified by:</span></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul id='secondColumn' style={{ listStyle: "none" }}>
                          <li><span>0002</span></li>
                          <li><span>000000000001</span></li>
                          <li><span>Michael Aperin</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Waiting for approval</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
            </tr>
          </table>
        </div>
      </div>


    </div>
  )
}