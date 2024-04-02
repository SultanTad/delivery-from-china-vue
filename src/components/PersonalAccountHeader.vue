<template>
    <nav class="sub-nav-menu">
        <div class="sub-nav__inner">
          <ul class="sub-nav__list">
            <router-link :to="{name: 'PersonalAccountContent'}" class="sub-nav__item-link">
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="5.33333"
                  cy="5.33333"
                  r="5.33333"
                  transform="matrix(-1 0 0 1 15.334 1)"
                  stroke="rgb(40, 40, 44)"
                />
                <path
                  d="M0.666992 19.5796C0.666992 18.4324 1.38813 17.4091 2.46845 17.0233V17.0233C7.33904 15.2838 12.6616 15.2838 17.5322 17.0233V17.0233C18.6125 17.4091 19.3337 18.4324 19.3337 19.5796V22.0273C19.3337 23.2444 18.2557 24.1793 17.0508 24.0072L13.8187 23.5455C11.286 23.1837 8.71468 23.1837 6.18195 23.5455L2.94983 24.0072C1.74497 24.1793 0.666992 23.2444 0.666992 22.0273V19.5796Z"
                  stroke="rgb(40, 40, 44)"
                />
              </svg>
              Профиль
            </router-link>
            <router-link :to="{name: 'PersonalAccountOrders'}" class="sub-nav__item-link">
              <svg
                width="14.999756"
                height="18.499756"
                viewBox="0 0 14.9998 18.4998"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Rectangle 74"
                  d="M4.5 17.9998C2.29077 17.9998 0.5 16.2089 0.5 13.9998L0.5 4.5C0.5 2.29086 2.29077 0.5 4.5 0.5L7.5 0.5L9.18823 0.5C9.78174 0.5 10.3445 0.763641 10.7246 1.21964L14.0361 5.19366C14.3357 5.55309 14.4998 6.00615 14.4998 6.47403L14.4998 9.24988L14.4998 13.9998C14.4998 16.2089 12.709 17.9998 10.4998 17.9998L4.5 17.9998Z"
                  stroke="#28282C"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                />
                <path
                  id="Vector 139"
                  d="M10.125 0.937515L10.125 3.74995C10.125 4.85452 11.0205 5.74995 12.125 5.74995L14.0625 5.74995"
                  stroke="#28282C"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 133"
                  d="M4.00024 9.24988L11.0002 9.24988"
                  stroke="#28282C"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 134"
                  d="M4.00024 13.6248L7.50024 13.6248"
                  stroke="#28282C"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                  stroke-linecap="round"
                />
              </svg>
              Заказы
            </router-link>
            <li class="sub-nav__item-link">
              <img src="./assets/images/Cart.svg" alt="" />
              <span>Корзина</span>
            </li>
            <li class="sub-nav__item-link">
              <img src="./assets/images/Coins.svg" alt="" />
              <span>История операций</span>
            </li>
          </ul>
          <div class="sub-nav__log-out">
            <p>Выйти</p>
            <img src="./assets/images/Logout.svg" alt="" />
          </div>
        </div>
      </nav>
      
</template>