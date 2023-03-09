import React, { useEffect, useState, useRef } from 'react'
import ReactPaginate from "react-paginate";
import { Skeleton } from '@mui/material';
import Switches from "../components/Switches";
import DrivingAndMileageTimeChart from '../components/DrivingAndMileageTime';
import '../sass/billing.scss'
import { InputText } from 'primereact/inputtext';
import { Modal } from 'bootstrap';
import moment from 'moment';

function Billing() {
    const [device, setDevice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [activationStatus, setActivationStatus] = useState([]);
    const [singleActivationStatus, setSingleActivationStatus] = useState([]);
    const bootstrap = { Modal };
    const modalRef = useRef();
    // Combine the two arrays to access VIN(Vehicle Name) property of Get All Devices Array
    const combinedArrays = activationStatus.map((item, i) => Object.assign({}, item, device[i]));
    const [filterCombinedArray, setFilterCombinedArray] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [companyName, setCompanyName] = useState(false);
    const [drivingandmileagetimeArray, setDrivingAndMileageTimeArray] = useState([]);

    // Format dates for data in 
    const today = (new Date());
    const yesterday = moment(today.setDate(today.getDate() - 1)).format('YYYY-MM-DD');
    const monthAgo = moment(today.setDate(today.getDate() - 29)).format('YYYY-MM-DD');

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
            if (searchValue == '') {
                setIsFiltered(false);
                return data;
            }
            else if (data?.tags?.deviceSerialNo?.toString().toLowerCase().includes(searchValue.toLowerCase())
                || data?.tags?.VIN?.toString().toLowerCase().includes(searchValue.toLowerCase())) {
                return data;
                setPageNumber(0);
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
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Request failed', err)
            })
            .then(data => {
                setSingleActivationStatus([data])
            })

        // Get reports of driving time and mileage time in 30 days
        await fetch(`https://api.cloud-gms.com/v3/stats/devices/${id}/reports?startDate=${monthAgo}&endDate=${yesterday}&limit=100`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
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
    console.log(combinedArrays)
    console.log(filterCombinedArray)
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
    const companyFilter = async (bcId) => {
        await fetch(`https://api.cloud-gms.com/v3/devices?bc[]=${bcId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
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
            })

        await fetch(`https://api.cloud-gms.com/v3/devices/status?bc[]=${bcId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
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
            })
            
    }

    return (

        <div style={{ margin: "auto", position: "relative", marginTop: "10vh", height: "50px", width: '100%' }}>

            {

                loading
                    ?
                    <>
                        <div id='container'>
                            <form onSubmit={(e) => {
                                searchFilter(e);
                                handlePageChange({ selected: pageNumber });
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
                                <select name="filterDevices" id="filterDevices" onChange={(e) => companyFilter(e.target.value)}>
                                    <optgroup>
                                        <option style={{ display: 'none' }}>PLEASE SELECT</option>
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
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Vehicle/Device Location</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <iframe id='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                        <DrivingAndMileageTimeChart drivingandmileagetime={drivingandmileagetimeArray} />
                                        {
                                            singleActivationStatus.map((device) => {
                                                return (
                                                    <div key={device.deviceId} style={{ fontSize: '.8em', textAlign: 'right' }}>
                                                        <span style={{ fontWeight: '500' }}>Status:</span><span>  {device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}<span style={{ fontWeight: '500' }}>{' '}{' '}<br />Updated At:{' '}</span><span>{device.activation.updatedAt === null ? 'UNKNOWN' : device.activation.updatedAt}</span></span><br />
                                                        <span style={{ fontWeight: '500' }}>Device was Last Communicated At: </span><span>{' '}{' '}{device.lastCommunicatedAt}</span>
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

                        <div id='container'>
                            <form onSubmit={(e) => {
                                searchFilter(e);
                                handlePageChange({ selected: pageNumber });
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
                                <select name="filterDevices" id="filterDevices" onChange={(e) => companyFilter(e.target.value)}>
                                    <optgroup>
                                        <option style={{ display: 'none' }}>PLEASE SELECT</option>
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
                                            out of {searchCount}
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

    )

}

export default Billing;


