<template>
  <transition name="fade">
    <div class="lds-spinner" v-show="isShow">
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseLoader",
  props: { isShow: Boolean }
};
</script>

<style lang="scss">
@import "./base-loader.scss";
</style>
