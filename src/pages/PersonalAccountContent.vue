<script setup>
import { ref, onMounted } from "vue";
import Choices from "choices.js";

import ShadowModals from "../components/ShadowModals.vue";

const activeChangePassShadow = ref(false);
const activeChangePassWindow = ref(false);
const activeEditSettingsShadow = ref(false);
const activeEditSettingsWindow = ref(false);
const activeEditSavedShadow = ref(false);
const activeEditSavedWindow = ref(false);
const activeNewDataShadow = ref(false);
const activeNewDataWindow = ref(false);
const select = ref(null);

const activeChangePassModal = () => {
  activeChangePassShadow.value = true;
  activeChangePassWindow.value = true;
  document.body.style.overflow = "hidden";
};

const activeEditSettingsModal = () => {
  activeEditSettingsShadow.value = true;
  activeEditSettingsWindow.value = true;
  document.body.style.overflow = "hidden";
};

const activeEditSavedModal = () => {
  activeEditSavedShadow.value = true;
  activeEditSavedWindow.value = true;
  document.body.style.overflow = "hidden";
};

const activeNewDataModal = () => {
  activeNewDataShadow.value = true;
  activeNewDataWindow.value = true;
  document.body.style.overflow = "hidden";
};

const closeEditSettingsModal = () => {
  activeEditSettingsShadow.value = false;
  activeEditSettingsWindow.value = false;
  document.body.style.overflow = "inherit";
};

const closeChangePassModal = () => {
  activeChangePassShadow.value = false;
  activeChangePassWindow.value = false;
  document.body.style.overflow = "inherit";
};

const closeEditSavedModal = () => {
  activeEditSavedShadow.value = false;
  activeEditSavedWindow.value = false;
  document.body.style.overflow = "inherit";
};

const closeNewDataModal = () => {
  activeNewDataShadow.value = false;
  activeNewDataWindow.value = false;
  document.body.style.overflow = "inherit";
};

