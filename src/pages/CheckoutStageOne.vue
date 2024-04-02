<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";
import ProductFormModal from "../components/ProductFormModal.vue";

const activeAddPopupShadow = ref(false);
const activeAddPopupWindow = ref(false);
const activeDeletePopupShadow = ref(false);
const activeDeletePopupWindow = ref(false);
const activeSendPopupShadow = ref(false);
const activeSendPopupWindow = ref(false);

const activeAddPopupModal = () => {
  activeAddPopupShadow.value = true;
  activeAddPopupWindow.value = true;
  document.body.style.overflow = "hidden";
};

const activeDeletePopupModal = () => {
  activeDeletePopupShadow.value = true;
  activeDeletePopupWindow.value = true;
  document.body.style.overflow = "hidden";
};

const activeSendPopupModal = () => {
  activeSendPopupShadow.value = true;
  activeSendPopupWindow.value = true;
  document.body.style.overflow = "hidden";
};

const closeAddPopupModal = () => {
  activeAddPopupShadow.value = false;
  activeAddPopupWindow.value = false;
  document.body.style.overflow = "inherit";
};

const closeDeletePopupModal = () => {
  activeDeletePopupShadow.value = false;
  activeDeletePopupWindow.value = false;
  document.body.style.overflow = "inherit";
};

const closeSendPopupModal = () => {
  activeSendPopupShadow.value = false;
  activeSendPopupWindow.value = false;
  document.body.style.overflow = "inherit";
};
</script>
<template>
  <section class="checkout-stage-one">
    <div class="container">
      <div class="stage-one__inner">
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
        <div class="checkout__header">
          <div class="product__name">
            <p>товар</p>
          </div>
          <div class="product__info">
            <p>Кол-во</p>
            <p>Сумма</p>
            <p>Доставка</p>
            <p>Услуги</p>
            <p>Итого</p>
          </div>
        </div>
        <div class="checkout__products">
          <div class="checkout__product">
            <div class="edit-icons__product desctop-block">
              <img
                class="edit-product"
                src="/images/edit-product.svg"
                alt=""
                @click="activeAddPopupModal"
              />
              <img
                class="delete-product"
                @click="activeDeletePopupModal"
                src="/images/delete-product.svg"
                alt=""
              />
              <img class="copy-product" src="/images/copy-product.svg" alt="" />
              <img
                class="send-product"
                src="/images/send-product.svg"
                alt=""
                @click="activeSendPopupModal"
              />
            </div>
            <div class="checkout__product__inner">
              <div class="product-main__info">
                <div class="product__img">
                  <img
                    class="product-main__img"
                    src="/images/checkout-product.webp"
                    alt=""
                  />
                  <div class="product__brief">
                    <h4>义乌市胜美化妆品有限公司实力供应商</h4>
                    <p class="product__brief-text">
                      花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
                    </p>
                    <p>颜色分类 <span>HJP005西梅红茶</span></p>
                    <p>净含量 <span>50ml</span></p>
                  </div>
                </div>
                <div class="product__brief">
                  <h4>义乌市胜美化妆品有限公司实力供应商</h4>
                  <p class="product__brief-text">
                    花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
                  </p>
                  <p>颜色分类 <span>HJP005西梅红茶</span></p>
                  <p>净含量 <span>50ml</span></p>
                </div>
              </div>
              <div class="mobile-product__toggle">
                <div class="left-block">
                  <p>颜色分类 <span>HJP005西梅红茶</span></p>
                  <p>净含量 <span>50ml</span></p>
                </div>
                <div class="right-block">
                  <button>
                    <img src="/images/Minus-toggle.svg" alt="" />
                  </button>
                  <input type="text" placeholder="1" />
                  <button>
                    <img src="/images/Plus-toggle.svg" alt="" />
                  </button>
                </div>
              </div>
              <div class="product__quantity-and-price">
                <div class="product__toggle">
                  <div class="mobile-header">Кол-во</div>
                  <div class="product__toggle-inner">
                    <button>
                      <img src="/images/Minus-toggle.svg" alt="" />
                    </button>
                    <input type="text" placeholder="1" />
                    <button>
                      <img src="/images/Plus-toggle.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div class="product__price">
                  <div class="price-box">
                    <div class="mobile-header">Сумма</div>
                    <p>¥ 6.00</p>
                    <span>₽ 79.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Доставка</div>
                    <p>¥ 0.00</p>
                    <span>₽ 0.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Услуги</div>
                    <p>¥ 0.00</p>
                    <span>₽ 0.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Итого</div>
                    <p>¥ 6.00</p>
                    <span>₽ 79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkout__product">
            <div class="edit-icons__product desctop-block">
              <img
                class="edit-product"
                src="/images/edit-product.svg"
                alt=""
                @click="activeAddPopupModal"
              />
              <img
                class="delete-product"
                @click="activeDeletePopupModal"
                src="/images/delete-product.svg"
                alt=""
              />
              <img class="copy-product" src="/images/copy-product.svg" alt="" />
              <img
                class="send-product"
                src="/images/send-product.svg"
                alt=""
                @click="activeSendPopupModal"
              />
            </div>
            <div class="checkout__product__inner">
              <div class="product-main__info">
                <div class="product__img">
                  <img
                    class="product-main__img"
                    src="/images/checkout-product.webp"
                    alt=""
                  />
                  <div class="product__brief">
                    <h4>义乌市胜美化妆品有限公司实力供应商</h4>
                    <p class="product__brief-text">
                      花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
                    </p>
                    <p>颜色分类 <span>HJP005西梅红茶</span></p>
                    <p>净含量 <span>50ml</span></p>
                  </div>
                </div>
                <div class="product__brief">
                  <h4>义乌市胜美化妆品有限公司实力供应商</h4>
                  <p class="product__brief-text">
                    花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
                  </p>
                  <p>颜色分类 <span>HJP005西梅红茶</span></p>
                  <p>净含量 <span>50ml</span></p>
                </div>
              </div>
              <div class="mobile-product__toggle">
                <div class="left-block">
                  <p>颜色分类 <span>HJP005西梅红茶</span></p>
                  <p>净含量 <span>50ml</span></p>
                </div>
                <div class="right-block">
                  <button>
                    <img src="/images/Minus-toggle.svg" alt="" />
                  </button>
                  <input type="text" placeholder="1" />
                  <button>
                    <img src="/images/Plus-toggle.svg" alt="" />
                  </button>
                </div>
              </div>
              <div class="product__quantity-and-price">
                <div class="product__toggle">
                  <div class="mobile-header">Кол-во</div>
                  <div class="product__toggle-inner">
                    <button>
                      <img src="/images/Minus-toggle.svg" alt="" />
                    </button>
                    <input type="text" placeholder="1" />
                    <button>
                      <img src="/images/Plus-toggle.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div class="product__price">
                  <div class="price-box">
                    <div class="mobile-header">Сумма</div>
                    <p>¥ 6.00</p>
                    <span>₽ 79.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Доставка</div>
                    <p>¥ 0.00</p>
                    <span>₽ 0.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Услуги</div>
                    <p>¥ 0.00</p>
                    <span>₽ 0.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Итого</div>
                    <p>¥ 6.00</p>
                    <span>₽ 79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkout__product">
            <div class="edit-icons__product desctop-block">
              <img
                class="edit-product"
                src="/images/edit-product.svg"
                alt=""
                @click="activeAddPopupModal"
              />
              <img
                class="delete-product"
                @click="activeDeletePopupModal"
                src="/images/delete-product.svg"
                alt=""
              />
              <img class="copy-product" src="/images/copy-product.svg" alt="" />
              <img
                class="send-product"
                src="/images/send-product.svg"
                alt=""
                @click="activeSendPopupModal"
              />
            </div>
            <div class="checkout__product__inner">
              <div class="product-main__info">
                <div class="product__img">
                  <img
                    class="product-main__img"
                    src="/images/checkout-product.webp"
                    alt=""
                  />
                  <div class="product__brief">
                    <h4>义乌市胜美化妆品有限公司实力供应商</h4>
                    <p class="product__brief-text">
                      花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
                    </p>
                    <p>颜色分类 <span>HJP005西梅红茶</span></p>
                    <p>净含量 <span>50ml</span></p>
                  </div>
                </div>
                <div class="product__brief">
                  <h4>义乌市胜美化妆品有限公司实力供应商</h4>
                  <p class="product__brief-text">
                    花基品西梅红茶茉莉白柚柠檬白茶女士学生自然持久淡香水50ml批发
                  </p>
                  <p>颜色分类 <span>HJP005西梅红茶</span></p>
                  <p>净含量 <span>50ml</span></p>
                </div>
              </div>
              <div class="mobile-product__toggle">
                <div class="left-block">
                  <p>颜色分类 <span>HJP005西梅红茶</span></p>
                  <p>净含量 <span>50ml</span></p>
                </div>
                <div class="right-block">
                  <button>
                    <img src="/images/Minus-toggle.svg" alt="" />
                  </button>
                  <input type="text" placeholder="1" />
                  <button>
                    <img src="/images/Plus-toggle.svg" alt="" />
                  </button>
                </div>
              </div>
              <div class="product__quantity-and-price">
                <div class="product__toggle">
                  <div class="mobile-header">Кол-во</div>
                  <div class="product__toggle-inner">
                    <button>
                      <img src="/images/Minus-toggle.svg" alt="" />
                    </button>
                    <input type="text" placeholder="1" />
                    <button>
                      <img src="/images/Plus-toggle.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div class="product__price">
                  <div class="price-box">
                    <div class="mobile-header">Сумма</div>
                    <p>¥ 6.00</p>
                    <span>₽ 79.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Доставка</div>
                    <p>¥ 0.00</p>
                    <span>₽ 0.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Услуги</div>
                    <p>¥ 0.00</p>
                    <span>₽ 0.00</span>
                  </div>
                  <div class="price-box">
                    <div class="mobile-header">Итого</div>
                    <p>¥ 6.00</p>
                    <span>₽ 79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="add-more-product">
            <img src="/images/add-product-plus.svg" alt="" />
            <p>Добавить еще товар</p>
          </div>
        </div>

        <ShadowModals :class="{ active_shadow: activeSendPopupShadow }">
          <template #modal-content>
            <div
              class="send__inner"
              :class="{ active_window: activeSendPopupWindow }"
            >
              <img
                class="pop-up__close-btn"
                @click="closeSendPopupModal"
                src="/images/close-pop-up.svg"
                alt=""
              />
              <h3>перемещение позиции</h3>
              <p>Выберите заказ ниже для добавления позиии в него</p>
              <div class="product-data">
                <div class="product-data__blocks">
                  <div class="product-data__block">
                    <p>ID заказа</p>
                    <p>1365</p>
                  </div>
                  <div class="product-data__block">
                    <p>Дата</p>
                    <p>03.08.2023 / 12:46</p>
                  </div>
                  <div class="product-data__block">
                    <p>Позиций</p>
                    <p>20</p>
                  </div>
                  <div class="product-data__block">
                    <p>Общая стоиомсть</p>
                    <div class="product-price">
                      <p>¥ 50.47</p>
                      <p>₽ 671.25</p>
                    </div>
                  </div>
                </div>
                <div class="product-images">
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                </div>
              </div>
              <div class="product-data">
                <div class="product-data__blocks">
                  <div class="product-data__block">
                    <p>ID заказа</p>
                    <p>1365</p>
                  </div>
                  <div class="product-data__block">
                    <p>Дата</p>
                    <p>03.08.2023 / 12:46</p>
                  </div>
                  <div class="product-data__block">
                    <p>Позиций</p>
                    <p>20</p>
                  </div>
                  <div class="product-data__block">
                    <p>Общая стоиомсть</p>
                    <div class="product-price">
                      <p>¥ 50.47</p>
                      <p>₽ 671.25</p>
                    </div>
                  </div>
                </div>
                <div class="product-images">
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                  <img src="/images/product-image.webp" alt="" />
                </div>
              </div>
              <button class="send-btn">Переместить</button>
            </div>
          </template>
        </ShadowModals>

        <ShadowModals :class="{ active_shadow: activeAddPopupShadow }">
          <template #modal-content>
            <ProductFormModal
              v-if="activeAddPopupWindow"
              @close="closeAddPopupModal"
            />
          </template>
        </ShadowModals>

        <ShadowModals :class="{ active_shadow: activeDeletePopupShadow }">
          <template #modal-content>
            <div
              class="review__inner"
              :class="{ active_window: activeDeletePopupWindow }"
            >
              <img
                class="pop-up__close-btn"
                @click="closeDeletePopupModal"
                src="/images/close-pop-up.svg"
                alt=""
              />
              <h3>Вы собираетесь отменить заказ</h3>
              <p>Заказ будет удален и восстановить его будет невозможно</p>
              <div class="review__btns">
                <button>Подтвердить действие</button>
                <p>Отменить</p>
              </div>
            </div>
          </template>
        </ShadowModals>
        <div class="attention">
          <img src="/images/attention.svg" alt="" />
          <p>
            Минимальная сумма заказа - 500 юаней! Пожалуйста, добавьте еще
            товары в заказ
          </p>
        </div>
        <div class="next-step stage-one">
          <router-link :to="{ name: 'CheckoutStageTwo' }">
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
.stage-one__inner {
  align-items: center;
}

