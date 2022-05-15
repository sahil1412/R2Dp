let config=require('../../../config/config');
let sql=require('mssql');
var query;
const getWheatSiloStatus=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [WheatSilo_Id],currentload as [InitialWeight],Output_Quantity as [ProdQuantity],Quantity as [InwdQuantity] ,[FinalWeight] FROM [dbo].[vw_WheatSiloStatus]")
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={
    getWheatSiloStatus,
}