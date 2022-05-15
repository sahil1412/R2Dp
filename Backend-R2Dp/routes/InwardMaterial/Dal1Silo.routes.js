let express=require('express');
let router=express.Router();
let dal1Silo=require('../../controller/InwardMaterial/Dal1.controller')

router.put('/',dal1Silo.updateDal1Silo);

module.exports=router;