.stage-one__inner .attention {
  margin-top: 24px;
}

.stage-one button {
  background-color: rgb(54, 106, 220);
}

.stage-one__inner .checkout__header,
.stage-one__inner .checkout__products {
  max-width: 996px;
  width: 100%;
}

.checkout__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 76px 24px 40px;
  border-radius: 20px;
  background-color: rgb(243, 243, 246);
  margin-top: 56px;
  margin-bottom: 24px;
}

.checkout__header p {
  font-family: "Mulish";
  font-size: 12px;
  line-height: 15px;
  color: rgb(159, 164, 175);
}

.product__info {
  display: flex;
  align-items: center;
  max-width: 475px;
  gap: 0 40px;
}

.product__info p:nth-child(1) {
  width: 19%;
}

.product__info p:nth-child(2) {
  width: 13%;
}

.product__info p:nth-child(4) {
  width: 11%;
}

.product__name,
.product__info {
  width: 100%;
}

.product__name {
  width: 85%;
}

.checkout__products {
  padding: 40px;
  border-radius: 40px;
  background-color: rgb(243, 243, 246);
}

.checkout__product {
  display: flex;
}

.added-goods__inner .checkout__product {
  margin-bottom: 32px;
}

.checkout__products hr {
  display: none;
}

.checkout__product__inner {
  display: flex;
  margin-bottom: 32px;
  width: 100%;
  gap: 0 40px;
}

