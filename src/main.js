import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import "./media.css";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import PersonalAccount from "./pages/PersonalAccount.vue";
import PersonalAccountOrders from "./pages/PersonalAccountOrders.vue";
import PersonalAccountContent from "./pages/PersonalAccountContent.vue";
import BlancCheckoutPage from "./pages/BlancCheckoutPage.vue";
import CheckoutStageOne from "./pages/CheckoutStageOne.vue";
import CheckoutStageTwo from "./pages/CheckoutStageTwo.vue";
import CheckoutStageThree from "./pages/CheckoutStageThree.vue";
import CargoClearanceEmptyOrder from "./pages/CargoClearanceEmptyOrder.vue";
import CargoClearanceWithAddedGoods from "./pages/CargoClearanceWithAddedGoods.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/personal-account",
      name: "PersonalAccount",
      component: PersonalAccount,
      children: [
        {
          path: "profile",
          name: "PersonalAccountContent",
          component: PersonalAccountContent,
        },
        {
          path: "orders",
          name: "PersonalAccountOrders",
          component: PersonalAccountOrders,
        },
      ],
    },
    {
      path: "/blank-checkout-page",
      name: "BlancCheckoutPage",
      component: BlancCheckoutPage,
    },
    {
      path: "/checkout-stage-one",
      name: "CheckoutStageOne",
      component: CheckoutStageOne,
    },
    {
      path: "/checkout-stage-two",
      name: "CheckoutStageTwo",
      component: CheckoutStageTwo,
    },
    {
      path: "/checkout-stage-three",
      name: "CheckoutStageThree",
      component: CheckoutStageThree,
    },
    {
      path: "/cargo-clearance-empty-order",
      name: "CargoClearanceEmptyOrder",
      component: CargoClearanceEmptyOrder,
    },
    {
      path: "/cargo-clearance-with-added-goods",
      name: "CargoClearanceWithAddedGoods",
      component: CargoClearanceWithAddedGoods,
    },
  ],
});


createApp(App).use(router).mount("#app");
