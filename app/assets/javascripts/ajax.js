function postAjax(searchInput) {
  $.ajax({
    type: 'POST',
    url: '/search',
    data: {'keyword': searchInput},
    dataType: 'json'
  }).done(function(response){
    console.log(response);
  });
}