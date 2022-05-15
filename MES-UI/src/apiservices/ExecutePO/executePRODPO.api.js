import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const execPRODPOApiCollection=
{
    executePO:async function(ponumber)
    {
        const rawResponse = await axios.put(`${baseurl}/prod/${ponumber}`);
        return rawResponse;
    },
}

export default execPRODPOApiCollection;