.edit-icons__product {
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  padding-left: 12px;
}

.desctop-block {
  margin-right: 24px;
}

.edit-icons__product img {
  cursor: pointer;
  width: 16px;
}

.product-main__info {
  display: flex;
  gap: 0 24px;
  align-items: center;
  width: 100%;
  max-width: 361px;
}

.product__img {
  display: flex;
  gap: 0 24px;
}

.product__img img {
  order: 2;
}

.stage-one__inner .edit-icons__product.mobile-block {
  display: none;
}

.product__img .product__brief {
  display: none;
}

.product__brief {
  max-width: 235px;
}

.product__brief,
.mobile-product__toggle .left-block {
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  font-family: "Mulish";
}

.product__brief h4 {
  background-color: rgb(229, 255, 209);
  margin-bottom: 6px;
  padding: 6px;
}

.product__brief-text {
  color: rgb(54, 106, 220);
  text-decoration: underline;
  margin-bottom: 16px;
}

.product__brief p:nth-child(3) {
  margin-bottom: 10px;
}

.product__brief p span,
.mobile-product__toggle .left-block p span {
  color: rgb(54, 106, 220);
}

.mobile-product__toggle {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
}

.product__quantity-and-price {
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  max-width: 475px;
  font-family: "Mulish";
}

.mobile-header {
  display: none;
}

.product__toggle {
  margin-right: 40px;
  display: flex;
}

.product__toggle-inner,
.right-block {
  display: flex;
}

.product__toggle button,
.right-block button {
  border: none;
  background: transparent;
  padding: 0;
}

.product__toggle input,
.right-block input {
  width: 49px;
  text-align: center;
  font-size: 18px;
  border: none;
  background: transparent;
}

.product__toggle input::placeholder,
.right-block input::placeholder {
  color: rgb(40, 40, 44);
}

.product__toggle input:focus,
.right-block input:focus,
.checkout-form input:focus,
.checkout-form textarea:focus {
  outline: none;
}

