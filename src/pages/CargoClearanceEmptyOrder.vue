<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";
import ProductFormModal from "../components/ProductFormModal.vue";

const activeAddProductShadow = ref(false);
const activeAddProductWindow = ref(false);

const activeProductModal = () => {
  activeAddProductShadow.value = true;
  activeAddProductWindow.value = true;
};

const closeProductModal = () => {
  activeAddProductShadow.value = false;
  activeAddProductWindow.value = false;
};
</script>
<template>
  <section class="empty-order">
    <div class="container">
      <div class="empty-order__inner">
        <h2>оформление груза</h2>
        <div class="checkout__stages">
          <div class="stages__block active-stage">
            <div class="image-wrapper">
              <img src="/images/order-list.svg" alt="" />
            </div>
            <div class="stages__block-text">
              <p>состав груза</p>
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
        <div class="add-cargo">
          <div class="add-cargo__inner">
            <h3>Добавьте груз для оформления доставки</h3>
            <div class="add-cargo__btn" @click="activeProductModal">
              <img src="/images/add-product-plus.svg" alt="" />
              <p>Добавить товар</p>
            </div>
          </div>
        </div>
        <ShadowModals :class="{ active_shadow: activeAddProductShadow }">
          <template #modal-content>
            <div class="add__inner" :class="{ active_window: activeAddProductWindow }">
              <img
                class="pop-up__close-btn"
                @click="closeProductModal"
                src="/images/close-pop-up.svg"
                alt=""
              />
              <h3>укажите параметры груза</h3>
              <form>
                <input
                  class="input-1"
                  type="text"
                  placeholder="Содержимое груза* "
                />
                <div class="form-input__blocks">
                  <input
                    class="input-5"
                    type="text"
                    placeholder="Укажите трек номер груза*"
                  />
                  <input
                    class="input-6"
                    type="text"
                    placeholder="Стоимость содержимого (¥)*"
                  />
                  <input
                    class="input-7"
                    type="text"
                    placeholder="Вес (если есть)"
                  />
                  <input
                    class="input-8"
                    type="text"
                    placeholder="Объем (если есть)"
                  />
                  <textarea
                    class="input-9"
                    placeholder="Укажите дополнительную информацию"
                  ></textarea>
                </div>
              </form>
              <div class="product-summary">
                <div class="summary-box quantity-box">
                  <div class="summary-box__inner">
                    <p>Количество</p>
                    <div class="product__toggle">
                      <button>
                        <img src="/images/Minus-toggle.svg" alt="" />
                      </button>
                      <input type="text" placeholder="1" />
                      <button>
                        <img src="/images/Plus-toggle.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="add-product__images">
                <img src="/images/Product default photo.webp" alt="" />
                <img src="/images/Product photo.webp" alt="" />
              </div>
              <div class="additional-functions">
                <input
                  type="checkbox"
                  class="additional-functions__checkbox1"
                  id="additional-functions__checkbox1"
                />
                <label for="additional-functions__checkbox1"
                  >Нужен фотоотчет этого товара <span>+ ¥ 3</span></label
                >
                <input
                  type="checkbox"
                  class="additional-functions__checkbox2"
                  id="additional-functions__checkbox2"
                />
                <label for="additional-functions__checkbox2"
                  >Это хрупкий товар, нужна дополнительная упаковка
                  <span>+ ¥ 10</span></label
                >
              </div>
              <div class="add-product__footer">
                <button>Добавить груз</button>
                <div class="add-product__attention">
                  <img src="/images/attention.svg" alt="" />
                  <p>Сверяйте цены товара с источником при добавлении</p>
                </div>
              </div>
            </div>
          </template>
        </ShadowModals>
        <div class="next-step">
          <router-link :to="{ name: 'CargoClearanceWithAddedGoods' }">
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
.add-cargo {
  display: flex;
  justify-content: center;
}

.add-cargo__inner {
  border-radius: 40px;
  max-width: 996px;
  padding: 76px 141px;
  background-color: rgb(243, 243, 246);
  margin-bottom: 56px;
}

.add-cargo h3 {
  font-family: "BaronNeue";
  font-size: 32px;
  line-height: 32px;
}

.empty-order__inner .checkout__stages {
  margin-bottom: 56px;
}

.add-cargo__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  cursor: pointer;
}

.add-cargo__btn p {
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
  color: rgb(54, 106, 220);
  margin-left: 8px;
}

@media (max-width: 500px) {
  .add-cargo__inner {
    padding: 20px 16px;
    margin-bottom: 40px;
  }

  .empty-order__inner h2 {
    margin-bottom: 30px;
  }

  .empty-order__inner .checkout__stages {
    margin-bottom: 40px;
  }
}

@media (max-width: 1030px) {
  .add-cargo__inner {
    padding: 40px;
  }
}
</style>
