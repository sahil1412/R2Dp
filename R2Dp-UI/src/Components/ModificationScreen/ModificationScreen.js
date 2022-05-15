import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rejectedpalletApiCollection from '../../apiservices/RejectedPallet/RejectedPallet.api';
import "../../Styles/ModificationScreen.css";

const ModificationScreen = () => {
    const [rejectedPallet,setRejectedPallet]=useState([]);
    const fetchINWDData = React.useCallback(() => {
        rejectedpalletApiCollection.fetchRejectedPalletInfo()
        .then((response) => {
          setRejectedPallet(response.data)
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
    <div className='col-12 text-center mt-5'><h3>MES: ASRS Reject Pallet Qty. Modification Screen</h3></div>
    <div className='col-12 mt-4'>
    <TableContainer className='table-container' component={Paper}>
      <Table aria-label="customized table">
        <TableHead className='table-header'>
          <TableRow>
            <TableCell className='table-cell'>Date</TableCell>
            <TableCell className='table-cell' align="left">PO Number</TableCell>
            <TableCell className='table-cell' align="left">SKU</TableCell>
            <TableCell className='table-cell' align="left">SKU Description</TableCell>
            <TableCell className='table-cell' align="left">Pallet Id</TableCell>
            <TableCell className='table-cell' align="left">MES Qty</TableCell>
            <TableCell className='table-cell' align="left">Check Qty</TableCell>
            <TableCell className='table-cell' align="left">Update</TableCell>
            <TableCell className='table-cell' align='left'>Update Time</TableCell>
            <TableCell className='table-cell' align='left'>Confirmation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rejectedPallet.map((val,index)=>
            {
                return(<TableRow key={index}>
                    <TableCell align="left">{val.Date}</TableCell>
                    <TableCell align="left">{val.PO_Number}</TableCell>
                    <TableCell align="left">{val.SKU}</TableCell>
                    <TableCell align="left">{val.SKU_Description}</TableCell>
                    <TableCell align="left">{val.PalletId}</TableCell>
                    <TableCell align="left">{val.MES_Qty}</TableCell>
                    <TableCell align="left">{val.Check_Qty}</TableCell>
                    <TableCell align="left"><button className='btn-update'>Update</button></TableCell>
                    <TableCell align="left">{val.UpdatedDate?val.UpdatedDate:"Nil"}</TableCell>
                    <TableCell align="left">Pallet to ASRS</TableCell>
                  </TableRow>)
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  )
}

export default ModificationScreen