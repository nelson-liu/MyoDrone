var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.config('general:navdata_demo', 'FALSE');
var Myo = require('myo');
var myMyo = Myo.create();
//var altitude = navdata.demo.altitudeMeters;
//var nextaltitude = altitude + 500; //add 500 mm, or .50 m to height

client.on('navdata', function(data){
    var altitude = navdata.demo.altitudeMeters;
});
//Edge is true if it's the start of the pose, false if it's the end of the pose

myMyo.on('fingers_spread', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('spreading fingers detected');
    client.takeoff();
  })
});

myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('fist detected');
    client.land();
  })
});

myMyo.on('wave_out', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('wave in detected');
    altitude = navdata.demo.altitudeMeters;
    var nextaltitude = altitude + 500; //add 500 mm, or .50 m to height
    while (altitude !== nextaltitude) {
      client.up(0.3);
      altitude = navdata.demo.altitudeMeters;
    }
    client.stop();
  })
});

myMyo.on('wave_in', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('wave in detected');
    altitude = navdata.demo.altitudeMeters;
    var nextaltitude = altitude - 500; //subtract 500 mm, or .50 m to height
    while (altitude !== nextaltitude) {
      client.down(0.3);
      altitude = navdata.demo.altitudeMeters;
    }
    client.stop();
  })
});


// myMyo.on('wave_in', function(edge){
//   client.after(500, function() {
//     client.down(0.5);
//   })
//   client.stop();
// });


// myMyo.on('wave_out', function(edge){
//   client.after(500, function() {
//     client.up(0.5);
//   })
//   client.stop();
// });

//experimental features

// myMyo.on('orientation', function(data){
//   if(data.x < -.4){
//     alert('left hand tilt detected')
//     client.front(.3)
//   }
// });
//
// myMyo.on('orientation', function(data){
//   if(data.x > .4){
//     client.back(.3)
//   }
// });
