import axios from "axios";
let baseurl='http://localhost:5000/api/v1/productline';
const aatalineApi=
{
    fetchAataPoAllocation:async function(){
        return axios({
            "method": "GET",
            "url": `${baseurl}/aatapoallocation`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    insertAataPoAllocation:async function(data){
        const rawResponse = await axios.post(`${baseurl}/aatapoallocation`,data);
        return rawResponse;
    },
    updateAataLine: async function(data)
    {
        const rawResponse = await axios.put(`${baseurl}/aatalineallocation`,data);
            return rawResponse;
    },

}
export default aatalineApi;