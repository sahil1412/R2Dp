import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import dispApiCollection from "../../apiservices/ERP/DISP.api";
import poTypeApiCollection from "../../apiservices/POtype/potype.api";
import "../../Styles/ReleaseScreen.css";
import DispChecks from "../DISPChecks/DispChecks";

const DISPReleaseScreen = () => {
    var {id}=useParams();
    id=parseInt(id);
    const [dispData,setDispData]=useState([])
    const [poType,setPoType]=useState([])
    const fetchDISPData = React.useCallback(() => {
      dispApiCollection.fetchDISPERPById(id)
      .then((response) => {
        setDispData(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
    }, [id])
    const fetchPoType=React.useCallback(() => {
      poTypeApiCollection.fetchPoType(3)
      .then((response) => {
        const potype=response.data
        setPoType(potype)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
  useEffect(() => {
  fetchDISPData()
  fetchPoType()
  },[fetchDISPData,fetchPoType]);
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 mt-5 text-center">
            <h3>Dispatch Process Order Release Screen</h3>
          </div>
          <div className="col-4 mt-4">
            <div className="po-box">
              <form>
                <div className="form-container">
                  <div className="input-container">
                    <div className="input-tag">
                      <b>Data</b>
                    </div>
                    <div className="input-value">
                      <b>Value</b>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="input-tag">Date</div>
                    <div className="input-value">
                      <input type="text" value={dispData.Date} name="Date" readOnly></input>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="input-tag">PO Type</div>
                    <div className="input-value">
                    {poType && poType.map((item,index)=>
                      {
                        return(<input key={index} type="text" name="POType" value={item.PO_Type} readOnly></input>)
                      })}
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="input-tag">PO Number</div>
                    <div className="input-value">
                      <input type="text" value={dispData.PO_Number} name="PONumber" readOnly></input>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="input-tag">Dispatch Quantity</div>
                    <div className="input-value">
                      <input type="text" value={dispData.Dispatch_Quantity} name="Dispatch_Quantity" readOnly></input>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="input-tag">Truck Number</div>
                    <div className="input-value">
                      <input type="text" value={dispData.Truck_Number} name="Truck_Number" readOnly></input>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="input-tag">Loading Bay</div>
                    <div className="input-value">
                      <input type="text" value={dispData.Bay} name="Bay" readOnly></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6 mt-4">
          <div className="machine-status-box">
          <DispChecks stock={true} pallet={true} truck={true} agv={true} disp={dispData}/>
          </div>
        </div>
        </div>
      </div>
    );
  };

export default DISPReleaseScreen