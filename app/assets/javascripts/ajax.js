function postAjax(searchInput) {
  $.ajax({
    type: 'POST',
    url: '/search',
    data: {'search-word': searchInput},
    dataType: 'json'
  }).done(function(response){
    console.log(response);
  });
}