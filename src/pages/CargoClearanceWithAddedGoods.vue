<script setup>
import { ref } from "vue";

import ShadowModals from "../components/ShadowModals.vue";
import ProductFormModal from "../components/ProductFormModal.vue";

</script>
<template>
  <section class="added-goods">
    <div class="container">
      <div class="added-goods__inner">
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
        <div class="checkout__header">
          <div class="product__name">
            <p>товар</p>
          </div>
          <div class="product__info">
            <p>Кол-во</p>
            <p>Мест</p>
            <p>Вес(кг)</p>
            <p>Кубы</p>
          </div>
        </div>
        <div class="checkout__products">
          <div class="checkout__product">
            <div class="product-main__info">
              <div class="product__img">
                <img
                  class="product-main__img"
                  src="/images/cargo-img.webp"
                  alt=""
                />
                <div class="edit-icons__product">
                  <img src="/images/edit-product.svg" alt="" />
                  <img src="/images/delete-product.svg" alt="" />
                </div>
                <div class="product__brief">
                  <h4>Одежда</h4>
                  <p>Трек номер <span>4567</span></p>
                </div>
              </div>
              <div class="product__brief">
                <h4>Одежда</h4>
                <p>Трек номер <span>4567</span></p>
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
                  <div class="mobile-header">Мест</div>
                  <p>0</p>
                </div>
                <div class="price-box">
                  <div class="mobile-header">Вес (кг)</div>
                  <p>0</p>
                </div>
                <div class="price-box">
                  <div class="mobile-header">Кубы</div>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkout__product">
            <div class="product-main__info">
              <div class="product__img">
                <img
                  class="product-main__img"
                  src="/images/cargo-img.webp"
                  alt=""
                />
                <div class="edit-icons__product">
                  <img src="/images/edit-product.svg" alt="" />
                  <img src="/images/delete-product.svg" alt="" />
                </div>
                <div class="product__brief">
                  <h4>Одежда</h4>
                  <p>Трек номер <span>4567</span></p>
                </div>
              </div>
              <div class="product__brief">
                <h4>Одежда</h4>
                <p>Трек номер <span>4567</span></p>
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
                  <div class="mobile-header">Мест</div>
                  <p>0</p>
                </div>
                <div class="price-box">
                  <div class="mobile-header">Вес (кг)</div>
                  <p>0</p>
                </div>
                <div class="price-box">
                  <div class="mobile-header">Кубы</div>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkout__product">
            <div class="product-main__info">
              <div class="product__img">
                <img
                  class="product-main__img"
                  src="/images/cargo-img.webp"
                  alt=""
                />
                <div class="edit-icons__product">
                  <img src="/images/edit-product.svg" alt="" />
                  <img src="/images/delete-product.svg" alt="" />
                </div>
                <div class="product__brief">
                  <h4>Одежда</h4>
                  <p>Трек номер <span>4567</span></p>
                </div>
              </div>
              <div class="product__brief">
                <h4>Одежда</h4>
                <p>Трек номер <span>4567</span></p>
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
                  <div class="mobile-header">Мест</div>
                  <p>0</p>
                </div>
                <div class="price-box">
                  <div class="mobile-header">Вес (кг)</div>
                  <p>0</p>
                </div>
                <div class="price-box">
                  <div class="mobile-header">Кубы</div>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="add-more-product">
            <img src="/images/add-product-plus.svg" alt="" />
            <p>Добавить еще груз</p>
          </div>
        </div>
        <div class="next-step stage-one">
          <button>
            <a href="">Следующий шаг</a>
          </button>
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
.added-goods__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.added-goods__inner .product-main__info {
  max-width: 293px;
}

.added-goods__inner .product__info {
  max-width: 379px;
  justify-content: space-between;
  gap: unset;
}

.added-goods__inner .checkout__header,
.added-goods__inner .checkout__products {
  max-width: 792px;
  width: 100%;
}

.added-goods__inner .product__quantity-and-price {
  height: 24px;
  align-items: center;
  max-width: 379px;
}

.added-goods__inner .product-main__info {
  align-items: flex-start;
}

.added-goods__inner .product__brief h4 {
  background-color: transparent;
}

.added-goods__inner .next-step {
  margin-top: 56px;
}

@media (max-width: 860px) {
  .added-goods__inner .checkout__product {
    flex-wrap: nowrap;
  }

  .price-box {
    gap: unset;
  }
}

@media (max-width: 700px) {
  .added-goods__inner .checkout__product {
    flex-wrap: wrap;
    margin-bottom: unset;
  }

  .added-goods__inner .product__quantity-and-price {
    margin-bottom: 32px;
    height: unset;
  }

  .stages__block {
    display: none;
  }

  .active-stage,
  .second-phase {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile-stages__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 500px) {
  .product__img .product__brief {
    display: block;
  }

  .added-goods__inner .product__quantity-and-price {
    margin-bottom: unset;
  }

  .added-goods__inner h2 {
    margin-bottom: 30px;
  }
}
</style>
