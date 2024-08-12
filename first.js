const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
      });
/////////////////////////////////////////////////////
      //ABout us script//
      var para = document.getElementById("shakthi");
var btn = document.getElementById("btn1");

para.classList.add("myhide"); // Add the class initially to restrict height
var check = true; // Initialize to true because initially, the button should show "Read More"

btn.addEventListener("click", () => {
    para.classList.toggle("myhide");
    if (check) {
        btn.innerText = "Read More";
        check = false;
    } else {
        btn.innerText = "Read Less";
        check = true;
    }
});
////////////////////////////////////////////////////////