<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <Header />
    <router-view :key="route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap");
</style>
