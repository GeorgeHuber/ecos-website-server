const router = require('express').Router();
let Quotes = require('../models/quotes.model');


router.route('/').get((req, res) => {
    Quotes.find()
      .then(quotes => res.json(quotes))
      .catch(err => res.status(400).json('Error: ' + err));
  });




  module.exports=router