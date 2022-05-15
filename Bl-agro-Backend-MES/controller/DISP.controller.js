let config = require('../config/config');
const sql = require('mssql');
var mssqlquery;

const getDispPODetails=async(req,res) =>{
    try {
        let pool = await sql.connect(config);
        mssqlquery = await pool.request().query("SELECT [Id],[Date],[PO_Number],[Item],[SKU],[SKU_Description],[Dispatch_Quantity],[Party],[Truck_Number],[Bay],[Status],[active],[ConfirmationTime] FROM [dbo].[vw_DISPProcessOrder]");
        let result=mssqlquery.recordsets;
        res.json(result[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getDispPODetail=async(req,res)=>
{
    let id=req.params.id;
    try {
        let pool = await sql.connect(config);
        mssqlquery = await pool.request()
        .input('Id', sql.Int,id)
        .query("SELECT [Id],[Date],[PO_Number],[Item],[SKU],[SKU_Description],[Dispatch_Quantity],[Party],[Truck_Number],[Bay],[Status],[active],[ConfirmationTime] FROM [dbo].[vw_DISPProcessOrder] where Id = @Id");
        let result=mssqlquery.recordsets;
        res.json(result[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const updatePO=async(req,res)=>
{
    let PONumber=req.params.ponumber;
    try{
        let pool= await sql.connect(config);
        mssqlquery= await pool.request()
        .input('PO_Number',sql.Int,PONumber)
        .execute('sp_InsertExecutedDISPPO')
        .then((result)=>
        {
            if(result)
            {
                res.json(
                {
                    result:result,
                    success:true,
                    message:"PO Execution started"
                }
            )
            }
            else
            {
                res.json(
                    {
                        success:false,
                        message:"PO Execution failed"
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
const changeStatus=async(req,res)=>
{
    let ponumber=req.params.ponumber;
    let status=req.body.Status;
    try{
        let pool= await sql.connect(config);
        mssqlquery= await pool.request()
        .input('PO_Number',sql.Int,ponumber)
        .input('Status',sql.NVarChar,status)
        .execute('sp_ChangeDISPPOStatus')
        .then((result)=>
        {
            if(result)
            {
                res.json(
                {
                    result:result,
                    success:true,
                    message:"Operation performed Successfully!"
                }
            )
            }
            else
            {
                res.json(
                    {
                        success:false,
                        message:"Operation Failed"
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
    getDispPODetails,
    getDispPODetail,
    updatePO,
    changeStatus,
}