import Vue from "vue";

export const ClickOutSide = {
  bind(el, binding) {
    const bubble = binding.modifiers.bubble;
    const handler = e => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e);
      }
    };
    el.__vueClickOutside__ = handler;
    document.addEventListener("click", handler);
    document.addEventListener("touchend", handler);
  },

  unbind(el) {
    document.removeEventListener("click", el.__vueClickOutside__);
    document.removeEventListener("touchend", el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  }
};

Vue.directive("click-outside", ClickOutSide);
