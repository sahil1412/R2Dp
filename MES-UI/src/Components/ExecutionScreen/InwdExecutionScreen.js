import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Input,Button } from 'antd';
import poTypeApiCollection from "../../apiservices/POtype/potype.api";
import execINWDPOApiCollection from '../../apiservices/ExecutePO/executeINWDPO.api';
import { ToastContainer, toast,Slide } from 'react-toastify';
import inwdApiCollection from '../../apiservices/ERP/INWD.api';

const InwdExecutionScreen = () => {
    const history=useHistory();
    const [inwdData,setInwdData]=useState([]);
    const [poType,setPoType]=useState([]);
    const [forcePONumber,SetForcePONumber]=useState(0)
    const fetchINWDData = React.useCallback(() => {
        inwdApiCollection.fetchINWDERP()
        .then((response) => {
          setInwdData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
      const fetchPoType=React.useCallback(() => {
        poTypeApiCollection.fetchPoType(2)
        .then((response) => {
          const potype=response.data
          setPoType(potype)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
  useEffect(() => {
   fetchINWDData()
   fetchPoType()
  },[fetchINWDData,fetchPoType,inwdData,forcePONumber]);
  const handleExecution=(PONumber)=>
  {
   execINWDPOApiCollection.executePO(PONumber)
   .then((data)=>
     {
       if(data.data.success)
       {
        toast.success(data.data.message);
        setTimeout(()=>{history.push('/poexecscreen')},2000)
       }
       else
       {
         toast.error(data.data.message);
         setTimeout(()=>{history.push('/poexecscreen')},2000)
       }
     })
  }
  const changeStatus=(e)=>
  {
    SetForcePONumber(parseInt(e.target.value));
  }
  const forceStopPO=(e)=>
  {
    let status='Force Stopped';
   inwdApiCollection.changeStatus(forcePONumber,status)
    .then((data)=>
     {
       if(data.data.success)
       {
        toast.success(data.data.message);
        setTimeout(()=>{history.push('/poexecscreen')},2000)
       }
       else
       {
         toast.error(data.data.message);
         setTimeout(()=>{history.push('/poexecscreen')},2000)
       }
     })
  }
  return (
    <div className='container-fluid'>
    <ToastContainer hideProgressBar draggable={false} position="top-right" transition={Slide} autoClose={2000} />
    <div className='row'>
    <div className='col-12 mb-2 text-center'>
    <h3>Inward Execution Screen</h3>
    </div> 
    <div className='row'>
    <div className='col-12 mt-4'>
    <TableContainer className='table-container' component={Paper}>
      <Table aria-label="customized table">
        <TableHead className='table-header'>
          <TableRow>
            <TableCell className='table-cell'>Date</TableCell>
            <TableCell className='table-cell' align="left">PO Number</TableCell>
            <TableCell className='table-cell' align="left">PO Type</TableCell>
            <TableCell className='table-cell' align="left">Product</TableCell>
            <TableCell className='table-cell' align="left">SKU</TableCell>
            <TableCell className='table-cell' align="left">SKU Description</TableCell>
            <TableCell className='table-cell' align="left">Inward Quantity</TableCell>
            <TableCell className='table-cell' align="left">PO Status</TableCell>
            <TableCell className='table-cell' align='left'>Action</TableCell>
            <TableCell className='table-cell' align='left'>Confirmation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {inwdData.filter((item)=>item.Status!=="Open").map((row) => {
           let action=(row.active).toString();
          return(
            <TableRow key={row.Id}>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">{row.PO_Number}</TableCell>
              {poType && poType.map((item,index)=>
                {
                  return( <TableCell key={index} align="left">{item.PO_Type}</TableCell>)
                })}
              <TableCell align="left">{row.Item}</TableCell>
              <TableCell align="left">{row.SKU}</TableCell>
              <TableCell align="left">{row.SKU_Description}</TableCell>
              <TableCell align="left">{row.Inward_Quantity}</TableCell>
              <TableCell align="left"><b>{row.Status}</b></TableCell>
              <TableCell align="left" className='green-text'>{action==='true'?<b>Running</b>:
              <button className='check-po' onClick={()=>handleExecution(row.PO_Number)}>Execute</button>}</TableCell>
              <TableCell align="left">{row.ConfirmationTime}</TableCell>
            </TableRow>)
              }
          )}
      
        </TableBody>
      </Table>
      <div className='row mt-3 mb-3'>
      <div className='col-2 force-class'>
      Force Stop PO
      </div>
      <div className='col-2'>
      <Input placeholder="Enter PO Number" onChange={changeStatus}  />
      </div>
      <div className='col-2'>
      <Button type="primary" onClick={forceStopPO}>Execute</Button>
      </div>
      </div>
    </TableContainer>
    </div>
    </div>
    </div>
    </div>
  )
}

export default InwdExecutionScreen