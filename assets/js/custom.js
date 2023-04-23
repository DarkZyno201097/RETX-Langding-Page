/**
 * init carousel
 */
document.addEventListener( 'DOMContentLoaded', initCarousel);
function initCarousel() {
    let teamSplide = new Splide( '#teamSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        perPage: 4,
        breakpoints: {
            525: {
                perPage: 2,
            },
      },
        autoplay: true,
        interval: 1500,
    } );
    teamSplide.mount();

    let partnerSplide = new Splide( '#partnerSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        perPage: 2,
        autoplay: true,
        interval: 1500,
    } );
    partnerSplide.mount();

    let newSplide = new Splide( '#newSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        focus: 'center',
        perPage: 3,
        breakpoints: {
            525: {
                perPage: 1.5,
            },
      },
        autoplay: true,
        interval: 2100,
    } );
    newSplide.mount();
}

let body = document.querySelector('body');
let iconMenuMobile = document.getElementById('iconMenuMobile');
let menuMobile = document.getElementById('menuMobile');
let iconCloseMenu = document.getElementById('iconCloseMenu');

iconMenuMobile.addEventListener('click', () => {
    body.classList.add('overflow-hidden');
    menuMobile.classList.remove('hidden');
})

iconCloseMenu.addEventListener('click', () => {
    body.classList.remove('overflow-hidden');
    menuMobile.classList.add('hidden');
    mobileRootMenu.style.display = 'flex';
    mobileSubMenu.style.display = 'none';
})

let mobileMenuList = [].slice.call(document.getElementById('mobileMenuList').children);
mobileMenuList.forEach((item, index, array) => {
    item.addEventListener('click',(e)=> {
        array.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');
        body.classList.remove('overflow-hidden');
        menuMobile.classList.add('hidden');
    })

})

// slide animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});