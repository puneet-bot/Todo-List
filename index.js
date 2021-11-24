const   express         =       require('express');
const   homeController  =       require('./controllers/home_controller');
const   router          =       require('./routes');
var     app             =       express();
const   port            =       8000;

app.use('/',router);

router.get('/',homeController.home);

app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    else
        console.log(`Server is Running on Port: ${port}`);
});