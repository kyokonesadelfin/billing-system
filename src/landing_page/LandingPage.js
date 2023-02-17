import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import ForyourButton from './ForyourButton';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import SearchForm from './SearchForm';
import CompanyShareholders from './CompanyShareholders';
import Imagescarousel from './Imagescarousel';
import Testimonials from './Testimonials';
import ForMoreInfoButton from './ForMoreInfoButton';
import '../App.css';


const LandingPage = () => {

  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    alert(conFom)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className="LandingPage">
      <Navbar
        variant="light"
        fixed="top"
        expand="md"
        style={{
          maxWidth: "100%",
          display: "flex",
          opacity: "1",
          backgroundColor: scrolled ? "#fff" : "rgba(22, 22, 23, .4)",
          paddingTop: scrolled ? "10px" : "20px",
          height: scrolled ? "70px" : "90px",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <Navbar.Brand id='navbar-main-logo' href="#home"><img src='/assets/landinglogo.png' alt='logo' width="130" height="40" /></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: scrolled ? "#fff" : "rgba(22, 22, 23, .4)"
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-end"  style={{backgroundColor: scrolled ? "#fff" : "transparent"}}>
          <Nav className="ml-auto" style={{ fontFamily: "SF Pro Text,SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica, Arial, sans-serif", textTransform: "uppercase", fontSize: "14px", marginLeft: "20px" }}>
            <Nav.Link className="nav-link-hover" style={{ color: scrolled ? "#010909" : "#F8FCFC", marginRight: "20px" }} href="/#features">Vision</Nav.Link>
            <Nav.Link className="nav-link-hover" style={{ color: scrolled ? "#010909" : "#F8FCFC", marginRight: "20px" }} href="/#pricing">News</Nav.Link>
            <Nav.Link className="nav-link-hover" style={{ color: scrolled ? "#010909" : "#F8FCFC", marginRight: "20px" }} href="/#home">Service</Nav.Link>
            <Nav.Link className="nav-link-hover" style={{ color: scrolled ? "#010909" : "#F8FCFC", marginRight: "20px" }} href="/#home">GMS Times</Nav.Link>
            <Nav.Link className="nav-link-hover" style={{ color: scrolled ? "#010909" : "#F8FCFC", marginRight: "20px" }} href="/#home">Recruit</Nav.Link>
            <Nav.Link className="nav-link-hover" style={{ color: scrolled ? "#010909" : "#F8FCFC", marginRight: "20px" }} href="/#home">Contact</Nav.Link>
          </Nav>
          <Form className="my-2 my-md-0" style={{ display: "flex", marginLeft: "20px" }} id='navbar-search-form'>
            <SearchForm />
            <Button variant='outline-light' style={{
              fontFamily: "SF Pro Text,SF Pro Icons, AOS Icons", textTransform: "uppercase", fontSize: "14px", marginLeft: "20px", color: scrolled ? "#010909" : "#F8FCFC",
              backgroundColor: scrolled ? "#FAFBFB" : "transparent"
            }}
            >Login</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>



      <section style={{ height: "100vh" }}>
        <div className='landing-page-cover' >
          <Imagescarousel />
          <div className='overlay-text-cover' style={{ opacity: 1, visibility: "inherit" }}>
            <p id='sub-header'>GMS Service Volume </p>
            <h2 id='header1' className='mb-4 fw-bold'>511,115,018km</h2>
            <h4 id='header2' className='mb-2 fw-bold'>Total Mileage of Service Vehicle</h4>
            <h4 id='header3' className='mb-5 fw-bold'>Around the Earth 12,754 Laps</h4>
            <ForMoreInfoButton />
          </div>
        </div>
      </section>

      <section>
        <Card fluid style={{ backgroundImage: "url('./assets/paper_style_white_monochrome_bg.jpg')", backgroundSize: "cover", height: "480px", position: "relative" }}>
          <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Row className="justify-content-md-center">
              <Col lg="8">
                <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", border: "none", marginTop: "60px" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <Card.Title style={{ textAlign: "center", fontWeight: "bolder", fontFamily: "open sans, sans-serif", fontSize: "30px" }}>BUSINESS</Card.Title>
                    <Card.Text style={{ textAlign: "center", opacity: "1" }}>
                      <p style={{ fontWeight: "bold", fontFamily: "open sans, sans-serif", fontSize: "16px", marginTop: "30px" }}>
                        Build a Fairer World that Values Workers Equally.
                      </p>
                      <p style={{ fontFamily: "sans-serif", fontSize: "16px", marginTop: "30px" }}>There are currently 1.7 billion people worldwide who cannot gain access to financial services, including loans and leases. Despite their desire to acquire mobility-related jobs, they are left helpless in achieving their goals.</p>
                      <span style={{ fontFamily: "sans-serif", fontSize: "16px", marginTop: "30px" }}>At GMS, we create jobs by providing loan opportunities through our specially developed Mobility Service Platform (MSPF), our cutting-edge IoT device (MCCS), and market development skills to improve living standards worldwide.</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                  <ForyourButton />
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>


      <section>
        <Card fluid style={{ backgroundColor: "rgba(0, 0, 0, 1)", backgroundSize: "cover", position: "relative" }}>
          <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Row className="justify-content-md-center">
              <Col lg="12">
                <Card>
                  <Card.Body style={{ position: "relative" }}>
                    <Card.Text style={{ textAlign: "center", opacity: "1" }}>
                      <img src='/assets/index_businessmodel.png' alt='business_model' style={{ backgroundColor: "rgba(0, 0, 0, 1)" }} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>


      <section>
        <Card fluid style={{ backgroundImage: "url('./assets/paper_style_white_monochrome_bg.jpg')", backgroundSize: "cover", height: "700px", position: "relative" }}>
          <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Row className="justify-content-md-center">
              <Col lg="6" style={{ flex: "1", padding: "10px" }}>
                <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", border: "none", marginTop: "30px", width: "70vh" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <Card.Title style={{ textAlign: "center", fontWeight: "bolder", fontFamily: "open sans, sans-serif", fontSize: "30px" }}>SERVICE</Card.Title>
                    <Card.Text style={{ textAlign: "center", opacity: "1", marginTop: "30px" }}>
                      <p style={{ fontWeight: "bold", fontFamily: "open sans, sans-serif", fontSize: "16px", marginBottom: "50px" }}>
                        For those in need of cars for work
                      </p>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", marginBottom: "40px" }}>By connecting financial institutions with auto dealers and external stakeholders, we provide innovative services to those in mobility-related work who need access to finance but are unable to pass conventional credit screening.</p>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", marginTop: "40px" }}>※Our service is offered to those who require the use of cars for logistics work or commuting, but are unable to gain access to conventional auto loans.</p>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", marginTop: "40px" }}>※Our service is not available to those whose main use of cars is for leisure activities.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                  <ForMoreInfoButton />
                </div>
              </Col>
              <Col lg="6" style={{ flex: "1" }}>
                <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", border: "none", marginTop: "30px", width: "70vh" }}>
                  <Card.Body style={{ position: "relative" }}>

                    <Card.Text style={{ textAlign: "center", opacity: "1" }}>
                      <img src='/assets/pexels-ketut-subiyanto-4429509.jpg' alt='service_image' height="600px" width="100%" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>

      <section>
        <Card fluid style={{ backgroundColor: "rgba(0, 0, 0, 1)", backgroundSize: "cover", height: "450px", position: "relative" }}>
          <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Row className="justify-content-md-center">
              <Col lg="6" style={{ flex: "1", padding: "10px" }}>
                <Card style={{ backgroundColor: "transparent", border: "none", marginTop: "60px", width: "70vh" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <Card.Text style={{ textAlign: "left", opacity: "1", marginTop: "30px" }}>
                      <p style={{ fontFamily: "open sans, sans-serif", fontSize: "18px", marginBottom: "50px", color: "white" }}>
                        Our services contribute towards
                        achieving 7 of the 17 Sustainable
                        Development Goals (SDGs).
                      </p>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="6" style={{ flex: "1" }}>
                <Card style={{ backgroundColor: "transparent", border: "none", marginTop: "60px", width: "70vh" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <Card.Text style={{ textAlign: "center", opacity: "1" }}>
                      <img src='/assets/index_goals.png' alt='service_image' height="200px" width="100%" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <ForyourButton />
            </div>
          </Container>
        </Card>
      </section>

      <section>
        <div className="video-container-youtube">
          <iframe width="1400" height="700" src="https://www.youtube.com/embed/y0yj5FPqJdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>

      <section>
        <Card fluid style={{ backgroundImage: "url('./assets/pexels-quintin-gellar-313782.jpg')", backgroundSize: "cover", position: "relative", display: "flex", justifyContent: "center", alignContent: "center" }}>
          <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Row className="justify-content-md-center">
              <Col lg="12">
                <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", border: "none", marginTop: "5vh" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <Card.Title style={{ textAlign: "center", fontWeight: "bolder", fontFamily: "open sans, sans-serif", fontSize: "30px" }}>COMPANY</Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                      <p style={{ fontFamily: "open sans, sans-serif", fontSize: "18px", marginTop: "30px", opacity: "0.7" }}>
                        Over 16 companies listed on the Tokyo Stock Exchange think highly of our business and have invested in GMS.
                      </p>
                      <p style={{ fontFamily: "open sans, sans-serif", fontSize: "26px", marginTop: "30px", fontWeight: "bolder" }}>
                        Major Shareholders
                      </p>
                      <span style={{ marginTop: "30px" }}>
                        <CompanyShareholders />
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>
                  <ForyourButton />
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>

      <section>
        <Card fluid style={{ backgroundColor: "#739494", backgroundSize: "cover", height: "500px", position: "relative" }}>
          <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <Row className="justify-content-md-center">
              <Col lg="6" style={{ flex: "1", padding: "10px", opacity: "1" }}>
                <Card.Title style={{ textAlign: "center", fontWeight: "400", fontFamily: "Proxima Nova, Arial, sans-serif", fontSize: "30px", color: "#0C0D0D", marginTop: "30px" }}>Mmmm, Whatcha Sayyy?</Card.Title>
                <Card style={{ backgroundColor: "#EFFAFA", border: "none", marginTop: "30px", width: "80vh" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <Testimonials />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>


      <section>
        <Card fluid style={{ backgroundImage: "url('./assets/pexels-fauxels-3183132.jpg')", backgroundSize: "cover", position: "relative", width: "100%", opacity: "1", height: "700px" }}>
          <Container>
            <Row className="justify-content-md-center">
              <Col lg="7" style={{ marginBottom: "30px", marginTop: "120px" }}>
                <Card style={{ backgroundColor: "#F0F0F0", border: "none", opacity: "0.8", width: "100%" }}>
                  <Card.Body style={{ position: "relative" }}>
                    <div className="container mt-2" style={{ color: "#0A0B0B" }}>
                      <h2 className="mb-3">Contact Us </h2>
                      <form onSubmit={onSubmit}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="message">
                            Message
                          </label>
                          <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn btn-danger w-50" type="submit" style={{ float: "right" }}>
                          {formStatus}
                        </button>
                      </form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>


      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
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
        </section>


        <section>
          <MDBContainer className='text-center text-md-start mt-5'>
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

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
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
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
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
          © 2023 Copyright: 
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            &nbsp; Global Mobility Service 
          </a>
        </div>
      </MDBFooter>


    </div>
  );
}

export default LandingPage;
