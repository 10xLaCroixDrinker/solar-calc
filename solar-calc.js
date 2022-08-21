function degToRad (deg) {
  return deg * Math.PI/180;
};

function radToDeg (rad) {
  return rad * 180/Math.PI
};

function calcHourAngle (latitude, declination, sunrise) {
  // latitude is the latitude of the observer on the Earth (deg)
  // declination is the sun declination (deg)
  // sunrise is boolean indicating if you are requesting for sunrise
  // return the hour angle at either sunrise or sunset
  var cosHourAngle = Math.tan(degToRad(latitude)) * Math.tan(degToRad(declination));
  if (sunrise) cosHourAngle = -cosHourAngle;
  return radToDeg(Math.acos(cosHourAngle));
};

function getLocation () {
  return navigator.geolocation.getCurrentPosition(foundLocation);

  function foundLocation (position) {
    console.log({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  };
};
