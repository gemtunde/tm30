import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

const ListTable = () => {
    const rows =[
        {
            id:12323,
            institution:'Access Bank',
            biller:'FRSC',
            order: 'Driver License',
            date: '24/07/2021',
            amount: 2349800,
            status: 'Pending'
        },
        {
            id:922323,
            institution:'Eco Bank',
            biller:'WAEC',
            order: 'National Id',
            date: '4/08/2021',
            amount: 9009800,
            status: 'Successful'
        },
        {
            id:229323,
            institution:'GTBank',
            biller:'PHCN',
            order: 'Electricity Bill',
            date: '2/09/2021',
            amount: 49800,
            status: 'Failed'
        },
        {
            id:832323,
            institution:'First Bank',
            biller:'OAU',
            order: 'School Fee',
            date: '24/07/2021',
            amount: 5649800,
            status: 'Pending'
        },
        {
            id:219023,
            institution:'Polaris Bank',
            biller:'NECO',
            order: 'School form',
            date: '03/03/2021',
            amount: 27409800,
            status: 'Successful'
        },
        {
            id:900323,
            institution:'Unity Bank',
            biller:'Tax',
            order: 'Driver License',
            date: '30/01/2021',
            amount: 339800,
            status: 'Failed'
        },
        {
            id:505090,
            institution:'Zenith Bank',
            biller:'Hospital Bill',
            order: 'Voters Card',
            date: '14/08/2021',
            amount: 2349800,
            status: 'Pending'
        },
    ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableHeader'>Order Id</TableCell>
            <TableCell  className='tableHeader'>Institution</TableCell>
            <TableCell  className='tableHeader'>Biller</TableCell>
            <TableCell  className='tableHeader'>Order</TableCell>
            <TableCell  className='tableHeader'>Date</TableCell>
            <TableCell  className='tableHeader'>Amount</TableCell>
            <TableCell  className='tableHeader'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'> {row.id}  </TableCell>
              <TableCell className='tableCell'>{row.institution}</TableCell>
              <TableCell className='tableCell'>{row.biller}</TableCell>
              <TableCell className='tableCell'>{row.order}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>
               <span className={`status ${row.status}`}> {row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable