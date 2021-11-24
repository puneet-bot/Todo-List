const   express         =       require('express');
const   router          =       require('./routes/index');
var     app             =       express();
const   port            =       8000;

app.use('/',router);

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    else
        console.log(`Server is Running on Port: ${port}`);
});