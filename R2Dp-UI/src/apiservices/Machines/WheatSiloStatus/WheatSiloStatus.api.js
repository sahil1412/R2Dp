import axios from "axios";
let baseurl='http://localhost:5000/api/v1/';
const wheatSiloStatus=
{
  fetchWheatSiloStatus:function()
    {
       return axios({
        "method": "GET",
        "url": baseurl+'wheatsilostatus',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
}
export default wheatSiloStatus;