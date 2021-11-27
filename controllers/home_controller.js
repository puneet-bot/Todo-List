var   list            =       require('../models/list');

module.exports.home=function(req,res){
    list.find({},function(err,data){
        if(err)
        console.log(`There is an Error in fetching entries from Database. ${err}`);
        else{
            return res.render('home',{
                mylist:data,
                tittle:"Todo List"
            });
        }
    });
   
    
}

module.exports.newHome=function(req,res){
    list.create({
        task:req.body.description,
        category:req.body.category,
        date:req.body.date,
        isCompleted:false
    },function(err,data){
        if(err){
            console.log(`There is an Error in creating a new entry in Database. ${err}`);
        }
        else{
            console.log('Created Data and Pushed in Database',data);
        }

    })
    return res.redirect('back');
    // console.log('hello');
}