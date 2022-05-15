let express=require('express');
let router=express.Router();
let wheatSilo=require('../../controller/InwardMaterial/Wheat.controller')

router.put('/',wheatSilo.updateWheatSilo);

module.exports=router;