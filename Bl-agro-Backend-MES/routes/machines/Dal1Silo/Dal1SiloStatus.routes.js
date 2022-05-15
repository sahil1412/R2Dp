let express=require('express');
let router=express.Router();
let dal1SiloStatus=require('../../../controller/machines/Dal1Silo/Dal1SiloStatus.controller');

router.get('/',dal1SiloStatus.getDal1SiloStatus);

module.exports=router;