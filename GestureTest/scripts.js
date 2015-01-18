var Myo = require('myo');
var myMyo = Myo.create();
myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('Gesture: Fist');
  })
});

myMyo.on('fingers_spread', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('Gesture: Fingers Spread');
  })
});

myMyo.on('wave_in', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('Gesture: Wave In');
  })
});

myMyo.on('wave_out', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('Gesture: Wave Out');
  })
});

myMyo.on('thumb_to_pinky', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    console.log('Gesture: Thumb to Pinky');
  })
});
