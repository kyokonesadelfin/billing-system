import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { NavLink } from 'react-router-dom';
import '../sass/dashboard.scss';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options:
      {
        labels: ["Luzon", "Visayas", "Mindanao"],
        legend: {
          show: true,
          position: "bottom"
        },
        dataLabels: {
          enabled: false

        }
      },
      chart: {
        type: "donut",
        width: "250px",
        height: "100%",
      },
      series: [61, 29, 10],

      options1: {
        labels: ['Incomplete Requirements', 'For CI Approval', 'For Bank Submission', 'For Bank Approval'],
        legend: {
          show: false
        },
      },
      series1: [4, 36, 7, 53],


      options2: {
        labels2: ['Too Many Loans', 'Inaccurate details in application', 'Job/Income Stability', 'Low Credit Score'],
        legend: {
          show: false
        },
      },
      series2: [10, 50, 20, 20],

      options3:
      {
        labels: ["Luzon", "Visayas", "Mindanao"],
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false

        }
      },
      chart1: {
        type: "donut",
        width: "250px",
        height: "100%",
      },
      series3: [91, 7, 2],


    };

  }

  render() {
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
                               Home
                           </NavLink>
                        </li> 
                        <li class="nav-item">
                          <NavLink className="nav-link" to="/dashboard" style={{color: "white"}}>
                             <img src='/assets/receipt.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                             <span className='first-word'>Dash</span>board
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
                          <NavLink class="nav-link" to="/serviceticket" style={{textDecoration: "none", color: "white"}}>
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
                      <span> &gt; </span>
                      <li class="breadcrumb-item active" aria-current="page">
                        Dashboard
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

        <main style={{ height: "100%", marginTop: "13vh",paddingBottom: "25vh", overflowY: "scroll", width: "100%", maxWidth: "173vh", paddingRight: "50px"}}>
          <section
            id="card-md"
            className='p-3'
          >
            <div id="loan-details" className="row d-flex flex-row w-100">
              <div className="col-md-10 d-flex flex-columm vertical-align-top w-90">
                <h5 className="fw-bold text-success">
                  Loan Details
                </h5>
              </div>
              <div className="col-md-2 d-flex flex-columm vertical-align-top w-10">
              <button className="p-1 text-secondary w-100" id="more-details" style={{ backgroundColor: "white", borderRadius: "15px" }}>More Details...</button>
              </div>
            </div>

            <hr />
            <div className="row d-flex flex-row w-100 p-4">
              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Approved Loans</xx-small>
                <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />3K</h1>
                <span>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>
                <div className="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "70%" }}></div>
                </div>
                <p className="p-1" style={{ fontSize: "10px" }}>3000/4900-total loan application &nbsp;&nbsp;<medium className="text-success">61%</medium></p>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Active Loans</xx-small>
                <h1><img src='/assets/delivery-man.png' alt="house" width="40" height="40" className='me-3 mb-2' />2K</h1>
                <span>Grow rate: <small className="text-success">&#9650; 5.50%</small></span>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "40%" }}></div>
                </div>
                <p className="p-1" style={{ fontSize: "10px" }}>2000/3000-total approved loans &nbsp;&nbsp;<medium className="text-success">66.70%</medium></p>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Paid Loans</xx-small>
                <h1><img src='/assets/headache.png' alt="house" width="40" height="40" className='me-3 mb-2' />900</h1>
                <span>Grow rate: <small className="text-danger">&#x25BC; 5.50%</small></span>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "20%" }}></div>
                </div>
                <p className="p-1" style={{ fontSize: "10px" }}>900/3000-total approved loans &nbsp;&nbsp;<medium className="text-success">30%</medium></p>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Unpaid Loans</xx-small>
                <h1><img src='/assets/relax.png' alt="house" width="40" height="40" className='me-3 mb-2' />100</h1>
                <span>Grow rate:  <small className="text-success">&#9650;
                  5.50%</small></span>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "90%" }}></div>
                </div>
                <p style={{ fontSize: "10px" }}>100/3000-total loan application &nbsp;&nbsp;<medium className="text-success">3.30%</medium></p>
              </div>
            </div>
          </section>

          <section
            id="card-md2"
            className="mt-4 p-3"
          >
            <div id="loan-applicant-status" className="row d-flex flex-row w-100">
              <div className="col-md-10 d-flex flex-columm vertical-align-top w-90 p-3">
                <h5 className="display-7 fw-bold text-success">
                  Loan Applicant Status
                </h5>
              </div>
              <div className="col-md-2 d-flex flex-column vertical-align-top w-10 p-3">
              <button className="p-1 text-secondary w-100" id="more-details" style={{ backgroundColor: "white", borderRadius: "15px" }}>More Details...</button>
              </div>
            </div>

            <hr />
            <div className="row d-flex flex-row w-100 p-4">
              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Total Loan Application</xx-small>
                <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />4.9K</h1>
                <span>Grow rate: <small className="text-success">&#9650; 5.00%</small></span>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <medium>Area</medium>
                <p className="p-1" style={{ fontSize: "12px" }}>
                  <span>
                    Luzon &nbsp;&nbsp;- 3K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">66.70%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "61.22%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Visayas &nbsp;&nbsp;- 1K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.40%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.40%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Mindanao &nbsp;&nbsp;- 0.9K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">18.36%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "18.36%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Total Applicant</xx-small>
                <h1><img src='/assets/delivery-man.png' alt="house" width="40" height="40" className='me-3 mb-2' />4.5K</h1>
                <span>Grow rate: <small className="text-success">&#9650; 2.50%</small></span>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <medium>Area</medium>
                <p className="p-1" style={{ fontSize: "10px" }}>
                  <span>
                    Luzon &nbsp;&nbsp;- 2.6K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">57.78%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "57.78%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Visayas &nbsp;&nbsp;- 1K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">22.22%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "22.22%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Mindanao &nbsp;&nbsp;- 0.9K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>
              </div>
            </div>
          </section>


          <section id="card-md3" className="mt-4">
            <div id="approved-loans" className="row d-flex flex-row w-100 p-4">
              <div className="col-md-2 d-flex flex-column vertical-align-top w-20">
                <xx-small>Approved Loans</xx-small>
                <h1><img src='/assets/road.png' alt="house" width="40" height="40" className='me-3 mb-2' />3K</h1>
                <span>Grow rate: <small className="text-success">&#9650; 10.50%</small></span>
                <div className="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "70%" }}></div>
                </div>
                <p className="p-1" style={{ fontSize: "10px" }}>3000/4900-total loan application &nbsp;&nbsp;<medium className="text-success">61%</medium></p>
                <medium>Area</medium>
                <p className="p-1" style={{ fontSize: "10px" }}>
                  <span>
                    Luzon &nbsp;&nbsp;- 3K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">66.70%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "61.22%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Visayas &nbsp;&nbsp;- 1K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.40%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.40%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Mindanao &nbsp;&nbsp;- 0.9K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">18.36%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "18.36%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-20">
                <Chart options={this.state.options} series={this.state.series} type="donut" height="400px" />
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-20">
                <xx-small>Pending Loan Application</xx-small>
                <h1><img src='/assets/headache.png' alt="house" width="40" height="40" className='me-3 mb-2' />1.4K</h1>
                <span>Grow rate:  <small className="text-success">&#9650;
                  10.50%</small></span>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "20.50%" }}></div>
                </div>
                <p style={{ fontSize: "10px" }}>1400/4900-total loan application &nbsp;&nbsp;<medium className="text-success">29%</medium></p>
                <xx-small>Rejected Loan Application</xx-small>
                <h1><img src='/assets/relax.png' alt="house" width="40" height="40" className='me-3 mb-2' />0.5K</h1>
                <span>Grow rate:  <small className="text-danger">&#x25BC;
                  1.50%</small></span>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style={{ width: "20.50%" }}></div>
                </div>
                <p style={{ fontSize: "10px" }}>1400/4900-total loan application &nbsp;&nbsp;<medium className="text-success">29%</medium></p>
              </div>


              <div className="col-md-2 d-flex flex-column vertical-align-top w-20">
                <medium>Status</medium>
                <p className="p-1" style={{ fontSize: "10px" }}>
                  <span>
                    Incomplete Requirements
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<medium className="text-success">04.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "04.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    For C.I. Approval
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<medium className="text-success">36.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "36.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    For Bank Submission
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">07.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "07.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    For Bank Approval
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">53.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "53.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>

                <medium>Reason</medium>
                <p className="p-1" style={{ fontSize: "10px" }}>
                  <span>
                    Too Many Loans
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">10.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "10.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Inaccurate details in application
                    &nbsp; <medium className="text-success">50.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "50.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Job / Income Instability
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Low Credit Score
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>
              </div>

              <div className="col-md-2 d-flex flex-column vertical-align-top w-20">
                <Chart id="chart" options={this.state.options1} series={this.state.series1} type="donut" />
                <br /> <br />
                <Chart id="chart" options={this.state.options2} series={this.state.series2} type="donut" />
              </div>
            </div>
          </section>



          <section id="card-md4" className="mt-4 p-3">
            <div className="row d-flex flex-row w-100">
              <div className="col-md-10 d-flex flex-columm vertical-align-top w-90">
                <h5 className="display-7 fw-bold text-success p-4">
                  Billing
                </h5>
              </div>
              <div className="col-md-2 d-flex flex-column vertical-align-top w-10 p-3">
              <button className="p-1 text-secondary w-100" id="more-details" style={{ backgroundColor: "white", borderRadius: "15px" }}>More Details...</button>
              </div>
            </div>

            <hr />
            <div className="row d-flex flex-row w-100 h-100 p-2">
              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Total Dues Today</xx-small>
                <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />220</h1>
                <span>Grow rate: <small className="text-success">&#9650; 5.00%</small></span>

                <medium>Area</medium>
                <p className="p-1" style={{ fontSize: "12px" }}>
                  <span>
                    Luzon &nbsp;&nbsp;- 3K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">66.70%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "61.22%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Visayas &nbsp;&nbsp;- 1K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.40%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.40%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Mindanao &nbsp;&nbsp;- 0.9K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">18.36%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "18.36%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>
                <xx-small>Total Unpaid Dues Today</xx-small>
                <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />84</h1>
                <span>Grow rate: <small className="text-success">&#9650; 50%</small></span>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <Chart options={this.state.options3} series={this.state.series3} type="donut" height="300px" />
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Total paid process today</xx-small>
                <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />45</h1>
                <span>Grow rate: <small className="text-success">&#9650; 2.50%</small></span>

                <medium>Area</medium>
                <p className="p-1" style={{ fontSize: "10px" }}>
                  <span>
                    Luzon &nbsp;&nbsp;- 2.6K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">57.78%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "57.78%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Visayas &nbsp;&nbsp;- 1K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">22.22%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "22.22%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Mindanao &nbsp;&nbsp;- 0.9K
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>

                <medium>Payment Details</medium>
                <p className="p-1" style={{ fontSize: "10px" }}>
                  <span>
                    Online Payment &nbsp;&nbsp;- DragonPay
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">57.78%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "57.78%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Cash Payment &nbsp;&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">22.22%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "22.22%" }}></div>
                      </div>
                    </medium>
                  </span>
                  <span>
                    Over the counter &nbsp;&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <medium className="text-success">20.00%</medium>
                    <medium>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: "20.00%" }}></div>
                      </div>
                    </medium>
                  </span>
                </p>
              </div>

              <div className="col-md-3 d-flex flex-column vertical-align-top w-25">
                <xx-small>Total paid amount today</xx-small>
                <h1>135K</h1>
                <span>Grow rate: <small className="text-success">&#9650; 2.50%</small></span>
              </div>

            </div>
          </section>

          <section
            id="card-md5"
            className="mt-4 p-4 mb-5"
          >
            <div className="row d-flex flex-row w-100">
              <div className="col-md-10 d-flex flex-columm vertical-align-top w-80">
                <h5 className="display-7 fw-bold text-success">
                  TODA / Client
                </h5>
              </div>
              <div className="col-md-2 d-flex flex-column vertical-align-top w-10 p-3">
                <button className="p-1 text-secondary w-100" id="more-details" style={{ backgroundColor: "white", borderRadius: "15px" }}>More Details...</button>
              </div>
            </div>

            <hr />
            <div className="row d-flex flex-row w-100 h-100">
              <div className="col-md-6 d-flex flex-column vertical-align-top w-50">
                <xx-small>Total TODA/ Organization</xx-small>
                <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />200</h1>
              </div>

              <div className="col-md-6 d-flex flex-column vertical-align-top w-50">
                <p>
                  <xx-small>Rank A</xx-small>
                  <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />200</h1>
                </p>
                <p>
                  <xx-small>Rank A</xx-small>
                  <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />200</h1>
                </p>
                <p>
                  <xx-small>Rank A</xx-small>
                  <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />200</h1>
                </p>
                <p>
                  <xx-small>Rank A</xx-small>
                  <h1><img src='/assets/receipt.png' alt="house" width="40" height="40" className='me-3 mb-2' />200</h1>
                </p>
              </div>
            </div>
          </section>

        </main>

      </div>
        
    </div >
  )
  }
}

export default Dashboard