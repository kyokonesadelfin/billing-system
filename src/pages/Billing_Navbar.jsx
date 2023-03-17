import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import Billing from '../components/Billing.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons';



function Dashboard() {
  const [width, setWidth] = useState(60);
  const [marginLeft, setMarginLeft] = useState(60);
  const [dropdownActive1, setDropdownActive1] = useState(false);
  const [dropdownActive2, setDropdownActive2] = useState(false);
  const [dropdownActive3, setDropdownActive3] = useState(false);
  const [dropdownActive4, setDropdownActive4] = useState(false);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleNav = () => {
    if (width === 250 && marginLeft === 250) {
      setWidth(60);
      setMarginLeft(60);
    } else {
      setWidth(250);
      setMarginLeft(250);
    }
  };



  const toggleDropdown1 = () => {
    setDropdownActive1(!dropdownActive1);
    setDropdownActive2(false);
    setDropdownActive3(false);
    setDropdownActive4(false);
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setDropdownActive2(!dropdownActive2);
    setDropdownActive1(false);
    setDropdownActive3(false);
    setDropdownActive4(false);
    setIsOpen(!isOpen);
  };

  const toggleDropdown3 = () => {
    setDropdownActive3(!dropdownActive3);
    setDropdownActive2(false);
    setDropdownActive1(false);
    setDropdownActive4(false);
    setIsOpen(!isOpen);
  };

  const toggleDropdown4 = () => {
    setDropdownActive4(!dropdownActive4);
    setDropdownActive2(false);
    setDropdownActive3(false);
    setDropdownActive1(false);
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);





  function handleDropdownClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }


  return (
    <div>
      <div className="icon-bar" id="sidenav" style={{ width: `${width}px`, overflowX: marginLeft === 60 ? 'visible' : 'hidden' }}>
        {width === 60 ? (
          <>
            <div id="sidenav-a">
              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-home-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content">
                  <p>Dashboard</p>
                </div>
              </a>
              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-administrator-male-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content-a">
                  <p>Admin Portal</p>
                  <p>Manage User</p>
                  <p>Branch</p>
                  <p>Department</p>
                  <p>Position</p>
                  <p>Access</p>
                  <p>Activity Logs</p>
                </div>
              </a>
              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-business-building-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content-b">
                  <p>Operation</p>
                  <p>Product Vehicle</p>
                  <p>Organization</p>
                  <p>TODA</p>
                  <p>Finance Company</p>
                  <p>Vehicle</p>
                  <p>MCCS</p>
                  <p>Warehouse Address</p>
                </div>
              </a>


              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-cash-in-hand-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content">
                  <p>Loan Management</p>
                </div>
              </a>

              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-bill-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content">
                  <p>Billing</p>
                </div>
              </a>
              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-two-tickets-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content">
                  <p>Service Ticket</p>
                </div>
              </a>
              <a href="/#" className="dropdown-hover">
                <img src="/assets/icons8-close-window-94.png" alt="house-logo" width='26' height='22' />
                <div class="dropdown-hover-content">
                  <p>Log Out</p>
                </div>
              </a>
            </div>
          </>
        ) : null}
        {width !== 60 ? (
          <>
            <div id="sidenav-b">
              <a href="/#" id='expanded-side-menu'>
                <img src="/assets/icons8-home-94.png" alt="house-logo" width='26' height='22' />
                <span id='expanded-menu-list'>Dashboard</span>
              </a>
              <button
                className={dropdownActive1 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown1}
                id='expanded-side-menu'
              >
                <img src="/assets/icons8-administrator-male-94.png" alt="house-logo" width='26' height='22' /><span id='expanded-menu-list'>Admin Portal</span> <FontAwesomeIcon icon={dropdownActive1 ? faCaretDown : faCaretLeft} className="fa-caret" />
              </button>
              <div className="dropdown-container show" style={{ display: dropdownActive1 ? 'block' : 'none' }}>
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
                <img src="/assets/icons8-business-building-94.png" alt="house-logo" width='26' height='22' /><span id='expanded-menu-list'>Operations</span><FontAwesomeIcon icon={dropdownActive2 ? faCaretDown : faCaretLeft} className="fa-caret" />
              </button>
              <div className="dropdown-container show" style={{ display: dropdownActive2 ? 'block' : 'none' }}>
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
                <img src="/assets/icons8-cash-in-hand-94.png" alt="house-logo" width='26' height='22' /> <span id='expanded-menu-list'>Loan Management</span><FontAwesomeIcon icon={dropdownActive3 ? faCaretDown : faCaretLeft} className="fa-caret" />
              </button>
              <div className="dropdown-container show" style={{ display: dropdownActive3 ? 'block' : 'none' }}>
                <a href="/billing" id='sidenav-dropdown'>Vehicle</a>
                <a href="/#" id='sidenav-dropdown'>Organization</a>
                <a href="/#" id='sidenav-dropdown'>TODA</a>
                <a href="/#" id='sidenav-dropdown'>Sales Person</a>
                <a href="/#" id='sidenav-dropdown'>Guarantor</a>
                <a href="/#" id='sidenav-dropdown'>Employees</a>
              </div>


              <button
                className={dropdownActive4 ? 'dropdown-btn active' : 'dropdown-btn'}
                onClick={toggleDropdown4}
                id='expanded-side-menu'
              >
                <img src="/assets/icons8-bill-94.png" alt="house-logo" width='26' height='22' /><span id='expanded-menu-list'>Billing</span>
                <FontAwesomeIcon icon={dropdownActive4 ? faCaretDown : faCaretLeft} className="fa-caret" />
              </button>
              <div className="dropdown-container show" style={{ display: dropdownActive4 ? 'block' : 'none' }}>
                <a href="/billing" id='sidenav-dropdown'>Vehicle</a>
                <a href="/#" id='sidenav-dropdown'>Organization</a>
                <a href="/#" id='sidenav-dropdown'>TODA</a>
                <a href="/#" id='sidenav-dropdown'>Sales Person</a>
                <a href="/#" id='sidenav-dropdown'>Guarantor</a>
                <a href="/#" id='sidenav-dropdown'>Employees</a>
              </div>


              <a href="/#" id='expanded-side-menu'>
                <img src="/assets/icons8-two-tickets-94.png" alt="house-logo" width='26' height='22' />
                <span id='expanded-menu-list'>Service Ticket</span>

              </a>
              <div>
                <a href="/#" id='expanded-side-menu'>
                  <img src="/assets/icons8-close-window-94.png" alt="house-logo" width='26' height='22' />
                  <span id='expanded-menu-list'>Log out</span>
                </a>
              </div>
            </div>


          </>
        ) : null}
      </div>

      <Navbar className="topnav" style={{ marginLeft: `${marginLeft}px` }} fixed="top">
        <span className='hamburger-navbar' onClick={toggleNav}>
          {width === 60 ? '\u2630' : '\u2630'}
        </span>
        <div className='logo-container'>
          <img src='/assets/gms_logo_w_r.svg' alt='gms-logo' width='140' height='25' />
        </div>
        <div className='spacer'></div>

        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownClick}>
            <div className='profile-container' >
              <div className='profile-pic-container'>
                <img src='/assets/jane_smith.jpg' alt='profile-pic' width='32' height='32' style={{ borderRadius: "50px" }} />
              </div>
              <div className='profile-name-container'>
                Jane Smith
              </div>
            </div>

          </button>
          <div
            id="myDropdown"
            className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}
            ref={dropdownRef}
          >

            <li class="user-header">
              <img src='/assets/jane_smith.jpg' class="img-circle" alt="User" />
              <p>
                Jane Smith - Web Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>

            <li class="user-body">
              <div class="row">
                <div class="col-xs-4 text-center">
                  <a href="/#">Followers</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="/#">Sales</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="/#">Likes</a>
                </div>
              </div>
            </li>

            <li class="user-footer">
              <div class="pull-left">
                <a href="/#" class="btn btn-default btn-flat">Profile</a>
              </div>
              <div class="pull-right">
                <a href="/#" class="btn btn-default btn-flat">Sign Out</a>
              </div>
            </li>
          </div>
        </div>

      </Navbar>

      <div id="main" style={{ marginLeft: `${marginLeft}px` }}>
        <div style={{ marginTop: "70px" }}>
          <Billing />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;