import React from 'react';
import {useHistory} from "react-router-dom";
import dispApiCollection from '../../apiservices/ERP/DISP.api';
import { ToastContainer, toast,Slide } from 'react-toastify';

const DispChecks = (props) => {
    const history=useHistory();
    const {stock,pallet,truck,agv,disp}=props;
    const handleRelease=async ()=>
    {
        let status='Released';
       dispApiCollection.changeStatus(disp.PO_Number,status)
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
          setTimeout(()=>{history.push(`/prodreleasescreen/${props.item.Id}`)},2000)
         }
       })
    }
  return (
    <div>
    <ToastContainer hideProgressBar draggable={false} position="top-right" transition={Slide} autoClose={2000} />
    <div className='container-fluid'>
    <div className='row border-bt'>
    <div className="col-4 py-3"><strong>Checks</strong></div>
    <div className="col-4 py-3"><strong>Status</strong></div>
    <div className="col-4 py-3"><strong>Comments</strong></div>
    </div>
    <div className='row'>
    <div className="col-4">
    <div className='row d-flex flex-column'>
    <div className='col-12 py-3'>Stock Availability</div>
    <div className='col-12 py-3'>Pallet Allocation</div>
    <div className='col-12 py-3'>Truck Reported</div>
    <div className='col-12 py-3'>AGV</div>
    <div className='col-12 py-3'>Loading Bay</div>
    </div>
    </div>
    <div className="col-4"><div className='row d-flex flex-column'>
    <div className='col-12 py-3'>{stock?<div className='green-text'>OK</div>:<div className='red-text'>Not Ok</div>}</div>
    <div className='col-12 py-3'>{pallet?<div className='green-text'>OK</div>:<div className='red-text'>Not Ok</div>}</div>
    <div className='col-12 py-3'>{truck?<div className='green-text'>OK</div>:<div className='red-text'>Not Ok</div>}</div>
    <div className='col-12 py-3'>{agv?<div className='green-text'>OK</div>:<div className='red-text'>Not Ok</div>}</div>
    <div className='col-12 py-3'>{disp.Bay?<div className='green-text'>OK</div>:<div className='red-text'>Not Ok</div>}</div>
    </div>
    </div>
    <div className="col-4">
    <div className='row d-flex flex-column'>
    <div className='col-12 py-3'>{stock?'Stock Available':'Stock Not Available'}</div>
    <div className='col-12 py-3'>{pallet?'Received from ASRS':'No Pallet'}</div>
    <div className='col-12 py-3'>{truck?'M/C Available':'M/C Not Available'}</div>
    <div className='col-12 py-3'>{agv?'M/C Available':'M/C Not Available'}</div>
    <div className='col-12 py-3'>{disp.Bay?`PO ${disp.PO_Number} running on ${disp.Bay}`:'Not Running'}</div>
    </div>
    </div>
    </div>
    <div className='row'>
    <div className='col-12'>
    <div className="release-button">
            {stock && pallet && truck && agv && disp.Bay? <button onClick={handleRelease} className="mt-3" >Execute</button>: 
            <div className="text-danger mt-3 mb-4 h6">Cannot Execute</div>}
          </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default DispChecks