let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;

const updateDal1Silo=async (req,res)=>
{
    let inputs=req.body;
    try
    {
        let pool=await sql.connect(config);
        mssqlquery=await pool.request()
        .input('Dal1Silo_Id',sql.NVarChar,inputs.Dal1Silo_Id)
        .input('Status',sql.NVarChar,inputs.Status)
        .input('StatusPO',sql.NVarChar,inputs.StatusPO)
        .input('PO_Number',sql.Int,inputs.PO_Number)
        .input('Quant',sql.BigInt,inputs.Quant)
        .execute('sp_InwdDal1Silo')
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
    updateDal1Silo,
}