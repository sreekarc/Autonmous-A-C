var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var glob = require('glob');

const { exec } = require('child_process');


/* Serve controlData */
router.get('/api/testGet', function(req, res) {
  // res.send( JSON.parse(fs.readFileSync('controlData.json', 'UTF-8')) );
  //res.send( fs.readFileSync('controlData.json', 'UTF-8') );
  console.log("Get Arrived")
});


router.post('/api/testPost', function(req, res) {
  console.log(req.body);
  var data = JSON.parse(req.body);
  console.log("Post Arrived")
  //console.log(data)
  fs.writeFile('sample.json', JSON.stringify(data, null, 2), function(err) {
    if(err) {
      console.log(err);
    }
  })

});

module.exports = router;
