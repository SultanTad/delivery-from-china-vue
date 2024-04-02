<template>
  <div class="orders-header">
    <img
      class="online-shopping"
      src="/images/online shopping and delivery package boxes.webp"
      alt=""
    />
    <div class="orders-question">
      <h4>хотите приобрести товары из китая?</h4>
      <button>Заказать выкуп</button>
    </div>
    <div class="orders-question">
      <h4>необходимо перевезти ваш груз из китая в россию?</h4>
      <button>Оформить груз</button>
    </div>
    <img
      class="delivery-truck"
      src="/images/delivery truck back side view.webp"
      alt=""
    />
  </div>
  <div class="yours-orders">
    <h4>ваши заказы</h4>
    <div class="yours-orders__inner">
      <div class="order-block">
        <div class="order-block__info">
          <div class="order-info__wrapper">
            <div class="edit-icons__product">
              <img src="/images/edit-product.svg" alt="" />
              <img src="/images/delete-product.svg" alt="" />
              <img src="/images/copy-product.svg" alt="" />
              <img src="/images/send-product.svg" alt="" />
            </div>
            <div class="order-info__inner">
              <div class="info-header">
                <p>Заказ <span>1365</span></p>
                <p>От <span>03.08.2023</span></p>
              </div>
              <div class="info-footer">
                <div class="skeleton-img"></div>
                <div class="skeleton-img"></div>
                <div class="skeleton-img"></div>
                <div class="skeleton-img"></div>
              </div>
            </div>
          </div>
          <div class="messages-history">История сообщений пуста</div>
        </div>
        <div class="order-block__footer">
          <p>Статус: <span class="not-paid">Не оплачено</span></p>
          <p>Товаров: <span>4</span></p>
          <p>Позиций: <span>2</span></p>
          <p>Итого: <span>¥ 50.47 / ₽ 671.25</span></p>
        </div>
      </div>
      <div class="order-block">
        <div class="order-block__info">
          <div class="order-info__wrapper">
            <div class="edit-icons__product">
              <img src="/images/edit-product.svg" alt="" />
              <img src="/images/delete-product.svg" alt="" />
              <img src="/images/copy-product.svg" alt="" />
              <img src="/images/send-product.svg" alt="" />
            </div>
            <div class="order-info__inner">
              <div class="info-header">
                <p>Заказ <span>1365</span></p>
                <p>От <span>03.08.2023</span></p>
              </div>
              <div class="info-footer">
                <div class="skeleton-img"></div>
                <div class="skeleton-img"></div>
                <div class="skeleton-img"></div>
                <div class="skeleton-img"></div>
              </div>
            </div>
          </div>
          <div class="messages-history">История сообщений пуста</div>
        </div>
        <div class="order-block__footer">
          <p>Статус: <span class="not-paid">Не оплачено</span></p>
          <p>Товаров: <span>4</span></p>
          <p>Позиций: <span>2</span></p>
          <p>Итого: <span>¥ 50.47 / ₽ 671.25</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.yours-orders {
  margin-top: 100px;
}

.yours-orders h4 {
  font-size: 16px;
  line-height: 110%;
  font-family: "BaronNeue";
  color: rgb(40, 40, 44);
  margin-bottom: 24px;
}

.orders-header {
  border-radius: 40px;
  padding: 40px;
  background-color: rgb(243, 243, 246);
  margin-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 60px;
  position: relative;
}

.orders-header:nth-child(1) .orders-question {
  max-width: 229px;
}

.orders-header:last-child .orders-question {
  max-width: 287px;
}

.orders-question {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 123px;
  justify-content: space-between;
}

.orders-question h4 {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
  text-align: center;
}

.orders-question button {
  padding: 16px 30px;
  border: none;
  border-radius: 10px;
  background-color: rgb(54, 106, 220);
  color: #fff;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

.orders-header img {
  position: absolute;
}

.online-shopping {
  left: -10px;
  top: 44px;
}

.delivery-truck {
  right: -41px;
  top: 48px;
}

.order-block {
  padding: 40px;
  border-radius: 40px;
  background-color: rgb(243, 243, 246);
  font-family: "Mulish";
  max-width: 739px;
  width: 100%;
  margin-bottom: 24px;
}

.order-block__info {
  display: flex;
}

.order-info__wrapper {
  display: flex;
  align-items: center;
}

.order-info__wrapper .edit-icons__product {
  display: flex;
  order: unset;
  margin-right: 24px;
}

.info-header {
  margin-bottom: 12px;
  display: flex;
  gap: 0 24px;
}

.info-header p {
  font-size: 12px;
  color: rgb(159, 164, 175);
  line-height: 15px;
}

.info-header p span {
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.skeleton-img {
  width: 60px;
  height: 60px;
  background-color: rgb(217, 217, 217);
  border-radius: 10px;
}

.info-footer {
  display: flex;
  gap: 0 8px;
}

.messages-history {
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 10px 20px 20px;
  max-width: 331px;
  width: 100%;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  color: rgb(159, 164, 175);
  font-size: 12px;
  line-height: 15px;
}

.order-block__footer {
  display: flex;
  align-items: center;
  gap: 0 24px;
  margin-top: 24px;
}

.order-block__footer p:nth-child(1) {
  padding-left: 48px;
}

.order-block__footer p {
  font-size: 12px;
  line-height: 15px;
  color: rgb(159, 164, 175);
}

.order-block__footer p span {
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
  margin-left: 8px;
}

.order-block__footer p .not-paid {
  font-size: 16px;
  line-height: 20px;
  color: rgb(243, 71, 59);
}
</style>
