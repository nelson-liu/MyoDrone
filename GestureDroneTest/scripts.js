var arDrone = require('ar-drone');
var client = arDrone.createClient();
var Myo = require('myo');
var myMyo = Myo.create();
var isFlying = false;

myMyo.on('fingers_spread', function(edge){
  myMyo.timer(edge, 500, function(){
    if(isFlying == false){
      console.log('spreading fingers detected');
      client.takeoff();
      isFlying = true;
    }
  })
});

myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('fist detected');
    client.land();
    isFlying = false;
  })
});

myMyo.on('wave_out', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('wave out detected');
    client.up(.3)
        client.after(4000, function() {
    client.stop();
     })
  })
});

myMyo.on('wave_in', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('wave in detected');
    client.down(.3);
        client.after(4000, function() {
    client.stop();
     })
  })
});
