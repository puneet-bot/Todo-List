var   list            =       require('../models/list');

module.exports.home=function(req,res){
    list.find({},function(err,data){
        if(err)
        console.log(err);
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
        if(err)
            console.log(err);
        else{
            console.log('Created Data and Pushed in Db',data);
            return res.redirect('back');
        }
    })
    // return res.redirect('back');
    // console.log('hello');
}