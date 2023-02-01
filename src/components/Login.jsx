import React from 'react';
import { NavLink } from "react-router-dom";
import "../sass/login.scss";

function Login() {
  return (
    <div>
       <div id="log">
         <div className="container-fluid">
            <div className="login">
              <form id='login_form' className='p-3'>
                 <div className="logo">
                    <img  
                    src="/assets/logo_gms_h_ph_f.png"
                    alt="logo"
                    id="logo"
                    style={{ width: "120px", height: "80px" }}
                    />
                 </div>
                 <div className="row" id="sign">
                    <h5 id='sign_in' className="pt-2">Sign in</h5>
                      <p id='second_paragraph'>Sign in using your GMS account</p>
                 </div>

                <fieldset>
                  <div className="input mb-3 mt-2" style={{ display: "flex", justifyContent: "center"}}>
                    <input type="text" placeholder="Username" className='text-dark fw-bold'/>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", border: "none" }}>
                     <input type="password" placeholder="Password" className='text-dark fw-bold'/>
                  </div>

                  <button className="btn mt-5" style={{ color: "white", align: "center" }}>
                      Proceed
                  </button>
                  <div className="row">
                     <p>
                     Don't have an account? <a href="/#">Register</a>
                     <br />
                     <a href="/#">Forgot Password</a>
                     </p>
                  </div>
                </fieldset>
              </form>
            </div>
            <NavLink id="nvlink" to="/contact" className="text-dark">Contact Us</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Login