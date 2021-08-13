$(function () {
  /*
* Replace all SVG images with inline SVG
*/
  $('img.svg').each((i, e) => {

    const $img = $(e);

    const imgID = $img.attr('id');

    const imgClass = $img.attr('class');

    const imgURL = $img.attr('src');

    $.get(imgURL, (data) => {
      // Get the SVG tag, ignore the rest
      let $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', `${imgClass} replaced-svg`);
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
      }

      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  $('#all-initiatives').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#news-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  var $status = $('.counter-info');
  var $slickElement = $('.gallery-carousel');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });


  $('.gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });

});



let imageTextComponents = document.querySelectorAll('.imageText');
if (imageTextComponents[0]) {
  imageTextComponents.forEach(element => {
    let imageText__heading = element.querySelector('.imageText__heading');
    let imageText__headingH2 = element.querySelector('.imageText__heading h2');
    let imageText__image = element.querySelector('.imageText__image');
    let isMobile = false;
    if (window.innerWidth < 767) {
      if(imageText__headingH2){
        imageText__image.prepend(imageText__headingH2);
      }
      isMobile = true;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768 && isMobile == false) {
        if(imageText__headingH2){
        imageText__image.prepend(imageText__headingH2);
        }
        isMobile = true;
      }
      else if(window.innerWidth > 767 && isMobile == true){
        if(imageText__headingH2){
        imageText__heading.appendChild(imageText__headingH2);
        }
        isMobile = false;
      }
    });
  });
}