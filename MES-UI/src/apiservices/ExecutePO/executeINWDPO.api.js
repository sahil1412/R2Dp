import axios from "axios";
let baseurl='http://localhost:5000/api/v1';
const execINWDPOApiCollection=
{
    executePO:async function(ponumber)
    {
        const rawResponse = await axios.put(`${baseurl}/inwd/${ponumber}`);
        return rawResponse;
    },
}

export default execINWDPOApiCollection;