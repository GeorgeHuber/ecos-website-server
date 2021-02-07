const router = require('express').Router();
let Statistics = require('../models/statistics.model');


router.route('/').get((req, res) => {
    Statistics.find()
      .then(statistics => res.json(statistics))
      .catch(err => res.status(400).json('Error: ' + err));
  });




  module.exports=router