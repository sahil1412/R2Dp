import React, { useEffect, useState } from "react";
import dal1SiloStatus from "../../../apiservices/Machines/Dal1SiloStatus/Dal1SiloStatus.api";
import machineApi from "../../../apiservices/Machines/machines.api";
var newArr = [];
var dal1Summary=[];
const Dal1SiloSummary = () => {
  const [dal1SiloSummary, setDal1SiloSummary] = useState([]);
  const [dal1Silo, setDal1Silo] = useState([]);
  useEffect(() => {
    machineApi.fetchDal1Silo()
      .then((response) => {
        setDal1Silo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    dal1SiloStatus.fetchDal1SiloStatus().then((res) => {
      setDal1SiloSummary(res.data);
      console.log(res.data);
    });
  });
  dal1Summary=dal1SiloSummary.map((val)=>{return val.Dal1Silo_Id})
  newArr = dal1Silo.filter(el=> !dal1Summary.includes(el.Dal1Silo_Id));
  return <div>
  {dal1SiloSummary.map((item,index)=>
    {
        return(<div key={index} className='col-12 d-flex justify-content-center'>
        <div className='col-3 py-2 px-3'>DalSilo-{item.Dal1Silo_Id}</div>
        <div className='col-2 py-2 px-3'>{item.InitialWeight}</div>
        <div className='col-2 py-2 px-3'>{item.InwdQuantity}</div>
        <div className='col-2 py-2 px-3'>{item.ProdQuantity}</div>
        <div className='col-3 py-2 px-3'>{item.FinalWeight}</div>
        </div>)
    })}
  {newArr.map((item,index)=>
    {
        return(<div key={index} className='col-12 d-flex justify-content-center'>
        <div className='col-3 py-2 px-3'>DalSilo-{item.Dal1Silo_Id}</div>
        <div className='col-2 py-2 px-3'>{item.CurrentLoad}</div>
        <div className='col-2 py-2 px-3'>0</div>
        <div className='col-2 py-2 px-3'>0</div>
        <div className='col-3 py-2 px-3'>{item.CurrentLoad}</div>
        </div>)
    })}
    </div>;
};

export default Dal1SiloSummary;

