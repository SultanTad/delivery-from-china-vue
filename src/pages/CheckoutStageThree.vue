<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";

const activeReviewShadow = ref(false);
const activeReviewWindow = ref(false);

const activeReviewModal = () => {
  activeReviewShadow.value = true;
  activeReviewWindow.value = true;
};

const closeReviewModal = () => {
  activeReviewShadow.value = false;
  activeReviewWindow.value = false;
};
</script>
<template>
  <section class="checkout-stage-three">
    <div class="container">
      <div class="checkout-stage-three__inner">
        <h2>оформление заказа</h2>
        <div class="checkout__stages">
          <div class="stages__block second-phase">
            <div class="image-wrapper">
              <img src="/images/order-list.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>состав заказа</p>
            </div>
          </div>
          <div class="stages__block">
            <div class="image-wrapper">
              <img src="/images/geo-icon.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>адрес доставки</p>
            </div>
          </div>
          <div class="stages__block active-stage">
            <div class="image-wrapper">
              <img src="/images/confirm-order.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>подтверждение заказа</p>
            </div>
          </div>
        </div>
        <div class="summary-data">
          <div class="summary-field">
            <div class="summary-field__inner">
              <div class="saved-data__header">
                <h3>Проверьте все заполненные поля</h3>
                <p>Номер заказа <span>20657</span></p>
              </div>
              <div class="saved-data__main">
                <div class="fullname">
                  <h4>ФИО</h4>
                  <p>Репнинская Наталья Владимировна</p>
                </div>
                <div class="city">
                  <h4>Город</h4>
                  <p>Санкт-Петербург</p>
                </div>
                <div class="phone-number">
                  <h4>Телефон</h4>
                  <p>+7 (911) 765-89-89</p>
                </div>
                <div class="address">
                  <h4>Адрес</h4>
                  <p>ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
                </div>
                <div class="delivery-from-china">
                  <h4>Способ доставки из Китая</h4>
                  <p>Экспресс доставка</p>
                </div>
                <div class="delivery-from-russia">
                  <h4>Способ доставки по России</h4>
                  <p>Экспресс доставка</p>
                </div>
              </div>
            </div>
          </div>
          <div class="summary-price">
            <h3>Итого <span>125,68 ₽</span></h3>
            <div class="summary-price__attention">
              <img src="/images/attention.svg" alt="" />
              <p>
                Ваш заказ подтвержден и ожидает оплаты, но сначала, его
                необходимо проверить, для этого отправьте заказ оператору на
                проверку. После этого вы не сможете его редактировать, если вам
                необходимо добавить товар в заказ или изменить его состав,
                сделайте это сейчас!
              </p>
            </div>
          </div>
        </div>
        <div class="agreement">
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label for="checkbox"
            >Я даю согласие на обработку персональных данных в соответсвии
            <a>с политикой конфиденциальности</a></label
          >
        </div>
        <div class="send-for-review">
          <div class="add-product">
            <img src="/images/add-product-plus.svg" alt="" />
            <p>Добавить товар</p>
          </div>
          <div class="change-recipient">
            <img src="/images/use-data-icon.svg" alt="" />
            <p>Изменить получателя</p>
          </div>
          <button class="send-to-review" @click="activeReviewModal">Отправить на проверку</button>
        </div>
        <ShadowModals :class="{ active_shadow: activeReviewShadow }">
          <template #modal-content>
            <div
              class="review__inner"
              :class="{ active_window: activeReviewWindow }"
            >
              <img
                class="pop-up__close-btn"
                @click="closeReviewModal"
                src="/images/close-pop-up.svg"
                alt=""
              />
              <h3>Вы собираетесь отправить заказ на проверку</h3>
              <p>После подтверждения, редактировать заказ будет невозможно</p>
              <div class="review__btns">
                <button>Подтвердить действие</button>
                <p>Отменить</p>
              </div>
            </div>
          </template>
        </ShadowModals>
        <div class="stage-three__footer">
          <div class="stage-three__footer-inner">
            <p>
              Остались вопросы? Свяжитесь с нашим оператором в заказе, задайте
              вопросы по заказу, уточните наличие или комплектацию
            </p>
            <a>Связаться с оператором</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.summary-field__inner {
  max-width: 690px;
  padding: 40px;
}

.summary-price {
  max-width: 486px;
  padding: 40px;
  position: static;
}

.summary-data {
  margin-top: 57px;
  display: flex;
  gap: 0 24px;
}

.saved-data__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
}

.saved-data__header h3 {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
}

.saved-data__header p {
  font-family: "Mulish";
  font-size: 12px;
  line-height: 15px;
}

.saved-data__header p span {
  font-weight: 700;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  color: rgb(54, 106, 220);
  margin-left: 12px;
}

.summary-field .saved-data__main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 15px;
}

.summary-price h3 {
  font-weight: 700;
  font-size: 32px;
  font-family: "Mulish";
  margin-bottom: 24px;
}

.summary-price h3 span {
  color: rgb(54, 106, 220);
  margin-left: 12px;
}

.summary-price__attention {
  display: flex;
  align-items: flex-start;
  gap: 0 16px;
}

.summary-price__attention p {
  font-size: 18px;
  line-height: 23px;
}

.agreement .checkbox + label:before {
  background-color: transparent;
}

.agreement label a {
  color: rgb(54, 106, 220);
  text-decoration: underline;
}

.agreement {
  margin-top: 24px;
}

.send-for-review {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 32px;
}

.add-product {
  display: flex;
  align-items: center;
  gap: 0 8px;
}

.change-recipient {
  display: flex;
  align-items: center;
  gap: 0 8px;
}

.stage-three__footer {
  font-family: "Mulish";
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 56px;
}

.stage-three__footer-inner {
  max-width: 412px;
}

.stage-three__footer p {
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 16px;
}

.stage-three__footer a {
  font-size: 16px;
  line-height: 20px;
  color: rgb(54, 106, 220);
}

@media (max-width: 1065px) {
  .summary-data {
    flex-direction: column;
    gap: 24px 0;
  }

  .summary-field__inner,
  .summary-price {
    max-width: 100%;
  }
}

@media (max-width: 700px) {
  .send-for-review {
    gap: 24px 32px;
  }
}

@media (max-width: 500px) {
  .checkout-stage-three__inner h2 {
    margin-bottom: 30px;
  }

  .summary-data {
    margin-top: 40px;
  }

  .summary-field__inner,
  .summary-price {
    padding: 20px 16px;
  }

  .saved-data__header {
    flex-direction: column;
    gap: 16px 0;
    align-items: flex-start;
    margin-bottom: 20px;
  }
}

@media (max-width: 440px) {
  .summary-field .saved-data__main {
    grid-template-columns: 1fr;
  }
}
</style>
