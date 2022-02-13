$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 800,
        infinite: false,
        responsive: [{
                breakpoint: 1083,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    arrows: false,

                }
            },
        ]
    });
});