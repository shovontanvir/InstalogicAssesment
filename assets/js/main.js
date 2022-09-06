

window.addEventListener('scroll', function() {
	var element = document.querySelectorAll('.certification');
	var position = element.getBoundingClientRect();

	if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('animate');
	}
});

window.addEventListener('scroll', function() {
  
	var navElement = document.querySelector('#nav');
	var offsetTopElement = navElement.offsetTop;
  console.log(offsetTopElement)


	if(offsetTopElement >= 54) {
        navElement.classList.remove('bg-transparent');
        navElement.classList.add('bg-black');

	}
  else {
    navElement.classList.remove('bg-black');
    navElement.classList.add('bg-transparent');

  }
});


// slick slider initialization

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false
    })


    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });

// $(document).ready(function(){
//     // $('.header').slick();
//     $('.single-item').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       });
// })
              