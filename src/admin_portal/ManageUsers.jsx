import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BasicTabs from './BasicTabs';


const columns = [
    { field: 'image', headerName: '', width: 40 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'userType', headerName: 'User type', width: 130 },
    { field: 'branch', headerName: 'Branch', width: 150 },
    { field: 'lastLogin', headerName: 'Last Login', width: 170 },
    { field: 'dateCreated', headerName: 'Date created', width: 110 },
];


const rows = [
    { id: 1, image: '/public/assets/pexels-ali-pazani-2787341.jpg', name: 'John Doe', email: 'john.doe@example.com', status: 'Active', userType: 'Admin', branch: 'New York', lastLogin: '2023-03-20 13:25:00', dateCreated: '2022-01-01' },
    { id: 2, image: 'https://example.com/image.jpg', name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive', userType: 'Regular', branch: 'Los Angeles', lastLogin: '2023-03-18 08:45:00', dateCreated: '2021-12-31' },
    { id: 3, image: 'https://example.com/image.jpg', name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'Active', userType: 'Regular', branch: 'San Francisco', lastLogin: '2023-03-19 16:10:00', dateCreated: '2022-02-15' },
    { id: 4, image: 'https://example.com/image.jpg', name: 'Alice Lee', email: 'alice.lee@example.com', status: 'Active', userType: 'Admin', branch: 'Chicago', lastLogin: '2023-03-21 11:30:00', dateCreated: '2022-03-01' },
    { id: 5, image: 'https://example.com/image.jpg', name: 'Tom Wilson', email: 'tom.wilson@example.com', status: 'Inactive', userType: 'Regular', branch: 'Houston', lastLogin: '2023-03-17 14:20:00', dateCreated: '2022-02-28' },
    { id: 6, image: 'https://example.com/image.jpg', name: 'Sarah Kim', email: 'sarah.kim@example.com', status: 'Active', userType: 'Regular', branch: 'Miami', lastLogin: '2023-03-22 09:15:00', dateCreated: '2021-11-15' },
];


function ManageUsers() {
    return (    
        <div>
        <BasicTabs/>
            <div style={{ height: 500, width: 1350 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default ManageUsers
