var arDrone = require('ar-drone');
var client = arDrone.createClient();
var Myo = require('myo');
var myMyo = Myo.create();

myMyo.on('fingers_spread', function(edge){
  myMyo.timer(edge, 500, function(){
      console.log('spreading fingers detected');
      //take a photo
  })
});
