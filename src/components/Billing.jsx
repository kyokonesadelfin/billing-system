import React, { useEffect, useState, useMemo } from 'react'
import Pagination from './Pagination'
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import Switches from "./Switches";
import '../sass/billing.scss'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'

function Billing() {
    const [device, setDevice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const [filters, setFilters] = useState({
        global: { value: null, matchmode: FilterMatchMode.CONTAINS }
    })
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {

        let token = 'e357da85ecec412ab0e7c5ecd1dccccc';
        setLoading(true);

        // Get All Devices API
        fetch(`https://api.cloud-gms.com/v3/devices`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Request failed', err)
            })
            .then(data => {
                console.log(data)
                setDevice(data.data);
                setLoading(false);
            });
        // document.getElementById('example').DataTable();
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    function onSubmit(e) {
        e.preventDefault();

        device.filter((device) => {
            return query.length > 2 ? (query.toLowerCase() === '' ? device : device.bcId.toString().toLowerCase().includes(query) || query.toLowerCase() === '' ? device : device.mobileNo.toString().includes(query)) : device
        })
    }

    // Get Current Data
    // const indexOfLastData = currentPage * dataPerPage;
    // const indexOfFirstData = indexOfLastData - dataPerPage;
    // const currentDeviceData = device.slice(indexOfFirstData, indexOfLastData);

    // // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const switchComponent = (device) => {
        return (
            <>
                <Switches data={device} />
            </>
        );
    };

    return (

        <div style={{ margin: "auto", position: "relative", marginTop: "10vh", height: "50px", width: '100%' }}>
            {/* <div >
            <input
                    type="text"
                    placeholder='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchIcon
                    style={{ position: "relative", right: "25px", cursor: "pointer" }}
                    onClick={(e) => onSubmit(e)}
                />
            </div> */}

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
                        {/* <form onChange={(e) =>setQuery(e.target.value)}> 
                            <table className='billingTable'>
                                <thead>
                                    <tr className='tableColumnHeads'>
                                        <th style={{ textAlign: "center" }}>BC ID</th>
                                        <th style={{ textAlign: "center" }}>Mobile Number</th>
                                        <th style={{ textAlign: "center" }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentDeviceData.filter((device) => {
                                            return query.length > 3 ? (query.toLowerCase() === '' ? device : device.bcId.toString().toLowerCase().includes(query) || query.toLowerCase() === '' ? device : device.mobileNo.toString().includes(query)) : device
                                        }).map((device) => {
                                            return (
                                                <tr key={device.id}>
                                                    <td style={{ textAlign: "center" }}>{device.bcId}</td>
                                                    <td style={{ textAlign: "center" }}>{device.mobileNo}</td>
                                                    <td style={{ textAlign: "center" }}>{device.status}</td>
                                                    <td><Switches data={device} /></td>
                                                </tr>
                                            )
                                        })

                                    }{loading}
                                </tbody>
                            </table>
                        </form> */}
                        {/* <table id="example" class="table table-striped" style={{ width: '100%' }}>
                            <thead>
                                <tr className='tableColumnHeads'>
                                    <th style={{ textAlign: "center" }}>BC ID</th>
                                    <th style={{ textAlign: "center" }}>Mobile Number</th>
                                    <th style={{ textAlign: "center" }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    device.filter((device) => {
                                        return query.length > 3 ? (query.toLowerCase() === '' ? device : device.bcId.toString().toLowerCase().includes(query) || query.toLowerCase() === '' ? device : device.mobileNo.toString().includes(query)) : device
                                    }).map((device) => {
                                        return (
                                            <tr key={device.id}>
                                                <td style={{ textAlign: "center" }}>{device.bcId}</td>
                                                <td style={{ textAlign: "center" }}>{device.mobileNo}</td>
                                                <td style={{ textAlign: "center" }}>{device.status}</td>
                                                <td><Switches data={device} /></td>
                                            </tr>
                                        )
                                    })

                                }{loading}
                            </tbody>
                        </table>

                        <Paginator rows={10}
                            rowsPerPageOptions={[10, 20, 100]}
                            totalRecords={device.length} /> */}
                        
                        <div style={{ width: '70%', margin: "auto", position: "relative", marginTop: "10vh", height: "50px" }}>
                            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />

                            <DataTable
                                // onChange={(e) => setQuery(e.target.value)}
                                value={device}
                                paginator rows={10}
                                rowsPerPageOptions={[10, 20, 100]}
                                totalRecords={10}
                                filter={filters}
                            >
                                <Column field='bcId' header='BC ID' sortable />
                                <Column field='mobileNo' header='Mobile No' sortable />
                                <Column field='status' header='Status' sortable />
                                <Column field={switchComponent} header='Activate/Deactivate' />
                            </DataTable>
                            {/* <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
                            <Pagination
                                dataPerPage={dataPerPage}
                                totalData={device.length}
                                paginate={paginate}
                            /> */}
                        </div>
                    </>
            }

        </div>

    )

}

export default Billing;


