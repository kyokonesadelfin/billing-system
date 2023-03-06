import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/new_loan_product.scss'



function NewLoanProduct() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg" style={{ position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px", zIndex: "2" }}>
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul style={{ listStyle: "none", lineHeight: "45px", position: "absolute", top: "16px", fontSize: "14px" }}>
                <li class="nav-item">
                  <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="55" style={{ padding: "10px", position: "absolute", left: "0px" }} />
                </li>
                <li className="nav-item" style={{ marginTop: "15vh", marginBottom: "30px" }}>
                  <span className="fourth-word">
                    <NavLink className="text-white" aria-current="page" to="/" style={{ textDecoration: "none" }}>
                      <img src='/assets/house.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      Home
                    </NavLink>
                  </span>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-list" to="/admin">
                    1 &nbsp; &nbsp; <span className='third-word'>Gen</span>eral
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-list" to="/admin">
                    2 &nbsp; &nbsp; Calculator
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-list" to="/admin">
                    3 &nbsp; &nbsp; Customer data
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-list" to="/admin">
                    4 &nbsp; &nbsp; Eligibility criteria
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-list" to="/admin">
                    5 &nbsp; &nbsp; Loan application data
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-list" to="/admin">
                    6 &nbsp; &nbsp; Agreement
                  </NavLink>
                </li>
                <li class="nav-item">
                  <span className="fourth-word">
                    <NavLink className="nav-list" to="/admin">
                      7 &nbsp; &nbsp; Pre-release
                    </NavLink>
                  </span>
                </li>
                <li class="nav-item" style={{ marginTop: "30px" }}>
                  <NavLink className="nav-list" to="/admin">
                    View changes activity
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
            <li className='nav_options1'>
              <NavLink to='/loan-management' className='application-loan me-5 pe-4'>Loan Application</NavLink>
              <NavLink to='/loan-configuration' className='config-loan p-3'><span id='firstWord'>Loan </span>Configuration</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2" />
          <span className='profile-name text-dark'>Dhanny Sumilang</span>
        </div>
      </div>

      </header>

      <main style={{ width: "100%", maxWidth: "180vh" }}>
        <div className='container-fluid' style={{ marginTop: "17vh", marginLeft: "10px" }}>
          <div className="row">
            <h5 className='p-1'>New loan product</h5>
            <div className="col-md-8 col-sm-6 mt-4 p-2">
              <h5>1 - General</h5>
            </div>
            <div class="col-md-4 col-sm-6 mt-4">
              <button id="discardBtn" className="me-2" style={{ border: "0px solid #fff", width: "100%", maxWidth: "150px" }}>Discard changes</button>
              <button id='nextBtn' style={{ border: "0px solid #fff", width: "100%", maxWidth: "100px" }}>Next</button>
            </div>
          </div>

          <div>
            <span className='fw-bold text-secondary' style={{ fontSize: "14px" }}>Select data collected in the application form</span>
          </div>

          <div className='row'>
            <div class="col-3 mb-3 mt-4">
              <label for="exampleFormControlInput1" class="form-label" style={{ color: "#035ec1", fontWeight: "bold" }}>Product name</label>
              <input class="form-control w-100" id="exampleFormControlInput1" />
            </div>
            <div class="col-5 mb-3 mt-4">
              <label for="exampleFormControlInput1" class="form-label" style={{ color: "#035ec1", fontWeight: "bold" }}>Currency</label>
              <input class="form-control w-25" id="exampleFormControlInput1" placeholder='Php' />
            </div>
          </div>

          <div className="row pt-2" style={{ marginTop: "10px" }}>
            <table style={{ width: "90vh", height: "100%", textAlign: "center" }}>
              <tr style={{ height: "40px " }}>
                <td style={{ borderRight: "3px solid lightgray", paddingRight: "10px", paddingLeft: "10px" }}>
                  <NavLink id="tab" to="/#" style={{ color: "#004ea2", fontWeight: "700" }}><span className='second-word'>Act</span>ive duration</NavLink>
                </td>
                <td style={{ borderRight: "3px solid lightgray", paddingRight: "10px", paddingLeft: "10px" }}>
                  <NavLink id="tab" to="/#">Device</NavLink>
                </td>
                <td style={{ borderRight: "3px solid lightgray", paddingRight: "10px", paddingLeft: "10px" }}>
                  <NavLink id="tab" to="/#">Description</NavLink>
                </td>
                <td>
                  <NavLink id="tab" to="/#">Finance Company</NavLink>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewLoanProduct