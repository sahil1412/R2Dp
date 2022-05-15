let express=require('express');
let router=express.Router();
let dispPOController=require('../controller/DISP.controller');

router.get('/',dispPOController.getDispPODetails);
router.get('/:id',dispPOController.getDispPODetail);
router.put('/:ponumber',dispPOController.updatePO);
router.put('/changestatus/:ponumber',dispPOController.changeStatus);

module.exports=router;