<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";
import ProductFormModal from "../components/ProductFormModal.vue";

const activeAddPopupShadow = ref(false);
const activeAddPopupWindow = ref(false);

const activeAddPopupModal = () => {
  activeAddPopupShadow.value = true;
  activeAddPopupWindow.value = true;
  document.body.style.overflow = "hidden";
};

const closeAddPopupModal = () => {
  activeAddPopupShadow.value = false;
  activeAddPopupWindow.value = false;
  document.body.style.overflow = "inherit";
};
</script>
<template>
  <section class="blank-checkout-page">
    <div class="container">
      <div class="blank-checkout__inner">
        <h2>оформление заказа</h2>
        <div class="checkout__stages">
          <div class="stages__block active-stage">
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
          <div class="stages__block">
            <div class="image-wrapper">
              <img src="/images/confirm-order.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>подтверждение заказа</p>
            </div>
          </div>
        </div>
        <div class="checkout__add-product">
          <h3>добавьте товар для оформления доставки</h3>
          <p>
            добавьте в поле ссылку на товар, с сайта
            <a href="">taobao.com</a> / <a href="">tmall.com</a> /
            <a href="">JD.com</a>
          </p>
          <form @submit.prevent>
            <input
              type="text"
              placeholder="Вставьте ссылку товара или введите запрос для поиска"
            />
            <button class="search-btn" @click="activeAddPopupModal">
              Добавить
            </button>
          </form>
        </div>
        <ShadowModals :class="{ active_shadow: activeAddPopupShadow }">
          <template #modal-content>
            <ProductFormModal v-if="activeAddPopupWindow" @close="closeAddPopupModal"/>
          </template>
        </ShadowModals>
        <div class="attention">
          <img src="/images/attention.svg" alt="" />
          <p>
            Подробнее о том, как оформить заказ, можно узнать на
            <span>странице помощи</span>
          </p>
        </div>
        <div class="next-step">
          <router-link :to="{ name: 'CheckoutStageOne' }">
            <button>Следующий шаг</button>
          </router-link>
        </div>
        <div class="mobile-stages__block">
          <div class="image-wrapper">
            <img src="/images/geo-icon.svg" alt="" />
          </div>
          <div class="stages__block-text">
            <p>адрес доставки</p>
          </div>
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
.blank-checkout__inner,
.stage-one__inner,
.stage-two__inner {
  padding-top: 160px;
  padding-bottom: 128px;
  display: flex;
  flex-direction: column;
}

.blank-checkout__inner {
  align-items: center;
}

.blank-checkout__inner h2,
.stage-one__inner h2,
.stage-two__inner h2,
.checkout-stage-three__inner h2,
.empty-order__inner h2,
.added-goods__inner h2 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 56px;
  text-align: center;
}

.checkout__stages {
  display: flex;
  justify-content: center;
  gap: 0 48px;
}

.mobile-stages__block {
  display: none;
}

.stages__block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stages__block-text {
  border-radius: 10px;
  padding: 27px 16px 16px 16px;
  background-color: rgb(243, 243, 246);
  margin-top: -12px;
}

.stages__block p,
.mobile-stages__block p {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
  color: rgb(159, 164, 175);
}

.active-stage {
  color: rgb(54, 106, 220);
}

.active-stage .stages__block-text p {
  color: rgb(54, 106, 220);
}

.active-stage .image-wrapper {
  background-color: rgb(54, 106, 220);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
}

.image-wrapper {
  z-index: 100;
  background-color: rgb(159, 164, 175);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
}

.image-wrapper img {
  width: 24px;
}

.checkout__add-product {
  border-radius: 40px;
  padding: 40px 129px;
  background-color: rgb(243, 243, 246);
  margin-top: 56px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
}

.checkout__add-product h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
  color: rgb(40, 40, 44);
  margin-bottom: 32px;
}

.checkout__add-product p {
  text-align: center;
  margin-bottom: 32px;
  font-family: "Mulish";
  font-size: 16px;
}

.checkout__add-product p a {
  color: rgb(54, 106, 220);
  margin-left: 5px;
  margin-right: 2px;
}

.checkout__add-product form {
  display: flex;
  gap: 0 16px;
  justify-content: center;
}

.checkout__add-product form input {
  width: 100%;
  max-width: 520px;
}

.checkout__add-product form button {
  background-color: rgb(54, 106, 220);
}

.checkout__add-product form button,
.next-step button {
  padding: 16px 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

.attention,
.agreement {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
}

.attention img {
  margin-right: 12px;
}

.attention p {
  font-size: 12px;
  font-family: "Mulish";
}

.attention p span {
  color: rgb(54, 106, 220);
}

.next-step {
  display: flex;
  justify-content: center;
  align-items: center;
}

.next-step button {
  background-color: rgb(159, 164, 175);
}

@media (max-width: 860px) {
  .checkout__add-product {
    padding: 40px;
  }
}

@media (max-width: 500px) {
  .checkout__add-product {
    padding: 20px 16px;
    margin-top: 40px;
  }

  .checkout__add-product form {
    flex-direction: column;
    gap: 16px 0;
  }

  .blank-checkout__inner {
    padding-bottom: 47px;
  }

  .blank-checkout__inner h2 {
    margin-bottom: 30px;
  }

  .checkout__stages {
    flex-direction: column;
    gap: 30px 0;
  }

  .attention {
    margin-bottom: 40px;
  }
}
</style>
