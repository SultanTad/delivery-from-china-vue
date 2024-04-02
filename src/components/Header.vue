<script setup>
import { ref } from "vue";

const burgerMenu = ref(false);

const activeBurger = () => {
  burgerMenu.value = true;
};

const closeBurger = () => {
  burgerMenu.value = false;
};
</script>
<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="box-logos">
          <router-link :to="{ name: 'Home' }"
            ><img src="/images/Tao585.webp" alt="" class="logo"
          /></router-link>
          <div class="burger-icon" @click="activeBurger">
            <img src="/images/burger.svg" alt="" />
          </div>
        </div>
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#about-us">О нас</a>
            <img src="/images/arrow-down.svg" alt="" />
          </li>
          <li class="menu__item">
            <a href="#help-block">Помощь</a>
            <img src="/images/arrow-down.svg" alt="" />
          </li>
          <li class="menu__item"><a href="#delivery">Доставка</a></li>
          <li class="menu__item"><a href="">Оплата</a></li>
          <li class="menu__item"><a href="">Карго</a></li>
          <li class="menu__item"><a href="#news-block">Новости</a></li>
        </ul>
        <div class="nav__inner">
          <div class="exchange-rates">
            <p>1 ¥ = <span>12,53 ₽</span></p>
            <p>1 $ = <span>92,02 ₽</span></p>
          </div>
          <div class="log-in">
            <img src="/images/log-in.svg" alt="" />
            <p>Войти</p>
          </div>
        </div>
        <div class="mobile-menu" :class="{open_menu: burgerMenu}">
          <div class="mobile-menu__close">
            <i
              class="fa-solid fa-xmark"
              @click="closeBurger"
              style="
                font-size: 35px;
                position: absolute;
                top: 0;
                right: 0;
                padding: 24px 16px;
                display: flex;
                align-items: center;
              "
            ></i>
          </div>
          <ul class="mobile-menu__list">
            <li class="menu__item">
              <a href="">О нас</a>
            </li>
            <li class="menu__item">
              <a href="">Помощь</a>
            </li>
            <li class="menu__item">
              <a href="">Доставка</a>
            </li>
            <li class="menu__item">
              <a href="">Оплата</a>
            </li>
            <li class="menu__item">
              <a href="">Карго</a>
            </li>
            <li class="menu__item">
              <a href="">Новости</a>
            </li>
          </ul>
          <div class="mobile-nav__inner">
            <div class="mobile-exchange-rates">
              <p>1 ¥ = <span>12,53 ₽</span></p>
              <p>1 $ = <span>92,02 ₽</span></p>
            </div>
            <div class="log-in">
              <img src="/images/log-in.svg" alt="" />
              <p>Войти</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
.header {
  background-color: #f3f3f6;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: absolute;
  left: 0;
  right: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}

.box-logos {
  display: flex;
  align-items: center;
  gap: 0 80px;
}

.logo {
  width: 98px;
  height: 20px;
}

.burger-icon {
  display: none;
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 0 93px;
}

.menu__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 32px;
}

.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f2f3f7;
  z-index: 200;
  height: 100%;
  width: 100%;
  transform: translateY(-200%);
  transition: all 1s;
  padding: 40px 16px;
}

.mobile-menu__list {
  margin-bottom: 60px;
}

.mobile-menu__list li a {
  padding: 8px 0;
}

.mobile-menu.open_menu {
  transform: translate(0);
  transition: all 0.8s;
}

.mobile-nav__inner {
  display: flex;
  flex-direction: column;
  gap: 32px 0;
}

.menu__item,
.log-in {
  display: flex;
  align-items: center;
}

.log-in img {
  margin-right: 12px;
}

.exchange-rates {
  display: flex;
  flex-direction: column;
  gap: 4px 0;
}

.mobile-exchange-rates {
  display: flex;
  flex-direction: column;
}

.exchange-rates span,
.mobile-exchange-rates span {
  color: rgb(54, 106, 220);
}

@media (max-width: 950px) {
  .menu__list {
    display: none;
  }

  .burger-icon {
    display: block;
  }

  .nav__inner {
    gap: 0 54px;
  }

  .mobile-exchange-rates {
    gap: 10px 0;
  }
}
@media (max-width: 500px) {
  .exchange-rates {
    display: none;
  }
}

@media (max-width: 350px) {
  .box-logos {
      gap: 0 20px;
  }
}
</style>
