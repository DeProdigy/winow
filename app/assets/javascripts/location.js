user.getLocation = function() {
  navigator.geolocation.getCurrentPosition(showPosition);
  user.latitude = position.coords.latitude;
  user.longitude = position.coords.longitude;

};



