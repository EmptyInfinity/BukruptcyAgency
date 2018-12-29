document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('body'), {
    dotColor: '#fec222',
    lineColor: '#ccc'
  });
}, false);

$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      nav: false,
      smartSpeed: 900,
      dots: false
  });
  $('.NextBtn').click(function() {
    owl.trigger('prev.owl.carousel', [550]);
  })
  $('.PrevBtn').click(function() {
      owl.trigger('next.owl.carousel', [550]);
  })
});

menu_toggle.onclick = function () {
    menu_ul.classList.toggle("block");
    let mt = document.querySelector('.mt');
    mt.classList.toggle("marg");
}

// body.onresize = () =>{
//   var w = getComputedStyle(document.body);
//     if( w.width.split('px')[0] <= 767){
//       car.classList.remove("owl-carousel");
//     }
// }
