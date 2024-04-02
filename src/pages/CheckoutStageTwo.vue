<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";

const activeUseSaveDataShadow = ref(false);
const activeUseSaveDataWindow = ref(false);

const activeUseSaveDataModal = () => {
  activeUseSaveDataShadow.value = true;
  activeUseSaveDataWindow.value = true;
};

const closeUseSaveDataModal = () => {
  activeUseSaveDataShadow.value = false;
  activeUseSaveDataWindow.value = false;
};
</script>
<template>
  <section class="checkout-stage-two">
    <div class="container">
      <div class="stage-two__inner">
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
          <div class="stages__block active-stage">
            <div class="image-wrapper">
              <img src="/images/geo-icon.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>адрес доставки</p>
            </div>
          </div>
          <div class="stages__block">
            <div class="image-wrapper">
              <img src="/images/confirm-order.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>подтверждение заказа</p>
            </div>
          </div>
        </div>
        <section class="checkout-form">
          <div class="form-header">
            <h3>Ваши данные и адрес</h3>
            <div class="use-saved-data" @click="activeUseSaveDataModal">
              <img src="/images/use-data-icon.svg" alt="" />
              <p>Использовать сохраненные данные</p>
            </div>
          </div>
          <form>
            <input class="box-1" type="text" placeholder="ФИО*" />
            <input class="box-2" type="tel" placeholder="Телефон*" />
            <input class="box-3" type="text" placeholder="Город*" />
            <input
              class="box-4"
              type="text"
              placeholder="Адрес (улица, дом, квартира, индекс)*"
            />
            <textarea
              class="box-5"
              placeholder="Комментарий к заказу*"
            ></textarea>
          </form>
          <ShadowModals :class="{ active_shadow: activeUseSaveDataShadow }">
            <template #modal-content>
              <div
                class="use-data__inner"
                :class="{ active_window: activeUseSaveDataWindow }"
              >
                <img
                  class="pop-up__close-btn"
                  @click="closeUseSaveDataModal"
                  src="/images/close-pop-up.svg"
                  alt=""
                />
                <h3>Использовать сохраненные данные</h3>
                <div class="saved-data__box">
                  <div class="delete__saved-data">
                    <img src="/images/delete-saved.svg" alt="" />
                  </div>
                  <div class="saved-data__first-block">
                    <div class="fullname">
                      <h4>ФИО</h4>
                      <p>Репнинская Наталья Владимировна</p>
                    </div>
                    <div class="phone-number">
                      <h4>Телефон</h4>
                      <p>+7 (911) 765-89-89</p>
                    </div>
                  </div>
                  <div class="saved-data__second-block">
                    <div class="city">
                      <h4>Город</h4>
                      <p>Санкт-Петербург</p>
                    </div>
                    <div class="address">
                      <h4>Адрес</h4>
                      <p>ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
                    </div>
                  </div>
                  <div class="saved-data__edit">
                    <img src="/images/Pen.svg" alt="" />
                    <p>Изменить</p>
                  </div>
                </div>
                <div class="saved-data__box">
                  <div class="delete__saved-data">
                    <img src="/images/delete-saved.svg" alt="" />
                  </div>
                  <div class="saved-data__first-block">
                    <div class="fullname">
                      <h4>ФИО</h4>
                      <p>Репнинская Наталья Владимировна</p>
                    </div>
                    <div class="phone-number">
                      <h4>Телефон</h4>
                      <p>+7 (911) 765-89-89</p>
                    </div>
                  </div>
                  <div class="saved-data__second-block">
                    <div class="city">
                      <h4>Город</h4>
                      <p>Санкт-Петербург</p>
                    </div>
                    <div class="address">
                      <h4>Адрес</h4>
                      <p>ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
                    </div>
                  </div>
                  <div class="saved-data__edit">
                    <img src="/images/Pen.svg" alt="" />
                    <p>Изменить</p>
                  </div>
                </div>
                <div class="use-data__footer">
                  <button class="use-btn">Использовать данные</button>
                  <div class="add-more-product">
                    <img src="/images/add-product-plus.svg" alt="" />
                    <p>Добавить новые данные</p>
                  </div>
                </div>
              </div>
            </template>
          </ShadowModals>
        </section>
        <section class="type-cargo">
          <h3>Тип упаковки груза</h3>
          <p>
            Независимо от вида упаковки, она добавляет к стоимости доставки от 1
            до 5 кг общей массы груза. Все короби тщательно обмотаны скотчем,
            помещены в мешки и снова закреплены скотчем для обеспечения
            надежности и сохранности груза.
          </p>
          <form>
            <div class="form-item">
              <div class="radio-box">
                <input type="radio" class="radio-btn1" id="radio-btn1" />
                <label for="radio-btn1"></label>
              </div>
              <div class="radio-text">
                <p>Обрешетка</p>
                <span
                  >от 400 руб. за единицу (жесткий каркас из досок вокруг
                  корбки)</span
                >
              </div>
            </div>
            <div class="form-item">
              <div class="radio-box">
                <input type="radio" class="radio-btn2" id="radio-btn2" />
                <label for="radio-btn2"></label>
              </div>
              <div class="radio-text">
                <p>Обрешетка</p>
                <span
                  >от 400 руб. за единицу (жесткий каркас из досок вокруг
                  корбки)</span
                >
              </div>
            </div>
            <div class="form-item">
              <div class="radio-box">
                <input type="radio" class="radio-btn3" id="radio-btn3" />
                <label for="radio-btn3"></label>
              </div>
              <div class="radio-text">
                <p>Обрешетка</p>
                <span
                  >от 400 руб. за единицу (жесткий каркас из досок вокруг
                  корбки)</span
                >
              </div>
            </div>
            <div class="form-item">
              <div class="radio-box">
                <input type="radio" class="radio-btn4" id="radio-btn4" />
                <label for="radio-btn4"></label>
              </div>
              <div class="radio-text">
                <p>Обрешетка</p>
                <span
                  >от 400 руб. за единицу (жесткий каркас из досок вокруг
                  корбки)</span
                >
              </div>
            </div>
            <div class="form-item">
              <div class="radio-box">
                <input type="radio" class="radio-btn5" id="radio-btn5" />
                <label for="radio-btn5"></label>
              </div>
              <div class="radio-text">
                <p>Обрешетка</p>
                <span
                  >от 400 руб. за единицу (жесткий каркас из досок вокруг
                  корбки)</span
                >
              </div>
            </div>
            <div class="form-item">
              <div class="radio-box">
                <input type="radio" class="radio-btn6" id="radio-btn6" />
                <label for="radio-btn6"></label>
              </div>
              <div class="radio-text">
                <p>Обрешетка</p>
                <span
                  >от 400 руб. за единицу (жесткий каркас из досок вокруг
                  корбки)</span
                >
              </div>
            </div>
          </form>
        </section>
        <section class="delivery-methods">
          <div class="delivery-methods__china">
            <h3>способ доставки из китая в рф</h3>
            <p>
              Выберите подходящий способ доставки из Китая до Москвы. Подробнее
              о способах доставки и ценах можно узнать на
              <a href="">странице доставки</a>
            </p>
            <form>
              <div class="form-item">
                <div class="radio-box">
                  <input
                    type="radio"
                    class="delivery-radio-btn1"
                    id="delivery-radio-btn1"
                  />
                  <label for="delivery-radio-btn1"></label>
                </div>
                <div class="radio-text">
                  <p>Экспресс доставка</p>
                </div>
              </div>
              <div class="form-item">
                <div class="radio-box">
                  <input
                    type="radio"
                    class="delivery-radio-btn2"
                    id="delivery-radio-btn2"
                  />
                  <label for="delivery-radio-btn2"></label>
                </div>
                <div class="radio-text">
                  <p>Экспресс доставка</p>
                </div>
              </div>
              <div class="form-item">
                <div class="radio-box">
                  <input
                    type="radio"
                    class="delivery-radio-btn3"
                    id="delivery-radio-btn3"
                  />
                  <label for="delivery-radio-btn3"></label>
                </div>
                <div class="radio-text">
                  <p>Экспресс доставка</p>
                </div>
              </div>
            </form>
          </div>
          <div class="delivery-methods__rus">
            <h3>способ доставки по россии</h3>
            <p>
              Выберите способ транспортировки груза по России после его прибытия
              в Москву из Китая. Подробнее о способах доставки и ценах можно
              узнать на <a href="">странице доставки</a>
            </p>
            <form>
              <div class="form-item">
                <div class="radio-box">
                  <input
                    type="radio"
                    class="rus-radio-btn1"
                    id="rus-radio-btn1"
                  />
                  <label for="rus-radio-btn1"></label>
                </div>
                <div class="radio-text">
                  <p>Экспресс доставка</p>
                </div>
              </div>
              <div class="form-item">
                <div class="radio-box">
                  <input
                    type="radio"
                    class="rus-radio-btn2"
                    id="rus-radio-btn2"
                  />
                  <label for="rus-radio-btn2"></label>
                </div>
                <div class="radio-text">
                  <p>Экспресс доставка</p>
                </div>
              </div>
              <div class="form-item">
                <div class="radio-box">
                  <input
                    type="radio"
                    class="rus-radio-btn3"
                    id="rus-radio-btn3"
                  />
                  <label for="rus-radio-btn3"></label>
                </div>
                <div class="radio-text">
                  <p>Экспресс доставка</p>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section class="insurance-cargo">
          <h3>страховка груза</h3>
          <p>
            Мы компенсирует полную стоимость повреждённой или утерянной части
            груза и ее доставку до Москвы. Стоимость страховки - 1% от общей
            суммы заказа с учетом доставки до Москвы. Мы не несем
            ответственность за незастрахованный груз! Страховка на повреждения
            не распространяется для хрупкого груза без обрешетки. Чтобы узнать
            подробнее про страховку груза и на какие страховые случаи она
            распространяется, то перейдите на страницу страхования
          </p>
          <form>
            <div class="form-item">
              <div class="radio-box">
                <input
                  type="checkbox"
                  class="insurance-radio-btn1"
                  id="insurance-radio-btn1"
                />
                <label for="insurance-radio-btn1">Застраховать груз</label>
              </div>
            </div>
          </form>
        </section>
        <div class="attention">
          <img src="/images/attention.svg" alt="" />
          <p>
            Внимательно проверьте введенную вами информацию, мы отправим груз
            основываясь на этих данных.
          </p>
        </div>
        <div class="next-step stage-two">
          <router-link :to="{ name: 'CheckoutStageOne' }">
            <button class="goback">Вернуться назад</button>
          </router-link>
          <router-link :to="{ name: 'CheckoutStageThree' }">
            <button class="confirm-btn">Подтвердить</button>
          </router-link>
        </div>
        <div class="mobile-stages__block">
          <div class="image-wrapper">
            <img src="/images/confirm-order.svg" alt="" />
          </div>
          <div class="stages__block-text">
            <p>подтверждение заказа</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.checkout-form {
  padding: 40px;
  border-radius: 40px;
  background-color: rgb(243, 243, 246);
  margin-top: 56px;
}

