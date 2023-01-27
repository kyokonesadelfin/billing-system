import React from "react";
import { NavLink } from "react-router-dom";
import '../sass/contact.scss';


function Contact() {
  return (
    <div id="contact">
      <div className="container w-100">
        <nav>
          <div className="row d-flex flex-row">
            <div className="col-md-9 d-flex flex-column w-70">
              <img
                src="/assets/gms_logo_w_r.svg"
                alt="nav_logo"
                style={{width: '170px', height: '100px', marginTop: "17px", marginLeft: "20px"}}
              />
            </div>
            <div className="col-md-3 d-flex flex-column w-30 mt-5">
              <NavLink to="/login" className="text-white fw-bold">
                Login
              </NavLink>
            </div>
          </div>
        </nav>

        <div id="contact2" className="row">
          <div className="col-lg-6 p-5">
            <span>
              <h4>Contact by phone</h4>
              <br />
              <p>
                <span>Head Office- Japan</span>
                <br />
                &nbsp; &nbsp; &nbsp;03 - 6264 - 3113 (Local time 9AM to 6PM
                Mon-Fri)
              </p>
              <p>
                <span>Philippines Office</span>
                <br />
                &nbsp; &nbsp; &nbsp;+63-2-856-2020 (Local time 8AM to 5PM
                Mon-Fri)
              </p>
            </span>
          </div>
          <div className="col-lg-6 p-5">
            <span>
              <h4>Contact by email</h4>
              <br />
              <p>
                <span>Customer Support</span>
                <br />
                &nbsp; &nbsp; &nbsp;customersupport@global-mobility-service.com
              </p>
              <p>
                <span>Technical Support</span>
                <br />
                &nbsp; &nbsp; &nbsp;technicalsupport@global-mobility-service.com
              </p>
            </span>
          </div>
         </div>
       </div>
      </div>
  );
}

export default Contact;