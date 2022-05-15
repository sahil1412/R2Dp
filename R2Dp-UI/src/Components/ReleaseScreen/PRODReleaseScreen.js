import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import prodApiCollection from "../../apiservices/ERP/PROD.api";
import poTypeApiCollection from "../../apiservices/POtype/potype.api";
import "../../Styles/ReleaseScreen.css";
import AataLine from "../ItemLine/AataLine";
import Dal1Line from "../ItemLine/DalLine";
import PastaLine from "../ItemLine/PastaLine";
import SujiLine from "../ItemLine/SujiLine";
const PRODReleaseScreen = () => {
  var {id}=useParams();
  id=parseInt(id);
  const [prodData,setProdData]=useState([])
  const [poType,setPoType]=useState([])
  // const [itemType,setItemType]=useState("")
  const itemType='Aata'
  const fetchPRODData = React.useCallback(() => {
    prodApiCollection.fetchPRODERPById(id)
    .then((response) => {
      setProdData(response.data[0])
      console.log(response.data[0])
      // setName(response.data[0].item)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [id])

  function SwitchCase(props) {

    switch(props.value) {

      case "Aata":

        return <AataLine item={prodData}/>;

      case 'Dal1':

        return <Dal1Line item={prodData}/>;
      
      case 'Dal2':

        return <SujiLine item={prodData}/>;
      case 'Dal3':

        return <PastaLine item={prodData}/>;

      default:

        return 'not updated yet';

    }

  }

  const fetchPoType=React.useCallback(() => {
    poTypeApiCollection.fetchPoType(1)
    .then((response) => {
      const potype=response.data
      setPoType(potype)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
useEffect(() => {
fetchPRODData()
fetchPoType()
},[fetchPRODData,fetchPoType]);
  return (
    
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-12 mt-5 text-center">
          <h3>Production Process Order Release Screen</h3>
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
                    <input type="text" value={prodData.Date} name="Date" readOnly></input>
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
                    <input type="text" value={prodData.PO_Number} name="PONumber" readOnly></input>
                  </div>
                </div>
                <div className="input-container">
                  <div className="input-tag">Product</div>
                  <div className="input-value">
                    <input type="text" value={prodData.Item} name="Product" readOnly ></input>
                  </div>
                </div>
                <div className="input-container">
                  <div className="input-tag">SKU</div>
                  <div className="input-value">
                    <input type="text" value={prodData.SKU} name="SKU" readOnly></input>
                  </div>
                </div>
                <div className="input-container">
                  <div className="input-tag">PO Output</div>
                  <div className="input-value">
                    <input type="text" value={prodData.Output_Quantity} name="Output_Quantity" readOnly></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6 mt-4">
        <div className="machine-status-box">
        <SwitchCase value={prodData.Item} />        
        </div>
      </div>
      </div>
    </div>
  );
};

export default PRODReleaseScreen;
