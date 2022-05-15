import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const prodApiCollection=
{
    fetchPRODERP:function()
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/prod`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    fetchPRODERPById:function(id)
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/prod/${id}`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    fetchMachines:function(item)
    {
      return axios({
        "method": "GET",
        "url": `${baseurl}/itemmachines/${item}`,
        "headers": {
          "content-type": "application/json",
        }
      })
    },
    changeStatus:async function(ponumber,status)
    {
        const rawResponse = await axios.put(`${baseurl}/prod/changestatus/${ponumber}`,{"Status":status});
        return rawResponse;
    },
}

export default prodApiCollection;