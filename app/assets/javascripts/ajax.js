function postAjax() {
  $.ajax({
    type: 'POST',
    url: '/search',
    data: {'keyword': user.keyword},
    dataType: 'json'
  }).done(function(response){
    console.log(response);
  });
}