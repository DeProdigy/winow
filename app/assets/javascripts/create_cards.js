function createCards(data) {
  console.log(data.businesses);

  for (var i = 0; i < data.businesses.length; i++) {
    var imageLink = data.businesses[i].image_url;
    // debugger;
    var largeImageLink = imageLink.replace(/ms.jpg/, 'o.jpg');
    console.log(largeImageLink);

    $('.card-'+i).css('background', 'url('+largeImageLink+')')
                  .removeClass('hidden')
                  .addClass('slideInRight');

  }
}






  // var hidden = $('section').hasClass('hidden');

  // if (!hidden) {
  //   $('section').addClass('slideOutLeft');
  //   setTimeout(function (){
  //     $('section').toggle();
  //   }, 3000);
  // }

  // if (hidden) {
  //   $('section').toggle();
  //   $('section').addClass('slideInRight');
  // }