import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { userColumns, userRows } from '../../datatablesource';
import { Link } from "react-router-dom";
// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



const Datatable = () => {
  const [userData, setUserData]=useState(userRows);

  const handleDelete =(id)=> {
      //console.log(id);
      const filterData = userData.filter(data=> data.id !== id);
      setUserData(filterData);
  }
  const actionColumn = [
   { 
    field : 'action',
    headerName: 'Action',
    width:200,
    renderCell : (params)=>{
      return(
        <div className='cellAction'>
            <div className="viewButton">
              <Link to='/user/2' style={{textDecoration:'none'}}>View</Link>
             
              </div>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
        </div>
      );
    },
  },
  ]
  return (
    <div className='datatable'>
      <div className="Datatitle">
        Latest Transactions
        <Link to='/user/new' className='link'>Add New  </Link>
      </div>
        <DataGrid
        rows={userData}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable