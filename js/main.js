window.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header-nav--adaptive");


  function openMenu () {
    menu.classList.toggle("header-nav-adaptive--active");
    burger.classList.toggle("header__burger--open");
    document.querySelector(".header-search-wrap").classList.remove("header-search-wrap--visible");
  };


  menu.addEventListener('click', () => {
    menu.classList.remove("header-nav-adaptive--active");
    burger.classList.remove("header__burger--open");
    document.querySelector(".header-search-wrap").classList.remove("header-search-wrap--visible");
  })

  burger.addEventListener("click", openMenu);


  document.querySelectorAll(".header-nav__link--adaptive").forEach((elems) => {
      elems.addEventListener("click", () => {
        menu.classList.remove("header-nav-adaptive--active");
        burger.classList.remove("header__burger--open");
      });
  });

  
  
  document.querySelector(".header-logo").addEventListener("click", function () {
    menu.classList.remove("header-nav-adaptive--active");
    burger.classList.remove("header__burger--open");
  });


  document.querySelector(".header-search__icon--btn").addEventListener("click", function () {
    document.querySelector(".header-search__icon--btn").classList.toggle('is-it-active');
    if (!document.querySelector(".header-search__icon--btn").classList.toggle('is-it-active')) {
      document.querySelector('.header-search__input--adaptive').value = '';
    }
      document.querySelector(".header-search-wrap").classList.toggle("header-search-wrap--visible");
      menu.classList.remove("header-nav-adaptive--active");
      burger.classList.remove("header__burger--open");
  });
  
  
  document.querySelector(".header-search-icon-cross").addEventListener("click", (e) => {
      document.querySelector(".header-search-wrap").classList.remove("header-search-wrap--visible");
  });



  const heroSwiper = new Swiper(".swiper-hero", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });


  const gallerySwiper = new Swiper(".gallery-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    pagination: {
      el: ".gallery-swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery-swiper-button-next",
      prevEl: ".gallery-swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 25,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        grid: {
          rows: 2,
        },
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25,
        grid: {
          rows: 2,
        },
      },
    },
  });


  if (innerWidth > 575) {
    const editionsSwiper = new Swiper(".editions-swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: ".editions-swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".editions-swiper-button-next",
        prevEl: ".editions-swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1520: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  };


  const partnersSwiper = new Swiper(".projects-swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".projects-swiper-button-next",
      prevEl: ".projects-swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });


  const element = document.querySelector(".gallery__select");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
  $( function() {
    $( ".catalog-accordion").accordion({
       heightStyle: "content",
       collapsible: true,
       active: false
     });
      
      $(".refresh").click(function() {
        $( ".catalog-accordion").accordion({
          collapsible: true,
         active: 0
       });
      })
  });
  

  document.querySelectorAll(".catalog-tabs__img").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".catalog-tabs__img").forEach((element) => {
        element.classList.remove("catalog-tabs__img--active");
      });
      document.querySelectorAll(".catalog-bottom-item").forEach((elem) => {
        elem.classList.remove("catalog-bottom-item--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("catalog-bottom-item--active");
      event.currentTarget.classList.add("catalog-tabs__img--active");
      $(".refresh").click(function() {
        $( ".catalog-accordion").accordion({
          active: 0
       });
      })
    });
  });


  document.querySelector(".events__btn").addEventListener("click", () => {
    document.querySelector(".events__btn").classList.toggle('it-is-active');
    if (document.querySelector(".events__btn").classList.contains('it-is-active')) {
      document.querySelector(".events__btn").textContent = 'Скрыть события';
    } else if (!document.querySelector(".events__btn").classList.contains('it-is-active')) {
      document.querySelector(".events__btn").textContent = 'Все события';
    }
    document.querySelectorAll(".events-item-hide").forEach(function (el) {
      el.classList.toggle("events-item--none");
    });
  });


  ymaps.ready(init);
  function init() {
    var contactsMap = new ymaps.Map("contacts-map", {
      center: [55.7612915, 37.6194496],
      zoom: 17,
    });
    (myPlacemark = new ymaps.Placemark(
      contactsMap.getCenter(),
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/location.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-5, -38],
      }
    )),
      contactsMap.geoObjects.add(myPlacemark);
  }
  let telMask = document.querySelector(".contacts-form__input--tel");

  let mask = new Inputmask("+7 (999)-999-99-99");
  mask.mask(telMask);

  tippy(".projects__tooltip--1", {
    theme: "purple",
    maxWidth: 260,
    content:
      "Пример современных тенденций - современная методология разработки",
  });

  tippy(".projects__tooltip--2", {
    theme: "purple",
    content:
      "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  });

  tippy(".projects__tooltip--3", {
    theme: "purple",
    content: "В стремлении повысить качество",
  });
  el = document.querySelectorAll(".catalog-accordion-bottom").forEach((el) => {
    el = new SimpleBar();
  });
});
