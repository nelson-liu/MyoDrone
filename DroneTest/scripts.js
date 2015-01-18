var arDrone = require('ar-drone');
var client = arDrone.createClient();

//drone takeoff
client.takeoff();

//2 seconds after takeoff, turn clockwise at .5 speed
client.after(2000, function() {
  this.clockwise(0.5);
})

//stop all drone movements (just hover)
client.stop();

//after 2 seconds of hovering, drove move up at speed of 1.
client.after(2000, function() {
  client.up(1);
})

//after 7 seconds of going up, stop and land the drone
client.after(7000, function() {
  this.stop();
  this.land();
});
