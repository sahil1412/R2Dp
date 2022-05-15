let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;
const AataPOAllocation=async(req,res)=>
{
let inputs=req.body;
try
{
    let pool=await sql.connect(config);
    mssqlquery=await pool.request()
    .input('PO_Number',sql.Int,inputs.PO_Number)
    .input('WheatSilo_Id',sql.NVarChar,inputs.WheatSilo_Id)
    .input('PipeLine_Id',sql.NVarChar,inputs.PipeLine_Id)
    .input('GStorage_Id',sql.NVarChar,inputs.GStorage_Id)
    .input('Grinder_Id',sql.NVarChar,inputs.Grinder_Id)
    .input('FillingSilo_Id',sql.NVarChar,inputs.FillingSilo_Id)
    .input('Conveyor_Id',sql.NVarChar,inputs.Conveyor_Id)
    .input('Quant',sql.BigInt,inputs.Quant)
    .execute('sp_InsertAataPOAllocation')
    .then((result)=>
    {
        if(result)
        {
            res.json(
            {
                result:result,
                success:true,
                message:"Successful AataLine Allocation"
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
const updateAataLineAllocations=async (req,res)=>
{
    let inputs=req.body;
    try
    {
        let pool=await sql.connect(config);
        mssqlquery=await pool.request()
        .input('WheatSilo_Id',sql.NVarChar,inputs.WheatSilo_Id)
        .input('PipeLine_Id',sql.NVarChar,inputs.PipeLine_Id)
        .input('GStorage_Id',sql.NVarChar,inputs.GStorage_Id)
        .input('Grinder_Id',sql.NVarChar,inputs.Grinder_Id)
        .input('FillingSilo_Id',sql.NVarChar,inputs.FillingSilo_Id)
        .input('Conveyor_Id',sql.NVarChar,inputs.Conveyor_Id)
        .input('Status',sql.NVarChar,inputs.Status)
        .input('StatusPO',sql.NVarChar,inputs.StatusPO)
        .input('PO_Number',sql.Int,inputs.PO_Number)
        .input('Quant',sql.BigInt,inputs.Quant)
        .execute('sp_updateAataLineMachineAllocation')
        .then((result)=>
        {
            if(result)
            {
                res.json(
                {
                    result:result,
                    success:true,
                    message:"Successful AataLine Allocation"
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
const getAataPOAllocation=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("Select * from dbo.vw_MESSummaryScreen")
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports=
{
    updateAataLineAllocations,
    AataPOAllocation,
    getAataPOAllocation,
}