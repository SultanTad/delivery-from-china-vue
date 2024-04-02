<script setup>
import PersonalAccountHeader from "../components/PersonalAccountHeader.vue";
</script>
<template>
  <section class="personal-acount">
    <div class="container">
      <PersonalAccountHeader/>
      <router-view></router-view>
    </div>
  </section>
</template>

<style>
.personal-acount {
  padding: 160px 0 128px 0;
}

.sub-nav-menu {
  font-size: 16px;
  font-family: "Mulish";
  font-weight: 400;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.sub-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sub-nav__list {
  display: flex;
  align-items: center;
  gap: 0 24px;
}

.sub-nav__item-link {
  display: flex;
  align-items: center;
  gap: 0 12px;
  cursor: pointer;
}

.sub-nav__item-link span {
  display: block;
}

.sub-nav__log-out {
  display: flex;
  align-items: center;
  gap: 0 8px;
  color: rgb(159, 164, 175);
}

.personal-data {
  margin-top: 56px;
}

.personal-data__title {
  margin-bottom: 24px;
}

.personal-data__title .sub-nav__log-out {
  display: none;
}

.personal-data h2 {
  font-family: "BaronNeue";
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: rgb(40, 40, 44);
}

.personal-data__inner {
  padding: 40px;
  border-radius: 40px;
  background-color: rgb(243, 243, 246);
  font-size: 16px;
  font-family: "Mulish";
  line-height: 20px;
  font-weight: 400;
}

.personal-data__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 100px;
}

.personal-info {
  display: flex;
  gap: 0 20px;
}

.ava-block {
  position: relative;
}

.image-filter {
  position: absolute;
  background: rgba(0, 0, 0, 0.63);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  height: 100px;
  border-radius: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.personal-avatar {
  width: 100px;
}

.personal-avatar-camera {
  position: absolute;
  left: 41px;
  bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.personal-info__inner,
.personal-info__block {
  display: flex;
  flex-direction: column;
}

.personal-info__block {
  gap: 12px 0;
}

.personal-info__block div img {
  cursor: pointer;
}

.personal-info__block div .mini-pop-up {
  top: 25px;
  right: -118px;
}

.personal-info__block div .mini-pop-up2 {
  top: 25px;
  right: -229px;
}

.personal-info__block div .mini-pop-up,
.personal-info__block div .mini-pop-up2 {
  display: none;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 12px;
  font-family: "Mulish";
  font-weight: 400;
  line-height: 15px;
  color: rgb(40, 40, 44);
  max-width: 242px;
  position: absolute;
  z-index: 200;
}

.triangle {
  display: block;
  height: 20px;
  width: 20px;
  background-color: inherit;
  border: inherit;
  position: absolute;
  top: -6px;
  left: 7px;
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  border-radius: 0 0 0 0.25em;
}

.personal-info__inner h3 {
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 16px;
}

.personal-info__block div {
  display: flex;
  align-items: center;
  gap: 0 8px;
  position: relative;
}

.personal-info__block div span {
  color: rgb(54, 106, 220);
}

.personal-data__contacts {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}

.personal-settings p {
  display: flex;
  gap: 0 11px;
}

.personal-settings p span {
  color: rgb(54, 106, 220);
}

.personal-settings {
  display: flex;
  flex-direction: column;
  gap: 26px 0;
}

.change-pass,
.edit-settings {
  cursor: pointer;
}

.personal-data__contacts h4 {
  color: rgb(159, 164, 175);
  font-weight: 400;
  margin-bottom: 12px;
}

.personal-data__contacts .address {
  width: 33%;
}

.saved-data {
  margin-top: 56px;
}

.saved-data h2 {
  font-family: "BaronNeue";
  font-size: 16px;
  line-height: 110%;
  color: rgb(40, 40, 44);
  margin-bottom: 24px;
}

.saved-data__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.saved-data__box,
.summary-field__inner,
.summary-price {
  padding: 56px 40px 40px 40px;
  background-color: rgb(243, 243, 246);
  border-radius: 40px;
  max-width: 588px;
  font-family: "Mulish";
  position: relative;
}

.use-data__inner .saved-data__box {
  border: 1px solid transparent;
  cursor: pointer;
}

.saved-data__box.active-saved-box {
  border: 1px solid rgb(54, 106, 220);
}

.use-btn.active-btn {
  background-color: rgb(54, 106, 220);
}

.delete__saved-data {
  cursor: pointer;
}

.delete__saved-data img {
  position: absolute;
  top: 24px;
  right: 24px;
}

.saved-data__first-block {
  margin-bottom: 24px;
}

.saved-data__second-block {
  margin-bottom: 40px;
}

.saved-data__first-block,
.saved-data__second-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.saved-data__first-block h4,
.saved-data__second-block h4,
.saved-data__main h4 {
  font-size: 12px;
  line-height: 15px;
  color: rgb(159, 164, 175);
  margin-bottom: 12px;
}

.saved-data__first-block p,
.saved-data__second-block p,
.saved-data__main p {
  font-size: 16px;
  line-height: 20px;
  color: rgb(40, 40, 44);
}

.saved-data__edit {
  display: flex;
  align-items: center;
  gap: 0 8px;
}

.saved-data__edit p {
  color: rgb(54, 106, 220);
  cursor: pointer;
}

.add-data {
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-top: 26px;
  cursor: pointer;
}

.add-data p {
  color: rgb(54, 106, 220);
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
}

.router-link-active {
  color: rgb(54, 106, 220);
}

.router-link-active path {
  stroke: rgb(54, 106, 220);
}

.router-link-active circle {
  stroke: rgb(54, 106, 220);
}
</style>
