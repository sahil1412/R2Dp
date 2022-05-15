import React, { useState, useEffect } from "react";
import "../../Styles/MachineItem.css";
import prodApiCollection from "../../apiservices/ERP/PROD.api";
import machineApi from "../../apiservices/Machines/machines.api";
import aatalineApi from "../../apiservices/ItemLine/aataline.api";
import { Form, Field } from 'react-final-form'
import { ToastContainer, toast,Slide } from 'react-toastify';
import {useHistory} from "react-router-dom";
import { Select } from "antd";
import { Input } from "antd";
const { Option } = Select;

const AataLine = (props) => {
  const history=useHistory();
  const SelectAdapter = ({ input,...rest }) => {
    return <Select className="select-menu" {...input} {...rest} />;
  };
  const item = props.item.Item;
  const quant = parseInt(props.item.Output_Quantity);
  const PONumber=props.item.PO_Number;
  const [machines, setMachines] = useState([]);
  const [wheatSilo, setWheatSilo] = useState([]);
  const [pipeline, setPipeline] = useState([]);
  const [grinder, setGrinder] = useState([]);
  const [grinderStorage, setGrinderStorage] = useState([]);
  const [fillingSilo, setFillingSilo] = useState([]);
  const [conveyor, setConveyor] = useState([]);
  const [wheatSiloStatus, setWheatSiloStatus] = useState("");
  const [pipelineStatus, setPipelineStatus] = useState("");
  const [grinderStorageStatus, setGrinderStorageStatus] = useState("");
  const [grinderStatus, setGrinderStatus] = useState("");
  const [fillingSiloStatus, setFillingSiloStatus] = useState("");
  const [conveyorStatus, setConveyorStatus] = useState("");
  const [wheatSiloComment, setWheatSiloComment] = useState("");
  const [grinderStorageComment, setGrinderStorageComment] = useState("");
  const [grinderComment, setGrinderComment] = useState("");
  const [pipelineComment, setPipelineComment] = useState("");
  const [fillingSiloComment, setFillingSiloComment] = useState("");
  const [conveyorComment, setConveyorComment] = useState("");
  const handleRelease=async (values)=>
  {
        
     aatalineApi.insertAataPoAllocation(values);
     aatalineApi.updateAataLine(values)
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [item]);
  const fetchWheatSilos = React.useCallback(() => {
    machineApi
      .fetchWheatsilos()
      .then((response) => setWheatSilo(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchPipelines = React.useCallback(() => {
    machineApi
      .fetchPipelines()
      .then((response) => setPipeline(response.data))
      .catch((err) => console.log(err));
  }, []);
  const fetchGrinder = React.useCallback(() => {
    machineApi
      .fetchGrinder()
      .then((response) => setGrinder(response.data))
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
  const fetchGrinderStorage = React.useCallback(() => {
    machineApi
      .fetchGrinderStorage()
      .then((response) => setGrinderStorage(response.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchMachines();
    fetchWheatSilos();
    fetchPipelines();
    fetchConveyors();
    fetchFillingsilos();
    fetchGrinder();
    fetchGrinderStorage();
  }, [
    fetchMachines,
    fetchWheatSilos,
    fetchPipelines,
    fetchConveyors,
    fetchFillingsilos,
    fetchGrinder,
    fetchGrinderStorage,
    wheatSiloStatus,
    grinderStorageStatus,
    grinderStatus,
    pipelineStatus,
    fillingSiloStatus,
    conveyorStatus,
    wheatSiloComment,
  ]);
   const handleWheatSilo=(val)=>
    {
    const wheatsilo=wheatSilo.filter((item)=>item.WheatSilo_Id===val)
    if(wheatsilo[0])
    {
      if((parseInt(wheatsilo[0].TotalInwardCapacity)>= quant) && (wheatsilo[0].DischargeValve_Status==='Closed') && (wheatsilo[0].Status==='Free'))
      {
        setWheatSiloStatus('OK')
        setWheatSiloComment('Sufficient Quantity')
      }
      else
      {
        console.log(quant);
        console.log(wheatsilo[0].TotalInwardCapacity);
        setWheatSiloStatus('Not Ok')
        setWheatSiloComment('Insufficient Quantity')
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
  const handleGrinder = (val) => {
    const Grinder =grinder.filter((item)=>item.Grinder_Id===val)
    if(Grinder[0])
    {
      if(Grinder[0].Status==='Free')
      {
        setGrinderStatus('OK')
        setGrinderComment('M/C Available')
      }
      else
      {
        setGrinderStatus('Not Ok')
        setGrinderComment('M/C Not Available')
      }
    }
  };
  const handleGrinderStorage = (val) => {
    const GStorage=grinderStorage.filter((item)=>item.GStorage_Id===val)
    if(GStorage[0])
    {
      if(GStorage[0].Status==='Free')
      {
        setGrinderStorageStatus('OK')
        setGrinderStorageComment('M/C Available')
      }
      else
      {
        setGrinderStorageStatus('Not Ok')
        setGrinderStorageComment('M/C Not Available')
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
        initialValues={{WheatSilo_Id:"",PipeLine_Id:"",GStorage_Id:"",Grinder_Id:"",FillingSilo_Id:"",Conveyor_Id:"",Status:"Occupied",
        StatusPO:"Released",PO_Number:PONumber,Quant:quant}}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
          <div className="col-12 d-flex">
            <div className="select-wrap ">
              <Field name="WheatSilo_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Wheat Silo</Option>
              {wheatSilo.map((col,index) => {
                return (
                  <Option key={index} value={col.WheatSilo_Id}>{col.WheatSilo_Id}</Option>
                );
              })}
              </Field>
              </div>
              <div className="select-wrap">
            <input type="text" readOnly className={(wheatSiloStatus==='OK')?'green-text':'red-text'} value={wheatSiloStatus}
            onChange={handleWheatSilo(values.WheatSilo_Id)}/>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(wheatSiloStatus==='OK')?'green-text':'red-text'} value={wheatSiloComment}
            onChange={handleWheatSilo(values.WheatSilo_Id)}/>
            </div>
            </div>
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
              <Field name="GStorage_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Grinder Storage</Option>
              {grinderStorage.map((col,index) => {
                return (
                  <Option key={index} value={col.GStorage_Id}>{col.GStorage_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(grinderStorageStatus==='OK')?'green-text':'red-text'} value={grinderStorageStatus}
            onChange={handleGrinderStorage(values.GStorage_Id)}/>
            </div>
            <div className="select-wrap">
              <input type="text" readOnly className={(grinderStorageStatus==='OK')?'green-text':'red-text'} value={grinderStorageComment}
              onChange={handleGrinderStorage(values.GStorage_Id)}/>
            </div>
            </div>
            <div className="col-12 d-flex">
            <div className="select-wrap">
              <Field name="Grinder_Id" component={SelectAdapter}>
              <Option value='' disabled selected>Select Grinder</Option>
              {grinder.map((col,index) => {
                return (
                  <Option key={index} value={col.Grinder_Id}>{col.Grinder_Id}</Option>
                );
              })}
              </Field>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(grinderStatus==='OK')?'green-text':'red-text'} value={grinderStatus}
            onChange={handleGrinder(values.Grinder_Id)}/>
            </div>
            <div className="select-wrap">
            <input type="text" readOnly className={(grinderStatus==='OK')?'green-text':'red-text'} value={grinderComment}
            onChange={handleGrinder(values.Grinder_Id)}/>
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
            <div className="release-button">
            {wheatSiloStatus === "" &&
            grinderStorageStatus === "" &&
            grinderStatus === "" &&
            pipelineStatus === "" &&
            fillingSiloStatus === "" &&
            conveyorStatus === "" ? (
              ""
            ) : wheatSiloStatus === "OK" &&
              grinderStorageStatus === "OK" &&
              grinderStatus === "OK" &&
              pipelineStatus === "OK" &&
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

export default AataLine;
