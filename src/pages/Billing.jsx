import React, { useEffect, useState, useRef } from 'react'
import ReactPaginate from "react-paginate";
import { Skeleton } from '@mui/material';
import Switches from "../components/Switches";
import DrivingAndMileageTimeChart from '../components/DrivingAndMileageTime';
import GoogleMaps from '../components/GoogleMaps';
import '../sass/billing.scss'
import { InputText } from 'primereact/inputtext';
import { Modal } from 'bootstrap';
import moment from 'moment';
import { Navbar } from 'react-bootstrap';



function Billing() {
    const [device, setDevice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataPerPage] = useState(200);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [activationStatus, setActivationStatus] = useState([]);
    const [singleActivationStatus, setSingleActivationStatus] = useState([]);
    const [singleDeviceData, setSingleDeviceData] = useState([]);
    const bootstrap = { Modal };
    const modalRef = useRef();
    const [nextDeviceData, setNextDeviceData] = useState('');
    const [nextStatusData, setNextStatusData] = useState('');
    // Combine the two arrays to access VIN(Vehicle Name) property of Get All Devices Array
    const combinedArrays = activationStatus.map((item, i) => Object.assign({}, item, device[i]));
    const [filterCombinedArray, setFilterCombinedArray] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [drivingandmileagetimeArray, setDrivingAndMileageTimeArray] = useState([]);
    const [centerPosition, setCenterPosition] = useState([]);
    const [bcId, setBcId] = useState('All');
    // Format dates for data in 
    const today = (new Date());
    const yesterday = moment(today.setDate(today.getDate() - 1)).format('YYYY-MM-DD');
    const monthAgo = moment(today.setDate(today.getDate() - 29)).format('YYYY-MM-DD');
    const [width, setWidth] = useState(50);
    const [marginLeft, setMarginLeft] = useState(50);
    const [total, setTotal] = useState(0);
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

    // Get Current Data
    const pagesVisited = pageNumber * dataPerPage;

    // Calculate the page count for pagination
    const pageCount = Math.ceil(combinedArrays.length / dataPerPage);

    // Counts the filtered search results that will be displayed under the data table
    const searchCount = Math.ceil(combinedArrays.length);

    // console.log(moment.unix(1678673801).format('MM/DD/YYYY'))

    // Search function using Device Id or Vehicle Name(VIN)
    function searchFilter(e) {
        e.preventDefault();
        setFilterCombinedArray(combinedArrays.filter((data) => {
            if (searchValue === '') {
                setIsFiltered(false);
                return data;
            }
            else if (data?.tags?.deviceSerialNo?.toString().toLowerCase().includes(searchValue.toLowerCase())
                || data?.tags?.VIN?.toString().toLowerCase().includes(searchValue.toLowerCase())) {
                setPageNumber(0);
                return data;
            }
            setIsFiltered(true);
            return false;
        }));
    }

    // This will hide the modal when clicking outside of it
    window.onclick = function (event) {
        const modalEle = modalRef.current;
        const bsModal = bootstrap.Modal.getInstance(modalEle);

        if (event.target === modalEle) {
            bsModal.hide();
        }
        if (modalRef?.current?.contains(event.target)) {
            return
        };
    }

    // useEffect(() => {
    //     fetch(`https://api.cloud-gms.com/v1/oauth2/token`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             grant_type: 'authorization_code',
    //             code: `${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`,
    //             refresh_token: ''
    //         })
    //     })
    //         .then(res => res.json())
    //         .catch(err => {
    //             console.error('Request failed', err)
    //         })
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    useEffect(() => {
        if (searchValue === '') {
            setFilterCombinedArray(combinedArrays)
        }
    }, [searchValue])

    // Handle PageChange in table pagination
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    };

    // Show Map Modal
    const showModal = async (id) => {
        const modalEle = modalRef.current;
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show();

        // Get One Device Status
        await fetch(`https://api.cloud-gms.com/v3/devices/${id}/status`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Request failed', err)
            })
            .then(data => {
                setSingleActivationStatus([data])
                setCenterPosition(data.position);
            })

        // Get One Device Data
        await fetch(`https://api.cloud-gms.com/v3/devices/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Request failed', err)
            })
            .then(data => {
                setSingleDeviceData(data);
            })

        // Get reports of driving time and mileage time in 30 days
        await fetch(`https://api.cloud-gms.com/v3/stats/devices/${id}/reports?startDate=${monthAgo}&endDate=${yesterday}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Request failed', err)
            })
            .then(data => {
                setDrivingAndMileageTimeArray(data.data)
            })
    }

    // Hide Map Modal
    const hideModal = () => {
        const modalEle = modalRef.current;
        const bsModal = bootstrap.Modal.getInstance(modalEle);
        bsModal.hide();
    }

    // Show Playback Button in Map Modal
    const showPlayback = (e) => {
        e.preventDefault();
    }

    // onChange of Select
    useEffect(() => {
        setLoading(true);
        if (bcId === 'All') {

            fetch(`https://api.cloud-gms.com/v3/devices?limit=200`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
                }
            })
                .then(res => res.json())
                .catch(err => {
                    console.error('Request failed', err);
                })
                .then(data => {
                    setDevice(data.data);
                    setIsFiltered(false);
                    setSearchValue('');
                    setPageNumber(0);
                    setLoading(false);
                    setTotal(data.total)
                })

        fetch(`https://api.cloud-gms.com/v3/devices/status?limit=200`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Request failed', err);
            })
            .then(data => {
                setActivationStatus(data.data);
                setIsFiltered(false);
                setSearchValue('');
                setPageNumber(0);
                setLoading(false);
            })

    } else {
        fetch(`https://api.cloud-gms.com/v3/devices?bc[]=${bcId}&start=1&limit=200`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${ process.env.REACT_APP_MSPF_ACCESS_TOKEN }`
                }
            })
                .then(res => res.json())
                .catch(err => {
                    console.error('Request failed', err);
                })
                .then(data => {
                    setDevice(data.data);
                    setIsFiltered(false);
                    setSearchValue('');
                    setPageNumber(0);
                    setLoading(false);
                    setTotal(data.total);
                })

            fetch(`https://api.cloud-gms.com/v3/devices/status?bc[]=${bcId}&start=1&limit=200`, {
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
    }
            })
                .then(res => res.json())
    .catch(err => {
        console.error('Request failed', err);
    })
    .then(data => {
        setActivationStatus(data.data);
        setIsFiltered(false);
        setSearchValue('');
        setPageNumber(0);
        setLoading(false);
    })
        }
    }, [bcId])

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

                {
                    loading
                        ?
                        <>
                            <div id='container'>
                                <form onSubmit={(e) => {
                                    searchFilter(e);
                                }}>
                                    <InputText
                                        id='searchValue'
                                        autoComplete='off'
                                        placeholder="Device Serial No, Vehicle Name"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                    <button id='submitBtn'><i className="fa fa-search" aria-hidden="true"></i></button>
                                </form>

                                <div id="filter-area">
                                    <select name="filterDevices" id="filterDevices" value={bcId} onChange={(e) => setBcId(e.target.value)}>
                                        <optgroup>
                                            <option style={{ display: 'none' }}>PLEASE SELECT</option>
                                            <option value='All'>All</option>
                                            <option value='10000005'>AEON AEON CREDIT SERVICE (PHILIPPINES) INC.</option>
                                            <option value='10023601'>GMS4W / GLOBAL MOBILITY SERVICE PHILIPPINES, INC.</option>
                                            <option value='10023626'>GMSF-LZD / GMS FINANCE - LAZADA</option>
                                            <option value='10023618'>GMSF4W / GMS FINANCE - 4 WHEELS</option>
                                            <option value='10023612'>GMSPF / GMS FINANCE PHILIPPINES, INC.</option>
                                            <option value='10000007'>GMSP / GMS/BASIS FINANCE</option>
                                            <option value='10023605'>NB / NETBANK</option>
                                            <option value='10000030'>AC4W / AEON CREDIT SERVICE (PHILIPPINES) INC. - 4 WHEELS</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div style={{ height: '800px', width: '70%', margin: 'auto' }}>

                                <table id="billingTable" className="table table-hover table-sm" >
                                    <thead>
                                        <tr className='tableColumnHeads' style={{ fontSize: '.9em', textAlign: "center" }}>
                                            <th>Device Serial No.</th>
                                            <th>Vehicle Name</th>
                                            <th>Desired Status</th>
                                            <th>Current Status</th>
                                            <th>Map</th>
                                            <th>Activation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (
                                                combinedArrays.length > 0
                                                    ?
                                                    combinedArrays.map((device) => {
                                                        return (
                                                            <tr style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                                <td><Skeleton /></td>
                                                                <td><Skeleton /></td>
                                                                <td><Skeleton /></td>
                                                                <td><Skeleton /></td>
                                                                <td><Skeleton /></td>
                                                                <td><Skeleton /></td>
                                                            </tr>
                                                        )
                                                    }).slice(pagesVisited, pagesVisited + dataPerPage)
                                                    :
                                                    <tr style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                        <td><Skeleton /></td>
                                                    </tr>
                                            )
                                        }
                                        {loading}
                                    </tbody>
                                </table>
                            </div>

                        </>
                        :
                        <>
                            <div className="modal fade show" ref={modalRef} id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                                <div className="modal-dialog modal-dialog-centered modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalCenterTitle">Vehicle/Device Location</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <GoogleMaps key={singleDeviceData.id} position={centerPosition} singleDevice={singleDeviceData} />
                                            <DrivingAndMileageTimeChart drivingandmileagetime={drivingandmileagetimeArray} />
                                            {
                                                singleActivationStatus.map((device) => {
                                                    return (
                                                        <div key={device.deviceId} style={{ fontSize: '.9em', display: 'inline-block' }}>
                                                            <span style={{ fontWeight: '500', display: 'inline-block' }}>Status:</span><span>  {device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}<span style={{ fontWeight: '500' }}>{' '}{' '}<br />Updated At:{' '}</span><span>{device.activation.updatedAt === null ? 'UNKNOWN' : moment(device.activation.updatedAt).format('MM-DD-YYYY, hh:mm:ss')}</span></span><br />
                                                            <span style={{ fontWeight: '500' }}>Device was Last Communicated At: </span><span>{' '}{' '}{moment(device.lastCommunicatedAt).format('MM-DD-YYYY, hh:mm:ss')}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideModal}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={showPlayback}>Show Playback</button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div style={{ height: '800px', width: '100%', margin: 'auto' }}>
                                <h2>Vehicles</h2>
                                <table id="billingTable" className="table table-hover table-sm" >
                                    <div id='container'>
                                        <div id="filter-area">
                                            <select name="filterDevices" id="filterDevices" value={bcId} onChange={(e) => setBcId(e.target.value)}>
                                                <optgroup>
                                                    <option style={{ display: 'none' }}>PLEASE SELECT</option>
                                                    <option value='All'>All</option>
                                                    <option value='10000005'>AEON AEON CREDIT SERVICE (PHILIPPINES) INC.</option>
                                                    <option value='10023601'>GMS4W / GLOBAL MOBILITY SERVICE PHILIPPINES, INC.</option>
                                                    <option value='10023626'>GMSF-LZD / GMS FINANCE - LAZADA</option>
                                                    <option value='10023618'>GMSF4W / GMS FINANCE - 4 WHEELS</option>
                                                    <option value='10023612'>GMSPF / GMS FINANCE PHILIPPINES, INC.</option>
                                                    <option value='10000007'>GMSP / GMS/BASIS FINANCE</option>
                                                    <option value='10023605'>NB / NETBANK</option>
                                                    <option value='10000030'>AC4W / AEON CREDIT SERVICE (PHILIPPINES) INC. - 4 WHEELS</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <form onSubmit={(e) => {
                                            searchFilter(e);
                                        }}>
                                            <InputText
                                                id='searchValue'
                                                autoComplete='off'
                                                placeholder="Device Serial No, Vehicle Name"
                                                value={searchValue}
                                                onChange={(e) => setSearchValue(e.target.value)}
                                            />
                                            <button id='submitBtn'><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                    <thead>
                                        <tr className='tableColumnHeads' style={{ fontSize: '.9em', textAlign: "center" }}>
                                            <th>Device Serial No.</th>
                                            <th>Vehicle Name</th>
                                            <th>Desired Status</th>
                                            <th>Current Status</th>
                                            <th>Map</th>
                                            <th>Activation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (
                                                combinedArrays.length > 0 || filterCombinedArray.length > 0
                                                    ?
                                                    (
                                                        isFiltered
                                                            ?
                                                            filterCombinedArray.map((device) => {
                                                                return (
                                                                    <tr key={device.deviceId} style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                                        <td>{device?.tags?.deviceSerialNo !== undefined ? device?.tags?.deviceSerialNo : 'UNKNOWN'}</td>
                                                                        <td>{device?.tags?.VIN !== undefined ? device?.tags?.VIN : 'UNKNOWN'}</td>
                                                                        <td>{device.activation.desiredStatus === null ? 'UNKNOWN' : device.activation.desiredStatus}</td>
                                                                        <td>{device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}</td>
                                                                        <td>
                                                                            <i type='button' className="fa fa-map-marker" aria-hidden="true" onClick={() => showModal(device.deviceId)}></i>
                                                                        </td>
                                                                        <td><Switches data={device} /></td>
                                                                    </tr>
                                                                )
                                                            }).slice(pagesVisited, pagesVisited + dataPerPage)
                                                            :
                                                            combinedArrays.map((device) => {
                                                                return (
                                                                    <tr key={device.deviceId} style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                                        <td>{device?.tags?.deviceSerialNo !== undefined ? device?.tags?.deviceSerialNo : 'UNKNOWN'}</td>
                                                                        <td>{device?.tags?.VIN !== undefined ? device?.tags?.VIN : 'UNKNOWN'}</td>
                                                                        <td>{device.activation.desiredStatus === null ? 'UNKNOWN' : device.activation.desiredStatus}</td>
                                                                        <td>{device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}</td>
                                                                        <td>
                                                                            <i type='button' className="fa fa-map-marker" aria-hidden="true" onClick={() => showModal(device.deviceId)}></i>
                                                                        </td>
                                                                        <td><Switches data={device} /></td>
                                                                    </tr>
                                                                )
                                                            }).slice(pagesVisited, pagesVisited + dataPerPage)
                                                    )

                                                    :
                                                    <tr style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                        <td>NO DATA TO DISPLAY</td>
                                                    </tr>
                                            )
                                        }
                                        {loading}
                                    </tbody>
                                </table>
                                <div>
                                    {

                                        combinedArrays.length > 0
                                            ?
                                            <>
                                                Showing results of
                                                {
                                                    isFiltered
                                                        ? " " + Math.ceil(filterCombinedArray.length) + " "
                                                        : " " + searchCount + " "}
                                                out of {total}
                                            </>
                                            :
                                            ''

                                    }
                                </div>
                                <ReactPaginate
                                    forcePage={pageNumber}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={2}
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    pageCount={isFiltered ? Math.ceil(filterCombinedArray.length / dataPerPage) : pageCount}
                                    onPageChange={handlePageChange}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item"}
                                    nextLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                    renderOnZeroPageCount={() => null}
                                />
                            </div>


                        </>
                }
            </div>
        </div>
    </div>
)

}

export default Billing;

