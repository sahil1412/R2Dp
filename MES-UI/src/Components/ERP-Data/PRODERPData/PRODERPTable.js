import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import prodApiCollection from '../../../apiservices/ERP/PROD.api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const PRODERPTable = () => {
    const [prodData,setProdData]=useState([])
    const fetchPRODData = React.useCallback(() => {
        prodApiCollection.fetchPRODERP()
        .then((response) => {
          setProdData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
  useEffect(() => {
   fetchPRODData()
  },[fetchPRODData]);
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12 mb-2 text-center'>
    <h3>Production ERP Screen</h3>
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
            <TableCell className='table-cell' align="left">Output Quantity</TableCell>
            <TableCell className='table-cell' align="left">Status</TableCell>
            <TableCell className='table-cell' align='left'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prodData.map((row) => (
            <TableRow className='table-row-style' key={row.Id}>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">{row.PO_Number}</TableCell>
              <TableCell align="left">{row.Item}</TableCell>
              <TableCell align="left">{row.SKU}</TableCell>
              <TableCell align="left">{row.SKU_Description}</TableCell>
              <TableCell align="left">{row.Output_Quantity}</TableCell>
              <TableCell align="left"><b>{row.Status}</b></TableCell>
              <TableCell align='left'>{row.Status!=='Open'?"":<Link to={`/prodreleasescreen/${row.Id}`}><button className='check-po'>Check</button></Link>}
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
export default PRODERPTable