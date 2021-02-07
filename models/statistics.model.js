const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statisticsSchema = new Schema({
    
        
},{
    timestamps:true
})

const Statistics=mongoose.model("Statistics", statisticsSchema, "statistics");

module.exports=Statistics;