onMounted(() => {
  new Choices(select.value, {
    searchEnabled: false,
    itemSelectText: "",
  });
});
</script>
<template>
  <section class="personal-data">
    <div class="personal-data__title">
      <h2>Личные данные</h2>
      <div class="sub-nav__log-out">
        <p>Выйти</p>
        <img src="/images/Logout.svg" alt="" />
      </div>
    </div>
    <div class="personal-data__inner">
      <div class="personal-data__header">
        <div class="personal-info">
          <div class="ava-block">
            <img
              class="personal-avatar"
              src="/images/testimonials-img.webp"
              alt=""
            />
            <div class="image-filter"></div>
            <img
              class="personal-avatar-camera"
              src="/images/Camera.svg"
              alt=""
            />
          </div>
          <div class="personal-info__inner">
            <h3>Репнинская Наталья Владимировна</h3>
            <div class="personal-info__block">
              <div>
                <p>Ваш личный код</p>
                <span>#23456</span>
                <img class="info-square" src="/images/Info square.svg" alt="" />
                <div class="mini-pop-up">
                  <p>
                    Используйте данный код для карго и самостоятельно выкупаемых
                    заказов, по нему мы будем отслеживать какой груз ваш
                  </p>
                  <span class="triangle"></span>
                </div>
              </div>
              <div>
                <p>Код вашего расширения</p>
                <span>iKBFwk15hcH</span>
                <img class="info-square" src="/images/Info square.svg" alt="" />
                <div class="mini-pop-up2">
                  <p>
                    Используйте данный код для карго и самостоятельно выкупаемых
                    заказов, по нему мы будем отслеживать какой груз ваш
                  </p>
                  <span class="triangle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="personal-settings">
          <p class="edit-settings" @click="activeEditSettingsModal">
            <img src="/images/Pen.svg" alt="" />
            <span>Редактировать</span>
          </p>
          <p class="change-pass" @click="activeChangePassModal">
            <img src="/images/Lock.svg" alt="" />
            <span>Сменить пароль</span>
          </p>
        </div>
      </div>
      <div class="personal-data__contacts">
        <div class="address">
          <h4>Адрес</h4>
          <p>Санкт-Петербург, ул. 2-я Тупиковая, д. 30, кв 4, 195043</p>
        </div>
        <div class="phone-number">
          <h4>Телефон</h4>
          <p>+7 (911) 765-89-89</p>
        </div>
        <div class="email">
          <h4>E-mail</h4>
          <p>natalyarepninskaya@mail.ru</p>
        </div>
        <div class="difference-in-time">
          <h4>Разница времени с Москвой</h4>
          <p>0 часов</p>
        </div>
      </div>
    </div>
    <ShadowModals :class="{ active_shadow: activeChangePassShadow }">
      <template #modal-content>
        <div
          class="change-pass__inner"
          :class="{ active_window: activeChangePassWindow }"
        >
          <img
            class="pop-up__close-btn"
            @click="closeChangePassModal"
            src="/images/close-pop-up.svg"
            alt=""
          />
          <h3>смена пароля</h3>
          <form>
            <input type="text" placeholder="Введите новый пароль" />
            <input type="password" placeholder="Повторите пароль" />
            <button>Изменить пароль</button>
          </form>
        </div>
      </template>
    </ShadowModals>

    <ShadowModals :class="{ active_shadow: activeEditSettingsShadow }">
      <template #modal-content>
        <div
          class="edit-settings__inner"
          :class="{ active_window: activeEditSettingsWindow }"
        >
          <img
            class="pop-up__close-btn"
            @click="closeEditSettingsModal"
            src="/images/close-pop-up.svg"
            alt=""
          />
          <h3>Личные данные</h3>
          <p>
            Здесь вы можете добавить информацию о себе которая может быть
            использована при оформлении заказа
          </p>
          <form>
            <input type="text" placeholder="Никнейм" />
            <input type="text" placeholder="ФИО" />
            <input type="number" placeholder="Телефон" />
            <div class="confirm-number">
              <p>Номер не подтвержден <span>Подтвердить</span></p>
            </div>
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Город" />
            <input
              type="text"
              placeholder="Адрес (улица, дом, квартира, индекс)"
            />
            <select ref="select" type="text" class="js-choice">
              <option value="">Разница времени с Москвой</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
              <option value="">-14 часов</option>
            </select>
            <div class="notify-by-mail">
              <input type="checkbox" class="checkbox" id="checkbox" />
              <label for="checkbox"
                >Уведомлять о событиях в заказе на почту</label
              >
            </div>
            <div class="notify-by-telegram">
              <button>
                <img src="/images/telegram-form.svg" alt="" />
                <p>Привязать</p>
              </button>
              <p>Привяжите Telegram Бота для получения уведомлений</p>
            </div>
            <button class="save-changes">Сохранить изменения</button>
          </form>
        </div>
      </template>
    </ShadowModals>
  </section>
  <section class="saved-data">
    <h2>сохраненные данные</h2>
    <div class="saved-data__inner">
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
        <div class="saved-data__edit" @click="activeEditSavedModal">
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
        <div class="saved-data__edit" @click="activeEditSavedModal">
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
        <div class="saved-data__edit" @click="activeEditSavedModal">
          <img src="/images/Pen.svg" alt="" />
          <p>Изменить</p>
        </div>
      </div>
      <ShadowModals :class="{ active_shadow: activeEditSavedShadow }">
        <template #modal-content>
          <div
            class="saved-data__pop-up"
            :class="{ active_window: activeEditSavedWindow }"
          >
            <img
              class="pop-up__close-btn"
              @click="closeEditSavedModal"
              src="/images/close-pop-up.svg"
              alt=""
            />
            <h3>редактировать данные</h3>
            <form>
              <input type="text" placeholder="ФИО" />
              <input type="number" placeholder="Телефон" />
              <input type="text" placeholder="Город" />
              <input
                type="text"
                placeholder="Адрес (улица, дом, квартира, индекс)"
              />
              <button>Сохранить изменения</button>
            </form>
          </div>
        </template>
      </ShadowModals>
    </div>
  </section>
  <div class="add-data" @click="activeNewDataModal">
    <img src="/images/plus.svg" alt="" />
    <p>Добавить новые данные</p>
  </div>
  <ShadowModals :class="{ active_shadow: activeNewDataShadow }">
    <template #modal-content>
      <div
        class="new-data__pop-up"
        :class="{ active_window: activeNewDataWindow }"
      >
        <img
          class="pop-up__close-btn"
          src="/images/close-pop-up.svg"
          alt=""
          @click="closeNewDataModal"
        />
        <h3>добавить новые данные</h3>
        <form>
          <input type="text" placeholder="ФИО" />
          <input type="number" placeholder="Телефон" />
          <input type="text" placeholder="Город" />
          <input
            type="text"
            placeholder="Адрес (улица, дом, квартира, индекс)"
          />
          <button>добавить данные</button>
        </form>
      </div>
    </template>
  </ShadowModals>
</template>

<style>
.change-pass__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  min-height: 430px;
  border-radius: 40px;
  padding: 72px 168px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.change-pass__inner.active_window {
  display: block;
}

.change-pass__inner h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 56px;
  text-align: center;
}

.change-pass__inner form,
.edit-settings__inner form,
.saved-data__pop-up form,
.new-data__pop-up form {
  display: flex;
  flex-direction: column;
  gap: 16px 0;
}

