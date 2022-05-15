let express=require('express');
let router=express.Router();
let rejectPalletController=require('../../controller/RejectedPallet/RejectedPallet.controller');

router.get('/',rejectPalletController.getRejectedPalletInfo);

module.exports=router;