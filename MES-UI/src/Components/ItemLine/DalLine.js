import React, { useState, useEffect } from "react";
import { Form, Field } from 'react-final-form'
import "../../Styles/MachineItem.css";
import prodApiCollection from "../../apiservices/ERP/PROD.api";
import machineApi from "../../apiservices/Machines/machines.api";
import DallineApi from "../../apiservices/ItemLine/DalLine.api";
import { ToastContainer, toast,Slide } from 'react-toastify';
import {useHistory} from "react-router-dom";
import { Select } from "antd";
import { Input } from "antd";
const { Option } = Select;

const Dal1Line = (props) => {
  const history=useHistory();
  const SelectAdapter = ({ input,...rest }) => {
    return <Select className="select-menu" {...input} {...rest} />;
  };
  const item = props.item.Item;
  const quant = parseInt(props.item.Output_Quantity);
  const PONumber=props.item.PO_Number;
  const [machines, setMachines] = useState([]);
  const [dalSilo, setDalSilo] = useState([]);
  const [dalSiloStatus, setDalSiloStatus] = useState("");
  const [dalSiloComment, setDalSiloComment] = useState("");
  const [pipeline, setPipeline] = useState([]);
  const [pipelineStatus, setPipelineStatus] = useState("");
  const [pipelineComment, setPipelineComment] = useState("");
  const [primarySilo, setPrimarySilo] = useState([]);
  const [primarySiloStatus, setPrimarySiloStatus] = useState("");
  const [primarySiloComment, setPrimarySiloComment] = useState("");
  const [conveyor, setConveyor] = useState([]);
  const [conveyorStatus, setConveyorStatus] = useState("");
  const [conveyorComment, setConveyorComment] = useState("");
  const [fillingSilo, setFillingSilo] = useState([]);
  const [fillingSiloStatus, setFillingSiloStatus] = useState("");
  const [fillingSiloComment, setFillingSiloComment] = useState("");
  const [vibratorIron,setVibratorIron]= useState([]);
  const [vibratorIronStatus,setVibratorIronStatus]= useState("");
  const [vibratorIronComment,setVibratorIronComment]= useState("");
  const [leepackPM,setLeepackPM]= useState([]);
  const [LeepackPMStatus,setLeepackPMStatus]= useState("");
  const [leepackPMComment,setLeepackPMComment]=useState("");

  const handleRelease=async (values)=>
  {
        
     DallineApi.insertDalPoAllocation(values);
     DallineApi.updateDalLine(values)
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
  

  const fetchMachines = React.useCallback(() => {
    prodApiCollection
      .fetchMachines(item)
      .then((response) => {
        setMachines(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [item]);

  const fetchDal1Silo = React.useCallback(() => {
    machineApi
      .fetchDal1Silo()
      .then((response) => setDalSilo(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchPipelines = React.useCallback(() => {
    machineApi
      .fetchPipelines()
      .then((response) => setPipeline(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchPrimarySilo = React.useCallback(() => {
    machineApi
      .fetchPrimarySilo()
      .then((response) => setPrimarySilo(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchConveyors = React.useCallback(() => {
    machineApi
      .fetchConveyors()
      .then((response) => setConveyor(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchFillingsilos = React.useCallback(() => {
    machineApi
      .fetchFillingsilos()
      .then((response) => setFillingSilo(response.data))
      .catch((err) => console.log(err));
  }, []);  
  const fetchVibratorIron = React.useCallback(() => {
    machineApi
      .fetchVibratorIron()
      .then((response) => setVibratorIron(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchLeepackPM = React.useCallback(() => {
    machineApi
      .fetchLeepackPM()
      .then((response) => setLeepackPM(response.data))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    fetchMachines();
    fetchDal1Silo();
    fetchPipelines();
    fetchPrimarySilo();
    fetchConveyors();
    fetchFillingsilos();
    fetchVibratorIron();
    fetchLeepackPM();
  },[
    fetchMachines,
    fetchDal1Silo,
    fetchPipelines,
    fetchPrimarySilo,
    fetchConveyors,
    fetchFillingsilos,
    fetchVibratorIron,
    fetchLeepackPM,
    dalSiloStatus,
    dalSiloComment,
    pipelineStatus,
    pipelineComment,
    primarySiloStatus,
    primarySiloComment,
    fillingSiloStatus,
    fillingSiloComment,
    vibratorIronStatus,
    vibratorIronComment,
    LeepackPMStatus,
    leepackPMComment,
  ])

  const handleDalSilo=(val)=>
  {
    //console.log(val);
  const dalsilo=dalSilo.filter((item)=>item.Dal1Silo_Id===val)
  //console.log(dalsilo)
  if(dalsilo[0])
  {
    if((parseInt(dalsilo[0].TotalCapacity)>= quant) &&  (dalsilo[0].Status==='Free'))
    {
      setDalSiloStatus('OK')
      setDalSiloComment('Sufficient Quantity')
    }
    else
    {
      setDalSiloStatus('Not Ok')
      setDalSiloComment('Insufficient Quantity')
    }
  }
}
const handlePipeline = (val) => {
  const Pipeline=pipeline.filter((item)=>item.PipeLine_Id===val)
  if(Pipeline[0])
  {
    if(Pipeline[0].Status==='Free')
    {
      setPipelineStatus('OK')
      setPipelineComment('M/C Available')
    }
    else
    {
      setPipelineStatus('Not Ok')
      setPipelineComment('M/C Not Available')
    }
  }
};
const handlePrimarySilo = (val) => {
  const Primarysilo=primarySilo.filter((item)=>item.PrimarySilo_Id===val)
  if(Primarysilo[0])
  {
    if(Primarysilo[0].Status==='Free')
    {
      setPrimarySiloStatus('OK')
      setPrimarySiloComment('M/C Available')
    }
    else
    {
      setPrimarySiloStatus('Not Ok')
      setPrimarySiloComment('M/C Not Available')
    }
  }
};
const handleConveyor = (val) => {
  const Conveyor=conveyor.filter((item)=>item.Conveyor_Id===val)
  if(Conveyor[0])
  {
    if(Conveyor[0].Status==='Free')
    {
      setConveyorStatus('OK')
      setConveyorComment('M/C Available')
    }
    else
    {
      setConveyorStatus('Not Ok')
      setConveyorComment('M/C Not Available')
    }
  }
};
const handleFillingSilo = (val) => {
  //console.log(val);
  const FillingSilo=fillingSilo.filter((item)=>item.FillingSilo_Id===val)
  if(FillingSilo[0])
  {
    if(FillingSilo[0].DischargeValve_Status==='Closed' && (FillingSilo[0].Status==='Free'))
    {
      setFillingSiloStatus('OK')
      setFillingSiloComment('M/C Available')
    }
    else
    {
      setFillingSiloStatus('Not Ok')
      setFillingSiloComment('M/C Not Available')
    }
  }
};

const handleLeepackPM = (val) => {
  const LeepackPm=leepackPM.filter((item)=>item.LeepackPM_Id===val)
  if(LeepackPm[0])
  {
    if(LeepackPm[0].Status==='Free')
    {
      setLeepackPMStatus('OK')
      setLeepackPMComment('M/C Available')
    }
    else
    {
      setLeepackPMStatus('Not Ok')
      setLeepackPMComment('M/C Not Available')
    }
  }
};

const handleVibratorIron = (val) => {
  const vibIron=vibratorIron.filter((item)=>item.VibIronRm_Id===val)
  if(vibIron[0])
  {
    if(vibIron[0].Status==='Free')
    {
      setVibratorIronStatus('OK')
      setVibratorIronComment('M/C Available')
    }
    else
    {
      setVibratorIronStatus('Not Ok')
      setVibratorIronComment('M/C Not Available')
    }
  }
};
//console.log(machines)
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
        </div>
        <div className="row mb-4 border">
        <div className="col-3 px-0 ">
        <div className="table-attribute">
            {machines.map((row,index) => {return(<div className="select-wrap" key={index}><Input readOnly value={row.MachineName}></Input></div>)})}
            </div>
        </div>
        <div className="col-9 px-0 ">
        <div className="table-attribute">
        <Form
        onSubmit={handleRelease}
        initialValues={{DalSilo_Id:"",PipeLine_Id:"",primarysilo_Id:"",VibIron_Id:"",FillingSilo_Id:"",LeepackPM_id:"",Conveyor_Id:"",Status:"Occupied",
        StatusPO:"Released",PO_Number:PONumber,Quant:quant}}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="PipeLine_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Pipeline</Option>
              {pipeline.map((col,index) => {
                return (
                  <Option key={index} value={col.PipeLine_Id}>{col.PipeLine_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(pipelineStatus==='OK')?'green-text':'red-text'} value={pipelineStatus}
              onChange={handlePipeline(values.PipeLine_Id)}/>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(pipelineStatus==='OK')?'green-text':'red-text'} value={pipelineComment}
              onChange={handlePipeline(values.PipeLine_Id)}/>
            </div>
            </div>
            <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="FillingSilo_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Filling Silo</Option>
              {fillingSilo.map((col,index) => {
                return (
                  <Option key={index} value={col.FillingSilo_Id}>{col.FillingSilo_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(fillingSiloStatus==='OK')?'green-text':'red-text'} value={fillingSiloStatus}
            onChange={handleFillingSilo(values.FillingSilo_Id)}/>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(fillingSiloStatus==='OK')?'green-text':'red-text'} value={fillingSiloComment}
            onChange={handleFillingSilo(values.FillingSilo_Id)}/>
            </div>
            </div>
            <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="Conveyor_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Conveyor</Option>
              {conveyor.map((col,index) => {
                return (
                  <Option key={index} value={col.Conveyor_Id}>{col.Conveyor_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(conveyorStatus==='OK')?'green-text':'red-text'} value={conveyorStatus}
            onChange={handleConveyor(values.Conveyor_Id)}/>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(conveyorStatus==='OK')?'green-text':'red-text'} value={conveyorComment}
            onChange={handleConveyor(values.Conveyor_Id)}/>
            </div>
            </div>
           <div className="col-12 d-flex">
            <div className="select-wrap ">
              <Field name="DalSilo_Id" component={SelectAdapter}>
              <Option value="" disabled selected>Select Dal Silo</Option>
              {dalSilo.map((col,index) => {
                return (
                  <Option key={index} value={col.Dal1Silo_Id}>{col.Dal1Silo_Id}</Option>
                );
              })}
              </Field>
              </div>
              <div className="select-wrap">
              <input type="text" readOnly className={(dalSiloStatus==='OK')?'green-text':'red-text'} value={dalSiloStatus}
              onChange={handleDalSilo(values.DalSilo_Id)}/>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(dalSiloStatus==='OK')?'green-text':'red-text'} value={dalSiloComment}
              onChange={handleDalSilo(values.DalSilo_Id)}/>
            </div>
            </div>             
            <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="PrimarySilo_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Primary Silo</Option>
              {primarySilo.map((col,index) => {
                return (
                  <Option key={index} value={col.PrimarySilo_Id}>{col.PrimarySilo_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(primarySiloStatus==='OK')?'green-text':'red-text'} value={primarySiloStatus}
              onChange={handlePrimarySilo(values.PrimarySilo_Id)}/>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(primarySiloStatus==='OK')?'green-text':'red-text'} value={primarySiloComment}
              onChange={handlePrimarySilo(values.PrimarySilo_Id)}/>
            </div>
            </div>            
            <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="VibIronRm_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Vibrator Iron Remover Silo</Option>
              {vibratorIron.map((col,index) => {
                return (
                  <Option key={index} value={col.VibIronRm_Id}>{col.VibIronRm_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(vibratorIronStatus==='OK')?'green-text':'red-text'} value={vibratorIronStatus}
            onChange={handleVibratorIron(values.VibIronRm_Id)}/>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(vibratorIronStatus==='OK')?'green-text':'red-text'} value={vibratorIronComment}
            onChange={handleVibratorIron(values.VibIronRm_Id)}/>
            </div>
            </div> 
 <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="LeepackPM_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select LeepackPM Storage</Option>
              {leepackPM.map((col,index) => {
                return (
                  <Option key={index} value={col.LeepackPM_Id}>{col.LeepackPM_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(LeepackPMStatus==='OK')?'green-text':'red-text'} value={LeepackPMStatus}
            onChange={handleLeepackPM(values.LeepackPM_Id)}/>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(LeepackPMStatus==='OK')?'green-text':'red-text'} value={leepackPMComment}
              onChange={handleLeepackPM(values.LeepackPM_Id)}/>
            </div>
            </div>
            <div className="release-button">
            {dalSiloStatus === "" &&
            primarySiloStatus === "" &&
            LeepackPMStatus === "" &&
            pipelineStatus === "" &&
            vibratorIronStatus===""&&
            fillingSiloStatus === "" &&
            conveyorStatus === "" ? (
              ""
            ) : dalSiloStatus === "OK" &&
              primarySiloStatus === "OK" &&
              LeepackPMStatus === "OK" &&
              pipelineStatus === "OK" &&
              vibratorIronStatus === "OK"&&
              fillingSiloStatus === "OK" &&
              conveyorStatus === "OK" ? (
              <button className="mt-3" onClick={handleRelease}>Release</button>
            ) : (
              <div className="text-danger mt-3 h6">Unable to release</div>
            )}
            
            </div>
            
            
          
          </form>
        )}
      />
        </div>
        </div>
        </div>        
</div>
  );
};

export default Dal1Line;
