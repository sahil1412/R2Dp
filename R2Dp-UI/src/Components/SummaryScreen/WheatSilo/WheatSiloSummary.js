import React, { useEffect, useState } from "react";
import wheatSiloStatus from "../../../apiservices/Machines/WheatSiloStatus/WheatSiloStatus.api";
import machineApi from "../../../apiservices/Machines/machines.api";
var newArr = [];
var wheatSummary=[];
const WheatSiloSummary = () => {
  const [wheatSiloSummary, setWheatSiloSummary] = useState([]);
  const [wheatSilo, setWheatSilo] = useState([]);
  useEffect(() => {
    machineApi.fetchWheatsilos()
      .then((response) => {
        setWheatSilo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    wheatSiloStatus.fetchWheatSiloStatus().then((res) => {
      setWheatSiloSummary(res.data);
    });
  });
  wheatSummary=wheatSiloSummary.map((val)=>{return val.WheatSilo_Id})
  newArr = wheatSilo.filter(el=> !wheatSummary.includes(el.WheatSilo_Id));
  return <div>
  {wheatSiloSummary.map((item,index)=>
    {
        return(<div key={index} className='col-12 d-flex justify-content-center'>
        <div className='col-3 py-2 px-3'>WheatSilo-{item.WheatSilo_Id}</div>
        <div className='col-2 py-2 px-3'>{item.InitialWeight}</div>
        <div className='col-2 py-2 px-3'>{item.InwdQuantity}</div>
        <div className='col-2 py-2 px-3'>{item.ProdQuantity}</div>
        <div className='col-3 py-2 px-3'>{item.FinalWeight}</div>
        </div>)
    })}
  {newArr.map((item,index)=>
    {
        return(<div key={index} className='col-12 d-flex justify-content-center'>
        <div className='col-3 py-2 px-3'>WheatSilo-{item.WheatSilo_Id}</div>
        <div className='col-2 py-2 px-3'>{item.CurrentLoad}</div>
        <div className='col-2 py-2 px-3'>0</div>
        <div className='col-2 py-2 px-3'>0</div>
        <div className='col-3 py-2 px-3'>{item.CurrentLoad}</div>
        </div>)
    })}
    </div>;
};

export default WheatSiloSummary;

