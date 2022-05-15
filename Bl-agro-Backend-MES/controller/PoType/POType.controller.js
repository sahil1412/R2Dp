let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;
const getPoType=async(req,res) =>{
    try {
        let pool = await sql.connect(config);
        mssqlquery = await pool.request().query("SELECT [Id],[POTYPE_Id],[PO_Type] FROM [dbo].[vw_PoType]");
        let result=mssqlquery.recordsets;
        res.json(result[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getPoTypeById=async(req,res) =>{
    let id=req.params.id;
    try {
        let pool = await sql.connect(config);
        mssqlquery = await pool.request()
        .input('POTYPE_Id', sql.Int,id)
        .query("SELECT [Id],[POTYPE_Id],[PO_Type] FROM [dbo].[vw_PoType] where [POTYPE_Id]=@POTYPE_Id");
        let result=mssqlquery.recordsets;
        res.json(result[0]);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports=
{
  getPoType,
  getPoTypeById
}