import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Switches from './Switches'
import '../sass/billing.scss'

function Billing() {
    const [toggled, setToggled] = useState(false);
    const [device, setDevice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);

    useEffect(() => {
        console.log(toggled)
        let token = 'd77909766d904bccb1fe704d9f2b5439';
        setLoading(true);
        // MSPF Devices API
        fetch(`https://api.cloud-gms.com/v3/devices`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDevice(data.data.map(device => {
                    return (
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            <td>{device.deviceType}</td>
                            <td>{device.status}</td>
                            <td>
                                {   
                                device.status === "WORKING"
                                ?
                                <div className="form-check form-switch">
                                    <Switches checked={!toggled} />
                                </div>
                                :
                                <div className="form-check form-switch">
                                    <Switches checked={toggled} />
                                </div>
                                }
                            </td>
                        </tr>
                    )
                }));
                setLoading(false);
            });

    }, []);

    // Get Current Data
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = device.slice(indexOfFirstData, indexOfLastData);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (

        <div>
            <table className='billingTable'>
                <tr className='tableColumnHeads'>
                    <th>Device Id</th>
                    <th>Device Type</th>
                    <th>Status</th>
                </tr>
                {currentData} {loading}
                
            </table>
            <Pagination
                dataPerPage={dataPerPage}
                totalData={device.length}
                paginate={paginate} 
            />
        </div>
        
    )

}

export default Billing;

