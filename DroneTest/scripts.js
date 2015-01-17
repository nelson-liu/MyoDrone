var arDrone = require('ar-drone');
var client = arDrone.createClient();

//drone takeoff
client.takeoff();

//after 5 seconds, turn clockwise at .5 speed
client.after(5000, function() {
  this.clockwise(0.5);
})

//after 3 more seconds, stop and land the drone
client.after(3000, function() {
  this.stop();
  this.land();
});
