<template>
  <div class="popup-wrapper">
    <slot name="modal-content"></slot>
  </div>
</template>

<style>
.popup-wrapper {
  background: rgba(0, 0, 0, 0.63);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.popup-wrapper.active_shadow {
  z-index: 999;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in-out;
}
</style>
