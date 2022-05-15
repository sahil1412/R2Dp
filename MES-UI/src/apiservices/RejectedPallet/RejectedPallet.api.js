import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const rejectedpalletApiCollection=
{
    fetchRejectedPalletInfo:function()
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/rejectedpalletqty`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },

}

export default rejectedpalletApiCollection;