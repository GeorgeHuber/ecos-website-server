const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quotesSchema = new Schema({
    
},{
    timestamps:true
})

const Quotes=mongoose.model("Quotes", quotesSchema, "quotes");

module.exports=Quotes;