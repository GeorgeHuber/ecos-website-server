const router = require('express').Router();
let Members = require('../models/members.model');


router.route('/').get((req, res) => {
    Members.find()
      .then(members => res.json(members))
      .catch(err => res.status(400).json('Error: ' + err));
  });




  module.exports=router