.form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-header h3 {
  font-size: 16px;
  font-family: "BaronNeue";
  line-height: 110%;
}

.use-saved-data {
  display: flex;
  align-items: center;
  gap: 0 8px;
  cursor: pointer;
}

.use-saved-data p {
  color: rgb(54, 106, 220);
  font-size: 16px;
  font-family: "Mulish";
  line-height: 20px;
}

.checkout-form form {
  display: grid;
  gap: 16px;
  margin-top: 24px;
  grid-template-areas:
    "A A A A   B B B B"
    "C C C C   D D D D"
    "E E E E   E E E E";
}

.box-1 {
  grid-area: A;
}
.box-2 {
  grid-area: B;
}
.box-3 {
  grid-area: C;
}
.box-4 {
  grid-area: D;
}

.box-5 {
  grid-area: E;
}

.checkout-form form textarea {
  height: 100px;
  resize: none;
}

.checkout-form form .form-item {
  display: flex;
  align-items: center;
}

.radio-text {
  margin-left: 30px;
}

.type-cargo,
.delivery-methods__china,
.delivery-methods__rus,
.insurance-cargo {
  padding: 40px;
  border-radius: 40px;
  background-color: rgb(243, 243, 246);
  margin-top: 24px;
}

.type-cargo h3,
.delivery-methods__china h3,
.delivery-methods__rus h3,
.insurance-cargo h3 {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
  margin-bottom: 16px;
}

