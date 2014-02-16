$( document ).ready(function() {
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
    //get the search content
    searchInput = $('#search-field').val();
    postAjax(searchInput);
  });
});