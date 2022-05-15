import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import dispApiCollection from '../../../apiservices/ERP/DISP.api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DISPERPTable = () => {
    const [dispData,setDispData]=useState([])
    const fetchDISPData = React.useCallback(() => {
        dispApiCollection.fetchDISPERP()
        .then((response) => {
          setDispData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
  useEffect(() => {
   fetchDISPData()
  },[fetchDISPData]);
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12 mb-2 text-center'>
    <h3>Dispatch ERP Screen</h3>
    </div>
    <div className='row'>
    <div className='col-12 mt-4'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='table-header'>
          <TableRow>
            <TableCell className='table-cell'>Date</TableCell>
            <TableCell className='table-cell' align="left">PO Number</TableCell>
            <TableCell className='table-cell' align="left">Product</TableCell>
            <TableCell className='table-cell' align="left">SKU</TableCell>
            <TableCell className='table-cell' align="left">SKU Description</TableCell>
            <TableCell className='table-cell' align="left">Dispatch Quantity</TableCell>
            <TableCell className='table-cell' align="left">To Party</TableCell>
            <TableCell className='table-cell' align="left">Truck Number</TableCell>
            <TableCell className='table-cell' align="left">Bay No</TableCell>
            <TableCell className='table-cell' align="left">Status</TableCell>
            <TableCell className='table-cell' align='left'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dispData.map((row) => (
            <TableRow className='table-row-style' key={row.Id}>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">{row.PO_Number}</TableCell>
              <TableCell align="left">{row.Item}</TableCell>
              <TableCell align="left">{row.SKU}</TableCell>
              <TableCell align="left">{row.SKU_Description}</TableCell>
              <TableCell align="left">{row.Dispatch_Quantity}</TableCell>
              <TableCell align="left">{row.Party}</TableCell>
              <TableCell align="left">{row.Truck_Number}</TableCell>
              <TableCell align="left">{row.Bay}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align='left'>{row.Status!=='Open'?"":<Link to={`/dispreleasescreen/${row.Id}`}><button className='check-po'>Check</button></Link>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </div>
    </div>
  )
}

export default DISPERPTable