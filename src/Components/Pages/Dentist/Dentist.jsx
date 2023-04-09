import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Dentist = ({ odontologist }) => {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name:</TableCell>
            <TableCell align="left">Phone:</TableCell>
            <TableCell align="left">E-mail:</TableCell>
            <TableCell align="left">Website:</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={odontologist.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {odontologist.name}
              </TableCell>
              <TableCell align="left">{odontologist.phone}</TableCell>
              <TableCell align="left">{odontologist.email}</TableCell>
              <TableCell align="left">{odontologist.website}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default Dentist