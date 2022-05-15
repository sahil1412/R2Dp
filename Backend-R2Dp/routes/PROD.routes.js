let express=require('express');
let router=express.Router();
let prodPOController=require('../controller/PROD.controller');

router.get('/',prodPOController.getProdPODetails);
router.get('/:id',prodPOController.getProdPODetail);
router.put('/:ponumber',prodPOController.updatePO);
router.put('/changestatus/:ponumber',prodPOController.changeStatus);

module.exports=router;