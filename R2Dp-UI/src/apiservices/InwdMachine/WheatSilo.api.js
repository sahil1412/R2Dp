import axios from "axios";
let baseurl='http://localhost:5000/api/v1/inwardmaterial';
const wheatSiloApi=
{
    updateWheatSilo: async function(data)
    {
        const rawResponse = await axios.put(`${baseurl}/wheatsilo`,data);
            return rawResponse;
    },
}
export default wheatSiloApi;