.saved-data__pop-up {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  min-height: 430px;
  border-radius: 40px;
  padding: 72px 168px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.saved-data__pop-up.active_window {
  display: block;
}

.saved-data__pop-up h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 56px;
}

.saved-data__pop-up form button {
  padding: 16px 30px;
  border-radius: 10px;
  background-color: rgb(54, 106, 220);
  border: none;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

.change-pass__inner form button {
  border: none;
  background-color: rgb(159, 164, 175);
  color: #fff;
  padding: 16px 30px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Mulish";
  line-height: 23px;
  cursor: pointer;
}

.change-pass__inner img {
  position: absolute;
  top: 36px;
  right: 36px;
  cursor: pointer;
}

.edit-settings__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  border-radius: 40px;
  padding: 72px 168px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.edit-settings__inner.active_window {
  display: block;
}

.edit-settings__inner::-webkit-scrollbar {
  width: 0;
}

.edit-settings__inner h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 24px;
}

.edit-settings__inner p {
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 56px;
}

.new-data__pop-up {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  min-height: 430px;
  border-radius: 40px;
  padding: 72px 168px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.new-data__pop-up.active_window {
  display: block;
}

.new-data__pop-up h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 56px;
}

.new-data__pop-up form button {
  padding: 16px 30px;
  border-radius: 10px;
  background-color: rgb(54, 106, 220);
  border: none;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

.confirm-number {
  display: flex;
  gap: 0 8px;
}

.confirm-number p {
  color: rgb(159, 164, 175);
  font-size: 12px;
  line-height: 15px;
  margin-bottom: unset;
}

.confirm-number span {
  color: rgb(54, 106, 220);
}

.choices {
  margin-bottom: unset;
}

.choices__inner {
  border: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 20px;
  font-family: "Mulish";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.choices__list--dropdown {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  border: none;
}

.choices__list--dropdown .choices__item--selectable.is-highlighted {
  background-color: transparent;
  color: rgb(54, 106, 220);
}

.choices__list--dropdown .choices__item {
  font-family: "Mulish";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgb(159, 164, 175);
}

.choices__list--dropdown .choices__list::-webkit-scrollbar {
  width: 4px;
  background-color: rgb(243, 243, 246);
  border-radius: 100px;
}

.choices__list--dropdown .choices__list::-webkit-scrollbar-thumb {
  background-color: rgb(54, 106, 220);
  border-radius: 100px;
}

.choices[data-type*="select-one"]:after {
  content: url(../assets/images/Down-in-select.svg);
  border-style: unset;
  right: 29px;
  top: 40%;
}

.choices__list--single {
  padding: 0;
}

.choices[data-type*="select-one"] .choices__inner {
  padding-bottom: 16px;
}

.choices__placeholder {
  opacity: unset;
}

.notify-by-telegram {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edit-settings__inner form .notify-by-telegram button {
  display: flex;
  align-items: center;
  gap: 0 8px;
  padding: 10px 16px;
  font-family: "Mulish";
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  border-radius: 10px;
  background-color: rgb(38, 164, 227);
  border: none;
}

.notify-by-telegram button p {
  color: #fff;
}

.notify-by-telegram p {
  color: rgb(98, 97, 100);
  font-size: 12px;
  line-height: 15px;
  margin-bottom: unset;
}

.edit-settings__inner form button {
  padding: 16px 30px;
  border-radius: 10px;
  background-color: rgb(54, 106, 220);
  border: none;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

@media (max-width: 980px) {
  .saved-data__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 950px) {
  .personal-data__contacts .address {
    width: unset;
  }
}

@media (max-width: 769px) {
  .personal-data__header {
    margin-bottom: 20px;
    flex-direction: column-reverse;
    align-items: unset;
  }

  .edit-settings__inner,
  .saved-data__pop-up,
  .new-data__pop-up {
    padding: 92px 16px 67px 16px;
    border-radius: unset;
  }
}

@media (max-width: 700px) {
  .change-pass__inner {
    padding: 186px 16px;
    border-radius: unset;
  }
}

@media (max-width: 572px) {
  .personal-data__inner,
  .checkout-form {
    padding: 20px 16px;
  }

  .saved-data__box {
    padding: 30px 20px 20px 16px;
  }

  .saved-data__first-block,
  .saved-data__second-block {
    flex-direction: column;
    align-items: flex-start;
  }

  .saved-data__first-block .fullname,
  .saved-data__second-block .city {
    margin-bottom: 16px;
  }

  .personal-data__title .sub-nav__log-out {
    display: flex;
    align-items: center;
    gap: 0 8px;
    font-size: 16px;
    font-family: "Mulish";
    font-weight: 400;
    line-height: 20px;
  }
}
</style>
