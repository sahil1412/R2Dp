import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import inwdApiCollection from '../../../apiservices/ERP/INWD.api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const INWDERPTable = () => {
    const [prodData,setProdData]=useState([])
    const fetchINWDData = React.useCallback(() => {
        inwdApiCollection.fetchINWDERP()
        .then((response) => {
          setProdData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
  useEffect(() => {
   fetchINWDData()
  },[fetchINWDData]);
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12 mb-2 text-center'>
    <h3>Inward ERP Screen</h3>
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
            <TableCell className='table-cell' align="left">Inward Quantity</TableCell>
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
              <TableCell align="left">{row.Inward_Quantity}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align='left'>{row.Status!=='Open'?"":<Link to={`/inwdreleasescreen/${row.Id}`}><button className='check-po'>Check</button></Link>}
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

export default INWDERPTable