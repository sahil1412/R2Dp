let config=require('../../../config/config');
let sql=require('mssql');
var query;
const getDal1SiloStatus=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Dal1Silo_Id],currentload as [InitialWeight],Inward_Quantity as [InwdQuantity] ,[FinalWeight] FROM [dbo].[vw_Dal1SiloStatus]")
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={
    getDal1SiloStatus,
}