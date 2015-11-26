// SCRIPT FOR SLIDER

$(document).ready(function() {
    $('.slider').slick({

        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    });
});

// $(document).ready(function() {
//     $("#load-sim").on("click", function() {
//         $("#container").load("/contact.html");
//     });
// });
