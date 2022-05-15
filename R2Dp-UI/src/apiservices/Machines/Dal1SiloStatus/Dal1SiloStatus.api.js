import axios from "axios";
let baseurl='http://localhost:5000/api/v1/';
const dal1SiloStatus=
{
  fetchDal1SiloStatus:function()
    {
       return axios({
        "method": "GET",
        "url": baseurl+'dal1silostatus',
        "headers": {
          "content-type": "application/json",
        }
      })
 },
}
export default dal1SiloStatus;