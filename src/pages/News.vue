<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";

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
</script>
<template>
  <section class="all-news">
    <div class="container">
      <div class="all-news__wrapper">
        <h2>новости</h2>
        <div class="all-news__inner">
          <ul class="news__list">
            <li class="news__item">
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
            <li class="news__item">
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
            <li class="news__item">
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
            <li class="news__item">
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
            <li class="news__item">
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
            <li class="news__item">
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
        </div>
        <div class="pagination">
          <img src="/images/arrow-left-pag.svg" alt="" />
          <div class="pagination__page-number">
            <p class="active-page-number">1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <img src="/images/arrow-right-pag.svg" alt="" />
        </div>
        <ShadowModals :class="{ active_shadow: activeShadow }">
          <template #modal-content>
            <div class="pop-up__inner" :class="{ active_window: activeWindow }">
              <img
                class="pop-up__close-btn"
                @click="closeModal"
                src="/images/close-pop-up.svg"
                alt=""
              />
              <h3>График работы на новогодние праздники</h3>
              <p>
                Уважаемые Клиенты, готовимся к праздникам заранее. Выходные дни
                на сайте 31.12 - 1.01. 30.12 сокращенный рабочий день.
                Приближается и Китайский Новый Год и скоро начнутся большие
                выходные, все продавцы в Китае будут отдыхать, а также
                карго-компании приостановят отправку заказов. Примерный график
                работы. Карго компании, которые осуществляют перевозку груза из
                Китая в Москву будут принимать груз к отправке до 25 января.
                После 25 января по 1 февраля мы будем принимать ранее
                выкупленные товары, осуществлять сбор заказов на нашем складе в
                Китае. Прекращаем принимать и выкупать заказы с 31 января.
                Кнопка «запросить счёт» будет недоступна с 1 по 20 февраля. 9
                февраля начало празднования Китайского Нового года. Возобновят
                отправки в Россию уже после 20 февраля. Все заказы которые мы не
                успеем отправить будут хранится на нашем складе в Китае и будут
                отправлены клиентам, когда все Карго компании начнут принимать
                груз к отправке. Пожалуйста учитывайте эту информацию при
                создании своих заказов. Планируйте покупку товаров заранее! Даты
                еще могут меняться.
              </p>
            </div>
          </template>
        </ShadowModals>
      </div>
    </div>
  </section>
</template>

<style>
.all-news__wrapper,
.checkout-stage-three__inner,
.empty-order__inner,
.added-goods__inner {
  padding-top: 160px;
  padding-bottom: 128px;
}

.all-news__wrapper h2 {
  font-size: 32px;
  font-family: "BaronNeue";
  color: rgb(40, 40, 44);
  line-height: 32px;
  margin-bottom: 56px;
}

.all-news__inner .news__list {
  gap: 24px;
}

.all-news__inner .news__item {
  background-color: rgb(243, 243, 246);
}

.pagination {
  justify-content: center;
  margin-top: 56px;
  gap: 0 32px;
}

.pagination,
.pagination__page-number {
  display: flex;
  align-items: center;
}

.pagination__page-number {
  font-family: "Mulish";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  gap: 0 24px;
}

.active-page-number {
  color: #366adc;
}

@media (max-width: 1030px) {
  .all-news__inner .news__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .all-news__inner .news__list {
    grid-template-columns: 1fr;
  }
}
</style>
