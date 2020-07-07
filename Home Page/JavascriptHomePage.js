$(document).ready(function() {

    $('.slider1').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        vertical: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});