const   express         =       require('express');
const   router          =       express.Router();
const   detailController=       require('../controllers/detail_controller');


router.get('/',detailController.detail);


module.exports=router;