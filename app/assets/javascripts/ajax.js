function postAjax() {
  $.ajax({
    type: 'POST',
    url: '/search',
    data: {'keyword': user.keyword, 'latitude': user.latitude, 'longitude': user.longitude},
    dataType: 'json'
  }).done(function(response){
    createCards(response);
  });
}