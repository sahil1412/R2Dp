let express=require('express');
let router=express.Router();
let machinesController=require('../../controller/machines/machines.controller');

router.get('/wheatsilos',machinesController.getWheatSilo);
router.get('/pipelines',machinesController.getPipeline);
router.get('/grinders',machinesController.getGrinder);
router.get('/grinderstorages',machinesController.getGrinderStorage);
router.get('/palletizers',machinesController.getPalletizer);
router.get('/fillingsilos',machinesController.getFillingSilo);
router.get('/packingmc',machinesController.getPackingMC);
router.get('/conveyors',machinesController.getConveyor);
// modified by Sahil 
router.get('/dal1silos',machinesController.getDal1Silos);
router.get('/primarysilo',machinesController.getPrimarySilo);
router.get('/leepackPM',machinesController.getLeepackPM);
router.get('/vibratorIronRemover',machinesController.getVibIronRemover);
module.exports=router;