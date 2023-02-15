import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import '../sass/loan_management.scss'


export default function LoanManagement() {

  const [moreInfo1, setMoreInfo1] = useState(false);
  const [moreInfo2, setMoreInfo2] = useState(false);
  const [moreInfo3, setMoreInfo3] = useState(false);
  const [moreInfo4, setMoreInfo4] = useState(false);
  const [moreInfo5, setMoreInfo5] = useState(false);
  const [moreInfo6, setMoreInfo6] = useState(false);
  const [filter, setFilter] = useState(true);

  let moreInfoRef = useRef();


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

  function uncheckAll(e) {

    e.preventDefault();

    document.querySelectorAll('input[type="checkbox"]')
      .forEach(el => el.checked = false);

  }

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
          <img src='/assets/settings.png' alt='settings' width="50" height="45" id='settings' onClick={() => setFilter(!filter)} style={{ cursor: "pointer" }} />
          <span id='filters'>Filters:<span id='myApplication'>My Application only</span></span>
          <NavLink type='btn' to='/new-loan-product' id='newLoanBtn'><span id='newLoanTxt'>New Loan</span></NavLink>

        </div>

        <div className='label'>
          <p id='caseSensitive'>Case-sensitive</p>
          {
            filter
              ?
              <></>
              :
              <form className='filterOptions'>
                <div className="container">
                  <div className="row">
                    <div className='col-md-4'>
                      <p style={{ marginTop: "15px" }}>Filter<span style={{ marginLeft: "50px" }}><button onClick={(e) => uncheckAll(e)} style={{ backgroundColor: '#004EA2', color: "#FFFFFF", borderRadius: "3px" }}>Reset</button></span></p>
                      <p>Loan application overview</p>
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <input type="checkbox" id="myApplicationOnly" name="loan_type" value="My application only" style={{ marginRight: '12px' }} />
                          <label for="myApplicationOnly">My application only</label>
                        </li>
                        <li>
                          <input type="checkbox" id="allApplications" name="loan_type" value="See all applications" />
                          <label for="allApplications">See all applications</label>
                        </li>
                        <li>
                          <input type="checkbox" id="toUpdate" name="loan_type" value="To update" />
                          <label for="toUpdate">To update</label>
                        </li>
                        <li>
                          <input type="checkbox" id="toApprove" name="loan_type" value="To approve" />
                          <label for="toApprove">To approve</label>
                        </li>
                        <li>
                          <input type="checkbox" id="toRelease" name="loan_type" value="To release" />
                          <label for="toRelease">To release</label>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-4'>
                      <p style={{ marginTop: "69px" }}>Application Status</p>
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <input type="checkbox" id="inProgress" name="applicationStatus" value="In progress" />
                          <label for="inProgress">In progress</label>
                        </li>
                        <li>
                          <input type="checkbox" id="released" name="applicationStatus" value="Released" />
                          <label for="released">Released</label>
                        </li>
                        <li>
                          <input type="checkbox" id="canceled" name="applicationStatus" value="Canceled" />
                          <label for="canceled">Canceled</label>
                        </li>
                        <li>
                          <input type="checkbox" id="deferred" name="applicationStatus" value="Deferred" />
                          <label for="deferred">Deferred</label>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-4'>
                      <p style={{ marginTop: "67px" }}>Approval Status</p>
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <input type="checkbox" id="notRequired" name="approvalStatus" value="Not required" />
                          <label for="notRequired">Not required</label>
                        </li>
                        <li>
                          <input type="checkbox" id="rejected" name="approvalStatus" value="Rejected" />
                          <label for="rejected">Rejected</label>
                        </li>
                        <li>
                          <input type="checkbox" id="waitingApproval" name="approvalStatus" value="Waiting for approval" />
                          <label for="waitingApproval">Waiting for approval</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>

          }
        </div>
        <div>
          <table className='applicationsTable'>
            <tr className='tableColumnHeads'>
              <th>Area</th>
              <th>Application No</th>
              <th>Applicant Name</th>
              <th>CIF No.</th>
              <th>Loan Type</th>
              <th>Date Applied</th>
              <th>Interest Rate</th>
              <th>Status</th>
              <th></th>
            </tr>
            <tr>
              <td>Dipolog</td>
              <td>0000000000011</td>
              <td>Dhanny Lou Sumilang</td>
              <td>New</td>
              <td>Car loan - 2 wheels</td>
              <td>12/02/2022 12:55PM</td>
              <td>10 % annually</td>
              <td>Completed</td>
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo1(!moreInfo1)}></i></td>
              {
                !moreInfo1
                  ?
                  <></>
                  :
                  <div className="moreInfoSection" ref={moreInfoRef}>
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
                          <li><span>New</span></li>
                          <li><span>000000000011</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
                          <li><span>New Loan</span></li>
                          <li><span>Weekly</span></li>
                          <li><span>36</span></li>
                          <li><span>For approval</span></li>
                          <li><span>Completed</span></li>
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
              <td>Car loan - 3 wheels</td>
              <td>12/02/2022 12:45PM</td>
              <td>10 % annually</td>
              <td>In progress</td>
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo2(!moreInfo2)}></i></td>
              {
                !moreInfo2
                  ?
                  <></>
                  :
                  <div className="moreInfoSection" ref={moreInfoRef}>
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
                          <li><span>0003</span></li>
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
              <td>New</td>
              <td>Car loan - 4 wheels</td>
              <td>12/02/2022 12:35PM</td>
              <td>10 % annually</td>
              <td>Waiting for approval</td>
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo3(!moreInfo3)}></i></td>
              {
                !moreInfo3
                  ?
                  <></>
                  :
                  <div className="moreInfoSection" ref={moreInfoRef}>
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
                          <li><span>New</span></li>
                          <li><span>000000000002</span></li>
                          <li><span>Kenji</span></li>
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
              <td>House loan</td>
              <td>12/02/2022 12:25PM</td>
              <td>5 % annually</td>
              <td>Released</td>
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo4(!moreInfo4)}></i></td>
              {
                !moreInfo4
                  ?
                  <></>
                  :
                  <div className="moreInfoSection" ref={moreInfoRef}>
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
                          <li><span>00005</span></li>
                          <li><span>000000000003</span></li>
                          <li><span>Jeffrey</span></li>
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
              <td>New</td>
              <td>Car loan - 2 wheels</td>
              <td>12/02/2022 12:15PM</td>
              <td>5 % annually</td>
              <td>Cancelled</td>
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo5(!moreInfo5)}></i></td>
              {
                !moreInfo5
                  ?
                  <></>
                  :
                  <div className="moreInfoSection" ref={moreInfoRef}>
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
                          <li><span>New</span></li>
                          <li><span>000000000004</span></li>
                          <li><span>Ramil</span></li>
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
              <td>Education Loan - College</td>
              <td>12/02/2022 12:10PM</td>
              <td>5 % annually</td>
              <td>Rejected</td>
              <td><i ref={moreInfoRef} className="fa fa-ellipsis-h moreInfoBtn" onClick={() => setMoreInfo6(!moreInfo6)}></i></td>
              {
                !moreInfo6
                  ?
                  <></>
                  :
                  <div className="moreInfoSection" ref={moreInfoRef}>
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
                          <li><span>000000000005</span></li>
                          <li><span>Dhanny Lou Sumilang</span></li>
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
