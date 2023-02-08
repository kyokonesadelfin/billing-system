import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/access.scss';

function Access() {

  

  return (
    <div>
        <div className="container-fluid">
        <header>
           <nav class="navbar fixed-top" style={{height: "100%", maxHeight: "11vh", backgroundColor: "transparent"}}>
             <div className="container-fluid">
               <div className="col-md-2">
                         {/* <img src="/assets/gms_logo_w_r.svg" alt="logo" width="200" height="70" style={{padding: "10px", marginLeft: "10px"}}/> */}
               </div>
               <div className="col-md-8 mt-3">
                <ul style={{listStyle: "none", marginLeft: "20px"}}>  
                      <li>
                          <NavLink to='/admin' className='me-5 pe-4' style={{textDecoration: "none", color: "#004ea2", fontWeight: "700", fontSize: "17px"}}><span className='second-word'>A</span>dmin</NavLink>
                          <NavLink to='/operation' className='p-3' style={{textDecoration: "none", color: "#000", fontWeight: "500", fontSize: "17px"}}>Operation</NavLink>
                      </li>
                  </ul>
               </div>
               <div className="col-md-2 ">
               <img src="https://github.com/mdo.png" alt="logo5" width="26" height="26" className="rounded-circle me-2"/>   
                     <span className='profile-name text-dark'>Dhanny Sumilang</span><br/>
               </div>
             </div>
          </nav>
          
          <nav class="navbar navbar-expand-lg" style={{ position: "absolute", left: "0", top: "0", height: "100%", backgroundColor: "#0148a0", width: "100%", maxWidth: "250px" }}>
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
                     <NavLink className="nav-link text-white" to="/loan-management" style={{textDecoration: "none", color: "white"}}>
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
                    <NavLink className="text-white" to="/admin" style={{textDecoration: "none"}}>
                      <img src='/assets/time-management.png' alt="house" width="20" height="20" className='me-3 mb-2' />
                      <span className='first-word'>Admin</span> Portal
                    </NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink className="nav-link text-white" to="/serviceticket" style={{textDecoration: "none", color: "white"}}>
                         <img src='/assets/early.png' alt="house" width="20" height="20" className='me-3 mb-2'/>
                         Service Ticket
                      </NavLink>
                  </li>
                </ul>
              </div>
           </div>
         </nav>

         <div className="tab-container" style={{marginTop: "100px", marginLeft: "220px"}}>
          <table style={{width: "100%", maxWidth: "200vh", textAlign: "center", lineHeight: "5px"}}>
              <tr style={{height: "40px"}}>
              <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/admin">Manage User</NavLink>
                </td>
                <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/branch">Branch</NavLink>
                </td>
                <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/department" >Department</NavLink>
                </td> 
                <td style={{borderRight: "3px solid lightgray"}}> 
                    <NavLink id="tab" to="/position">Position</NavLink>
                </td>
                <td style={{borderRight: "3px solid lightgray"}}>
                    <NavLink id="tab" to="/access" style={{color: "#004ea2"}}><span className='second-word'>A</span>ccess</NavLink> 
                </td>
                <td>
                    <NavLink id="tab" to="/#">Activity Logs</NavLink>
                </td> 
              </tr>
            </table>
          </div>

          <div className='row'>
                <table style={{width: "100%", maxWidth: "60vh", textAlign: "left", position: "absolute", left: "300px", marginTop: "30px"}}>
                        <tr style={{height: "40px"}}>
                        <td style={{borderRight: "3px solid lightgray"}}>
                              <NavLink id="tab" to="/access" style={{paddingLeft: "30px", paddingRight: "70px", textDecoration: "none", color: "#004ea2"}}><span className='second-word'>R</span>ole</NavLink>
                          </td>
                          <td>
                              <NavLink id="tab" to="/access/access2" style={{ paddingLeft: "60px"}}>Access Level</NavLink>
                          </td>
                        </tr>
 
                      </table>
                      <button id='createAccountBtn' style={{position: "absolute", right: "120px", width: "150px", marginTop: "30px"}}>Create new role</button>
                      <div className='row' style={{marginLeft: "295px", marginTop: "15vh"}}>
                          <form className="d-flex" role="search">
                          <input class="me-3" type="text" placeholder="Search" value="Search" style={{color: "#004ea2", border: "1px solid #004ea2", width: "49vh", padding: "5px", paddingLeft: "25px"}}/>
                          </form>
                          <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mt-4">   
                              <li class="breadcrumb-item active" aria-current="page" style={{textDecoration: "none", color: "#004ea2", fontWeight: "400", fontSize: "14px"}}>Showing 10 results</li>
                            </ol>
                          </nav>
                      </div>

          </div>

        </header>

            <main style={{overflowY: "scroll", paddingBottom: "20vh", width: "100%", maxWidth: "160vh", marginLeft: "20px"}}> 
              <section style={{marginBottom: "30vh"}}>
              <table className="table" style={{width: "150vh"}} id="table-font">
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
                      <td><a href='/#'><i className="fa fa-ellipsis-h fa-lg text-secondary"></i></a></td>
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
                      <td><a href='/#'><i className="fa fa-ellipsis-h fa-lg text-secondary"></i></a></td>
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
                      <td><a href='/#'><i className="fa fa-ellipsis-h fa-lg text-secondary"></i></a></td>
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
                      <td><a href='/#'><i className="fa fa-ellipsis-h fa-lg text-secondary"></i></a></td>
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
                      <td><a href='/#'><i className="fa fa-ellipsis-h fa-lg text-secondary"></i></a></td>
                    </tr>
                  </tbody>
                </table>
                <div className='d-flex justify-content-center align-items-center pb-5 pt-5'> 
                  <nav >
                    <ul className="pagination" >
                      <li className="page-item mt-2"><a href="/#" id='page-activated'>1</a></li>
                      <li className="page-item mt-2"><a href="/#" id='page-active'>2</a></li>
                      <li className="page-item mt-2"><a id='page-active' href="/#">3</a></li>
                      <li className="page-item mt-2"><a id='page-active' href="/#">4</a></li>
                      <li className="page-item mt-1"><a id='page-active' href="/#" ><i className='fa fa-chevron-circle-right fa-2x' style={{marginLeft: "15px"}}></i></a></li>
                    </ul>
                  </nav>
                </div>
              </section>
              
            </main>

          </div>
    </div>
  )
}

export default Access