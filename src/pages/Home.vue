<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import ShadowModals from "../components/ShadowModals.vue";

const whyChooseUsItem = ref(false);
const stagesItem = ref(false);
const ourSpecialistsItem = ref(false);
const servicesItem = ref(false);
const newsItem = ref(false);
const activeShadow = ref(false);
const activeWindow = ref(false);

const activeModal = () => {
  activeShadow.value = true;
  activeWindow.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  activeShadow.value = false;
  activeWindow.value = false;
  document.body.style.overflow = "inherit";
};

const scrollAnimation = () => {
  let windowCenter = window.pageYOffset || document.documentElement.scrollTop;

  if (windowCenter >= 800) {
    whyChooseUsItem.value = true;
  }
  if (windowCenter >= 1550) {
    stagesItem.value = true;
  }
  if (windowCenter >= 2370) {
    ourSpecialistsItem.value = true;
  }
  if (windowCenter >= 3800) {
    servicesItem.value = true;
  }
  if (windowCenter >= 4550) {
    newsItem.value = true;
  }
};

onMounted(() => window.addEventListener("scroll", scrollAnimation));
</script>
<template>
  <main class="main">
    <section class="promo">
      <div class="container">
        <div class="promo__inner">
          <div class="promo__content">
            <h1>доставка товаров из Китая</h1>
            <p>надежный способ транспортировки ваших грузов</p>
            <div class="btn-box">
              <router-link :to="{ name: 'BlancCheckoutPage' }">
                <button>Заказать выкуп</button>
              </router-link>
              <router-link :to="{ name: 'CargoClearanceEmptyOrder' }">
                <button>Оформить груз</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-us" id="about-us">
      <div class="container">
        <div class="why-choose-us__inner">
          <div class="why-choose-us__header">
            <h2>Почему выбирают нашу компанию</h2>
            <p>
              Выбирая China-Tao для доставки грузов из Китая, вы можете быть
              уверены в получении первоклассных услуг, конкурентоспособных
              тарифов, надежности и безопасности доставки. Обратитесь к нам
              сегодня и доверьте нам доставку ваших товаров
            </p>
          </div>
          <div class="why-choose-us__list">
            <div
              class="why-choose-us__item item1"
              :class="{ animation_class: whyChooseUsItem }"
            >
              <h3>01 быстро и надежно</h3>
              <p>
                Благодаря нашим надежным маршрутам и заранее продуманным
                логистическим решениям, мы доставим ваш товар из Китая с
                минимальными затратами времени и денег
              </p>
            </div>
            <div
              class="why-choose-us__item item2"
              :class="{ animation_class: whyChooseUsItem }"
            >
              <h3>02 гибкость</h3>
              <p>
                Мы предлагаем индивидуальные решения для каждого клиента,
                учитывая его потребности и возможности
              </p>
            </div>
            <img
              src="/images/why-choose-us-item.jpeg"
              alt=""
              class="why-choose-us__item item3"
              :class="{ animation_class: whyChooseUsItem }"
            />
            <div
              class="why-choose-us__item item4"
              :class="{ animation_class: whyChooseUsItem }"
            >
              <h3>03 низкая стоимость доставки</h3>
              <p>
                Благодаря нашим партнерским отношениям с международными
                логистическими компаниями и глубокому опыту работы в этой сфере,
                мы можем предложить вам конкурентные цены на доставку товаров
              </p>
            </div>
            <div
              class="why-choose-us__item item5"
              :class="{ animation_class: whyChooseUsItem }"
            >
              <h3>04 Таможенное оформление</h3>
              <p>
                Грузовая таможенная очистка — это важный этап в перемещении
                грузов через границу. Мы берем на себя все процедуры, связанные
                с этим процессом
              </p>
            </div>
          </div>
          <div class="why-choose-us__stages" id="delivery">
            <div class="stages__left-block">
              <h2>Ключевые этапы получения товара</h2>
              <p>
                Вы получаете профессиональный и надежный сервис, а также
                возможность сосредоточиться на вашем бизнесе, а не на
                логистических проблемах
              </p>
            </div>
            <div class="stages__list-block">
              <div class="stages-item" :class="{ animation_class: stagesItem }">
                <h3>Консультация и оформление</h3>
                <p>
                  Наша команда специалистов по логистике и таможенному
                  оформлению проводит консультацию с вами для выяснения всех
                  деталей и требований к доставке
                </p>
              </div>
              <hr />
              <div class="stages-item" :class="{ animation_class: stagesItem }">
                <h3>Выкуп и упаковка груза</h3>
                <p>
                  Мы предлагаем услугу сбора и упаковки товаров, чтобы
                  обеспечить их безопасность во время транспортировки. Наши
                  профессионалы оптимально организуют упаковку, учитывая
                  характеристики товаров
                </p>
              </div>
              <hr />
              <div class="stages-item" :class="{ animation_class: stagesItem }">
                <h3>Таможенное оформление</h3>
                <p>
                  Наши специалисты занимаются оформлением всех необходимых
                  документов для таможенного контроля и прохождения товаров
                  через таможню
                </p>
              </div>
              <hr />
              <div class="stages-item" :class="{ animation_class: stagesItem }">
                <h3>Доставка до адреса</h3>
                <p>
                  Мы обеспечиваем доставку товаров до пункта назначения. Если
                  необходимо, мы можем осуществить доставку товаров, организовав
                  автомобильную или железнодорожную перевозку до конечного
                  получателя
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="our-specialists">
      <div class="container">
        <div class="our-specialists__inner">
          <div class="our-specialists__header">
            <h2>наши специалисты</h2>
            <p>
              Наша команда состоит из высококвалифицированных специалистов,
              которые знают, как эффективно управлять всем процессом доставки
            </p>
          </div>
          <div class="our-specialists__list">
            <div
              class="our-specialists__item"
              :class="{ animation_class: ourSpecialistsItem }"
            >
              <img src="/images/specialist-img.webp" alt="" />
              <div class="item-description">
                <h3>Белинский ян</h3>
                <p>Специалист по закупкам</p>
              </div>
            </div>
            <div
              class="our-specialists__item"
              :class="{ animation_class: ourSpecialistsItem }"
            >
              <img src="/images/specialist-img.webp" alt="" />
              <div class="item-description">
                <h3>Белинский ян</h3>
                <p>Специалист по закупкам</p>
              </div>
            </div>
            <div
              class="our-specialists__item"
              :class="{ animation_class: ourSpecialistsItem }"
            >
              <img src="/images/specialist-img.webp" alt="" />
              <div class="item-description">
                <h3>Белинский ян</h3>
                <p>Специалист по закупкам</p>
              </div>
            </div>
            <div
              class="our-specialists__item"
              :class="{ animation_class: ourSpecialistsItem }"
            >
              <img src="/images/specialist-img.webp" alt="" />
              <div class="item-description">
                <h3>Белинский ян</h3>
                <p>Специалист по закупкам</p>
              </div>
            </div>
            <div
              class="our-specialists__item"
              :class="{ animation_class: ourSpecialistsItem }"
            >
              <img src="/images/specialist-img.webp" alt="" />
              <div class="item-description">
                <h3>Белинский ян</h3>
                <p>Специалист по закупкам</p>
              </div>
            </div>
            <div
              class="our-specialists__item"
              :class="{ animation_class: ourSpecialistsItem }"
            >
              <img src="/images/specialist-img.webp" alt="" />
              <div class="item-description">
                <h3>Белинский ян</h3>
                <p>Специалист по закупкам</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2 class="testimonials-title">отзывы наших клиентов</h2>

        <swiper
          class="testimonials-slider"
          slides-per-view="auto"
          :space-between="24"
        >
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="testimonials-slide">
            <div class="slide-header">
              <img src="/images/testimonials-img.webp" alt="" />
              <p>Дашкевич Георгий</p>
            </div>
            <div class="slide-text">
              <p>
                Отличная служба карго доставки! Быстрая и надежная. Мой груз
                пришел в целости и сохранности. Рекомендую всем!
              </p>
            </div>
            <div class="slide-product-images">
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
              <img src="/images/product-photo.webp" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="help" id="help-block">
      <div class="container">
        <div class="help__inner">
          <div class="help__header">
            <h2>Помощь</h2>
            <p>
              Мы подготовили для вас важный раздел, где вы сможете найти ответы
              на наиболее распространенные вопросы, а также получить полезные
              инструкции и рекомендации
            </p>
          </div>
          <ul class="services__list">
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Как оформить заказ на нашем сайте?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Как правильно выбрать размер?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Какой срок доставки из Китая?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Как происходит оплата за доставку груза?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Как правильно выбрать цвет?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Как рассчитывается стоимость доставки?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">Как искать товары на Taobao?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
            <li
              class="services__item"
              :class="{ animation_class: servicesItem }"
            >
              <a href="">В чём особенность КарГо доставки из Китая?</a>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Icon 24px"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M11.147 6.69678L15.8037 6.69678C16.356 6.69678 16.8037 7.14453 16.8037 7.69678L16.8037 12.3535M16.0967 7.40381L6.19727 17.3032"
                  stroke="#366ADC"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
              </svg>
            </li>
          </ul>
          <div class="help__footer">
            <a href="#">
              <button>Перейти в раздел помощи</button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="news" id="news-block">
      <div class="container">
        <div class="news__inner">
          <div class="news__header">
            <h2>новости</h2>
            <router-link :to="{ name: 'News' }">
              <button>Все новости</button>
            </router-link>
          </div>
          <ul class="news__list">
            <li class="news__item" :class="{ animation_class: newsItem }">
              <div class="news__item-text">
                <h3>График работы во время новогодних Праздников</h3>
                <p>
                  Уважаемые Клиенты, готовимся к праздникам заранее.Выходные дни
                  на сайте 31.12 - 1.01.30.12 сокращенный рабочий день Уважаемые
                  Клиенты, готовимся к праздникам заранее. Выходные дни на сайте
                  31.12 - 1.01. 30.12 сокращенный рабочий день
                </p>
              </div>
              <div class="news__item-footer">
                <p>04.12.2023</p>
                <div class="news__item-footer__inner" @click="activeModal">
                  <span>Подробнее</span>
                  <img src="/images/help-link.svg" alt="" />
                </div>
              </div>
            </li>
            <li class="news__item" :class="{ animation_class: newsItem }">
              <div class="news__item-text">
                <h3>График работы во время новогодних Праздников</h3>
                <p>
                  Уважаемые Клиенты, готовимся к праздникам заранее.Выходные дни
                  на сайте 31.12 - 1.01.30.12 сокращенный рабочий день Уважаемые
                  Клиенты, готовимся к праздникам заранее. Выходные дни на сайте
                  31.12 - 1.01. 30.12 сокращенный рабочий день
                </p>
              </div>
              <div class="news__item-footer">
                <p>04.12.2023</p>
                <div class="news__item-footer__inner" @click="activeModal">
                  <span>Подробнее</span>
                  <img src="/images/help-link.svg" alt="" />
                </div>
              </div>
            </li>
            <li class="news__item" :class="{ animation_class: newsItem }">
              <div class="news__item-text">
                <h3>График работы во время новогодних Праздников</h3>
                <p>
                  Уважаемые Клиенты, готовимся к праздникам заранее.Выходные дни
                  на сайте 31.12 - 1.01.30.12 сокращенный рабочий день Уважаемые
                  Клиенты, готовимся к праздникам заранее. Выходные дни на сайте
                  31.12 - 1.01. 30.12 сокращенный рабочий день
                </p>
              </div>
              <div class="news__item-footer">
                <p>04.12.2023</p>
                <div class="news__item-footer__inner" @click="activeModal">
                  <span>Подробнее</span>
                  <img src="/images/help-link.svg" alt="" />
                </div>
              </div>
            </li>
          </ul>
          <div class="news-mobile__btn">
            <button>
              <router-link :to="{ name: 'News' }">Все новости</router-link>
            </button>
          </div>
          <ShadowModals :class="{ active_shadow: activeShadow }">
            <template #modal-content>
              <div
                class="pop-up__inner"
                :class="{ active_window: activeWindow }"
              >
                <img
                  class="pop-up__close-btn"
                  @click="closeModal"
                  src="/images/close-pop-up.svg"
                  alt=""
                />
                <h3>График работы на новогодние праздники</h3>
                <p>
                  Уважаемые Клиенты, готовимся к праздникам заранее. Выходные
                  дни на сайте 31.12 - 1.01. 30.12 сокращенный рабочий день.
                  Приближается и Китайский Новый Год и скоро начнутся большие
                  выходные, все продавцы в Китае будут отдыхать, а также
                  карго-компании приостановят отправку заказов. Примерный график
                  работы. Карго компании, которые осуществляют перевозку груза
                  из Китая в Москву будут принимать груз к отправке до 25
                  января. После 25 января по 1 февраля мы будем принимать ранее
                  выкупленные товары, осуществлять сбор заказов на нашем складе
                  в Китае. Прекращаем принимать и выкупать заказы с 31 января.
                  Кнопка «запросить счёт» будет недоступна с 1 по 20 февраля. 9
                  февраля начало празднования Китайского Нового года. Возобновят
                  отправки в Россию уже после 20 февраля. Все заказы которые мы
                  не успеем отправить будут хранится на нашем складе в Китае и
                  будут отправлены клиентам, когда все Карго компании начнут
                  принимать груз к отправке. Пожалуйста учитывайте эту
                  информацию при создании своих заказов. Планируйте покупку
                  товаров заранее! Даты еще могут меняться.
                </p>
              </div>
            </template>
          </ShadowModals>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.promo {
  background-image: url(/images/promo.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.promo__inner {
  min-height: 838px;
  font-family: "BaronNeue";
  padding-top: 14.375rem;
}

.promo__content {
  display: flex;
  flex-direction: column;
  max-width: 43.0625rem;
}

.promo__inner h1,
.promo__inner p {
  color: #fff;
}

.promo__inner h1 {
  font-size: 4.5rem;
  margin-bottom: 2rem;
  line-height: 4.5rem;
}

.promo__inner p {
  font-size: 1.125rem;
  margin-bottom: 4.5rem;
  line-height: 1.4375rem;
  font-family: "Mulish";
}

.btn-box {
  display: flex;
  gap: 0 24px;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
}

.btn-box a:first-child button {
  background-color: rgb(54, 106, 220);
  color: #fff;
  border: none;
  padding: 1rem 1.875rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.125rem;
  font-family: "Mulish";
  line-height: 1.4375rem;
}

.btn-box a:last-child button {
  background-color: rgb(171, 197, 255);
  color: rgb(40, 40, 44);
  border: none;
  padding: 1rem 1.875rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.125rem;
  font-family: "Mulish";
  line-height: 1.4375rem;
}

.why-choose-us {
  border-radius: 40px;
  background-color: #fff;
  margin-top: -35px;
  position: relative;
  z-index: 100;
}

.why-choose-us__inner {
  padding: 128px 0;
}

.why-choose-us__header {
  max-width: 791px;
}

.why-choose-us__header h2 {
  font-family: "BaronNeue";
  font-size: 64px;
  line-height: 64px;
  color: rgb(40, 40, 44);
  margin-bottom: 32px;
}

.why-choose-us__header p {
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
}

.why-choose-us__list {
  margin-top: 72px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
  max-width: 1112px;
}

.why-choose-us__list img {
  width: 194px;
  object-fit: cover;
}

.why-choose-us__item {
  padding: 32px;
  background-color: rgb(243, 243, 246);
  border-radius: 40px;
  border: none;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.item1,
.item4 {
  width: 40.5%;
}

.item4 {
  margin-left: auto;
}

.item2,
.item5 {
  width: 32%;
}

.item3 {
  padding: unset;
  background-color: transparent;
}

.why-choose-us__item.animation_class {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.why-choose-us__item.animation_class:nth-child(2) {
  transition-delay: 0.5s;
}
.why-choose-us__item.animation_class:nth-child(3) {
  transition-delay: 0.7s;
}
.why-choose-us__item.animation_class:nth-child(4) {
  transition-delay: 0.9s;
}
.why-choose-us__item.animation_class:nth-child(5) {
  transition-delay: 1s;
}

.why-choose-us__item h3 {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
  color: rgb(40, 40, 44);
  margin-bottom: 32px;
}
.why-choose-us__item p {
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.why-choose-us__stages {
  display: flex;
  justify-content: space-between;
  margin-top: 128px;
  color: rgb(40, 40, 44);
}

.stages__left-block {
  max-width: 588px;
}

.stages__left-block h2 {
  font-size: 64px;
  font-family: "BaronNeue";
  margin-bottom: 32px;
}

.stages__left-block p {
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
}

.stages__list-block {
  display: flex;
  flex-direction: column;
  max-width: 486px;
}

.stages__list-block hr {
  margin: 24px 0;
  background-color: rgb(243, 243, 246);
  border-top: unset;
}

.stages-item {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.stages-item.animation_class {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.stages-item.animation_class:nth-child(2) {
  transition-delay: 0.4s;
}
.stages-item.animation_class:nth-child(3) {
  transition-delay: 0.5s;
}
.stages-item.animation_class:nth-child(4) {
  transition-delay: 0.6s;
}

.stages-item h3 {
  font-size: 16px;
  line-height: 110%;
  font-family: "BaronNeue";
  margin-bottom: 16px;
  position: relative;
  z-index: 0;
}

.stages-item h3::before {
  content: "";
  position: absolute;
  left: -10px;
  bottom: -3px;
  z-index: -1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: rgb(54, 106, 220);
}

.stages-item p {
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
}

.our-specialists {
  background-color: #08132b;
  margin-top: -38px;
}

.our-specialists__inner {
  padding: 128px 0;
  min-height: 100dvh;
}

.our-specialists__header {
  max-width: 679px;
  margin-bottom: 72px;
}

.our-specialists__inner h2 {
  font-family: "BaronNeue";
  font-size: 64px;
  color: #fff;
  margin-bottom: 32px;
}

.our-specialists__inner p {
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  color: #fff;
}

.our-specialists__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 24px;
}

.our-specialists__item {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.our-specialists__item.animation_class {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.our-specialists__item.animation_class:nth-child(2) {
  transition-delay: 0.4s;
}
.our-specialists__item.animation_class:nth-child(3) {
  transition-delay: 0.5s;
}
.our-specialists__item.animation_class:nth-child(4) {
  transition-delay: 0.6s;
}
.our-specialists__item.animation_class:nth-child(5) {
  transition-delay: 0.7s;
}
.our-specialists__item.animation_class:nth-child(6) {
  transition-delay: 0.8s;
}

.our-specialists__item img {
  margin-bottom: -38px;
  margin-left: 30px;
}

.item-description {
  background-color: #fff;
  border-radius: 40px;
  padding: 50px 32px 32px 32px;
}

.item-description h3,
.item-description p {
  color: rgb(40, 40, 44);
  font-size: 16px;
}

.item-description h3 {
  font-family: "BaronNeue";
  line-height: 110%;
}

.item-description p {
  line-height: 20px;
  font-family: "Mulish";
}

.testimonials {
  padding: 128px 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #fff;
  position: relative;
  margin-top: -36px;
  overflow: hidden;
}

.testimonials-title {
  font-family: "BaronNeue";
  font-size: 64px;
  color: rgb(40, 40, 44);
  margin-bottom: 72px;
}

.testimonials-slider {
  overflow: unset;
}

.testimonials-slide {
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: rgb(243, 243, 246);
  border-radius: 40px;
  height: 312px;
  width: 383px;
}

.slide-header {
  display: flex;
  gap: 0 20px;
  margin-bottom: 24px;
  align-items: center;
  font-family: "BaronNeue";
  line-height: 110%;
  color: rgb(40, 40, 44);
  font-size: 16px;
}

.slide-text {
  margin-bottom: 16px;
  line-height: 20px;
  font-family: "Mulish";
  font-size: 16px;
}

.slide-product-images {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.services__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.services__item {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.services__item.animation_class {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.services__item.animation_class:nth-child(2) {
  transition-delay: 0.4s;
}
.services__item.animation_class:nth-child(3) {
  transition-delay: 0.5s;
}
.services__item.animation_class:nth-child(4) {
  transition-delay: 0.6s;
}
.services__item.animation_class:nth-child(5) {
  transition-delay: 0.7s;
}
.services__item.animation_class:nth-child(6) {
  transition-delay: 0.8s;
}
.services__item.animation_class:nth-child(7) {
  transition-delay: 0.9s;
}
.services__item.animation_class:nth-child(8) {
  transition-delay: 1s;
}

.services__item {
  padding: 24px 32px;
  background-color: rgb(243, 243, 246);
  border-radius: 20px;
  color: rgb(40, 40, 44);
  font-size: 16px;
  line-height: 110%;
  font-family: "BaronNeue";
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.services__item svg {
  border-radius: 50%;
  background-color: #fff;
  padding: 4px;
}

.help {
  background-color: #fff;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: relative;
  margin-bottom: -36px;
}

.help__inner {
  padding-bottom: 128px;
}

.help__header h2 {
  color: rgb(40, 40, 44);
}

.help__header h2,
.news__header h2 {
  font-size: 64px;
  font-family: "BaronNeue";
  margin-bottom: 32px;
}

.help__header p {
  font-family: "Mulish";
  font-size: 16px;
  color: rgb(40, 40, 44);
  line-height: 23px;
  margin-bottom: 72px;
}

.help__inner button {
  margin-top: 48px;
}

.help__inner button,
.news__header button,
.news-mobile__btn button,
.send-for-review button {
  border: none;
  background-color: rgb(54, 106, 220);
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  font-family: "Mulish";
  line-height: 23px;
  padding: 16px 30px;
  border-radius: 10px;
  cursor: pointer;
}

.help__footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.news {
  background-color: #08132b;
}

.news__inner {
  padding: 128px 0;
}

.news__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
}

.news__header h2 {
  color: #fff;
}

.news__inner .news__list {
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 24px;
}

.all-news__inner .news__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.news__inner .news__item,
.all-news__inner .news__item {
  padding: 32px;
  border-radius: 40px;
}

.news__inner .news__item {
  background-color: #fff;
  color: rgb(40, 40, 44);
  width: 384px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.news__inner .news__item.animation_class {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.news__inner .news__item.animation_class:nth-child(2) {
  transition-delay: 0.4s;
}
.news__inner .news__item.animation_class:nth-child(3) {
  transition-delay: 0.5s;
}

.news__list::-webkit-scrollbar {
  height: 0;
}

.news__item-text h3 {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
  margin-bottom: 16px;
}

.news__item-text p {
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
}

.news__item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news__item-footer p {
  color: rgb(159, 164, 175);
  font-family: "Mulish";
  font-size: 12px;
  line-height: 15px;
}

.news__item-footer__inner span,
.news__item-footer__inner p {
  display: block;
  color: rgb(54, 106, 220);
  font-family: "Mulish";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.news__item-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(40, 40, 44);
  gap: 0 8px;
  cursor: pointer;
}

.news-mobile__btn {
  margin-top: 40px;
  justify-content: center;
  display: none;
}

.pop-up__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  border-radius: 40px;
  padding: 104px 40px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.pop-up__inner.active_window {
  display: block;
}

.pop-up__inner h3 {
  margin-bottom: 32px;
}

.pop-up__inner h3,
.use-data__inner h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
}

.pop-up__inner p {
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
}

.pop-up__close-btn {
  position: absolute;
  top: 36px;
  right: 36px;
  cursor: pointer;
}

@media (max-width: 1140px) {
  .item1 {
    width: 100%;
  }
  .item2 {
    order: 3;
  }
  .item3 {
    order: 2;
  }
  .item4 {
    order: 4;
  }
  .item5 {
    order: 5;
  }

  .why-choose-us__stages {
    flex-direction: column;
  }

  .stages__left-block {
    max-width: 100%;
    margin-bottom: 72px;
  }

  .stages__list-block {
    max-width: 100%;
  }

  .why-choose-us__list {
    justify-content: end;
  }

  .why-choose-us__list img {
    width: 242px;
  }
}

@media (max-width: 800px) {
  .item2 {
    width: 60%;
  }

  .item4,
  .item5 {
    width: 47%;
  }

  .our-specialists__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 769px) {
  .pop-up__inner {
    border-radius: unset;
  }
}

@media (max-width: 700px) {
  .why-choose-us__list img {
    display: none;
  }

  .why-choose-us__item {
    width: 100%;
  }

  .why-choose-us__header h2 {
    font-size: 32px;
    line-height: 32px;
  }
}

@media (max-width: 650px) {
  .stages__left-block h2 {
    font-size: 32px;
    line-height: 32px;
  }

  .services__list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 572px) {
  .our-specialists__list {
    grid-template-columns: 1fr;
  }

  .our-specialists__inner h2 {
    font-size: 32px;
  }
}

@media (max-width: 500px) {
  .promo__inner p {
    margin-bottom: 48px;
  }

  .promo__inner h1 {
    font-size: 32px;
    line-height: 32px;
  }

  .why-choose-us__stages {
    margin-top: 80px;
  }

  .testimonials-title {
    font-size: 32px;
  }

  .testimonials-slide {
    padding: 32px 24px;
    height: 372px;
  }

  .help__header h2 {
    font-size: 32px;
    line-height: 32px;
  }

  .help__header p {
    margin-bottom: 40px;
  }
}

@media (max-width: 440px) {
  .news__inner .news__list {
    grid-template-columns: 1fr;
    gap: 24px 0;
    overflow-x: unset;
  }

  .news__inner .news__item {
    max-width: 382px;
    width: unset;
  }

  .news__header h2 {
    font-size: 32px;
    margin-bottom: unset;
  }

  .news__header {
    margin-bottom: 40px;
  }

  .btn-box {
    flex-direction: column;
    gap: 24px 0;
  }

  .btn-box a button {
    width: 100%;
  }
}
</style>
