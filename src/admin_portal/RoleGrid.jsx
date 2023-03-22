import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';


const columns = [
    { field: 'branch', headerName: 'Branch', width: 200 },
    { field: 'roleName', headerName: 'Role name', width: 200 },
    {
        field: 'accessLevel',
        headerName: 'Access Level',
        width: 200,
    },
    {
        field: 'remarks',
        headerName: 'Remarks',
        width: 160,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function RoleGrid() {
  return (
    <div>
       <div style={{ height: 300, width: 800 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                />
            </div>
    </div>
  )
}

export default RoleGrid
