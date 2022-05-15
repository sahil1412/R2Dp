let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;
const DalPOAllocation=async(req,res)=>
{
let inputs=req.body;
try
{
    let pool=await sql.connect(config);
    mssqlquery=await pool.request()
    .input('PO_Number',sql.Int,inputs.PO_Number)
    .input('PipeLine_Id',sql.NVarChar,inputs.PipeLine_Id)
    .input('FillingSilo_Id',sql.NVarChar,inputs.FillingSilo_Id)
    .input('Conveyor_Id',sql.NVarChar,inputs.Conveyor_Id)
    .input('DalSilo_Id',sql.NVarChar,inputs.DalSilo_Id)
    .input('PrimarySilo_Id',sql.NVarChar,inputs.PrimarySilo_Id)
    .input('VibIronRm_Id',sql.NVarChar,inputs.VibIronRm_Id)
    .input('LeepackPM_Id',sql.NVarChar,inputs.LeepackPM_Id)
    .input('Quant',sql.BigInt,inputs.Quant)
    .execute('sp_InsertDalPOAllocation')
    .then((result)=>
    {
        if(result)
        {
            res.json(
            {
                result:result,
                success:true,
                message:"Successful DalLine Allocation"
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
const updateDalLineAllocations=async (req,res)=>
{
    let inputs=req.body;
    try
    {
        let pool=await sql.connect(config);
        mssqlquery=await pool.request()
        .input('PO_Number',sql.Int,inputs.PO_Number)
        .input('PipeLine_Id',sql.NVarChar,inputs.PipeLine_Id)
        .input('FillingSilo_Id',sql.NVarChar,inputs.FillingSilo_Id)
        .input('Conveyor_Id',sql.NVarChar,inputs.Conveyor_Id)
        .input('Dal1Silo_Id',sql.NVarChar,inputs.Dal1Silo_Id)
        .input('PrimarySilo_Id',sql.NVarChar,inputs.PrimarySilo_Id)
        .input('VibIronRm_Id',sql.NVarChar,inputs.VibIronRm_Id)
        .input('LeepackPM_Id',sql.NVarChar,inputs.LeepackPM_Id)
        .input('Status',sql.NVarChar,inputs.Status)
        .input('StatusPO',sql.NVarChar,inputs.StatusPO)
        .input('Quant',sql.BigInt,inputs.Quant)
        .execute('sp_updateDalLineMachineAllocation')
        .then((result)=>
        {
            if(result)
            {
                res.json(
                {
                    result:result,
                    success:true,
                    message:"Successful DalLine Allocation"
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

const getDalPOAllocation=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("Select * from dbo.vw_MESDalSummaryScreen")
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
    updateDalLineAllocations,
    DalPOAllocation,
    getDalPOAllocation,
}


// added by Sahil