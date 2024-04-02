<script setup></script>
<template>
  <div class="add__inner">
    <img
      class="pop-up__close-btn"
      @click="$emit('close')"
      src="/images/close-pop-up.svg"
      alt=""
    />
    <h3>укажите параметры позиции</h3>
    <form>
      <input
        class="input-1"
        type="text"
        value="http://detail.tmall.com/item.htm?id=716688013846"
      />
      <p class="input-2">
        Добавьте в поле ссылку на товар, с сайта
        <a href="#">taobao.com</a> / <a href="#">tmall.com</a> /
        <a href="#">JD.com</a>
      </p>
      <input
        class="input-3"
        type="text"
        placeholder="Введите название товара"
      />
      <p class="input-4">Укажите название товара на китайском языке</p>
      <div class="form-input__blocks">
        <input class="input-5" type="text" placeholder="Укажите стоимость" />
        <input class="input-6" type="text" placeholder="Укажите размер" />
        <input class="input-7" type="text" placeholder="Доставка по Китаю" />
        <input class="input-8" type="text" placeholder="Укажите цвет" />
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
      <div class="summary-box">
        <p>Сумма</p>
        <p>¥ 0</p>
      </div>
      <div class="summary-box">
        <p>Доставка</p>
        <p>¥ 0</p>
      </div>
      <div class="summary-box">
        <p>Услуги</p>
        <p>¥ 0</p>
      </div>
      <div class="summary-box">
        <p>Итого</p>
        <p>¥ 5</p>
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
      <button>Добавить товар</button>
      <div class="add-product__attention">
        <img src="/images/attention.svg" alt="" />
        <p>Сверяйте цены товара с источником при добавлении</p>
      </div>
    </div>
  </div>
</template>

<style>
.add__inner {
  background-color: rgb(243, 243, 246);
  max-width: 768px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  border-radius: 40px;
  padding: 72px 40px;
  position: relative;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: block;
}

.add__inner::-webkit-scrollbar {
  width: 0;
}

.add__inner h3 {
  margin-bottom: 56px;
}

.add__inner form input::placeholder,
.add__inner form textarea::placeholder {
  color: rgb(40, 40, 44);
}

.add__inner form textarea {
  height: 100px;
  resize: none;
  margin-bottom: 32px;
}

.add__inner form input {
  width: 100%;
}

.add__inner p {
  font-family: "Mulish";
}

.add__inner form p {
  font-size: 12px;
  line-height: 10px;
}

.form-input__blocks {
  display: grid;
  gap: 16px 24px;
  grid-template-areas:
    "A A A A   B B B B"
    "C C C C   D D D D"
    "E E E E   E E E E";
}

.input-1 {
  margin-bottom: 12px;
}

.input-2 {
  color: rgb(40, 40, 44);
  margin-bottom: 24px;
}

.input-2 a {
  color: rgb(54, 106, 220);
}

.input-3 {
  margin-bottom: 12px;
}

.input-4 {
  color: rgb(159, 164, 175);
  margin-bottom: 24px;
}

.input-5 {
  grid-area: A;
}

.input-6 {
  grid-area: B;
}

.input-7 {
  grid-area: C;
}

.input-8 {
  grid-area: D;
}

.input-9 {
  grid-area: E;
}

.product-summary {
  display: flex;
  max-width: 475px;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 32px 40px;
}

.summary-box,
.summary-box__inner {
  display: flex;
  flex-direction: column;
  gap: 16px 0;
}

.product-summary .summary-box .product__toggle {
  margin-right: unset;
}

.summary-box p {
  font-size: 16px;
  line-height: 20px;
}

.summary-box p:nth-child(1) {
  color: rgb(159, 164, 175);
}

.summary-box p:nth-child(2) {
  color: rgb(40, 40, 44);
}

.add-product__images {
  display: flex;
  gap: 0 16px;
  margin-bottom: 32px;
}

.additional-functions {
  display: flex;
  flex-direction: column;
  gap: 32px 0;
  margin-bottom: 56px;
}

.additional-functions label span {
  color: rgb(54, 106, 220);
}

.add-product__footer {
  display: flex;
  gap: 0 24px;
  align-items: center;
}

.add-product__footer button {
  padding: 16px 30px;
  background-color: rgb(54, 106, 220);
  border: none;
  border-radius: 10px;
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  color: #fff;
  cursor: pointer;
}

.add-product__attention {
  display: flex;
  align-items: center;
  gap: 0 12px;
}

.add-product__attention p {
  font-family: "Mulish";
  font-size: 12px;
  line-height: 15px;
  color: rgb(40, 40, 44);
}

.add__inner h3 {
  font-size: 32px;
  line-height: 32px;
  font-family: "BaronNeue";
  margin-bottom: 24px;
}

@media (max-width: 769px) {
  .add__inner {
    border-radius: unset;
  }
}

@media (max-width: 700px) {
  .add__inner {
    padding: 92px 16px 72px 16px;
  }
}

@media (max-width: 600px) {
  .add-product__footer {
    flex-direction: column;
    gap: 24px 0;
  }
}

@media (max-width: 500px) {
  .add__inner h3 {
    margin-bottom: 40px;
  }

  .form-input__blocks {
    gap: 24px 0;
    grid-template-areas:
        "A A A A A A A A"
        "B B B B B B B B"
        "C C C C C C C C"
        "D D D D D D D D"
        "E E E E E E E E";
}
}
</style>
