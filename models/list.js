var mongoose = require('mongoose');  
var listSchema = new mongoose.Schema({  
  task: String,
  description: Number,
  date: { type: Date, default: Date.now },
  isCompleted: Boolean
});
mongoose.model('list', listSchema);

module.exports=mongoose.model("list",listSchema);