const    mongoose      =   require('mongoose');

mongoose.connect('mongodb+srv://admin:TOQCVCNz9bfa9BsG@cluster0.at7i2.mongodb.net/todo_devlopment');
const   db             =   mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting Database"));
db.once('open',function(){
    console.log("DB is Connected!");
});
module.exports=db;