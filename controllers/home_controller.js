module.exports.home=function(req,res){
    return res.render('home',{
        tittle:"Todo List."
    });
}

module.exports.newHome=function(req,res){
    console.log('Hello Created New Home page.');
    res.redirect('back');
    return;
}