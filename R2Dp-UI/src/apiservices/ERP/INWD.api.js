import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const inwdApiCollection=
{
    fetchINWDERP:function()
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/inwd`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    fetchINWDERPById:function(id)
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/inwd/${id}`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
    changeStatus:async function(ponumber,status)
    {
        const rawResponse = await axios.put(`${baseurl}/inwd/changestatus/${ponumber}`,{"Status":status});
        return rawResponse;
    },
}

export default inwdApiCollection;