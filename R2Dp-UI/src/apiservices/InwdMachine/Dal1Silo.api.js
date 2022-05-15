import axios from "axios";
let baseurl='http://localhost:5000/api/v1/inwardmaterial';
const dal1SiloApi=
{
    updateDal1Silo: async function(data)
    {
        const rawResponse = await axios.put(`${baseurl}/dal1silo`,data);
            return rawResponse;
    },
}
export default dal1SiloApi;