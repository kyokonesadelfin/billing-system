import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
// import SearchForm from './SearchForm';
import Imagescarousel from './Imagescarousel';
import Testimonials from './Testimonials';
// import ForMoreInfoButton from './ForMoreInfoButton';
import axios from 'axios';
import Footer from './Footer';
import NavbarMenu from './NavbarMenu';


const apiKey = 'aP75xFG5QqFhwqJktwNRplGfXHT4okkK8IiYmNLy';
const unitsReleasedQueryId = '187';
const dailyActiveUnitsQueryId = '188';
const totalMileageQueryId = '5';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const LandingPage = () => {

  const [unitsReleased, setUnitsReleased] = useState(null);
  const [dailyActiveUnits, setDailyActiveUnits] = useState(null);
  const [totalMileage, setTotalMileage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [unitsReleasedResponse, dailyActiveUnitsResponse, totalMileageResponse] = await Promise.all([
          axios.get(proxyUrl + `https://redash.data.cloud-gms.com/api/queries/${unitsReleasedQueryId}/results`, {
            headers: {
              Authorization: `Key ${apiKey}`,
            },
          }),
          axios.get(proxyUrl + `https://redash.data.cloud-gms.com/api/queries/${dailyActiveUnitsQueryId}/results`, {
            headers: {
              Authorization: `Key ${apiKey}`,
            },
          }),
          axios.get(proxyUrl + `https://redash.data.cloud-gms.com/api/queries/${totalMileageQueryId}/results`, {
            headers: {
              Authorization: `Key ${apiKey}`,
            },
          }),
        ]);

        setUnitsReleased(unitsReleasedResponse.data[0].units_released);
        setDailyActiveUnits(dailyActiveUnitsResponse.data[0].daily_active_units);
        setTotalMileage(totalMileageResponse.data[0].total_mileage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // const [scrolled, setScrolled] = useState(false);
  // const [formStatus, setFormStatus] = useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }

  //   axios.post('/api/send-form', conFom)
  //     .then(response => {
  //       if (response.status === 200) {
  //         setFormStatus('Form submitted successfully')
  //       } else {
  //         throw new Error('Failed to submit form')
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error)
  //       setFormStatus('Error submitting form')
  //     })
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  return (
    <div className="LandingPage">
      {/* <Navbar
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
        <Navbar.Brand id='navbar-main-logo' href="#home"><img src='/assets/landinglogo.png' alt='logo' width="140" height="40" /></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: scrolled ? "#fff" : "rgba(22, 22, 23, .4)"
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-end" style={{ backgroundColor: scrolled ? "#fff" : "transparent" }}>
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
            <NavLink to='/login'>
            <Button variant='outline-light' style={{
              fontFamily: "SF Pro Text,SF Pro Icons, AOS Icons", textTransform: "uppercase", fontSize: "14px", marginLeft: "20px", color: scrolled ? "#010909" : "#F8FCFC",
              backgroundColor: scrolled ? "#FAFBFB" : "transparent"
            }}
            >Login</Button>
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}
      
      <NavbarMenu />

      <section>
        <div className='landing-page-cover'>
          <Imagescarousel />
          <div className='overlay-text-cover' style={{ opacity: 1, visibility: "inherit" }}>
            <p id='sub-header'>Call-to-Action </p>
            {/* <h2 id='header1' className='mb-4 fw-bold'>511,115,018km</h2>
            <h4 id='header2' className='mb-2 fw-bold'>Total Mileage of Service Vehicle</h4>
            <h4 id='header3' className='mb-5 fw-bold'>Around the Earth 12,754 Laps</h4> */}
            {/* <ForMoreInfoButton /> */}
          </div>
        </div>
      </section>


      <section>
        <Card fluid id='live-data'>
          <Container>
            <Row className="row-live-data align-items-center">
              <Col md="4" className="text-center mb-3 mb-md-0">
                <div>
                  {unitsReleased !== null ? <p className="loading">{unitsReleased}</p> : <p className="loading"><span><i className='fa fa-spinner text-white'></i></span>Loading</p>}
                  <p id='loading-description'>Units released through GMS</p>
                </div>
              </Col>
              <Col md="4" className="text-center mb-3 mb-md-0">
                <div>
                  {dailyActiveUnits !== null ? <p className="loading">{dailyActiveUnits}</p> : <p className="loading"><span><i className='fa fa-spinner text-white'></i></span>Loading</p>}
                  <p id='loading-description'>Daily active units</p>
                </div>
              </Col>
              <Col md="4" className="text-center">
                <div>
                  {totalMileage !== null ? <p>{totalMileage}</p> : <p className="loading"><span><i className='fa fa-spinner text-white'></i></span>Loading</p>}
                  <p id='loading-description'>Total mileage of vehicles (km)</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>





      <section>
        <div className="our-services" style={{ backgroundColor: "#F7FAFA", height: "100vh" }}>

        </div>
      </section>


      <section>
        <Card fluid id='testimonials-card'>
          <Container id='testimonials-container'>
            <Row className="justify-content-md-center">
              <Col lg="6" id='testimonials-col'>
                <Card.Title id='testimonials-title'>Testimonials</Card.Title>
                  <Card.Body>
                    <Testimonials />
                  </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>


      {/* <section>
        <Card fluid style={{ backgroundColor: "#2980B9", backgroundSize: "cover", position: "relative", width: "100%", opacity: "1", height: "550px" }}>
          <Container>
            <Row className="justify-content-md-center">
              <Col lg="7" style={{ marginBottom: "30px", marginTop: "50px" }}>
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
                        <button className="btn btn-danger w-100" type="submit">
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
      </section> */}

      <section>
        <Footer />
      </section>


    </div>
  );
}

export default LandingPage;
