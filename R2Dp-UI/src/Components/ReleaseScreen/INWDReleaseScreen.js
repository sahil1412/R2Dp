import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import inwdApiCollection from "../../apiservices/ERP/INWD.api";
import poTypeApiCollection from "../../apiservices/POtype/potype.api";
import "../../Styles/ReleaseScreen.css";
import WheatInwdSilo from "../InwdMaterial/WheatInwdSilo";
import Dal1InwdSilo from "../InwdMaterial/Dal1InwdSilo";
const INWDReleaseScreen = () => {
  var {id}=useParams();
  id=parseInt(id);
  const [inwdData,setINWDData]=useState([])
  const [poType,setPoType]=useState([])
  const fetchINWDData = React.useCallback(() => {
    inwdApiCollection.fetchINWDERPById(id)
    .then((response) => {
      setINWDData(response.data[0])
    })
    .catch((error) => {
      console.log(error)
    })
  }, [id])
  const fetchPoType=React.useCallback(() => {
    poTypeApiCollection.fetchPoType(2)
    .then((response) => {
      const potype=response.data
      setPoType(potype)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  function SwitchCase(props) {

    switch(props.value) {

      case "Wheat":

        return <WheatInwdSilo item={inwdData}/>;

      case 'Dal1':

         return <Dal1InwdSilo item={inwdData}/>;

      default:

        return 'not updated yet';

    }

  }

useEffect(() => {
fetchINWDData()
fetchPoType()
},[fetchINWDData,fetchPoType]);
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-12 mt-5 text-center">
          <h3>Inward Process Order Release Screen</h3>
        </div>
        <div className="col-5 mt-4">
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
                    <input type="text" value={inwdData.Date} name="Date" readOnly></input>
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
                    <input type="text" value={inwdData.PO_Number} name="PONumber" readOnly></input>
                  </div>
                </div>
                <div className="input-container">
                  <div className="input-tag">Product</div>
                  <div className="input-value">
                    <input type="text" value={inwdData.Item} name="Product" readOnly></input>
                  </div>
                </div>
                <div className="input-container">
                  <div className="input-tag">Inward Quantity</div>
                  <div className="input-value">
                    <input type="text" value={inwdData.Inward_Quantity} name="Inward_Quantity" readOnly></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-5 mt-4">
        <div className="machine-status-box">
        <SwitchCase value={inwdData.Item} /> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default INWDReleaseScreen;
