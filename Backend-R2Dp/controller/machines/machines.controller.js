let config=require('../../config/config');
let sql=require('mssql');
var query;
const getWheatSilo=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[WheatSilo_Id] ,[Machine_Id] ,[TotalCapacity] ,[CurrentLoad],[Status],[DischargeValve] ,[DischargeValve_Status],[TotalInwardCapacity] FROM vw_WheatSilos")
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getGrinderStorage=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id],[GStorage_Id],[Machine_Id],[Status] FROM vw_GrinderStorage")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getGrinder=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id],[Grinder_Id],[Machine_Id],[GrindingCapacity],[Status] FROM vw_Grinder")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getFillingSilo=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id],[FillingSilo_Id],[Machine_Id],[TotalCapacity],[Status],[DischargeValve] ,[DischargeValve_Status] FROM vw_FillingSilo")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getConveyor=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[Conveyor_Id] ,[Machine_Id] ,[ConveyorDesc] ,[Status] FROM vw_Conveyors")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getPackingMC=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id],[PackingMC_Id],[Machine_Id],[Status] FROM vw_PackingMC")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getPalletizer=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[Palletizer_Id] ,[Machine_Id] ,[Status] FROM vw_Palletizer")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}
const getPipeline=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[PipeLine_Id] ,[Machine_Id] ,[Status] FROM vw_Pipeline")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

// function added by Sahil 

const getDal1Silos=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[Dal1Silo_Id] ,[Machine_Id] ,[TotalCapacity] ,[CurrentLoad],[DischargeValve] ,[Status] FROM vw_Dal1Silos")
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getPrimarySilo=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[PrimarySilo_Id] ,[Machine_Id] ,[Status] FROM vw_PrimarySilo")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getVibIronRemover=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[VibIronRm_Id] ,[Machine_Id] ,[Status] FROM vw_VibIronRm")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getLeepackPM=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query("SELECT [Id] ,[LeepackPM_Id] ,[Machine_Id] ,[Status] FROM vw_LeepackPM")
      let result=query.recordsets;res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}



module.exports=
{
    getWheatSilo,
    getGrinderStorage,
    getGrinder,
    getConveyor,
    getFillingSilo,
    getPackingMC,
    getPalletizer,
    getPipeline,
    getDal1Silos,
    getLeepackPM,
    getVibIronRemover,
    getPrimarySilo,
}