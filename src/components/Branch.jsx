import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/branch.scss'

function Branch() {

  const [moreInfo, setMoreInfo] = useState(true);

  return (
    <div>
        <div className="container-fluid">
          <header>
               <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "13vh", backgroundColor: "transparent"}}>
                 <div className="container-fluid">
                   <div className="col-md-2">
                             {/* <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/> */}
                   </div>
                   <div className="col-md-8 mt-3">
                    <ul style={{listStyle: "none"}}>
                        <li>
                            <NavLink to='/admin' className='active me-5 pe-4' style={{textDecoration: "none", fontWeight: "600"}}><span className='second-word'>A</span>dmin</NavLink>
                            <NavLink to='/operation' className='p-3 text-dark' id='top-nav' style={{textDecoration: "none"}}>Operation</NavLink>
                        </li>
                    </ul>
                   </div>
                   <div className="col-md-2 ">
                   <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                         <span className='profile-name text-dark'>Dhanny Sumilang</span><br/>
                         <i className='profile-title'> &nbsp; &nbsp; &nbsp; &nbsp; System Designer</i>
                   </div>
                 </div>
              </nav>
              
              <nav class="navbar navbar-expand-lg" style={{ position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px" }}>
                  <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul style={{ listStyle: "none", lineHeight: "70px", position: "absolute", top: "16px" }}>
                        <li class="nav-item">
                          <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{ padding: "10px", position: "absolute", left: "0px" }} />
                        </li>
                        <li className="nav-item" style={{ marginTop: "15vh" }}>
                          <NavLink className="text-white" aria-current="page" to="/" style={{ textDecoration: "none" }}>
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
                         <NavLink class="nav-link text-white" to="/loan-management" style={{textDecoration: "none", color: "white"}}>
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
                        <NavLink className="nav-link active text-white" to="/admin">
                          <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                          <span className='first-word'>Admin</span> Portal
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

             <div className="tab-container" style={{marginTop: "95px"}}>
              <table style={{width: "100%", maxWidth: "200vh", height: "100%", textAlign: "center"}}>
                  <tr style={{height: "40px"}}>
                  <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/admin">Manage User</NavLink>
                    </td>
                    <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/branch" style={{color: "#004ea2", fontWeight: "600"}}><span className='second-word'>B</span>ranch</NavLink>
                    </td>
                    <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/department" >Department</NavLink>
                    </td> 
                    <td style={{borderRight: "3px solid lightgray", borderRightHeight: "0.5px"}}>
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


            </header>

            <main style={{overflowY: "scroll", paddingBottom: "20vh", width: "100%", maxWidth: "170vh"}}> 
              <div className='d-flex flex-row'>
                <form className="d-flex pt-4" role="search" style={{display: "inline", width: "900px"}}>
                    <div className='col-md-10'>
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value="Search"/>
                    </div>
                      
                      <div className='col-md-2' style={{position: "absolute", right: "0", width: "100%", maxWidth: "75vh"}}>
                        <button id='addNewBranchBtn' style={{position: "absolute", right: "100px", width: "150px", fontSize: "14px"}}>Add New Branch</button>
                      </div>   
                </form>
              </div>

              <section style={{fontSize: "14px"}}>
              <nav aria-label="breadcrumb" className='mt-4'>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page" style={{textDecoration: "none", color: "#004ea2", fontWeight: "400", fontSize: "14px"}}>Showing 10 results</li>
                </ol>
              </nav>
              <table className="table" style={{width: "160vh"}}>
                    <tr style={{color: "#004ea2"}}>
                      <td className='p-3'>
                        <div className="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td> 
                      <td>Branch no</td>
                      <td>Name</td>
                      <td>Address</td>
                      <td>Status</td>
                      <td>Number of Users</td>
                      <td>Branch</td>
                      <td>Phone no</td>
                      <td></td>
                    </tr>
                  <tbody className="table-group-divider">
                    <tr style={{color: "#004ea2"}}>
                      <td>
                      <div className="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td >00001</td>
                      <td>GMS Phils</td>
                      <td>Makati City</td>
                      <td>Active</td>
                      <td>Jan 01,2022</td>
                      <td>-</td>
                      <td><i className="fa fa-ellipsis-h moreInfoBtn" onClick = {() => setMoreInfo(!moreInfo)}></i></td>
                    </tr>
                    <tr style={{color: "#004ea2"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>00002</td>
                      <td>GMS Cebu</td>
                      <td>Cebu City</td>
                      <td>Active</td>
                      <td>Dec. 01,2022</td>
                      <td>02 888 8888</td>
                      <td><i className="fa fa-ellipsis-h moreInfoBtn" onClick = {() => setMoreInfo(!moreInfo)}></i></td>
                    </tr>
                    <tr style={{color: "#004ea2"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>00003</td>
                      <td>GMS Quezon</td>
                      <td>Quezon City</td>
                      <td>Active</td>
                      <td>02.24.2023</td>
                      <td>-</td>
                      <td><i className="fa fa-ellipsis-h moreInfoBtn" onClick = {() => setMoreInfo(!moreInfo)}></i></td>
                    </tr>
                    <tr style={{color: "#004ea2"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>00004</td>
                      <td>GMS Davao</td>
                      <td>Davao City</td>
                      <td>Active</td>
                      <td>12.14.2022</td>
                      <td>-</td>
                      <td><i className="fa fa-ellipsis-h moreInfoBtn" onClick = {() => setMoreInfo(!moreInfo)}></i></td>
                    </tr>
                    <tr style={{color: "#004ea2"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>00005</td>
                      <td>GMS Cagayan</td>
                      <td>Cagayan De Oro</td>
                      <td>Active</td>
                      <td>11.25.2022</td>
                      <td>-</td>
                      <td><i className="fa fa-ellipsis-h moreInfoBtn" onClick = {() => setMoreInfo(!moreInfo)}></i></td>
                    </tr>
                    <tr style={{color: "#004ea2"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>00006</td>
                      <td>GMS Rizal</td>
                      <td>Antipolo City</td>
                      <td>Active</td>
                      <td>10.03.2022</td>
                      <td>-</td>
                      <td><i className="fa fa-ellipsis-h moreInfoBtn" onClick = {() => setMoreInfo(!moreInfo)}></i></td>
                    </tr>
                  </tbody>
                </table>
              </section>
              
              <div className='d-flex justify-content-center align-items-center pb-5'> 
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li class="page-item"><a class="page-link" href="/#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="/#">1</a></li>
                    <li class="page-item"><a class="page-link" href="/#">2</a></li>
                    <li class="page-item"><a class="page-link" href="/#">3</a></li>
                    <li class="page-item"><a class="page-link" href="/#">Next</a></li>
                  </ul>
                </nav>
              </div>


            </main>

          </div>
    </div>
  )
}

export default Branch