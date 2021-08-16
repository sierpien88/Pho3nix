$(function () {
  $('.hamburger').click(() => {
    $('.hamburger').toggleClass('is-active');
  });
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 768,
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


  // var $status = $('.counter-info');
  // var $slickElement = $('.gallery-carousel');
  // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $status.html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  // });
  // $slickElement.slick({
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '40px',
  //   slidesToShow: 1,
  //   dots: false,
  //   arrows: true
  // });


  $('#camps-gallery .gallery-carousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#camps-gallery .counter-info').html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });
  $('#camps-gallery .gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });


  $('#workshops-gallery .gallery-carousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#workshops-gallery .counter-info').html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });
  $('#workshops-gallery .gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });

  $('#competitions-gallery .gallery-carousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#competitions-gallery .counter-info').html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });
  $('#competitions-gallery .gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });
  
  $('#news-gallery .gallery-carousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#news-gallery .counter-info').html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });
  $('#news-gallery .gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });

  $('#foundation-gallery .gallery-carousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#foundation-gallery .counter-info').html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });
  $('#foundation-gallery .gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });

  $('#home-gallery .gallery-carousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('#home-gallery .counter-info').html('<span class="current_slide">' + i + '</span> <span class="divider">/</span> <span class="total_slides"> ' + slick.slideCount + '</span>');
  });
  $('#home-gallery .gallery-carousel').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: false,
    arrows: true
  });





  // procedure to put divs inside slider on mobile 
  let arrNumbersSections = document.querySelectorAll('.js-numbers');
  if (arrNumbersSections[0]) {
    console.log(arrNumbersSections);
    let numbersSlider = document.querySelector('.numbers__slider');
    let dividers = document.querySelectorAll('.divider');
    let numbersMainTag = null;
    let isNumbersSlider = false;
    let isNumbersMobile = false;
    let divs = {};
    let i = 0;
    if (window.innerWidth < 576 && isNumbersSlider == false) {
      dividers.forEach(el => {
        el.style.display = 'none';
      });
      arrNumbersSections.forEach(el => {
        divs[i] = document.createElement('div');
        numbersSlider.appendChild(divs[i]).appendChild(el);
        i++;
      });
      $('.numbers__slider').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '40px',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        mobileFirst: true
      });
      isNumbersSlider = true;
      isNumbersMobile = true;
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 576 && isNumbersMobile == false) {
        dividers.forEach(el => {
          el.style.display = 'none';
        });
        i = 0;
        arrNumbersSections.forEach(el => {
          if (isNumbersSlider == false) {
            divs[i] = document.createElement('div');
            numbersSlider.appendChild(divs[i]).appendChild(el);
          }
          else {
            divs[i].appendChild(el);
          }
          i++;
        });
        if (isNumbersSlider == false) {
          $('.numbers__slider').slick({
            centerMode: true,
            infinite: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: true,
            arrows: true,
            mobileFirst: true
          });
          isNumbersSlider = true;
        }
        isNumbersMobile = true;
        console.log(arrNumbersSections);
      }
      else if (window.innerWidth > 575 && isNumbersMobile == true) {
        numbersMainTag = document.querySelector('main');
        console.log(numbersMainTag);
        let i = 0;
        arrNumbersSections.forEach(el => {
          numbersMainTag.appendChild(el);
          console.log(el);
          if (dividers[i]) {
            dividers[i].style.removeProperty('display');
            numbersMainTag.appendChild(dividers[i]);
          }
          i++;
        });
        isNumbersMobile = false;
        i = 0;
      }
    });
  }

  // procedure to put cards to slider on mobile
  let cardsBox = document.querySelectorAll('.cardOne');
  if (cardsBox[0]) {
    let cardsBox__cards = null;
    let cardsSlider = document.querySelector('.cardsBox__slider');
    let isCreatedCardsSlider = false;
    let divs = {};
    let cardsBoxMobile = false;
    let i = 0;
    if (window.innerWidth < 576) {
      cardsBox.forEach(el => {
        if (isCreatedCardsSlider == false) {
          divs[i] = document.createElement('div');
          cardsSlider.appendChild(divs[i]).appendChild(el);
          i++;
        }
      });
      if (isCreatedCardsSlider == false) {
        $('.cardsBox__slider').slick({
          centerMode: true,
          infinite: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
          arrows: true,
          mobileFirst: true
        });
        isCreatedCardsSlider = true;
      }
      cardsBoxMobile = true;
      i = 0;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 576 && cardsBoxMobile == false) {
        // cardsSlider = document.querySelector('.cardsBox__slider');
        cardsSlider.style.removeProperty('display');
        cardsBox.forEach(el => {
          if (isCreatedCardsSlider == false) {
            divs[i] = document.createElement('div');
            cardsSlider.appendChild(divs[i]).appendChild(el);
            i++;
          }
          else {
            for (let i = 0; i < cardsBox.length; i++) {
              divs[i].appendChild(cardsBox[i]);
            }
          }
        });
        if (isCreatedCardsSlider == false) {
          $('.cardsBox__slider').slick({
            centerMode: true,
            infinite: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: true,
            arrows: true,
            mobileFirst: true
          });
          isCreatedCardsSlider = true;
        }
        cardsBoxMobile = true;
        i = 0;
      }
      else if (window.innerWidth > 575 && cardsBoxMobile == true) {
        cardsBox__cards = document.querySelector('.cardsBox__cards');
        cardsBox.forEach(el => {
          cardsBox__cards.appendChild(el);
        });
        cardsSlider.style.display = 'none';
        cardsBoxMobile = false;
      }
    });
  }
});

// component with image and text
let imageTextComponents = document.querySelectorAll('.imageText');
if (imageTextComponents[0]) {
  imageTextComponents.forEach(element => {
    let imageText__heading = element.querySelector('.imageText__heading');
    let imageText__headingH2 = element.querySelector('.imageText__heading h2');
    let imageText__image = element.querySelector('.imageText__image');
    let isMobile = false;
    if (window.innerWidth < 767) {
      if (imageText__headingH2) {
        imageText__image.prepend(imageText__headingH2);
      }
      isMobile = true;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768 && isMobile == false) {
        if (imageText__headingH2) {
          imageText__image.prepend(imageText__headingH2);
        }
        isMobile = true;
      }
      else if (window.innerWidth > 767 && isMobile == true) {
        if (imageText__headingH2) {
          imageText__heading.appendChild(imageText__headingH2);
        }
        isMobile = false;
      }
    });
  });
}

//autoresize textarea on input
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}
function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

