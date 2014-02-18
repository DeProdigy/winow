function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function setPosition(position){
  user.latitude = position.coords.latitude;
  user.longitude = position.coords.longitude;

  console.log("Latitude: " + user.latitude + " Longitude: " + user.longitude);
}



