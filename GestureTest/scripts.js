var Myo = require('myo');
var myMyo = Myo.create();
myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('you just made a fist');
  })
});

myMyo.on('fingers_spread', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('you just spread your fingers');
  })
});

myMyo.on('wave_in', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('you just waved in');
  })
});

myMyo.on('wave_out', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('you just waved out');
  })
});

myMyo.on('thumb_to_pinky', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('you just thumb to pinkied');
  })
});

myMyo.on('orientation', function(data){
  if(data.x > .3){
    console.log('you just tilted your hand left')
  }
});
// experimental features
//
// myMyo.on('orientation', function(data){
//   if(data.x < -.4){
//     console.log('left hand tilt detected')
//       }
// });
//
// myMyo.on('orientation', function(data){
//   if(data.x > .4){
//     console.log('right hand tilt detected')
//       }
// });
