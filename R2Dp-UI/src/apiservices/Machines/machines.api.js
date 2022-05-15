import axios from "axios";
let baseurl='http://localhost:5000/api/v1/machines/';
const machineApi=
{
 fetchWheatsilos:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'wheatsilos',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 fetchGrinder:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'grinders',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 
 fetchGrinderStorage:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'grinderstorages',
        "headers": {
          "content-type": "application/json",
        }
      })
 },

 fetchConveyors:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'conveyors',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 fetchFillingsilos:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'fillingsilos',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 fetchPalletizers:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'palletizers',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 
 fetchPipelines:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'pipelines',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 

 //new api added by Sahil

 fetchDal1Silo:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'dal1silos',
        "headers": {
          "content-type": "application/json",
        }
      })
 },

 fetchVibratorIron:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'vibratorIronRemover',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 fetchLeepackPM:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'leepackPM',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
 fetchPrimarySilo:function()
 {
    return axios({
        "method": "GET",
        "url": baseurl+'primarysilo',
        "headers": {
          "content-type": "application/json",
        }
      })
 },

}
export default machineApi;