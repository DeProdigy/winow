$( document ).ready(function() {

  //onload get user's location
  user.getLocation();

  //get the search content
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
    user.keyword = $('#search-field').val();
    postAjax();
  });

  console.log(user.latitude, user.longitude);

});