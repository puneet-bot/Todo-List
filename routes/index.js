const   express         =       require('express');
const   router          =       express.Router();
const   homeController  =       require('../controllers/home_controller');


router.get('/',homeController.home);
router.post('/',homeController.newHome)
router.use('/detail',require('./details'));


module.exports=router;