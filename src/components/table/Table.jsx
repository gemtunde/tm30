import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

const ListTable = ({rows}) => {
  
   
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