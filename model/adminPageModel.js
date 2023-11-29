const mongoose = require("mongoose");
 
const taskSchema = new mongoose.Schema({
 
  taskId:{
    type:Number,
    required:true,
    unique:true
  },
  Task_Title: String,
  TASK_DESCRIPTION: String,
  Comments:String,
  DUE_DATE: String,
  PRIORITY_LEVEL: String,
  ASSIGNED_TO_USER: String,
  status: { type: String, default: "Incomplete" },
  notification:{
    type:Number,
   default:"1" }
});
 
const Task = mongoose.model("Task", taskSchema);
 
module.exports = Task;
 