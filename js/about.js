$(function(){
    $('.about-gallery__list').slick({
        slidesToShow  : 4,
        slidesToScroll: 1,
        arrows        : true,
        dots          : false,
        infinite      : false,
        prevArrow     : '<a href="#" class="arrow arrow-prev g-arr-l"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#ee105a" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
        nextArrow     : '<a href="#" class="arrow arrow-next g-arr-r"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#ee105a" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
        responsive    : [
            {
                breakpoint: 1480,
                settings  : {
                    slidesToShow  : 3,
                    slidesToScroll: 1,
                    arrows        : true,
                    dots          : false,
                    infinite      : false
                }
            },
            {
                breakpoint: 993,
                settings  : {
                    slidesToShow  : 2,
                    slidesToScroll: 1,
                    dots          : false,
                    arrows        : true
                }
            },
            {
                breakpoint: 641,
                settings  : {
                    slidesToShow  : 1,
                    slidesToScroll: 1,
                    dots          : false,
                    arrows        : true
                }
            }
        ]
    });
})
