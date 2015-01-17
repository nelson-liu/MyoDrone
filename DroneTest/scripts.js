var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.config('general:navdata_demo', 'FALSE');
var altitude = navdata.demo.altitudeMeters;
var nextaltitude = altitude + 500; //add 500 mm, or .50 m to height

//drone takeoff
client.takeoff();

//after 2 seconds, turn clockwise at .5 speed
client.after(2000, function() {
  this.clockwise(0.5);
})

client.stop();

//move up 500 mm
altitude = navdata.demo.altitudeMeters;
nextaltitude = altitude + 500; //add 500 mm, or .50 m to height
while (altitude !== nextaltitude) {
  client.up(0.3);
  altitude = navdata.demo.altitudeMeters;
}
client.stop();


//move down 500 mm
altitude = navdata.demo.altitudeMeters;
nextaltitude = altitude - 500; //subtract 500 mm, or .50 m to height
while (altitude !== nextaltitude) {
  client.down(0.3);
  altitude = navdata.demo.altitudeMeters;
}
client.stop();


//after 3 more seconds, stop and land the drone
client.after(3000, function() {
  this.stop();
  this.land();
});
