let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;

const updateWheatSilo=async (req,res)=>
{
    let inputs=req.body;
    try
    {
        let pool=await sql.connect(config);
        mssqlquery=await pool.request()
        .input('WheatSilo_Id',sql.NVarChar,inputs.WheatSilo_Id)
        .input('Status',sql.NVarChar,inputs.Status)
        .input('StatusPO',sql.NVarChar,inputs.StatusPO)
        .input('PO_Number',sql.Int,inputs.PO_Number)
        .input('Quant',sql.BigInt,inputs.Quant)
        .execute('sp_InwdWheatSilo')
        .then((result)=>
        {
            if(result)
            {
                res.json(
                {
                    result:result,
                    success:true,
                    message:"Successful Material Inward Allocation"
                }
            )
            }
            else
            {
                res.json(
                    {
                        success:false,
                        message:"Allocation failed"
                    }
                )
            }
        })
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports=
{
    updateWheatSilo,
}