.type-cargo p,
.delivery-methods__china p,
.delivery-methods__rus p,
.insurance-cargo p {
  font-family: "Mulish";
  font-size: 12px;
  line-height: 15px;
}

.type-cargo form {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 60px;
}

.radio-text {
  font-family: "Mulish";
}

.type-cargo .radio-text p {
  margin-bottom: 8px;
}

.radio-text p {
  font-size: 16px;
  line-height: 20px;
}

.radio-text span {
  font-size: 12px;
  line-height: 15px;
  color: rgb(159, 164, 175);
}

.delivery-methods {
  display: flex;
  gap: 0 24px;
}

.delivery-methods__china form,
.delivery-methods__rus form {
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  margin-top: 32px;
}

.delivery-methods__china,
.delivery-methods__rus {
  max-width: 588px;
  width: 100%;
  height: 440px;
}

.delivery-methods__china p a,
.delivery-methods__rus p a {
  color: rgb(54, 106, 220);
}

.insurance-cargo p {
  margin-bottom: 30px;
}

.checkout-stage-two .attention {
  margin-top: 24px;
}

.stage-two {
  display: flex;
  gap: 0 24px;
}

.stage-two .goback {
  background-color: rgb(171, 197, 255);
  color: rgb(40, 40, 44);
}

.stage-two .confirm-btn {
  background-color: rgb(159, 164, 175);
  color: rgb(40, 40, 44);
}

