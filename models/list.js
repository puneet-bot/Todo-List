var mongoose = require('mongoose');  
var listSchema = new mongoose.Schema({  
  task: {
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date: { 
    type: String,
    required:true
    },
  isCompleted: {
    type:Boolean,
    default:false
  }
});
mongoose.model('list', listSchema);

module.exports=mongoose.model("list",listSchema);