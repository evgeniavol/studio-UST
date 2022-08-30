const burger = document.querySelector('[data-burger]');
const headerContentNav = document.querySelector('[data-nav]');
const headerContentLogo = document.querySelector('.header-content__logo');
const header = document.querySelector('.header-content__btns--mb');
const body = document.body;

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  headerContentNav.classList.toggle('header-content__nav--visible');
});


const accordion = document.querySelector('.accordion');
const items = document.querySelectorAll('.accordion__item');
const openedItem = items[0];

items.forEach((item) => {

    openedItem.classList.add("is-open");
    const title = item.querySelector('.accordion__title');

    title.addEventListener('click', (e) => {
        const opened_item = accordion.querySelector('.is-open');

        toggle_item(item);

        if (opened_item && opened_item !== item) {
            toggle_item(opened_item);
        }
    });
});

const toggle_item = (item) => {
    const body = item.querySelector('.accordion__body');
    const content = item.querySelector('.accordion__content');

    if (item.classList.contains('is-open')) {
        body.removeAttribute('style');
        item.classList.remove('is-open');
    } else {
        body.style.height = body.scrollHeight + 'px';
        item.classList.add('is-open');
    }
}

const swiper = new Swiper(".your-needs__swiper", {
  loop: true,
  slidesPerView: 3,
  allowTouchMove: true,
  pagination: {
    clickable: true,
    el: ".slider-pagination",
    bulletClass: "slider-bullet",
    bulletActiveClass: "slider-bullet-active",
    spaceBetween: 10,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
    spaceBetween: 15,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
