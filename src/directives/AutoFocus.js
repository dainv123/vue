import Vue from "vue";

export const AutoFocus = {
  inserted: function(el) {
    el.focus();
  }
};

Vue.directive("focus", AutoFocus);
