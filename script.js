'use strict';

// 스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;   // 사각형의 정보중 높이를 가져오는 코드
console.log(navbarHeight);
document.addEventListener('scroll', () => {
    // console.log('이벤트가 발생되었음!');
    // console.log(window.scrollY);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--bold');
    }else{
        navbar.classList.remove('navbar--bold');
    }
});

// 스크롤에 따른 메뉴바 고정
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(link);
    scrollIntoView(link);
})

//contact 버튼
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

// 화살표 메뉴바로 이동
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2 ){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}