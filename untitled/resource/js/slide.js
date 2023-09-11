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
  })
})

$('.cardCarousel_itemList_flex').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: '25%',
  infinite: false
})
