$(function() {
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
    dots: true,
  });

  var $status = $('.counter-info');
  var $slickElement = $('#gallery-carousel');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html( '<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });


$('#gallery-carousel').slick({
centerMode: true,
infinite: true,
centerPadding: '40px',
slidesToShow: 1,
dots: false,
arrows: true
});
  
});