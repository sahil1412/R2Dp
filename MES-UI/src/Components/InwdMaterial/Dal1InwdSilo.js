import React, { useState, useEffect } from "react";
import "../../Styles/MachineItem.css";
import machineApi from "../../apiservices/Machines/machines.api";
import { ToastContainer, toast,Slide } from 'react-toastify';
import {useHistory} from "react-router-dom";
import { Select } from "antd";
import { Input } from "antd";
import dal1SiloApi from "../../apiservices/InwdMachine/Dal1Silo.api";
const { Option } = Select;

const Dal1InwdSilo = (props) => {
  const history=useHistory();
  const item = props.item.Item;
  const quant = parseInt(props.item.Inward_Quantity);
  const PONumber=props.item.PO_Number;
  const [dal1Silo, setDal1Silo] = useState([]);
  const [silo,setSilo]=useState([]);
  const [dal1SiloStatus, setDal1SiloStatus] = useState("");
  const handleRelease=async ()=>{
   const values={
    Dal1Silo_Id:silo.Dal1Silo_Id,
    Status:"Occupied",
    StatusPO:"Released",
    PO_Number:PONumber,
    Quant:quant
   }
   console.log(values);
     dal1SiloApi.updateDal1Silo(values)
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
  const fetchDal1Silos = React.useCallback(() => {
    machineApi
      .fetchDal1Silo()
      .then((response) => setDal1Silo(response.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchDal1Silos();
  }, [fetchDal1Silos, dal1SiloStatus,silo]);

  const handleChange=(value) =>{
    const val=dal1Silo.filter((item)=>item.Dal1Silo_Id===value)
    setSilo(val[0])
    if(val[0].Status==='Free' && (parseInt(val[0].TotalCapacity)-parseInt(val[0].CurrentLoad))>=quant)
    {
        setDal1SiloStatus('OK')
    }
    else
    setDal1SiloStatus('Not OK')
    console.log(parseInt(val[0].TotalCapacity)-parseInt(val[0].CurrentLoad))
    console.log(quant)
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
           <div className="select-wrap" ><Input readOnly value="Dal1 Silos" /></div>
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
              <Select className="col-12" name="Dal1Silo_Id" onChange={handleChange} placeholder="Select Dal Silo">
              {dal1Silo.map((col,index) => {
                return (
                  <Option key={index} value={col.Dal1Silo_Id}>{col.Dal1Silo_Id}</Option>
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
              value={item==='Dal1'?'Same':'Mismatch'}
            />
              </div>
            </div>
            <div className="release-button">
            {dal1SiloStatus === ""?"": dal1SiloStatus === "OK" ? (<button className="mt-3" onClick={handleRelease}>OK to Inward Material</button>): 
            (<div className="text-danger mt-3 h6">Cannot Inward Material</div>)}
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Dal1InwdSilo;