/* Стили для попапа использования сохраненных данных */

.use-data__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  border-radius: 40px;
  padding: 72px 100px 72px 40px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.use-data__inner.active_window {
  display: block;
}

.use-data__inner::-webkit-scrollbar {
  width: 0;
}

.use-data__inner .saved-data__box {
  background-color: #fff;
}

.use-data__inner:nth-child(1) .saved-data__box {
  margin-bottom: 24px;
}

.use-data__inner h3 {
  margin-bottom: 56px;
}

.use-data__footer {
  display: flex;
  align-items: center;
  margin-top: 72px;
  gap: 0 24px;
}

.use-data__footer button {
  padding: 16px 30px;
  border-radius: 10px;
  background-color: rgb(159, 164, 175);
  color: #fff;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  border: none;
  cursor: pointer;
}

.use-data__footer .add-more-product {
  margin-top: unset;
}

@media (max-width: 800px) {
  .checkout-form form {
    grid-template-areas:
      "A A A A"
      "B B B B"
      "C C C C"
      "D D D D"
      "E E E E";
  }
}

@media (max-width: 769px) {
  .use-data__inner {
    padding: 92px 16px 67px 16px;
    border-radius: unset;
  }
}

@media (max-width: 700px) {
  .stage-two__inner h2 {
    margin-bottom: 30px;
  }
}

@media (max-width: 572px) {
  .type-cargo form {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .use-data__footer {
    flex-direction: column;
    margin-top: 40px;
    align-items: unset;
    gap: 24px 0;
  }

  .stage-two {
    flex-direction: column-reverse;
    align-items: unset;
    gap: 16px 0;
  }
}
</style>
