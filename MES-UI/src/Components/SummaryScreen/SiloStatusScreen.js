import React from 'react';
import WheatSiloSummary from './WheatSilo/WheatSiloSummary';
import Dal1SiloSummary from './Dal1Silo/Dal1SiloSummary';

const SiloStatusScreen = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12 mb-2 text-center'>
    <h3>Silo Status Summary Screen</h3>
    </div>
    </div>
    <div className='row' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}> 
    <div className='col-12 bg-primary text-white d-flex'>
    <div className='col-3 py-3 px-3'><strong>Silo</strong></div>
    <div className='col-2 py-3 px-3'><strong>Initial Weight</strong></div>
    <div className='col-2 py-3 px-3'><strong>Inward</strong></div>
    <div className='col-2 py-3 px-3'><strong>Consumption</strong></div>
    <div className='col-3 py-3 px-3'><strong>Final Weight</strong></div>
    </div>
    <div className='col-12'>
       <WheatSiloSummary/>
       <Dal1SiloSummary />
    </div>
    </div>
    </div>
  )
}

export default SiloStatusScreen;