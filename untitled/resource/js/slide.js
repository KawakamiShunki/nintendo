$('.heroCarousel_slider').slick({
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '32%',
  dots: true,
  appendDots: $('.heroCarousel_thumbnailArea'),
  arrows: true,
  customPaging: ((slider, i) => {
    let imageUrl = slider.$slides.eq(i).find('img').attr('src');
    if (i === 0) {
      imageUrl = "resource/images/shelter_square.webp"
    }
    return `<figure class="heroCarousel_thumbnailItem">
                <img src=${imageUrl}
                      alt="シェルタージェネレーション">
            </figure>`
  }),

  responsive: [{
    breakpoint: 768,
    settings: {
      adaptiveHeight: true,
      centerPadding: '2%',
    }
  }]
})

$('.cardCarousel_itemList_flex').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '20.5%',
  infinite: false
})

$('.cardCarousel_itemList_flex_sp').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
  swipeToSlide: true,
  centerMode: true,
  infinite: false
})

$('.footer_menu_sp_accordion').click(function () {
  $(this).next().slideToggle();
  $(this).find('.accordion_add').fadeToggle();
  $(this).find('.accordion_reduction').fadeToggle();
})
