var Myo = require('myo');
var myMyo = Myo.create();
myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    alert('you just made a fist');
  })
});

myMyo.on('fingers_spread', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    alert('you just spread your fingers');
  })
});

myMyo.on('wave_in', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    alert('you just waved in');
  })
});

myMyo.on('wave_out', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    alert('you just waved out');
  })
});

myMyo.on('thumb_to_pinky', function(edge){
  //Edge is true if it's the start of the pose, false if it's the end of the pose
  myMyo.timer(edge, 500, function(){
    alert('you just thumb to pinkied');
  })
});

myMyo.on('orientation', function(data){
  if(data.x > .3){
    alert('you just tilted your hand left')
  }
});

myMyo.on('orientation', function(data){
  if(data.x < -.4){
    alert('left hand tilt detected')
    client.front(.3)
  }
});

myMyo.on('orientation', function(data){
  if(data.x > .4){
    client.back(.3)
  }
});
