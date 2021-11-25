var   list            =       require('../models/list');

module.exports.detail=function(req,res){
    for (const property in req.body) {
        list.findByIdAndDelete(property, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                //modal to come here ...
            }
        });
      }
    return res.redirect('back');
}

