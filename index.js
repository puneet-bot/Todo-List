const   express         =       require('express');
var     app             =       express();
const   port            =       8000;


app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    else
        console.log(`Server is Running on Port: ${port}`);
});