import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const poTypeApiCollection=
{
    fetchPoType:function(id)
    {
        return axios({
            "method": "GET",
            "url": `${baseurl}/potype/${id}`,
            "headers": {
              "content-type": "application/json",
            }
          })
    },
}

export default poTypeApiCollection;