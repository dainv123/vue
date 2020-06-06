<template>
  <div
    class="dropdown"
    :class="{'disabled': disabled }"
    v-click-outside="handleCloseDropdown"
  >
    <span
      v-if="label"
      class="form-custom__label"
    >
      {{ label }}
    </span>
    <div class="ui icon input dropdown__input">
      <button
        :disabled="disabled"
        type="button"
        @click="handleToggleDropdown"
        class="dropdown__input-select"
      >
        {{ selectedItem.label }}
      </button>
    </div>
    <div
      class="dropdown__menu"
      v-if="isShow"
    >
      <div
        v-if="hasSearch"
        class="ui icon input dropdown__menu-search"
      >
        <b-form-input
          class="input-search"
          type="text"
          v-model="keyword"
          :placeholder="placeholderInput"
        />
        <i class="acc-icon icon-search_ic"></i>
      </div>
      <div
        @click="onSelect(item, $event)"
        v-for="(item, index) in filteredItems"
        :key="index"
        class="dropdown__menu-item"
        :class="item.value === selectedItem.value ? 'dropdown__menu-item--active': ''"
      >
        <i class="acc-icon icon-check"></i>
        <a class="dropdown-item-link">
          {{ item.label }}
        </a>
      </div>
      <p
        class="dropdown__menu-item"
        v-if="filteredItems.length < 1"
      >
        Don't have any options
      </p>
    </div>
  </div>
</template>

<script>
import { ClickOutSide } from "@/directives/ClickOutSide";

export default {
  name: "BaseDropdown",

  directives: { ClickOutSide },

  props: {
    label: String,
    placeholder: String,
    dropdownItems: Array,
    placeholderInput: String,
    selectedDefault: [String, Number],
    hasSearch: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      keyword: "",
      isShow: false,
      selectedItem: {},
      originalItems: []
    };
  },

  computed: {
    filteredItems: function() {
      const keyword = this.keyword;

      return this.originalItems.filter(
        item => item.label.toUpperCase().indexOf(keyword.toUpperCase()) > -1
      );
    }
  },

  watch: {
    dropdownItems: function() {
      this.onInit();
    },

    selectedDefault: function() {
      this.onInit();
    }
  },

  created: function() {
    this.onInit();
  },

  methods: {
    onSelect(item) {
      this.$emit("selected", item);
      this.selectedItem = item;
      this.isShow = false;
    },

    handleToggleDropdown() {
      this.isShow = !this.isShow;
      this.keyword = "";
    },

    handleCloseDropdown() {
      this.isShow = false;
      this.keyword = "";
    },

    getSelectedIndex(originalItems) {
      const index = originalItems.findIndex(
        item => item.value === this.selectedDefault
      );

      return index > 0 ? index : 0;
    },

    onInit() {
      this.originalItems = [];

      if (this.dropdownItems && this.dropdownItems.length) {
        this.originalItems = this.dropdownItems.slice();
        
        if (this.placeholder) {
          this.originalItems.unshift({
            value: "",
            label: this.placeholder
          });
        }

        const selectedIndex = this.getSelectedIndex(this.originalItems);
        this.selectedItem = this.originalItems[selectedIndex];
      }
    }
  }
};
</script>

<style lang="scss">
@import "./base-dropdown.scss";
</style>
