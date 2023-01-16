// top 버튼 제이쿼리 플러그인 scrollTo 사용
$(function(){
  $('#btn_top').click(function(){
    $(window).scrollTo(this.hash || 0,600);
  }); // btn_top_click_event
});
/*---------------------------------------------*/


// 메인비쥬얼 - 제이쿼리 플러그인 swiper 사용

$(function(){
  var swiper = new Swiper(".main_visual", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-prev_main_visual",
      prevEl: ".swiper-button-next_main_visual",
    },
    autoplay:{
      delay:3000,
      pauseOnMouseEnter : true
    }
  });

  let $slides = document.querySelectorAll('.swiper-slide');
  for (let i of $slides) {
    i.addEventListener('mouseover', function(){
      swiper.autoplay.stop();
    });
    i.addEventListener('mouseout', function(){
      swiper.autoplay.start();
    });
  }

})


document.addEventListener("DOMContentLoaded",()=>{
  alert('서브페이지 = 쇼핑몰 -> 통증\n디테일페이지 = 쇼핑몰 -> 통증 -> 점퍼')
})