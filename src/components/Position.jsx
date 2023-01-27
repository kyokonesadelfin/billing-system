import React from 'react'
import { NavLink } from 'react-router-dom'

function Position() {
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
                            <NavLink to='/admin' className='active me-5 pe-4' style={{textDecoration: "none", color: "#004ea2", fontWeight: "600"}}><span className='second-word'>A</span>dmin</NavLink>
                            <NavLink to='/operation' className='p-3 text-dark' style={{textDecoration: "none"}} id='top-nav'>Operation</NavLink>
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
                        <NavLink id="tab" to="/branch">Branch</NavLink>
                    </td>
                    <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/department">Department</NavLink>
                    </td> 
                    <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/position" style={{textDecoration: "none", color: "#004ea2", fontWeight: "600"}}><span className='second-word'>P</span>osition</NavLink>
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
                <form className="d-flex pt-3" role="search" style={{display: "inline", width: "900px"}}>
                    <div className='col-md-10'>
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value="Search"/>
                    </div>
                      
                      <div className='col-md-2' style={{position: "absolute", right: "0", width: "100%", maxWidth: "700px"}}>
                        <button style={{position: "absolute", right: "100px", width: "200px", fontSize: "14px"}}>Create New Position</button>
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
                      <td>Reference no</td>
                      <td>Position name</td>
                      <td>No. of Users</td>
                      <td>Status</td>
                      <td>Information Access Level</td>
                      <td>Modified</td>
                      <td></td>
                    </tr>
                  <tbody className="table-group-divider">
                    <tr style={{color: "black"}}>
                      <td>
                      <div className="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td >0001</td>
                      <td>IT Manager</td>
                      <td>4</td>
                      <td>Active</td>
                      <td>Level 10</td>
                      <td>Jan 24, 2023, 4:35AM</td>
                      <td>...</td>
                    </tr>
                    <tr style={{color: "black"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0002</td>
                      <td>Web Developer</td>
                      <td>10</td>
                      <td>Active</td>
                      <td>Level 5</td>
                      <td>Jan. 10, 2022 10:30PM</td>
                      <td>...</td>
                    </tr>
                    <tr style={{color: "black"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0003</td>
                      <td>Senior Technical Manager</td>
                      <td>10</td>
                      <td>Active</td>
                      <td>Level 6</td>
                      <td>Dec 01,2022 4:30PM</td>
                      <td>...</td>
                    </tr>
                    <tr style={{color: "black"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0004</td>
                      <td>Technical Manager</td>
                      <td>2</td>
                      <td>Active</td>
                      <td>Level 10</td>
                      <td>Nov. 01,2022 6:34PM</td>
                      <td>...</td>
                    </tr>
                    <tr style={{color: "black"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0005</td>
                      <td>Human Resource Supervisor</td>
                      <td>3</td>
                      <td>Active</td>
                      <td>Level 11</td>
                      <td>Sept. 06, 2022 5:34AM</td>
                      <td>...</td>
                    </tr>
                    <tr style={{color: "black"}}>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0006</td>
                      <td>Technical Supervisor</td>
                      <td>7</td>
                      <td>Active</td>
                      <td>Level 4</td>
                      <td>Jan. 04,2023 7:35AM</td>
                      <td>...</td>
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

export default Position