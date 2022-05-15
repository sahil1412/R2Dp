import React,{useEffect,useState} from 'react';
import aatalineApi from '../../apiservices/ItemLine/aataline.api';
import DallineApi from '../../apiservices/ItemLine/DalLine.api';
import "../../Styles/SummaryScreen.css";

const MESSummaryScreen = () => {
  const [aataLine,setAataLine]=useState([]);
  const [dalLine,setDalLine]=useState([]);
  useEffect(()=>
  {
  aatalineApi.fetchAataPoAllocation()
  .then((response)=>
  {
    setAataLine(response.data);
  })
},[])
  useEffect(()=>
  {
  DallineApi.fetchDalPoAllocation()
  .then((response)=>
  {
    setDalLine(response.data);
    console.log(response.data);
  })
  },[])
  return (
    <div className='container-fluid'>
    <div className='row'>
   <div className='col-12 mb-2 text-center'>
   <h3>MES Summary Screen</h3>
   </div> 
   <div className='col-12'>
   {aataLine.map((val,index)=>{
     let i;
     var aataKeys=[]
     for(i=4;i<(Object.keys(val).length);i++)
     {
      aataKeys.push(Object.keys(val)[i])
     }
     return(
      <div className='col-12' key={index}>
     <div className='row dispatch-border'>
     <div className='col-1 bg-primary text-white d-flex align-items-center'><strong>Aata Line</strong></div>
     <div className='col-1 py-2 bg-primary text-white d-flex justify-content-center flex-column'>
     <div className='col-12'><strong>PO: {val.PO_Number}</strong></div>
     <div className='col-12'><strong>O/P: {val.ProdQuantity}</strong></div>
     </div>
     <div className='col-10 px-0 line-wrap'>
     <div className='col-12 head-line'>
     {aataKeys.map((val,index)=>
      {
        return(<div className='col-2 head-line-name' key={index}>{val}</div>)
      })}
     </div>
     <div className='col-12 head-value'>
     <div className='col-2 head-value-name'>{val.WheatSilo==='Occupied'?'OK':val.WheatSilo}</div>
     <div className='col-2 head-value-name'>{val.PipeLine?'OK':val.PipeLine}</div>
     <div className='col-2 head-value-name'>{val.GrinderStorage?'OK':val.GrinderStorage}</div>
     <div className='col-2 head-value-name'>{val.Grinder?'OK':val.Grinder}</div>
     <div className='col-2 head-value-name'>{val.FillingSilo?'OK':val.FillingSilo}</div>
     <div className='col-2 head-value-name'>{val.Conveyor?'OK':val.Conveyor}</div>
     </div>
     </div>
     </div>
     </div>)
   })}
   </div>
   <div className='col-12'>
   {dalLine.map((val,index)=>{
     let i;
     var dalKeys=[]
     for(i=4;i<(Object.keys(val).length);i++)
     {
      dalKeys.push(Object.keys(val)[i])
     }
     return(
      <div className='col-12' key={index}>
     <div className='row dispatch-border'>
     <div className='col-1 bg-primary text-white d-flex align-items-center'><strong>Dal Line</strong></div>
     <div className='col-1 py-2 bg-primary text-white d-flex justify-content-center flex-column'>
     <div className='col-12'><strong>PO: {val.PO_Number}</strong></div>
     <div className='col-12'><strong>O/P: {val.ProdQuantity}</strong></div>
     </div>
     <div className='col-10 px-0 line-wrap'>
     <div className='col-12 head-line'>
     {dalKeys.map((val,index)=>
      {
        return(<div className='col-2 head-line-name' key={index}>{val}</div>)
      })}
     </div>
     <div className='col-12 head-value'>
     <div className='col-2 head-value-name'>{val.Dal1Silos==='Occupied'?'OK':val.Dal1Silos}</div>
     <div className='col-2 head-value-name'>{val.PipeLine?'OK':val.PipeLine}</div>
     <div className='col-2 head-value-name'>{val.PrimarySilo?'OK':val.PrimarySilo}</div>
     <div className='col-2 head-value-name'>{val.VibIronRm?'OK':val.VibIronRm}</div>
     <div className='col-2 head-value-name'>{val.FillingSilo?'OK':val.FillingSilo}</div>
     <div className='col-2 head-value-name'>{val.LeepackPM?'OK':val.LeepackPM}</div>
     <div className='col-2 head-value-name'>{val.Conveyor?'OK':val.Conveyor}</div>
     </div>
     </div>
     </div>
     </div>)
   })}
   </div>
    </div>
    </div>
  )
}

export default MESSummaryScreen;