module.exports.home=function(req,res){
    return res.send('Hello on the home page.');
}

module.exports.newHome=function(req,res){
    console.log('Hello Created New Home page.');
    res.redirect('back');
    return;
}