const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const membersSchema = new Schema({
    
        members:[]
},{
    timestamps:true
})

const Members=mongoose.model("Members", membersSchema, "team");

module.exports=Members;