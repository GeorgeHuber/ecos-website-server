const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app=express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true}
    );
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

const articleRouter = require('./routes/articles');
app.use('/articles',articleRouter);

const membersRouter = require('./routes/members');
app.use('/members',membersRouter);

const statisticsRouter = require('./routes/statistics');
app.use('/statistics',statisticsRouter);

const quotesRouter = require('./routes/quotes');
app.use('/quotes',quotesRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});