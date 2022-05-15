let express=require('express');
let router=express.Router();
let machineMappingItem=require('../controller/MachineMapping.controller');

router.get('/:item',machineMappingItem.getItemMachines);

module.exports=router;