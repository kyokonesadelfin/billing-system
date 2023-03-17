import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarMenu() {
  return (
    <div>
      <Navbar
        variant="dark"
        style={{
          backgroundColor: "#434344",
          fontFamily: "SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica ,Arial,sans-serif",
          fontSize: "12px",
          transition: "all 0.3s ease-in-out",
          display: "flex",
          maxWidth: "100%",
          fontWeight: "400",
          color: "#dadada"
        }}
        fixed="top"
        expand="lg"
      >
      <Navbar.Brand  className='text-md-left' href="#home" id="navbar-brand-icon">
          <img src='/assets/gms_logo_w_r.svg' alt="logo" width="140" height="22"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-end">
          <Nav className="mr-auto justify-content-md-start">
            <Nav.Link className="nav-link-hover"  href="/#features">Vision</Nav.Link>
            <Nav.Link className="nav-link-hover"  href="/#features">Values</Nav.Link>
            <Nav.Link className="nav-link-hover" href="/#home">Contact</Nav.Link>
          </Nav>

          <Form className="my-2 my-lg-0 mr-auto" style={{ display: "flex", marginRight: "240px" }} id='navbar-search-form'>
            <NavLink to='/login'>
              <Button variant='outline-light' style={{ width: "80px", fontSize: "12px", marginRight: "20px" }}
              ><i className="fa fa-sign-in me-2"></i>Log in</Button>  
            </NavLink>
            <NavLink to='/login'>
              <Button variant='outline-light' style={{ width: "190px", fontSize: "12px" }}
              ><i className="fa fa-calendar me-2"></i>Schedule a Zoom Meeting</Button>
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarMenu;
