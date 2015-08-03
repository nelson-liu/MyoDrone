var arDrone = require('ar-drone');
var client = arDrone.createClient();
var Myo = require('myo');
var myMyo = Myo.create();
var isFlying = false;

//When the myo fingers_spread action is detected,
//make the drone takeoff.
myMyo.on('fingers_spread', function(edge){
  myMyo.timer(edge, 500, function(){
    if(isFlying == false){
      console.log('spreading fingers detected');
      client.takeoff();
      isFlying = true;
    }
  })
});

//When the myo fist action is detected,
//make the drone land.
myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('fist detected');
    client.land();
    isFlying = false;
  })
});

//When the myo wave_out action is detected,
//make the drone slowly move upwards for 4 seconds.
myMyo.on('wave_out', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('wave out detected');
    client.up(.3)
        client.after(4000, function() {
    client.stop();
     })
  })
});

//When the myo wave_in action is detected,
//make the drone slowly move downwards for 4 seconds.
myMyo.on('wave_in', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('wave in detected');
    client.down(.3);
        client.after(4000, function() {
    client.stop();
     })
  })
});
