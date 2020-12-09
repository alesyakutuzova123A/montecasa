
  $(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        autoplay: true,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.slider2').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        autoplay: false,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

