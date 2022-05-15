import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const dispApiCollection=
{
    fetchDISPERP:function()
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/disp`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    fetchDISPERPById:function(id)
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/disp/${id}`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    changeStatus:async function(ponumber,status)
    {
        const rawResponse = await axios.put(`${baseurl}/disp/changestatus/${ponumber}`,{"Status":status});
        return rawResponse;
    },
}

export default dispApiCollection;