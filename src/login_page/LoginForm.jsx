import React, { useState } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import axios from 'axios';
import LoginButton from './LoginButton';
import NavbarMenu from '../landing_page/NavbarMenu';
import TextField from '@mui/material/TextField';



function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showInput, setShowInput] = useState(false);

  // const handleBlur = () => setShowInput(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // check if username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter a username and password.');
      return;
    }

    // make a POST request to your API endpoint to validate the credentials
    axios.post('https://api.cloud-gms.com/v1/oauth2/token', {
      username,
      password
    })
      .then((response) => {
        // handle the response from the server
        if (response.status === 200) {
          alert('Login successful!');
          // redirect the user to the home page
          window.location.href = '/billing';
        } else {
          alert('Invalid username or password.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div>
      <NavbarMenu />
      <div className="login-form">
        <div className="login-form-container">
          <div className="form-login">
            <img id='logo_login' src='/assets/logo_gms_h_ph_f.png' alt='logo' width='100' height='80'
            />
            <TextField id="outlined-basic" label="Username" variant="outlined"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a username"
              style={{ width: "75%", textAlign: "left", marginBottom: "20px", marginTop: "20px" }}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ width: "75%", textAlign: "left", marginBottom: "20px" }}
              value={password}
              placeholder="Enter a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="login-button" onClick={handleLogin}>
              <i className="fa fa-sign-in me-2"></i>
              Sign in
            </button>
            <div className="separator"></div>

            <div className='google-signin-text'>
              Or
            </div>
            <div className="google-signin-container">
              {/* Login/Logout Button */}
              <LoginButton />
            </div>
          </div>
        </div>
      </div>

      <section>
        <MDBFooter style={{ backgroundColor: 'rgb(245,245,247)' }} className='text-center text-lg-start text-dark'>
          {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="/" className="text-reset">
                <MDBIcon icon="facebook-f fa-lg" className="me-4" />
              </a>
              <a href="/" className="text-reset">
                <MDBIcon icon="twitter fa-lg" className="me-4" />
              </a>
              <a href="/" className="text-reset">
                <MDBIcon icon="google fa-lg" className="me-4" />
              </a>
              <a href="/" className="text-reset">
                <MDBIcon icon="instagram fa-lg" className="me-4" />
              </a>
              <a href="/" className="text-reset">
                <MDBIcon icon="linkedin fa-lg" className="me-4" />
              </a>
              <a href="/" className="text-reset">
                <MDBIcon icon="github fa-lg" className="me-4" />
              </a>
            </div>
          </section> */}

          <div className='text-center p-4' >
            <a href='/#' className='footer-menu m-3'>
              About Us
            </a>
            |
            <a href='/#' className='footer-menu m-3'>
              Contact Us
            </a>
            |
            <a href='/#' className='footer-menu m-3'>
              Privacy Policy
            </a>
            |
            <a href='/#' className='footer-menu m-3'>
              Terms and Conditions
            </a>
            <span style={{ fontSize: "12px" }}>
              Copyright © 2023 Global Mobility Service, Inc.
              All Rights Reserved.
            </span>
          </div>
        </MDBFooter>
      </section>
    </div>
  );
}

export default LoginForm;


