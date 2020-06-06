<template>
  <div
    class='ui icon input datepicker'
    :class="{'datepicker__icon': allowClearButton && !!date}"
  >
    <label
      v-if="label"
      :for="label"
      class="form-custom__label"
    >
      {{label}}
    </label>
    <datepicker
      :id="label"
      :value="date"
      :disabled-dates="disabledDates"
      @selected="selected"
      :disabled="disabled"
      class="input-datepicker"
      :placeholder="placeholder"
      :clear-button="allowClearButton"
      :clear-button-icon="'acc-icon icon-close'"
      @cleared="$emit('cleared')"
    >
    </datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "BaseDatePicker",

  components: { Datepicker },

  props: {
    label: String,
    disabled: Boolean,
    placeholder: String,
    date: [ Date, String, Object ],
    disabledTo: [ Date , null ],
    disabledFrom: [ Date, null ],
    allowClearButton: { type: Boolean, default: false },
  },

  computed: {
    disabledDates() {
      return { to: this.disabledTo, from: this.disabledFrom };
    }
  },

  methods: {
    selected(time) {
      this.$emit("selected", time);
    },

    clearDate() {
      const clearButton = this.$el.querySelector('.vdp-datepicker__clear-button');

      if (clearButton) {
        clearButton.click();
      }
    }
  }
};
</script>

<style lang="scss">
@import "./date-picker.scss";
</style>
