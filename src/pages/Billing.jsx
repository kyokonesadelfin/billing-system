import React, { useEffect, useState, useRef } from 'react'
import ReactPaginate from "react-paginate";
import { CircularProgress } from '@mui/material';
import Switches from "../components/Switches";
import DrivingAndMileageTimeChart from '../components/DrivingAndMileageTime';
import '../sass/billing.scss'
import { InputText } from 'primereact/inputtext';
import { Modal } from 'bootstrap';

function Billing() {
    const [device, setDevice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [bcName, setBcName] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [companyName, setCompanyName] = useState('AEON AEON CREDIT SERVICE (PHILIPPINES) INC.');
    const [activationStatus, setActivationStatus] = useState([]);
    const bootstrap = { Modal };
    const modalRef = useRef();
    // Combine the two arrays to access VIN(Vehicle Name) property of Get All Devices Array
    const combinedArrays = activationStatus.map((item, i) => Object.assign({}, item, device[i]));
    const [filterActivationStatus, setFilterActivationStatus] = useState([...combinedArrays]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [isCategoryFiltered, setIsCategoryFiltered] = useState(false);
    const [specificCategoryArray, setSpecificCategoryArray] = useState([]);
    const [drivingandmileagetimeArray, setDrivingAndMileageTimeArray] = useState([]);

    useEffect(() => {

        const fetchAllData = async () => {

            setLoading(true);

            // Get All Devices API
            await fetch(`https://api.cloud-gms.com/v3/devices?bc%5B%5D=10023650`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
                .then(res => res.json())
                .catch(err => {
                    console.error('Request failed', err)
                })
                .then(data => {
                    setDevice(data.data);
                    setLoading(false);
                });


            // Get All BC 
            await fetch(`https://api.cloud-gms.com/v2/bc`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
                .then(res => res.json())
                .catch(err => {
                    console.error('Request failed', err);
                })
                .then(data => {
                    setBcName(data.data);
                    setLoading(false);
                })

            // Get Device Status
            await fetch(`https://api.cloud-gms.com/v3/devices/status?bc%5B%5D=10023650`, {
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
                    setActivationStatus(data.data)
                    setLoading(false);

                })

            await fetch(`https://api.cloud-gms.com/v3/stats/devices/10145276/reports?startDate=2023-02-04&endDate=2023-03-05&limit=100`, {
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

        };



        fetchAllData();
        setIsCategoryFiltered(true)

    }, [])

    useEffect(() => {
        switch (companyName) {
            case 'AEON AEON CREDIT SERVICE (PHILIPPINES) INC.':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10000005));
                break;
            case 'GMS4W / GLOBAL MOBILITY SERVICE PHILIPPINES, INC.':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10023601));
                break;
            case 'GMSF-LZD / GMS FINANCE - LAZADA':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10023626));
                break;
            case 'GMSF4W / GMS FINANCE - 4 WHEELS':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10023618));
                break;
            case 'GMSPF / GMS FINANCE PHILIPPINES, INC.':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10023612));
                break;
            case 'GMSP / GMS/BASIS FINANCE':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10000007));
                break;
            case 'NB / NETBANK':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10023605));
                break;
            case 'AC4W / AEON CREDIT SERVICE (PHILIPPINES) INC.':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10000030));

                break;
            case 'GMSPH-TECH':
                setSpecificCategoryArray(combinedArrays.filter(data => data.bcId === 10023650));
                break;
        }
        setFilterActivationStatus(combinedArrays);
        setSearchValue('');
        setIsCategoryFiltered(true);
        setIsFiltered(false);
        setPageNumber(0);
    }, [companyName])

    // Get Current Data
    const pagesVisited = pageNumber * dataPerPage;

    // Calculate the page count for pagination
    const pageCount = Math.ceil(specificCategoryArray.length / dataPerPage);

    // Counts the filtered search results that will be displayed under the data table
    const searchCount = Math.ceil(specificCategoryArray.length);
    // Search function using Device Id or Vehicle Name(VIN)
    function searchFilter(e) {
        e.preventDefault();
        setFilterActivationStatus(specificCategoryArray.filter((data) => {
            if (searchValue === '') {
                setIsFiltered(false);
                setIsCategoryFiltered(false);
                return data;
            } else if (data.deviceId.toString().toLowerCase().includes(searchValue.toLowerCase())
                || data.tags.VIN.toLowerCase().includes(searchValue.toLowerCase())) {
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

    // Handle PageChange in table pagination
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    };

    console.log(activationStatus)
    
    // Show Map Modal
    const showModal = () => {
        const modalEle = modalRef.current;
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show();
        console.log(specificCategoryArray[0].deviceId)
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

    return (

        <div style={{ margin: "auto", position: "relative", marginTop: "10vh", height: "50px", width: '100%' }}>

            {

                loading
                    ?
                    <>
                        <div className='loader' style={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress size={200} />
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
                                        <iframe id='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                    </div>
                                    <div className="modal-footer">
                                        <DrivingAndMileageTimeChart drivingandmileagetime={drivingandmileagetimeArray} />
                                        {
                                            // specificCategoryArray.map((device) => {
                                            //     return (
                                            //         <div key={device.deviceId} style={{ fontSize: '.8em', textAlign: 'center' }}>
                                            //             <span>{device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}<span>{device.activation.updatedAt}</span></span>
                                            //             <span>{device.lastCommunicatedAt}</span>
                                            //         </div>
                                            //     )
                                            // })
                                            
                                        }
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideModal}>Close</button>
                                        <button type="button" className="btn btn-primary" onClick={showPlayback}>Show Playback</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id='container'>
                            <form onSubmit={(e) => searchFilter(e)}>
                                <InputText
                                    id='searchValue'
                                    autoComplete='off'
                                    placeholder="Search for..."
                                    value={searchValue}
                                    onChange={(e) => {
                                        handlePageChange({ selected: pageNumber });
                                        setSearchValue(e.target.value);
                                    }}
                                />
                                <button id='submitBtn'><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>

                            <div id="filter-area">
                                <select name="filterDevices" id="filterDevices" value={companyName} onChange={(e) => setCompanyName(e.target.value)}>
                                    <optgroup>
                                        <option value='AEON AEON CREDIT SERVICE (PHILIPPINES) INC.'>AEON AEON CREDIT SERVICE (PHILIPPINES) INC.</option>
                                        <option value='GMS4W / GLOBAL MOBILITY SERVICE PHILIPPINES, INC.'>GMS4W / GLOBAL MOBILITY SERVICE PHILIPPINES, INC.</option>
                                        <option value='GMSF-LZD / GMS FINANCE - LAZADA'>GMSF-LZD / GMS FINANCE - LAZADA</option>
                                        <option value='GMSF4W / GMS FINANCE - 4 WHEELS'>GMSF4W / GMS FINANCE - 4 WHEELS</option>
                                        <option value='GMSPF / GMS FINANCE PHILIPPINES, INC.'>GMSPF / GMS FINANCE PHILIPPINES, INC.</option>
                                        <option value='GMSP / GMS/BASIS FINANCE'>GMSP / GMS/BASIS FINANCE</option>
                                        <option value='NB / NETBANK'>NB / NETBANK</option>
                                        <option value='AC4W / AEON CREDIT SERVICE (PHILIPPINES) INC.'>AC4W / AEON CREDIT SERVICE (PHILIPPINES) INC. - 4 WHEELS</option>
                                        <option value='GMSPH-TECH'>GMSPH-TECH</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>


                        <div style={{ height: '800px', width: '70%', margin: 'auto' }}>

                            <table id="billingTable" className="table table-hover table-sm" >
                                <thead>
                                    <tr className='tableColumnHeads' style={{ fontSize: '.9em', textAlign: "center" }}>
                                        <th>Device Id</th>
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
                                            specificCategoryArray.length > 0 && filterActivationStatus.length > 0
                                                ?
                                                (
                                                    isFiltered
                                                        ?
                                                        filterActivationStatus.map((device) => {
                                                            return (
                                                                <tr key={device.deviceId} style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                                    <td>{device.deviceId}</td>
                                                                    <td>{device.tags.VIN}</td>
                                                                    <td>{device.activation.desiredStatus === null ? 'UNKNOWN' : device.activation.desiredStatus}</td>
                                                                    <td>{device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}</td>
                                                                    <td>
                                                                        <i type='button' className="fa fa-map-marker" aria-hidden="true" onClick={showModal}></i>
                                                                    </td>
                                                                    <td><Switches data={device} /></td>
                                                                </tr>
                                                            )
                                                        }).slice(pagesVisited, pagesVisited + dataPerPage)
                                                        :
                                                        specificCategoryArray.map((device) => {
                                                            return (
                                                                <tr key={device.deviceId} style={{ fontSize: '.8em', textAlign: 'center' }}>
                                                                    <td>{device.deviceId}</td>
                                                                    <td>{device.tags.VIN}</td>
                                                                    <td>{device.activation.desiredStatus === null ? 'UNKNOWN' : device.activation.desiredStatus}</td>
                                                                    <td>{device.activation.currentStatus === null ? 'UNKNOWN' : device.activation.currentStatus}</td>
                                                                    <td>
                                                                        <i type='button' className="fa fa-map-marker" aria-hidden="true" onClick={showModal}></i>
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

                                    combinedArrays.length > 0 && filterActivationStatus.length > 0 && specificCategoryArray.length > 0
                                        ?
                                        <>
                                            Showing results of
                                            {
                                                isFiltered
                                                    ? " " + filterActivationStatus.length + " "
                                                    : (
                                                        isCategoryFiltered
                                                            ? " " + searchCount + " "
                                                            : " " + combinedArrays.length) + " "}
                                            out of {specificCategoryArray.length}
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
                                pageCount={isFiltered ? filterActivationStatus.length / dataPerPage : (isCategoryFiltered ? pageCount : combinedArrays.length / dataPerPage)}
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


