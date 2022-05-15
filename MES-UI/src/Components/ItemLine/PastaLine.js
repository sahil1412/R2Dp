import React, { useState, useEffect } from "react";
import "../../Styles/MachineItem.css";
import { ToastContainer, toast,Slide } from 'react-toastify';


const PastaLine = (props) => {

  return (
    <div className="container-fluid">
      <ToastContainer hideProgressBar draggable={false} position="top-right" transition={Slide} autoClose={2000} /> 
      <div className="row mt-4">
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Machines</strong></div>
        <div className="col-3 py-3"><strong>Allocation</strong></div>
        <div className="col-3 py-3"><strong>Status</strong></div>
        <div className="col-3 py-3"><strong>Comments</strong></div>
        </div>
        </div>
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Pasta Silo</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div>
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Pipeline</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div>
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Primary Silo</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div>
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Vibrator & Iron remover</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div>
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Filling Silo</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div> 
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Leepack PM</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div>
        <div className="col-12">
        <div className="row border">
        <div className="col-3 py-3"><strong>Conveyor</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        <div className="col-3 py-3"><strong>-----</strong></div>
        </div>
        </div> 
        </div>
        <div className="col-12">
        <div className="row border">
        <button className="col-3 py-3">Release</button>
        </div>
        </div>
</div>
  );
};

export default PastaLine;
