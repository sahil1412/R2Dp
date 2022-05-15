require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const prodRoutes=require('./routes/PROD.routes');
const inwdRoutes=require('./routes/INWD.routes');
const dispRoutes=require('./routes/DISP.routes');
const itemMachinesRoutes=require('./routes/MachineMapping.routes');
const machineRoutes=require('./routes/machines/machines.routes');
const aatalineRoutes=require('./routes/ProductLine/AataLine.routes');
const poTypeRoutes=require('./routes/PoType/PoType.routes');
const wheatInwdRoutes=require('./routes/InwardMaterial/WheatSilo.routes');
const dal1InwdRoutes=require('./routes/InwardMaterial/Dal1Silo.routes');
const rejectPalletRoutes=require('./routes/RejectedPallet/RejectedPallet.routes');
const wheatSiloStatusRoutes=require('./routes/machines/WheatSilo/WheatSiloStatus.routes');
const dal1SiloStatusRoutes=require('./routes/machines/Dal1Silo/Dal1SiloStatus.routes');

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>
{
    res.send("Welcome to BL-Agro")
})
app.use('/api/v1/prod',prodRoutes);
app.use('/api/v1/inwd',inwdRoutes);
app.use('/api/v1/disp',dispRoutes);
app.use('/api/v1/itemmachines',itemMachinesRoutes);
app.use('/api/v1/machines',machineRoutes);
app.use('/api/v1/productline',aatalineRoutes);
app.use('/api/v1/potype',poTypeRoutes);
app.use('/api/v1/inwardmaterial/wheatsilo',wheatInwdRoutes);
app.use('/api/v1/inwardmaterial/dal1silo',dal1InwdRoutes);
app.use('/api/v1/rejectedpalletqty',rejectPalletRoutes);
app.use('/api/v1/wheatsilostatus',wheatSiloStatusRoutes);
app.use('/api/v1/dal1silostatus',dal1SiloStatusRoutes);
let port=process.env.PORT || 5000;
app.listen(port);
console.log("Sever is running at port :",port);