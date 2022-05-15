let config = require('../config/config');
const sql = require('mssql');
var mssqlquery;

const getItemMachines=async(req,res)=>
{
    let item=req.params.item;
    try {
        let pool = await sql.connect(config);
        mssqlquery = await pool.request()
        .input('Item', sql.NVarChar,item)
        .query("SELECT [Item_Id],[Item],[Machine_Id],[MachineName] FROM [dbo].[vw_ItemMachineItemLine] where Item=@Item");
        let result=mssqlquery.recordsets;
        res.json(result[0]);
    }
    catch (error) {
        console.log(error);
    }
}
module.exports=
{
    getItemMachines,
}
