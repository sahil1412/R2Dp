import React from 'react';
import "../../Styles/DispatchScreen.css";

const DispSummaryScreen = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12 mb-2 text-center'>
     <h3>DISP Summary Screen</h3>
    </div> 
    <div className='col-12'>
    <div className='row py-3'>
    <div className='col-3'></div>
    <div className='col-9 d-flex'>
    <div className='col-3'><strong>ASRS Delivery</strong></div>
    <div className='col-2'><strong>AGVs</strong></div>
    <div className='col-2'><strong>Gantry</strong></div>
    <div className='col-2'><strong>Conveyors</strong></div>
    <div className='col-3'><strong>Telescopic</strong></div>
    </div>
    </div>
    <div className='row dispatch-border'>
    <div className='col-1 bg-primary text-white d-flex align-items-center'><strong>B1:Bay1</strong></div>
    <div className='col-2 py-2 bg-primary text-white d-flex justify-content-center flex-column'>
    <div className='col-12'><strong>PO: XXXXX</strong></div>
    <div className='col-12'><strong>Truck: UPXY-KKK4</strong></div>
    </div>
    <div className='col-9 px-0 d-flex'>
    <div className='col-3 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    <div className='col-2 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    <div className='col-2 px-3 d-flex align-items-center text-white bg-success'>Ok</div>
    <div className='col-2 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    <div className='col-3 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    </div>
    </div>
    <div className='row dispatch-border'>
    <div className='col-1 bg-primary text-white d-flex align-items-center'><strong>B1:Bay1</strong></div>
    <div className='col-2 py-2 bg-primary text-white d-flex justify-content-center flex-column'>
    <div className='col-12'><strong>PO: XXXXX</strong></div>
    <div className='col-12'><strong>Truck: UPXY-KKK4</strong></div>
    </div>
    <div className='col-9 px-0 d-flex'>
    <div className='col-3 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    <div className='col-2 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    <div className='col-2 px-3 d-flex align-items-center text-white bg-success'>Ok</div>
    <div className='col-2 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    <div className='col-3 px-3 d-flex align-items-center text-white bg-success'>OK</div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default DispSummaryScreen