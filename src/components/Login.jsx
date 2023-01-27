import React from 'react';
import { NavLink } from "react-router-dom";
import "../sass/login.scss";

function Login() {
  return (
    <div>
       <div id="log">
         <div className="container-fluid">
            <div className="login">
              <form>
                 <div className="logo">
                    <img  
                    src="/assets/logo_gms_h_ph_f.png"
                    alt="logo"
                    id="logo"
                    style={{ width: "80px", height: "80px" }}
                    />
                 </div>
                 <div className="row" id="sign">
                    <h5 className="fw-bold pt-2">Sign in</h5>
                      <p>Sign in using your GMS account</p>
                 </div>

                <fieldset>
                  <div className="input mb-3 mt-2" style={{ display: "flex", justifyContent: "center"}}>
                    <input type="text" placeholder="Username" required/>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                     <input type="password" placeholder="Password" required />
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
            <NavLink id="nvlink" to="/contact" className="pt-2 mt-3 text-white fw-bold">Contact Us</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Login