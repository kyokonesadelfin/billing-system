import React from 'react';
import Footer from '../landing_page/Footer';
import NavbarMenu from '../landing_page/NavbarMenu';


const NotFound = () => {
  return (
    <div>
      <NavbarMenu />

      <div style={{ margin: "100px 60px", height: "200px" }}>
        <h1>404 Error: Page Not Found</h1>
        <p>Sorry, the requested page could not be found.</p>
      </div>
      <section>
        <Footer />
      </section>



    </div>
  );
};

export default NotFound;