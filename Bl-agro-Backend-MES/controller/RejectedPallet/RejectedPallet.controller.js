let config=require('../../config/config');
let sql=require('mssql');
var query;
const getRejectedPalletInfo=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id],[Date],[PO_Number],[SKU],[SKU_Description],[PalletId],[MES_Qty],[Check_Qty],[UpdatedDate] FROM [dbo].[vw_RejectedPalletQty]")
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
    getRejectedPalletInfo,
}