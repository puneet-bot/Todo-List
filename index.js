const   express         =       require('express');
const   router          =       require('./routes/index');
var     app             =       express();
const   port            =       8000;
const   expressLayouts  =       require('express-ejs-layouts');
const   db              =       require('./config/moongoose');
const   list            =       require('./models/list');
const   bodyParser      =       require('body-parser');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));
app.use('/',router);

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    else
        console.log(`Server is Running on Port: ${port}`);
});