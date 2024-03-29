$(function() {
$('.works-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    startPosition: 4,
    navText: ["<img src='../img/Arrow left.svg'>","<img src='../img/Arrow right.svg'>"],
    stagePadding: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.contributor-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    
    startPosition: 0,
    navText: ["<img src='../img/Arrow left.svg'>","<img src='../img/Arrow right.svg'>"],
    stagePadding: 0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
    e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});