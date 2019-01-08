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

router.get('/api/getDeviceState', function(req, res) {
  res.send( fs.readFileSync('/home/pi/AC_Project/MindLabs/temp.txt', 'UTF-8') );
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

router.post('/api/postTemp', function(req, res) {
  console.log(req.body);
  console.log("Post Arrived");
  var stu = req.body;
  var temp = stu.temp;
  fs.writeFile('/home/pi/AC_Project/MindLabs/temp.txt', temp, function(err) {
    if(err) {
      console.log(err);
    }
  })

});


module.exports = router;
