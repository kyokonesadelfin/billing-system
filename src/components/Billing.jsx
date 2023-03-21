import React, { useEffect, useState, useRef } from 'react'
import ReactPaginate from "react-paginate";
import { Skeleton } from '@mui/material';
import Switches from "./Switches";
import DrivingAndMileageTimeChart from './DrivingAndMileageTime';
import GoogleMaps from './GoogleMaps';
import '../sass/billing.scss'
import { InputText } from 'primereact/inputtext';
import { Modal } from 'bootstrap';
import moment from 'moment';
import PlaygroundSpeedDial from "./PlaygroundSpeedDial";
import { Link } from 'react-router-dom';

function Billing() {
    const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
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
    const [showGraph, setShowGraph] = useState(false);
    const [total, setTotal] = useState(0);


    // Get Current Data
    const pagesVisited = pageNumber * dataPerPage;

    // Calculate the page count for pagination
    const pageCount = Math.ceil(combinedArrays.length / dataPerPage);

    // Counts the filtered search results that will be displayed under the data table
    const searchCount = Math.ceil(combinedArrays.length);
    
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
            setIsInfoWindowOpen(false);
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
        setIsInfoWindowOpen(true);
        const modalEle = modalRef.current;
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show();
        setShowGraph(false);
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

    // Show Graph
    const showGraphBtn = () => {
        setShowGraph(prev => prev === false ? true : false);
    }

    // Hide Map Modal
    const hideModal = () => {
        const modalEle = modalRef.current;
        const bsModal = bootstrap.Modal.getInstance(modalEle);
        bsModal.hide();
        setIsInfoWindowOpen(false);
        document.addEventListener('keyup',function(e){
            if (e.key === "Escape") { 
                hideModal()
            }
        });
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
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header" style={{backgroundColor: '#39f'}}>
                                        <h5 className="modal-title" id="exampleModalCenterTitle" style={{color:'#FFFFFF'}}><i type='button' className="fa fa-map-marker" aria-hidden="true" style={{color:'#FFFFFF'}}></i>{' '}{' '}Vehicle/Device Location</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideModal}></button>
                                    </div>
                                    <div className="modal-body">
                                        <GoogleMaps key={singleDeviceData.id} position={centerPosition} singleDevice={singleDeviceData} isOpen={isInfoWindowOpen}/>
                                        { showGraph ? <DrivingAndMileageTimeChart key={filterCombinedArray.deviceId} drivingandmileagetime={drivingandmileagetimeArray} /> : null}
                                        {
                                            singleActivationStatus.map((device) => {
                                                return (
                                                    <div id='status' key={device.deviceId} style={{ fontSize: '.9em', display: 'inline-block'}}>
                                                        <span>Status:</span>
                                                        <span style={{ fontWeight: '500' }}>{device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}</span>
                                                        {' '}{' '}<span>Updated At:{' '}</span>
                                                        <span style={{ fontWeight: '500' }}>{device.activation.updatedAt === null ? 'UNKNOWN' : moment(device.activation.updatedAt).format('MM-DD-YYYY, hh:mm:ss')}
                                                        </span>
                                                        <span>Device was Last Communicated At: </span>
                                                        <span style={{ fontWeight: '500' }}>{' '}{' '}{moment(device.lastCommunicatedAt).format('MM-DD-YYYY, hh:mm:ss')}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <Link to={{pathname: "/playback"}} target='_blank' onClick={() => localStorage.setItem("activationStatus", JSON.stringify(singleActivationStatus))} className='btn btn-primary' style={{ textDecoration:'none', color: '#FFFFFF' }}>Show Playback</Link>
                                        <button type="button" className="btn btn-primary" style={{ color: '#FFFFFF' }} onClick={() => showGraphBtn()}>{showGraph ? 'Close Graph' : ' Driving Time and Mileage Graph'}</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideModal}>Close</button>
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
                                        <th style={{width: '10%'}}>Map</th>
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
                                                                    <td style={{width: '10%'}}>
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
                                                                    <td style={{width: '10%'}}> 
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
            <PlaygroundSpeedDial/>
        </div>
    )

}

export default Billing;