.product__price {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.price-box {
  display: flex;
  flex-direction: column;
  gap: 12px 0;
}

.price-box span {
  color: rgb(54, 106, 220);
}

.add-more-product {
  display: flex;
  align-items: center;
  margin-top: 34px;
  justify-content: center;
  gap: 0 8px;
  cursor: pointer;
}

.add-more-product p,
.add-product p,
.change-recipient p {
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
  color: rgb(54, 106, 220);
}

.product-data {
  border-radius: 40px;
  border: 1px solid transparent;
  padding: 40px;
  background-color: #fff;
  margin-bottom: 24px;
}

.product-data__blocks {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.product-data__block p:nth-child(1) {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 15px;
  color: rgb(159, 164, 175);
}

.product-data__block p:nth-child(2) {
  margin-bottom: unset;
}

.product-data__block .product-price p {
  margin-bottom: unset;
}

.product-data__block .product-price p:nth-child(1) {
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.product-data__block .product-price p:nth-child(2) {
  color: rgb(54, 106, 220);
}

.product-price {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.product-images {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.send-btn {
  padding: 16px 30px;
  border-radius: 10px;
  border: none;
  background-color: rgb(159, 164, 175);
  font-family: "Mulish";
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #fff;
  margin-top: 32px;
  cursor: pointer;
}

.send-btn.active-btn {
  background-color: rgb(54, 106, 220);
}

.send__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  border-radius: 40px;
  padding: 72px 125px 72px 40px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.send__inner.active_window {
  display: block;
}

.send__inner::-webkit-scrollbar {
  width: 0;
}

.send__inner h3,
.add__inner h3 {
  font-size: 32px;
  line-height: 32px;
  font-family: "BaronNeue";
  margin-bottom: 24px;
}

.send__inner p {
  font-size: 16px;
  line-height: 20px;
  font-family: "Mulish";
  margin-bottom: 56px;
}

.product-data {
  border-radius: 40px;
  border: 1px solid transparent;
  padding: 40px;
  background-color: #fff;
  margin-bottom: 24px;
}

.product-data__blocks {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.product-data__block p:nth-child(1) {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 15px;
  color: rgb(159, 164, 175);
}

.product-data__block p:nth-child(2) {
  margin-bottom: unset;
}

.product-data__block .product-price p {
  margin-bottom: unset;
}

.product-data__block .product-price p:nth-child(1) {
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.product-data__block .product-price p:nth-child(2) {
  color: rgb(54, 106, 220);
}

.product-price {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.product-images {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.send-btn {
  padding: 16px 30px;
  border-radius: 10px;
  border: none;
  background-color: rgb(159, 164, 175);
  font-family: "Mulish";
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #fff;
  margin-top: 32px;
  cursor: pointer;
}

.send-btn.active-btn {
  background-color: rgb(54, 106, 220);
}

.review__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  min-height: 347px;
  border-radius: 40px;
  padding: 72px 192px 72px 40px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: none;
}

.review__inner.active_window {
  display: block;
}

.review__inner h3 {
  font-size: 32px;
  line-height: 32px;
  font-family: "BaronNeue";
  margin-bottom: 24px;
}

.review__inner p {
  font-size: 16px;
  line-height: 20px;
  font-family: "Mulish";
  margin-bottom: 40px;
}

.review__btns {
  display: flex;
  align-items: center;
  gap: 0 24px;
}

.review__btns button {
  padding: 16px 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(54, 106, 220);
  font-size: 18px;
  line-height: 23px;
  font-family: "Mulish";
  cursor: pointer;
}

.review__btns p {
  margin-bottom: unset;
  cursor: pointer;
}

@media (max-width: 860px) {
  .stage-one__inner .checkout__stages {
    margin-bottom: 30px;
  }
}

@media (max-width: 700px) {
  .send__inner {
    padding: 92px 16px 72px 16px;
  }
}

@media (max-width: 769px) {
  .send__inner,
  .review__inner {
    border-radius: unset;
  }
}

@media (max-width: 600px) {
  .review__inner {
    padding: 92px 16px 72px 16px;
  }
}

@media (max-width: 500px) {
  .stage-one__inner h2 {
    margin-bottom: 30px;
  }

  .stage-one__inner .checkout__stages {
    margin-bottom: 40px;
  }

  .checkout__products,
  .product-data {
    padding: 20px 16px;
  }

  .checkout__product__inner {
    margin-bottom: unset;
  }

  .product-main__info {
    gap: 0 16px;
    align-items: baseline;
    flex-direction: column-reverse;
  }

  .mobile-product__toggle {
    display: flex;
  }

  .checkout__products hr {
    display: block;
    height: 1px;
    background-color: #fff;
    border: #fff;
    margin: 24px 0;
  }

  .send__inner p {
    margin-bottom: 40px;
  }
}

@media (max-width: 440px) {
  .review__btns {
    flex-direction: column;
    gap: 24px 0;
    text-align: center;
  }
}
</style>
