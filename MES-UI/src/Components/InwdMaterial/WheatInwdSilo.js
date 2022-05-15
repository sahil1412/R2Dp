import React, { useState, useEffect } from "react";
import "../../Styles/MachineItem.css";
import machineApi from "../../apiservices/Machines/machines.api";
import { ToastContainer, toast,Slide } from 'react-toastify';
import {useHistory} from "react-router-dom";
import { Select } from "antd";
import { Input } from "antd";
import wheatSiloApi from "../../apiservices/InwdMachine/WheatSilo.api";
const { Option } = Select;

const WheatInwdSilo = (props) => {
  const history=useHistory();
  const item = props.item.Item;
  const quant = parseInt(props.item.Inward_Quantity);
  const PONumber=props.item.PO_Number;
  const [wheatSilo, setWheatSilo] = useState([]);
  const [silo,setSilo]=useState([]);
  const [wheatSiloStatus, setWheatSiloStatus] = useState("");
  const handleRelease=async ()=>{
   const values={
    WheatSilo_Id:silo.WheatSilo_Id,
    Status:"Occupied",
    StatusPO:"Released",
    PO_Number:PONumber,
    Quant:quant
   }

     wheatSiloApi.updateWheatSilo(values)
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
        setTimeout(()=>{history.push(`/inwardreleasescreen/${props.id}`)},2000)
       }
     })
  }
  const fetchWheatSilos = React.useCallback(() => {
    machineApi
      .fetchWheatsilos()
      .then((response) => setWheatSilo(response.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchWheatSilos();
  }, [fetchWheatSilos, wheatSiloStatus,silo]);
  const handleChange=(value) =>{
    const val=wheatSilo.filter((item)=>item.WheatSilo_Id===value)
    setSilo(val[0])
    if(val[0].Status==='Free' && (parseInt(val[0].TotalCapacity)-parseInt(val[0].CurrentLoad))>=quant)
    {
        setWheatSiloStatus('OK')
    }
    else
    setWheatSiloStatus('Not OK')
  }
  return (
    <div className="container-fluid">
    <ToastContainer hideProgressBar draggable={false} position="top-right" transition={Slide} autoClose={2000} />
      <div className="row mt-4">
        <div className="col-12">
        <div className="row border">
        <div className="col-4 py-3"><strong>Machines</strong></div>
        <div className="col-7 py-3"><strong>Allocation</strong></div>
        </div>
        </div>
        </div>
        <div className="row mb-4 border">
        <div className="col-4 px-0 ">
        <div className="table-attribute">
           <div className="select-wrap" ><Input readOnly value="Wheat Silos" /></div>
           <div className="select-wrap" ><Input readOnly value="Discharge Valve"/></div>
           <div className="select-wrap" ><Input readOnly value="Total Capacity"/></div>
           <div className="select-wrap" ><Input readOnly value="Current Load"/></div>
           <div className="select-wrap" ><Input readOnly value="Material Match"/></div>
            </div>
        </div>
        <div className="col-7 px-0 ">
        <div className="table-attribute">
          <div className="col-12 d-flex flex-column">
            <div className="select-wrap ">
              <Select className="col-12" name="WheatSilo_Id" onChange={handleChange} placeholder="Select Wheat Silo">
              {wheatSilo.map((col,index) => {
                return (
                  <Option key={index} value={col.WheatSilo_Id}>{col.WheatSilo_Id}</Option>
                );
              })}
              </Select>
              </div>
              <div className="select-wrap">
              <Input
              style={{border:"1px solid #d9d9d9"}}
              className="col-11"
              name="DischargeValve"
              type="text"
              readOnly
              value={silo.DischargeValve}
            />
              </div>
              <div className="select-wrap ">
              <Input
              style={{border:"1px solid #d9d9d9"}}
              className="col-11"
              name="TotalCapacity"
              type="text"
              readOnly
              value={silo.TotalCapacity}
            />
              </div>
              <div className="select-wrap ">
              <Input
              style={{border:"1px solid #d9d9d9"}}
              className="col-11"
              name="CurrentLoad"
              type="text"
              value={silo.CurrentLoad}
              readOnly
            />
              </div>
              <div className="select-wrap ">
              <Input
              style={{border:"1px solid #d9d9d9"}}
              className="col-11 text-success"
              type="text"
              readOnly
              value={item==='Wheat'?'Same':'Mismatch'}
            />
              </div>
            </div>
            <div className="release-button">
            {wheatSiloStatus === ""?"": wheatSiloStatus === "OK" ? (<button className="mt-3" onClick={handleRelease}>OK to Inward Material</button>): 
            (<div className="text-danger mt-3 h6">Cannot Inward Material</div>)}
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default WheatInwdSilo;
