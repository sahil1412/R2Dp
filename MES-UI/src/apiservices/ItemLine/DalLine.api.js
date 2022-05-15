import axios from "axios";
let baseurl='http://localhost:5000/api/v1/productline';
const DallineApi=
{
    fetchDalPoAllocation:async function(){
        return axios({
            "method": "GET",
            "url": `${baseurl}/dalpoallocation`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    insertDalPoAllocation:async function(data){
        const rawResponse = await axios.post(`${baseurl}/dalpoallocation`,data);
        return rawResponse;
    },
    updateDalLine: async function(data)
    {
        const rawResponse = await axios.put(`${baseurl}/dallineallocation`,data);
            return rawResponse;
    },

}
export default DallineApi;