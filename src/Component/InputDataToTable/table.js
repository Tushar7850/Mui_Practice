import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableData (props){

  const  style ={
    backgroundColor : "Black",
    color:"white",
    fontWeight: 900 ,
    border:"1px solid white",
    textAlign:"center"

  }



  return(
    <div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={style} >Suffix</TableCell>
            <TableCell sx={style}  align="right">FirstName</TableCell>
            <TableCell sx={style}  align="right">MiddleName</TableCell>
            <TableCell sx={style}  align="right">LastName</TableCell>
            <TableCell sx={style}  align="right">Email</TableCell>
            <TableCell sx={style}  align="right">Phone</TableCell>
            <TableCell sx={style}  align="right">Age</TableCell>
            <TableCell sx={style}  align="right">Gender</TableCell>

          </TableRow>
        </TableHead>

      
        <TableBody>
          {props.name.map((elem) => (
            <TableRow
              key={elem.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='border-2 ' component="th" scope="row">{elem.suffix}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.firstname}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.middlename}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.lastname}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.email}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.phone}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.Age}</TableCell>
              <TableCell className='border-2 ' align="right">{elem.Gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}


