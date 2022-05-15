let express=require('express');
let router=express.Router();
let aataLineController=require('../../controller/ProductLine/AataLine.controller')
let dalLineController=require('../../controller/ProductLine/DalLine.controller')

router.put('/aatalineallocation',aataLineController.updateAataLineAllocations);
router.post('/aatapoallocation',aataLineController.AataPOAllocation);
router.get('/aatapoallocation',aataLineController.getAataPOAllocation);

// Added y Sahil 

router.put('/dallineallocation',dalLineController.updateDalLineAllocations);
router.post('/dalpoallocation',dalLineController.DalPOAllocation);
router.get('/dalpoallocation',dalLineController.getDalPOAllocation);

module.exports=router;