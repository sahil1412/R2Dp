let express=require('express');
let router=express.Router();
let poTypeController=require('../../controller/PoType/POType.controller');
router.get('/',poTypeController.getPoType);
router.get('/:id',poTypeController.getPoTypeById);
module.exports=router;