function createCards(data) {
  console.log(data);

  var hidden = $('section').hasClass('hidden');

  if (!hidden) {
    $('section').addClass('slideOutLeft');
    setTimeout(function (){
      $('section').toggle();
    }, 3000);
  }

  if (hidden) {
    $('section').toggle();
    $('section').addClass('slideInRight');
  }
}