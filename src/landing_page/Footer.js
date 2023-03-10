import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className="d-flex justify-content-center justify-content-lg-start p-4 border-bottom">
          <div className="d-none d-lg-block">
            <span className='me-4' style={{ fontSize: "13px" }}>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="text-reset">
              <MDBIcon icon="facebook-f fa-lg" className="me-4 text-primary" />
            </a>
            <a href="/" className="text-reset">
              <MDBIcon icon="twitter fa-lg" className="me-4 text-primary" />
            </a>
            <a href="/" className="text-reset">
              <MDBIcon icon="google-plus fa-lg" className="me-4 text-danger" />
            </a>
            <a href="/" className="text-reset">
              <MDBIcon icon="instagram fa-lg" className="me-4 text-success" />
            </a>
            <a href="/" className="text-reset">
              <MDBIcon icon="linkedin fa-lg" className="me-4 text-primary" />
            </a>
          </div>
        </section>

        <section>
          <MDBContainer className='text-center text-md-start mt-5' style={{ fontSize: "12px" }}>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  <img src='/assets/logo_gms_h_ph_f.png' alt='footer-logo' className='w-50 h-50' />
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' >
                <h6 className='text-uppercase fw-bold mb-4' id='footer-head-menu'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Careers
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Terms & Condition
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Privacy Policy
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' id='footer-head-menu'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' id='footer-head-menu'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <a href='/#' className='footer-menu m-4'>
            About Us
          </a>
          |
          <a href='/#' className='footer-menu m-4'>
            Contact Us
          </a>
          |
          <a href='/#' className='footer-menu m-4'>
            Privacy Policy
          </a>
          |
          <a href='/#' className='footer-menu m-4'>
            Terms and Conditions
          </a>
          <span style={{ fontSize: "12.5px" }}>
            Copyright © 2023 Global Mobility Service, Inc.
            All Rights Reserved.
          </span>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer
