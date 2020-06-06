<template>
  <b-modal
    class="form-modal"
    :hide-footer="true"
    :centered="centered"
    :class="{'modal-fullscreen': fullScreen}"
    :ref="modalName"
    :title="modalTitle"
    :size="size"
    :hide-header-close="hideHeaderClose"
    :scrollable="scrollable"
    :header-class="headerClass"
    @shown="handleShown"
    @hidden="handleHidden"
  >
    <slot></slot>
  </b-modal>
</template>

<script>

export default {
  name: "BaseModal",

  props: {
    modalName: String,
    modalTitle: String,
    fullScreen: Boolean,
    scrollable: Boolean,
    headerClass: String,
    size:{
      type:String,
      default: "md"
    },
    centered: {
      type: Boolean,
      default: true
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleShown() {
      this.$emit("shown");
    },
    
    handleHidden() {
      this.$emit("hidden");
    }
  }
};
</script>

<style lang="scss">
@import "./base-modal.scss";
</style>