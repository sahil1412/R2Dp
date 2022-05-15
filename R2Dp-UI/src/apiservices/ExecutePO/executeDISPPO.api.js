import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const execDISPPOApiCollection=
{
    executePO:async function(ponumber)
    {
        const rawResponse = await axios.put(`${baseurl}/disp/${ponumber}`);
        return rawResponse;
    },
}

export default execDISPPOApiCollection;