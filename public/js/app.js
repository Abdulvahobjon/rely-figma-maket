var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".populiar-swiper-button-next",
        prevEl: ".populiar-swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".mySwiperBrend", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".populiar-swiper-button-next",
        prevEl: ".populiar-swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    }
});

let faqBtn  = document.querySelectorAll("#faqBtn")
let faqInfo  = document.querySelectorAll("#faqInfo")
let faqTop  = document.querySelectorAll("#faqTop")

faqBtn.forEach(function(item ,index){
    item.addEventListener('click' , function(){
        faqInfo[index].classList.toggle("hidden")
        faqTop[index].classList.toggle("pb-0")
        faqTop[index].classList.toggle("pb-5")
        item.classList.toggle("rotate-0")
    })
    
})


