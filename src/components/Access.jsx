import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/access.scss';

function Access() {
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
                            <NavLink to='/admin' className='me-5 pe-4' style={{textDecoration: "none", color: "#004ea2", fontWeight: "600"}}><span className='second-word'>A</span>dmin</NavLink>
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
              
              <nav class="navbar navbar-expand-lg" style={{position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px"}}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <td style={{borderRight: "3px solid lightgray", borderRightHeight: "0.5px"}}>
                        <NavLink id="tab" to="/position">Position</NavLink>
                    </td>
                    <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/access" style={{textDecoration: "none", color: "#004ea2", fontWeight: "600"}}><span className='second-word'>A</span>ccess</NavLink> 
                    </td>
                    <td>
                        <NavLink id="tab" to="/#">Activity Logs</NavLink>
                    </td> 
                  </tr>
                </table>
                
              </div>
            </header>

            <main style={{overflowY: "scroll", paddingBottom: "20vh", width: "100%", maxWidth: "170vh"}}> 
              <div className="tab-container" style={{marginTop: "0px"}}>
              <table style={{width: "100%", maxWidth: "60vh", textAlign: "center", position: "absolute", left: "0"}}>
                  <tr style={{height: "40px"}}>
                  <td style={{borderRight: "3px solid lightgray"}}>
                        <NavLink id="tab" to="/access" style={{paddingLeft: "30px", paddingRight: "100px", textDecoration: "none", color: "#004ea2", fontWeight: "600" }}><span className='second-word'>R</span>ole</NavLink>
                    </td>
                    <td>
                        <NavLink id="tab" to="/access/access2" style={{marginLeft: "40px"}}>Access Level</NavLink>
                    </td>
                  </tr>
                </table>
                      <div className='col-md-2' style={{position: "absolute", right: "0", width: "100%", maxWidth: "75vh"}}>
                        <button id='addNewBranchBtn' style={{position: "absolute", right: "100px", width: "160px", padding: "5px", borderRadius: "10px", fontSize: "14px"}}>Create new role</button>
                      </div>   
              </div>

              <section className='mt-5' style={{fontSize: "14px"}}>
              <nav aria-label="breadcrumb" className='mt-3'>
              <form className="d-flex pt-4" role="search" style={{display: "inline", width: "900px"}}>
                    <div className='col-md-10'>
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value="Search"/>
                    </div>
                </form>
                <ol className="breadcrumb mt-4">
                  <li class="breadcrumb-item active" aria-current="page" style={{textDecoration: "none", color: "#004ea2", fontWeight: "400", fontSize: "14px"}}> &nbsp; &nbsp; Showing 10 results</li>
                </ol>
              </nav>
              <table className="table" style={{width: "160vh", color: "#004ea2"}}>
                    <tr>
                      <td className='p-3'>
                        <div className="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td> 
                      <td>Reference no</td>
                      <td>Role</td>
                      <td>No. of Users</td>
                      <td>Status</td>
                      <td>Created</td>
                      <td>Modified</td>
                      <td></td>
                    </tr>
                  <tbody className="table-group-divider">
                    <tr>
                      <td>
                      <div className="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td >0001</td>
                      <td>Global Admin</td>
                      <td>4</td>
                      <td>Active</td>
                      <td>Jan 01,2022 2:40 PM</td>
                      <td>Jan 01,2022 2:40 PM</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0007</td>
                      <td>Password Admin</td>
                      <td>4</td>
                      <td>Active</td>
                      <td>Dec. 01,2022 2:00 PM</td>
                      <td>Dec. 01,2022 2:00 PM</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0002</td>
                      <td>Loan users</td>
                      <td>10</td>
                      <td>Active</td>
                      <td>Feb. 24,2023 10:30 AM</td>
                      <td>Feb. 24,2023 10:30 AM</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0003</td>
                      <td>Guest</td>
                      <td>10</td>
                      <td>Active</td>
                      <td>Jan.14,2022 9:25 AM</td>
                      <td>Jan.14,2022 9:25 AM</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{border: "2px solid #000"}}/>
                        </div>
                      </td>
                      <td>0004</td>
                      <td>Billing users</td>
                      <td>2</td>
                      <td>Active</td>
                      <td>Nov.25,2022 3:35 PM</td>
                      <td>Nov.25,2022 3:35 PM</td>
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

export default Access