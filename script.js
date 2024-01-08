const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    }, pagination: {
        el: '.swiper-pagination',
      },
      mousewhell:true,
      keyboard:true,
});