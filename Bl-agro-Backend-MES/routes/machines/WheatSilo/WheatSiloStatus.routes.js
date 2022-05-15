let express=require('express');
let router=express.Router();
let wheatSiloStatus=require('../../../controller/machines/WheatSilo/WheatSiloStatus.controller');

router.get('/',wheatSiloStatus.getWheatSiloStatus);

module.exports=router;