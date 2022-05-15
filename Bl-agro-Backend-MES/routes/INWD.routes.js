let express=require('express');
let router=express.Router();
let inwdPOController=require('../controller/INWD.controller');

router.get('/',inwdPOController.getInwdPODetails);
router.get('/:id',inwdPOController.getInwdPODetail);
router.put('/:ponumber',inwdPOController.updatePO);
router.put('/changestatus/:ponumber',inwdPOController.changeStatus);

module.exports=router;