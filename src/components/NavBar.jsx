import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';


function NavBar() {
  const [width, setWidth] = useState(50);
  const [marginLeft, setMarginLeft] = useState(50);
  const [dropdownActive1, setDropdownActive1] = useState(false);
  const [dropdownActive2, setDropdownActive2] = useState(false);
  const [dropdownActive3, setDropdownActive3] = useState(false);

  const toggleNav = () => {
    if (width === 250 && marginLeft === 250) {
      setWidth(50);
      setMarginLeft(50);
    } else {
      setWidth(250);
      setMarginLeft(250);
    }
  };



  const toggleDropdown1 = () => {
    setDropdownActive1(!dropdownActive1);
  };

  const toggleDropdown2 = () => {
    setDropdownActive2(!dropdownActive2);
  };

  const toggleDropdown3 = () => {
    setDropdownActive3(!dropdownActive3);
  };


  return (
    <div>
      <div className="icon-bar" id="sidenav" style={{ width: `${width}px` }}>

        {width === 50 ? (
          <>
            <div style={{ marginTop: "42px" }}>
              <a href="/#">
                <i className="fa fa-home"></i>
              </a>
              <button
                className={dropdownActive1 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown1}
              >
                <i className="fa fa-user-times"></i>
              </button>
              <div className="dropdown-container" style={{ display: dropdownActive1 ? 'block' : 'none' }}>
                <a href="/#" id='sideicon-dropdown'>Non Graduates</a>
              </div>
              <button
                className={dropdownActive2 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown2}
              >
                <i className="fa fa-list-alt"></i>
              </button>
              <div className="dropdown-container" style={{ display: dropdownActive2 ? 'block' : 'none' }}>
                <a href="/billing" id='sideicon-dropdown'>Vehicles</a>
              </div>

              <button
                className={dropdownActive3 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown3}
              >
                <i className="fa fa-map-o"></i>
              </button>
              <div className="dropdown-container" style={{ display: dropdownActive3 ? 'block' : 'none' }}>
                <a href="/billing" id='sideicon-dropdown'>Vehicle</a>
                <a href="/#" id='sideicon-dropdown'>Organization</a>
                <a href="/#" id='sideicon-dropdown'>TODA</a>
                <a href="/#" id='sideicon-dropdown'>Sales Person</a>
                <a href="/#" id='sideicon-dropdown'>Guarantor</a>
                <a href="/#" id='sideicon-dropdown'>Employees</a>
              </div>

              <a href="/#">
                <i className="fa fa-user-plus"></i>
              </a>
              <a href="/#">
                <i className="fa fa-newspaper-o"></i>
              </a>
              <a href="/#">
                <i className="fa fa-user-secret"></i>
              </a>
              <a href="/#">
                <i className="fa fa-sign-out">
                </i>
              </a>
            </div>
          </>
        ) : null}
        {width !== 50 ? (
          <>
            <div style={{ marginTop: "42px" }}>
              <a href="/#" id='expanded-side-menu'>
                <i className="fa fa-home">
                  <span id='expanded-menu-list' >Dashboard</span>
                </i>
              </a>
              <button
                className={dropdownActive1 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown1}
                id='expanded-side-menu'
              >
                <i className="fa fa-user-times"><span id='expanded-menu-list'>Admin Portal</span></i><i className="fa fa-caret-down mt-2"></i>
              </button>
              <div className="dropdown-container" style={{ display: dropdownActive1 ? 'block' : 'none' }}>
                <a href="/#" id='sidenav-dropdown'>Manage User</a>
                <a href="/#" id='sidenav-dropdown'>Branch</a>
                <a href="/#" id='sidenav-dropdown'>Department</a>
                <a href="/#" id='sidenav-dropdown'>Position</a>
                <a href="/#" id='sidenav-dropdown'>Access</a>
                <a href="/#" id='sidenav-dropdown'>Activity Logs</a>
              </div>

              <button
                className={dropdownActive2 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown2}
                id='expanded-side-menu'
              >
                <i className="fa fa-list-alt"><span id='expanded-menu-list'>Operation</span></i><i className="fa fa-caret-down mt-2"></i>
              </button>
              <div className="dropdown-container" style={{ display: dropdownActive2 ? 'block' : 'none' }}>
                <a href="/#" id='sidenav-dropdown'>Product Vehicle</a>
                <a href="/#" id='sidenav-dropdown'>Organization</a>
                <a href="/#" id='sidenav-dropdown'>TODA</a>
                <a href="/#" id='sidenav-dropdown'>Finance Company</a>
                <a href="/#" id='sidenav-dropdown'>Vehicle</a>
                <a href="/#" id='sidenav-dropdown'>MCCS</a>
                <a href="/#" id='sidenav-dropdown'>Warehouse address</a>
              </div>

              <button
                className={dropdownActive3 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown3}
                id='expanded-side-menu'
              >
                <i className="fa fa-map-o"><span id='expanded-menu-list'>Catalog</span></i><i className="fa fa-caret-down mt-2"></i>
              </button>
              <div className="dropdown-container" style={{ display: dropdownActive3 ? 'block' : 'none' }}>
                <a href="/billing" id='sidenav-dropdown'>Vehicle</a>
                <a href="/#" id='sidenav-dropdown'>Organization</a>
                <a href="/#" id='sidenav-dropdown'>TODA</a>
                <a href="/#" id='sidenav-dropdown'>Sales Person</a>
                <a href="/#" id='sidenav-dropdown'>Guarantor</a>
                <a href="/#" id='sidenav-dropdown'>Employees</a>
              </div>

              <a href="/#" id='expanded-side-menu'>
                <i className="fa fa-user-plus me-2">
                  <span id='expanded-menu-list'>Loan Management</span>
                </i>
              </a>
              <a href="/#" id='expanded-side-menu'>
                <i className="fa fa-newspaper-o me-2">
                  <span id='expanded-menu-list'>Billing</span>
                </i>
              </a>
              <a href="/#" id='expanded-side-menu'>
                <i className="fa fa-user-secret me-2">
                  <span id='expanded-menu-list'>Admin Management</span>
                </i>
              </a>
              <div>
                <a href="/#" id='expanded-side-menu'>
                  <i className="fa fa-sign-out me-2">
                    <span id='expanded-menu-list'>Log out</span>
                  </i>
                </a>
              </div>
            </div>


          </>
        ) : null}
      </div>

      <Navbar className="topnav" style={{ marginLeft: `${marginLeft}px` }} fixed="top">
        <span className='hamburger-navbar' onClick={toggleNav}>
          {width === 50 ? '\u2630' : '\u2630'}
        </span>
        <div className='logo-container'>
          <img src='/assets/gms_logo_w_r.svg' alt='gms-logo' width='140' height='25' />
        </div>
        <div className='spacer'></div>
        <div className='profile-container'>
          <div className='profile-pic-container'>
            <img src='/assets/jane_smith.jpg' alt='profile-pic' width='32' height='32' />
          </div>
          <div className='profile-name-container'>
            Jane Smith
          </div>
        </div>
      </Navbar>

      <div id="main" style={{ marginLeft: `${marginLeft}px` }}>
        <div style={{ marginTop: "70px" }}>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
